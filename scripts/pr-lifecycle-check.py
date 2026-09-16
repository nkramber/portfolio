#!/usr/bin/env python3
"""Check the session binding and the documentation-impact matrix of a pull request.

A pull request is the complete unit of work: the code, the tests, the
decisions, the documents, the review answers, and the handoff (D-147). Its
body holds a session binding and a matrix with one entry for each document
category below (D-148). This script compares the body with the diff.

It fails when:
- the body has no binding, or the binding names a second pull request,
- a category has no entry, two entries, or an unknown name,
- an entry has no valid status, or a short or generic reason,
- an entry defers a document to a later pull request or to the merge,
- an entry says "Changed" but the diff holds no file of the category, or
  the diff changes the category and the entry does not say "Changed",
- the diff does not change `docs/session-handoff.md`,
- the branch or the title names a record of an earlier merge.

Usage:
  python3 scripts/pr-lifecycle-check.py --template
  python3 scripts/pr-lifecycle-check.py --body FILE --base REF [--branch NAME]
  python3 scripts/pr-lifecycle-check.py --event FILE   (CI: $GITHUB_EVENT_PATH)
  python3 scripts/pr-lifecycle-check.py --selftest
"""
import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

HANDOFF = "docs/session-handoff.md"

# Each category: the name in the matrix, and the path prefixes it covers.
# The handoff archive belongs to the handoff, because entries move there.
# The roadmap phases and the external facts belong to the design (D-155, D-156).
CATEGORIES = [
    ("CLAUDE.md", ["CLAUDE.md"]),
    ("README.md", ["README.md"]),
    (HANDOFF, [HANDOFF, "docs/session-handoff-archive.md"]),
    ("docs/design.md", ["docs/design.md", "docs/roadmaps/", "docs/external-facts.md"]),
    ("docs/decisions.md", ["docs/decisions.md"]),
    ("docs/questions.md", ["docs/questions.md"]),
    ("docs/deploy.md", ["docs/deploy.md"]),
    ("docs/analytics.md", ["docs/analytics.md"]),
    (".claude/skills/", [".claude/skills/"]),
    (".claude/agents/", [".claude/agents/"]),
    (".claude/rules/", [".claude/rules/"]),
]

STATUSES = ("Changed", "Reviewed; no change needed", "Not applicable")
ROLES = ("author", "reviewer", "correction author")
MIN_REASON_WORDS = 5

GENERIC = re.compile(
    r"^(n/?a|none|nothing|no (documentation|docs?) impact|no impact|no change( needed)?|"
    r"not needed|not relevant|unchanged|same as before|see above|tbd|todo)\W*$",
    re.I,
)
DEFERRAL = re.compile(
    r"\b(follow-?up|after (the )?merge|later (pull request|pr|session|commit)|"
    r"next (pull request|pr)|separate (docs? |documentation )?(pull request|pr)|"
    r"will (update|add|write|record|document|follow)|tbd|todo)\b",
    re.I,
)
# The branches and titles of #21, #25, and #29, and the plain forms of the same
# intent: "Mark PR-20 as merged", "Record the merge sha", `docs/pr-20-merged`.
MERGE_RECORD = re.compile(
    r"after-pr-\d+|^docs/after-|[-/]merged$|wrap up after|"
    r"\b(refresh|update|point)\b.*\b(docs|handoff)\b.*\b(after|at) the merge\b|"
    r"\brecords? the merge\b|\bmark\w*\b.*\bas merged\b|\bmerge (sha|commit)\b",
    re.I,
)


def section(body, title):
    """Return the lines under a level-two heading, or None when it is absent."""
    lines, inside = [], False
    for line in body.splitlines():
        if re.match(r"^##\s", line):
            if inside:
                break
            inside = line[2:].strip().lower() == title.lower()
            continue
        if inside:
            lines.append(line)
    return lines if inside or lines else None


def items(lines):
    """Split "- key: value" list items into (key, value) pairs."""
    pairs = []
    for line in lines:
        match = re.match(r"^\s*[-*]\s+(.+?):\s+(.*)$", line)
        if match:
            pairs.append((match.group(1).strip().strip("`").strip(), match.group(2).strip()))
    return pairs


def check_binding(body, branch):
    lines = section(body, "Session binding")
    if lines is None:
        return ["the body has no '## Session binding' section (D-147)"]
    fields = {key.lower(): value for key, value in items(lines)}
    errors = []
    for key in ("repository", "branch", "pull request", "role", "base"):
        if not fields.get(key):
            errors.append(f"the session binding has no '{key}' line")
    if len(re.findall(r"#\d+", fields.get("pull request", ""))) > 1:
        errors.append("the session binding names more than one pull request (D-147)")
    role = fields.get("role", "").strip("`").lower()
    if role and role not in ROLES:
        errors.append(f"the session binding role '{role}' is not one of: {', '.join(ROLES)}")
    bound = fields.get("branch", "").strip("`")
    if branch and bound and bound != branch:
        errors.append(f"the session binding names the branch '{bound}', but the pull request branch is '{branch}'")
    if fields.get("base") and not re.search(r"\b[0-9a-f]{7,40}\b", fields["base"]):
        errors.append("the session binding base is not a commit id")
    return errors


def check_matrix(body, changed):
    lines = section(body, "Documentation impact")
    if lines is None:
        return ["the body has no '## Documentation impact' section (D-148)"]
    names = [name for name, _ in CATEGORIES]
    seen, errors = {}, []
    for key, value in items(lines):
        if key not in names:
            errors.append(f"the matrix entry '{key}' is not a category. The categories: {', '.join(names)}")
        elif key in seen:
            errors.append(f"the matrix has two entries for '{key}'")
        else:
            seen[key] = value
    for name, prefixes in CATEGORIES:
        if name not in seen:
            errors.append(f"the matrix has no entry for '{name}'")
            continue
        value = seen[name]
        status = next((s for s in STATUSES if value.startswith(s + ":")), None)
        if status is None:
            errors.append(f"'{name}' does not start with one of: {', '.join(s + ':' for s in STATUSES)}")
            continue
        reason = value[len(status) + 1:].strip()
        if GENERIC.match(reason) or len(reason.split()) < MIN_REASON_WORDS:
            errors.append(f"'{name}' needs a specific reason of {MIN_REASON_WORDS} words or more, not '{reason}'")
        if DEFERRAL.search(reason):
            errors.append(f"'{name}' defers work to a later pull request or to the merge (D-147): '{reason}'")
        touched = any(path == p or path.startswith(p) for path in changed for p in prefixes)
        if status == "Changed" and not touched:
            errors.append(f"'{name}' says Changed, but the diff changes no file of it")
        if status != "Changed" and touched:
            errors.append(f"the diff changes '{name}', but its entry says '{status}'")
    return errors


def check(body, changed, branch="", title=""):
    errors = check_binding(body, branch) + check_matrix(body, changed)
    if HANDOFF not in changed:
        errors.append(f"the pull request does not change {HANDOFF}. The handoff goes in the same pull request (D-147)")
    for label, text in (("branch", branch), ("title", title)):
        if text and MERGE_RECORD.search(text):
            errors.append(f"the {label} '{text}' names a record of an earlier merge. Git holds each merge (D-147)")
    return errors


def diff_files(base, head="HEAD"):
    out = subprocess.run(["git", "diff", "--name-only", f"{base}...{head}"], capture_output=True, text=True, check=True)
    return [line for line in out.stdout.splitlines() if line]


def template():
    rows = "\n".join(f"- `{name}`: <Changed | Reviewed; no change needed | Not applicable>: <specific reason>" for name, _ in CATEGORIES)
    return (
        "## Session binding\n\n- Repository: `nkramber/portfolio`\n- Branch: `<branch>`\n"
        "- Pull request: <#number, or this pull request>\n- Role: <author | reviewer | correction author>\n"
        "- Base: `<commit of origin/main at the start>`\n\n## Documentation impact\n\n" + rows
    )


def selftest():
    """Plant one defect at a time in a complete body, and require the named failure."""
    fixtures = Path(__file__).resolve().parent.parent / "tests" / "fixtures" / "pr-lifecycle"
    good = (fixtures / "body-complete.txt").read_text()
    changed = (fixtures / "changed.txt").read_text().split()
    branch = "docs/one-pr-one-session"
    without_handoff = [path for path in changed if path != HANDOFF]
    questions = next(line for line in good.splitlines() if line.startswith("- `docs/questions.md`"))
    design = next(line for line in good.splitlines() if line.startswith("- `docs/design.md`"))
    unchanged_design = good.replace(design, "- `docs/design.md`: Reviewed; no change needed: the plan of this change stays as it is")
    roadmap_only = [path for path in changed if path != "docs/design.md"] + ["docs/roadmaps/phase-1.md"]
    cases = [
        ("a complete pull request", good, changed, branch, None),
        ("a missing handoff", good, without_handoff, branch, "does not change docs/session-handoff.md"),
        ("a deferred document", good.replace(questions, "- `docs/questions.md`: Not applicable: the owner will update it in a follow-up pull request"), changed, branch, "defers work"),
        ("a generic reason", good.replace(questions, "- `docs/questions.md`: Reviewed; no change needed: no documentation impact"), changed, branch, "needs a specific reason"),
        ("a missing category", good.replace(questions + "\n", ""), changed, branch, "no entry for 'docs/questions.md'"),
        ("a Changed entry with no file", good.replace(questions, "- `docs/questions.md`: Changed: the register gains the new question"), changed, branch, "says Changed, but the diff"),
        ("a changed file with no Changed entry", good, changed + ["docs/questions.md"], branch, "the diff changes 'docs/questions.md'"),
        ("a changed roadmap phase with no Changed design entry", unchanged_design, roadmap_only, branch, "the diff changes 'docs/design.md'"),
        ("a second pull request", good.replace("- Pull request: this pull request", "- Pull request: #31 and #32"), changed, branch, "more than one pull request"),
        ("a merge record branch", good.replace(branch, "docs/after-pr-18"), changed, "docs/after-pr-18", "record of an earlier merge"),
        ("the merge record branch of #21", good.replace(branch, "docs/resume-after-pr-20"), changed, "docs/resume-after-pr-20", "record of an earlier merge"),
        ("a merged suffix branch", good.replace(branch, "docs/pr-20-merged"), changed, "docs/pr-20-merged", "record of an earlier merge"),
        ("no session binding", good.replace("## Session binding", "## Binding"), changed, branch, "no '## Session binding'"),
    ]
    titles = [
        ("Wrap up after the merge of PR #27 and PR #28", True),
        ("Refresh the docs after the merge of PR #24", True),
        ("Point the handoff at the merge of PR #20", True),
        ("Mark PR-20 as merged", True),
        ("Record the merge sha of #33", True),
        ("One pull request, one clean session (PR-19)", False),
        ("The audit fixes of M-3 (PR-18)", False),
    ]
    for title, refused in titles:
        cases.append((f"the title '{title}'", good, changed, branch, "record of an earlier merge" if refused else None, title))
    failed = 0
    for name, body, files, ref, expect, *title in cases:
        errors = check(body, files, ref, title[0] if title else "")
        ok = not errors if expect is None else any(expect in e for e in errors)
        print(f"pr-lifecycle-selftest: {'pass' if ok else 'FAIL'}: {name}")
        if not ok:
            failed += 1
            print("  got: " + (" | ".join(errors) or "no error"))
    return 1 if failed else 0


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--template", action="store_true")
    parser.add_argument("--selftest", action="store_true")
    parser.add_argument("--body")
    parser.add_argument("--base")
    parser.add_argument("--branch", default="")
    parser.add_argument("--event")
    args = parser.parse_args()

    if args.template:
        print(template())
        return 0
    if args.selftest:
        return selftest()
    if args.event:
        pull = json.loads(Path(args.event).read_text())["pull_request"]
        body, branch, title = pull.get("body") or "", pull["head"]["ref"], pull.get("title") or ""
        changed = diff_files(pull["base"]["sha"], pull["head"]["sha"])
    elif args.body and args.base:
        body, branch, title = Path(args.body).read_text(), args.branch, ""
        changed = diff_files(args.base)
    else:
        parser.error("give --template, --selftest, --event FILE, or --body FILE with --base REF")

    errors = check(body, changed, branch, title)
    for error in errors:
        print(f"pr-lifecycle-check: {error}")
    if errors:
        print("pr-lifecycle-check: run `make pr-template` for the format (D-148)")
        return 1
    print(f"pr-lifecycle-check: the binding and the matrix agree with {len(changed)} changed files")
    return 0


if __name__ == "__main__":
    sys.exit(main())

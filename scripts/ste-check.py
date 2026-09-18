#!/usr/bin/env python3
"""Check Markdown files against the ASD-STE100 rules that a script can test.

This file is a port of the decktome checker (D-7). It applies these rules:
- 3.2/3.4: no modal verbs and no perfect tenses ("should", "has been").
- 3.5: no "-ing" verb form at the start of a sentence, after a helper word,
  or after a preposition.
- 3.6: no passive voice ("is stored", "was written").
- 4.2: no contractions.
- 5.1: max 20 words in a sentence of a numbered step.
- 6.3: max 25 words in a descriptive sentence.
- 6.6: max six sentences in a paragraph.
- 8.1: no semicolons.

It also applies the reference rules and the handoff rules of D-164:
- MD 1: no HTML comment across two lines or more.
- REF 1: a cited id exists in its register.
- REF 2: a path of this repository in backticks exists, or `.gitignore` names it.
- REF 3: a citation of a superseded decision names the decision that replaced it.
- HANDOFF 1/2/3: the session numbers are unique, in order, and ten or fewer.

The checker skips tables, code blocks, headings, front matter, inline code,
and URLs. A comma list of technical names (rules 4.3 and 8.6) is exempt
from the length rules. The words "can", "must", and "will" are allowed.
A past participle in ALLOW_STATE counts as an adjective (rule 3.3).
A word in ING_ALLOW is a noun or a technical name, not a verb form.

Usage: python3 scripts/ste-check.py [--rules] [--selftest] FILE [FILE ...]
"""
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

RULES = {
    "3.2/3.4": "modal verb or perfect tense",
    "3.5": "-ing verb form",
    "3.6": "passive voice",
    "4.2": "contraction",
    "5.1": "over 20 words in a numbered step",
    "6.3": "over 25 words in a sentence",
    "6.6": "over six sentences in a paragraph",
    "8.1": "semicolon",
    "MD 1": "HTML comment across two lines or more",
    "REF 1": "a cited id that no register holds",
    "REF 2": "a path in backticks that no file holds",
    "REF 3": "a superseded decision with no newer id",
    "HANDOFF 1": "a session number that two entries hold",
    "HANDOFF 2": "a session entry out of order",
    "HANDOFF 3": "more than ten entries in the handoff",
}

# Each register and the pattern that defines an id in it (D-164).
DEFINITIONS = [
    ("docs/decisions.md", r"^\|\s*(D-\d+)\s*\|"),
    ("docs/questions.md", r"\*\*(OQ-\d+)\."),
    ("CLAUDE.md", r"\*\*(T-\d+)\."),
    ("docs/design.md", r"\*\*([GFL]-\d+)\."),
    ("docs/design.md", r"^#### ((?:PR|M)-\d+):"),
    ("docs/roadmaps/*.md", r"^## ((?:PR|M)-\d+):"),
]
CITATION = re.compile(r"\b((?:D|OQ|F|G|T|L|M|PR)-\d+)\b")
SUPERSEDED = re.compile(r"[Ss]uperseded by (D-\d+)")
BACKTICK = re.compile(r"`([^`]+)`")
SESSION = re.compile(r"^## Session (\d+):", re.M)
MAX_HANDOFF_ENTRIES = 10
HANDOFF = "docs/session-handoff.md"
ARCHIVE = "docs/session-handoff-archive.md"
# A file type that this repository writes by hand. A bare name with one of
# these types is a path (D-164). Any other bare name is prose, for example
# "robots.txt" or "404.html", which name a file of the built site.
REPO_SUFFIX = {".md", ".py", ".mjs", ".astro", ".css", ".ts"}
# A line that names another repository cites the ids and the paths of that
# repository. The reference rules read no id and no path of such a line.
FOREIGN = re.compile(r"\b(decktome|what you carry|the-thing-below|terminal-rpg)\b", re.I)
# A dated record keeps the text of its day, so a stale path stays (D-155, D-164).
DATED = ("docs/session-handoff.md", "docs/session-handoff-archive.md", "docs/roadmaps/")

CONTRACTIONS = re.compile(r"\b(\w+n't|\w+'(re|ve|ll|d|m)|it's|let's|that's|there's|what's|here's)\b", re.I)

IRREGULAR = {
    "written", "read", "built", "made", "set", "sent", "kept", "held", "run", "done",
    "given", "taken", "found", "seen", "known", "shown", "chosen", "put", "cut", "left",
    "lost", "met", "paid", "said", "told", "thought", "brought", "bought", "caught",
    "taught", "fought", "sought", "won", "begun", "sung", "drawn", "grown", "thrown",
    "broken", "spoken", "frozen", "stolen", "driven", "hidden", "ridden", "forgotten",
    "gotten", "bitten", "eaten", "fallen", "risen", "beaten", "blown", "flown", "torn",
    "worn", "born", "sworn", "understood", "withheld", "upheld", "split", "spread",
    "shut", "hit", "let", "bet", "cost", "hurt", "quit", "fed", "led", "bred", "sped",
    "lit", "slid", "struck", "stuck", "swung", "hung", "dug", "spun", "wound", "bound",
    "ground", "meant", "dealt", "felt", "dreamt", "learnt", "burnt", "leant", "spelt",
    "smelt", "spilt", "spoilt", "laid", "rebuilt", "reset", "rerun", "overwritten",
    "undone", "redone", "unset", "reread", "resent", "withdrawn", "overridden", "sold",
    "misspelt", "lent", "bent", "spent", "sat", "stood", "become", "come", "gone",
}
# Past participles that name a state in this repo. They are adjectives (rule 3.3).
ALLOW_STATE = {
    "done", "gone", "over", "ready", "broken", "frozen", "retired", "merged", "pinned",
    "locked", "legal", "known", "unknown", "verified", "unverified", "dated", "exempt",
    "open", "closed", "empty", "full", "set", "green", "red", "left", "right", "flat",
    "clean", "dirty", "stale", "stuck", "wrong", "complete", "incomplete", "present",
    "absent", "missing", "unavailable", "available", "idle", "unattended", "identical",
    "silent", "aligned", "interested", "dead", "alive", "correct", "incorrect", "wired",
    "unwired", "worth", "sure", "unsure", "related", "unrelated", "sound", "bound",
    "supported", "unsupported", "authenticated", "expected", "unexpected", "used",
    "unused", "installed", "uninstalled", "cached", "outdated", "limited", "unlimited",
    "finished", "unfinished", "logged", "welcome", "detailed", "advanced", "fixed",
    "tied", "united", "rooted", "based", "sized", "colored", "named", "numbered",
    "signed", "enabled", "disabled", "blocked", "defined", "undefined", "unchanged",
    "unread", "untouched", "unresolved", "resolved", "committed", "uncommitted",
    "tracked", "untracked", "unmerged",
}
# Words that end in "ed" and are never a past participle.
NOT_PARTICIPLE = {
    "need", "seed", "feed", "speed", "breed", "bleed", "proceed", "succeed", "exceed",
    "indeed", "agreed", "freed", "red", "bed", "shed", "wed", "sled", "fled", "hundred",
    "naked", "wicked", "sacred", "unlimited", "rugged", "wretched", "crooked", "jagged",
    "beloved", "biased", "coed", "med", "greed", "reed", "deed", "creed", "steed", "weed",
    "tweed", "ahead", "instead", "dead", "lead", "read", "bread", "thread", "spread",
}
BE = r"(is|are|was|were|be|been|being|am)"
PASSIVE = re.compile(
    r"\b" + BE + r"\s+(?:(?:not|also|then|now|never|always|still|only|often|already|both|all|each|first|last|later|again|usually|fully|partly|either|neither|just|rarely|soon|thus|so|well|hence)\s+){0,2}([a-z]+)\b",
    re.I,
)
PERFECT = re.compile(
    r"\b(has|have|had)\s+(?:(?:not|also|never|always|already|since|just|only|both|all|each|often|ever|now|thus|so)\s+){0,2}([a-z]+)\b",
    re.I,
)
MODAL = re.compile(r"\b(should|would|could|might|may|shall|ought)\b", re.I)

ING_AFTER = re.compile(
    r"\b(is|are|was|were|be|been|being|am|by|of|for|from|before|after|while|when|without|on|in|at|to|than|worth|start|starts|started|keep|keeps|kept|stop|stops|stopped|avoid|avoids|allow|allows|about|through|until|via)\s+(\w+ing)\b",
    re.I,
)
ING_START = re.compile(r"^(\w+ing)\b")
# Words that end in "ing" and are not verb forms: nouns, technical names,
# and base verbs such as "bring".
ING_ALLOW = {
    "thing", "nothing", "something", "anything", "everything", "during", "string",
    "ring", "king", "bring", "spring", "ping", "wing", "sing", "swing", "sting",
    "ceiling", "morning", "evening", "sibling", "meaning", "warning", "setting",
    "settings", "ranking", "logging", "caching", "streaming", "routing", "rendering",
    "pricing", "scaling", "engineering", "tagging", "listing", "ordering", "spelling",
    "heading", "headings", "sizing", "mapping", "binding", "batching", "polling",
    "tuning", "linting", "tooling", "styling", "formatting", "monitoring", "alerting",
    "encoding", "embedding", "wiring", "wording", "timing", "sampling", "finding",
    "findings", "grouping", "pairing", "nesting", "spacing", "padding", "hosting",
    "landing", "missing", "existing", "following", "remaining", "underlying",
    "leading", "trailing", "pending", "outstanding", "according", "including",
    "excluding", "regarding",
}
MAX_WORDS = 25
MAX_STEP_WORDS = 20


def strip_md(line: str) -> str:
    # Curly quotes count like straight ones (rule 8.6), and a curly
    # apostrophe hides a contraction from the check.
    line = line.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')
    line = re.sub(r"`[^`]*`", "X", line)
    line = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", line)
    line = re.sub(r"https?://\S+", "URL", line)
    line = re.sub(r'"[^"]*"', "QUOTE", line)  # rule 8.6: quoted text counts as one word
    line = re.sub(r"\([^)]*\)", "(X)", line)  # rule 8.5: parentheses count as one word
    line = re.sub(r"[*_>#]+", "", line)
    return line


def is_name_list(s: str) -> bool:
    """A run of short comma-separated items is a list of names, not a sentence."""
    items = [i.strip() for i in s.split(",")]
    return len(items) >= 6 and sum(len(i.split()) for i in items) / len(items) <= 3


def sentences(text: str):
    parts = re.split(r"(?<=[.!?])\s+(?=[A-Z0-9\"'(])", text)
    return [p.strip() for p in parts if p.strip()]


def is_participle(word: str) -> bool:
    w = word.lower()
    if w in NOT_PARTICIPLE:
        return False
    if w in IRREGULAR:
        return True
    return len(w) > 3 and w.endswith("ed")


def grammar_findings(n: int, txt: str, findings):
    """Add the verb-form findings of one line (rules 3.2/3.4, 3.5, 3.6)."""
    for m in MODAL.finditer(txt):
        findings.append((n, "3.2/3.4", f"modal verb '{m.group(0)}'"))
    for m in PERFECT.finditer(txt):
        w = m.group(2).lower()
        if w == "been" or (is_participle(w) and w not in ALLOW_STATE):
            findings.append((n, "3.2/3.4", f"perfect tense '{m.group(0)}'"))
    for m in PASSIVE.finditer(txt):
        w = m.group(2).lower()
        if re.match(r"\s+\d", txt[m.end():]):
            continue  # "is run 2" names a run, and "is set 3" names a set
        if is_participle(w) and w not in ALLOW_STATE:
            findings.append((n, "3.6", f"passive voice '{m.group(0)}'"))
    for m in ING_AFTER.finditer(txt):
        w = m.group(2).lower()
        if w not in ING_ALLOW:
            findings.append((n, "3.5", f"-ing form '{m.group(0)}'"))
    for s in sentences(txt):
        m = ING_START.match(s)
        if m and m.group(1).lower() not in ING_ALLOW:
            findings.append((n, "3.5", f"-ing form starts a sentence '{m.group(1)}'"))


def length_findings(n: int, s: str, limit: int, rule: str, findings):
    words = len(s.split())
    if words > limit and not is_name_list(s):
        findings.append((n, rule, f"{words} words: {s[:70]}..."))


def check(path: str):
    findings = []
    in_code = in_front = False
    para = []
    held = []  # (line number, text) of the paragraph so far, for wrapped sentences
    n = 0

    def flush_held():
        # A sentence can span hard-wrapped lines. Join the held lines and
        # split into sentences once, so a wrap is not a sentence end.
        if not held:
            return
        first = held[0][0]
        joined = " ".join(t for _, t in held)
        for s in sentences(joined):
            length_findings(first, s, MAX_WORDS, "6.3", findings)
            para.append(s)
        held.clear()

    with open(path, encoding="utf-8") as fh:
        for n, raw in enumerate(fh, 1):
            line = raw.rstrip("\n")
            if n == 1 and line.strip() == "---":
                in_front = True
                continue
            if in_front:
                if line.strip() == "---":
                    in_front = False
                continue
            if line.strip().startswith("```"):
                in_code = not in_code
                continue
            if in_code or line.strip().startswith("|") or line.strip().startswith("#"):
                continue
            if not line.strip() or line.strip() == ">":
                flush_held()
                if len(para) > 6:
                    findings.append((n, "6.6", f"paragraph has {len(para)} sentences"))
                para = []
                continue
            if line.startswith(">") or line.startswith("**"):
                # A block quote or a bold entry title starts a new paragraph.
                flush_held()
                if len(para) > 6:
                    findings.append((n, "6.6", f"paragraph has {len(para)} sentences"))
                para = []
            txt = strip_md(line)
            if ";" in txt:
                findings.append((n, "8.1", "semicolon"))
            for m in CONTRACTIONS.finditer(txt):
                findings.append((n, "4.2", f"contraction '{m.group(0)}'"))
            grammar_findings(n, txt, findings)
            if re.match(r"^\s*[-*\d]", line):
                # A list item is one unit. It is not part of the paragraph count.
                flush_held()
                step = re.match(r"^\s*\d+\.", line) is not None
                limit, rule = (MAX_STEP_WORDS, "5.1") if step else (MAX_WORDS, "6.3")
                for s in sentences(txt):
                    length_findings(n, s, limit, rule, findings)
                continue
            held.append((n, txt))
    # The last paragraph of a file ends with no blank line after it.
    flush_held()
    if len(para) > 6:
        findings.append((n, "6.6", f"paragraph has {len(para)} sentences"))
    return findings



def repo_files():
    """Every tracked and new file of the checkout, as a path from the root."""
    out = subprocess.run(
        ["git", "ls-files", "--cached", "--others", "--exclude-standard"],
        cwd=ROOT, capture_output=True, text=True, check=True,
    )
    return sorted(set(out.stdout.split()))


def ignored_paths():
    """Each path that `.gitignore` names, with no trailing slash (D-167, D-168)."""
    out = set()
    for line in (read_file(".gitignore") or "").splitlines():
        entry = line.strip()
        if entry and not entry.startswith("#") and not entry.startswith("!"):
            out.add(entry.rstrip("/"))
    return out


def load_registers(read):
    """Return the set of ids that the registers define (D-164)."""
    ids = set()
    for pattern, definition in DEFINITIONS:
        paths = sorted(str(q.relative_to(ROOT)) for q in ROOT.glob(pattern)) if "*" in pattern else [pattern]
        for path in paths:
            ids.update(re.findall(definition, read(path) or "", re.M))
    return ids


def load_superseded(text):
    """Return {old id: new id} from the Effect column of the decision register."""
    out = {}
    for row in re.findall(r"^\|\s*(D-\d+)\s*\|(.*)$", text or "", re.M):
        match = SUPERSEDED.search(row[1])
        if match:
            out[row[0]] = match.group(1)
    return out


def is_repo_path(candidate, tops):
    """True when a backtick span names a path of this repository (D-164)."""
    if not candidate or candidate.startswith("/") or any(c in candidate for c in " <>|$"):
        return False
    head = candidate.split("/")[0]
    if "/" in candidate:
        return head in tops
    return Path(candidate).suffix in REPO_SUFFIX


def path_exists(candidate, path, files, ignored):
    """True when the candidate resolves from the root, the file, or a unique end."""
    stem = candidate.split("*")[0].rstrip("/") if "*" in candidate else candidate.rstrip("/")
    if not stem:
        return True
    if stem in ignored or any(stem.startswith(entry + "/") for entry in ignored):
        return True  # git ignores the path, so no checkout holds it (D-167, D-168)
    folder = str(Path(path).parent)
    for base in ("", folder, str(Path(folder).parent)):
        full = f"{base}/{stem}".lstrip("/") if base not in ("", ".") else stem
        if full in files or any(f.startswith(full + "/") for f in files):
            return True
    return any(f.endswith("/" + stem) for f in files)


def reference_findings(path, text, ids, superseded, files, tops, ignored):
    """The findings of rules MD 1, REF 1, REF 2, and REF 3 for one file."""
    findings = []
    if path.startswith(DATED):
        return findings
    in_code = in_front = False
    open_comment = 0
    for n, line in enumerate(text.splitlines(), 1):
        if n == 1 and line.strip() == "---":
            in_front = True
            continue
        if in_front:
            if line.strip() == "---":
                in_front = False
            continue
        if line.strip().startswith("```"):
            in_code = not in_code
            continue
        if in_code:
            continue
        if "<!--" in line and "-->" not in line:
            open_comment = n
        elif "-->" in line and open_comment:
            findings.append((open_comment, "MD 1", "HTML comment across two lines or more"))
            open_comment = 0
        if FOREIGN.search(line):
            continue
        cited = set(CITATION.findall(line))
        for cid in sorted(cited):
            if cid not in ids:
                findings.append((n, "REF 1", f"no register holds '{cid}'"))
            elif cid in superseded and superseded[cid] not in cited and path != "docs/decisions.md":
                findings.append((n, "REF 3", f"'{cid}' is superseded by {superseded[cid]}, which this line does not name"))
        if any(re.match(r"PR-\d+", c) for c in cited):
            continue  # G-3: a line that names an entry can name a planned file
        for span in BACKTICK.findall(line):
            if is_repo_path(span, tops) and not path_exists(span, path, files, ignored):
                findings.append((n, "REF 2", f"no file holds the path '{span}'"))
    return findings


def handoff_findings(handoff, archive):
    """The findings of rules HANDOFF 1, HANDOFF 2, and HANDOFF 3 (D-8, D-164)."""
    findings = []
    live = [int(s) for s in SESSION.findall(handoff or "")]
    numbers = live + [int(s) for s in SESSION.findall(archive or "")]
    seen = set()
    for number in numbers:
        if number in seen:
            findings.append((0, "HANDOFF 1", f"two entries hold session {number}"))
        seen.add(number)
    for first, second in zip(numbers, numbers[1:]):
        if second >= first:
            findings.append((0, "HANDOFF 2", f"session {second} follows session {first}, and the list runs newest first"))
    if len(live) > MAX_HANDOFF_ENTRIES:
        findings.append((0, "HANDOFF 3", f"{HANDOFF} holds {len(live)} entries, above the limit of {MAX_HANDOFF_ENTRIES}"))
    return findings



def read_file(path):
    """The text of a file of this repository, or None when it is absent."""
    full = ROOT / path
    return full.read_text(encoding="utf-8") if full.is_file() else None


def selftest():
    """Plant one defect at a time, and require the named failure (G-3)."""
    files = repo_files()
    tops = {f.split("/")[0] for f in files}
    ids = load_registers(read_file)
    superseded = load_superseded(read_file("docs/decisions.md"))
    ignored = ignored_paths()
    old_id = sorted(superseded)[0] if superseded else "D-1"
    live = "".join(f"## Session {n}: 2026-09-16\n" for n in range(12, 1, -1))

    def refs(text):
        return reference_findings("docs/design.md", text, ids, superseded, files, tops, ignored)

    cases = [
        ("the repository as it is", refs(read_file("docs/design.md")) + handoff_findings(read_file(HANDOFF), read_file(ARCHIVE)), None),
        ("a cited id with no register", refs("The rule cites D-9999 here.\n"), "no register holds"),
        ("a path with no file", refs("The file `docs/absent-file.md` holds it.\n"), "no file holds the path"),
        ("a path that `.gitignore` names", refs("The folder `.claude/worktrees/` holds it.\n"), None),
        ("an absent path beside an ignored one", refs("The file `.claude/absent-file.md` holds it.\n"), "no file holds the path"),
        ("a superseded citation alone", refs(f"The rule cites {old_id} here.\n"), "is superseded by"),
        ("an HTML comment across two lines", refs("<!-- the first line\nthe second line -->\n"), "HTML comment"),
        ("a session number two times", handoff_findings("## Session 3: 2026-09-16\n## Session 3: 2026-09-15\n", ""), "two entries hold session"),
        ("a session entry out of order", handoff_findings("## Session 2: 2026-09-16\n## Session 3: 2026-09-15\n", ""), "newest first"),
        ("more than ten entries", handoff_findings(live, ""), "above the limit"),
    ]
    failed = 0
    for name, findings, expect in cases:
        ok = not findings if expect is None else any(expect in message for _, _, message in findings)
        print(f"ste-selftest: {'pass' if ok else 'FAIL'}: {name}")
        if not ok:
            failed += 1
            print("  got: " + (" | ".join(m for _, _, m in findings) or "no finding"))
    return 1 if failed else 0


def main():
    flags = {a for a in sys.argv[1:] if a.startswith("--")}
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    if "--rules" in flags:
        for rule, description in RULES.items():
            print(f"rule {rule}: {description}")
        if not args:
            return 0
    if "--selftest" in flags:
        return selftest()
    files = repo_files()
    tops = {f.split("/")[0] for f in files}
    ids = load_registers(read_file)
    superseded = load_superseded(read_file("docs/decisions.md"))
    ignored = ignored_paths()
    total = 0
    for path in args:
        text = Path(path).read_text(encoding="utf-8")
        findings = check(path) + reference_findings(path, text, ids, superseded, files, tops, ignored)
        for n, rule, message in sorted(findings):
            print(f"{path}:{n}: rule {rule}: {message}")
            total += 1
    for _, rule, message in handoff_findings(read_file(HANDOFF), read_file(ARCHIVE)):
        print(f"{HANDOFF}: rule {rule}: {message}")
        total += 1
    print(f"{total} finding(s)")
    return 1 if total else 0


if __name__ == "__main__":
    sys.exit(main())

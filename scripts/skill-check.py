#!/usr/bin/env python3
"""Check each project skill, and the wiring of the one-pr-one-session rule (D-147 to D-150).

It fails when:
- a `.claude/skills/<name>/SKILL.md` file has no front matter, a `name` that
  is not its folder name, or no `description` of 1024 characters or less,
- `one-pr-one-session/SKILL.md` lacks its stop message or its end message,
  or grows past its size cap of 10000 bytes, because each session loads it (D-162),
- `CLAUDE.md` does not name the skill path, or `AGENTS.md` is not a symlink
  to `CLAUDE.md` (D-9),
- `.claude/settings.json` does not run the session hook on Bash, or it sets an
  attribution string (D-6).

Usage: python3 scripts/skill-check.py [--selftest]
"""
import json
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SKILL = ".claude/skills/one-pr-one-session/SKILL.md"
SKILL_MAX_BYTES = 10000
STOP = "Blocked: start a new clean session for this PR."
END = "This session is bound to PR #N and is complete. End this session. Start a new clean session before beginning another PR."
HOOK_SCRIPT = "scripts/session-bind-hook.py"


def check_skill(path, text):
    folder = path.split("/")[-2]
    match = re.match(r"^---\n(.*?)\n---\n(.+)", text, re.S)
    if not match:
        return [f"{path}: no front matter between two '---' lines, or no body"]
    fields = dict(re.findall(r"^([a-z-]+):\s*(.*)$", match.group(1), re.M))
    errors = []
    if fields.get("name") != folder:
        errors.append(f"{path}: the name '{fields.get('name')}' is not the folder name '{folder}'")
    if not re.fullmatch(r"[a-z0-9-]{1,64}", folder):
        errors.append(f"{path}: the folder name is not lowercase letters, digits, and hyphens")
    description = fields.get("description", "")
    if not description or len(description) > 1024:
        errors.append(f"{path}: the description is empty or longer than 1024 characters")
    return errors


def check(files, agents_link):
    errors = []
    for path, text in sorted(files.items()):
        if path.startswith(".claude/skills/"):
            errors += check_skill(path, text)
    skill = files.get(SKILL)
    if skill is None:
        errors.append(f"{SKILL} does not exist")
    else:
        for message in (STOP, END):
            if message not in skill:
                errors.append(f"{SKILL} does not hold the message '{message}'")
        if len(skill.encode()) > SKILL_MAX_BYTES:
            errors.append(f"{SKILL} has {len(skill.encode())} bytes, above the cap of {SKILL_MAX_BYTES}")
    if SKILL not in files.get("CLAUDE.md", ""):
        errors.append(f"CLAUDE.md does not name {SKILL}")
    if not agents_link:
        errors.append("AGENTS.md is not a symlink to CLAUDE.md (D-9)")
    try:
        settings = json.loads(files.get(".claude/settings.json", ""))
    except ValueError:
        return errors + [".claude/settings.json is not valid JSON"]
    if any(settings.get("attribution", {}).get(key) != "" for key in ("commit", "pr")):
        errors.append(".claude/settings.json must set both attribution strings to empty (D-6)")
    commands = [
        hook.get("command", "")
        for group in settings.get("hooks", {}).get("PreToolUse", [])
        if group.get("matcher") == "Bash"
        for hook in group.get("hooks", [])
    ]
    if not any(HOOK_SCRIPT in command for command in commands):
        errors.append(f".claude/settings.json does not run {HOOK_SCRIPT} as a PreToolUse hook on Bash (D-150)")
    return errors


def load():
    paths = [SKILL, "CLAUDE.md", ".claude/settings.json"]
    paths += [str(p.relative_to(ROOT)) for p in sorted(ROOT.glob(".claude/skills/*/SKILL.md"))]
    files = {path: (ROOT / path).read_text() for path in paths if (ROOT / path).exists()}
    agents = ROOT / "AGENTS.md"
    return files, agents.is_symlink() and os.readlink(agents) == "CLAUDE.md"


def selftest():
    """Plant one defect at a time in the real files, and require the named failure."""
    files, link = load()
    cases = [
        ("the repository as it is", files, link, None),
        ("a skill name that is not its folder", {**files, SKILL: files[SKILL].replace("name: one-pr-one-session", "name: one-pr")}, link, "is not the folder name"),
        ("a skill with no stop message", {**files, SKILL: files[SKILL].replace(STOP, "Stop.")}, link, "does not hold the message"),
        ("a skill past its size cap", {**files, SKILL: files[SKILL] + "x" * SKILL_MAX_BYTES}, link, "above the cap"),
        ("root guidance with no skill path", {**files, "CLAUDE.md": files["CLAUDE.md"].replace(SKILL, "")}, link, "does not name"),
        ("an AGENTS.md copy, not a symlink", files, False, "not a symlink"),
        ("settings with no session hook", {**files, ".claude/settings.json": files[".claude/settings.json"].replace(HOOK_SCRIPT, "scripts/other.py")}, link, "does not run"),
    ]
    failed = 0
    for name, planted, agents_link, expect in cases:
        errors = check(planted, agents_link)
        ok = not errors if expect is None else any(expect in e for e in errors)
        print(f"skill-selftest: {'pass' if ok else 'FAIL'}: {name}")
        if not ok:
            failed += 1
            print("  got: " + (" | ".join(errors) or "no error"))
    return 1 if failed else 0


def main():
    if "--selftest" in sys.argv:
        return selftest()
    files, link = load()
    errors = check(files, link)
    for error in errors:
        print(f"skill-check: {error}")
    if not errors:
        count = sum(1 for path in files if path.startswith(".claude/skills/"))
        print(f"skill-check: {count} skills, the root guidance, and the session hook are in place")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())

#!/usr/bin/env python3
"""Bind a Claude Code session to one branch, and so to one pull request (D-147, D-150).

`.claude/settings.json` runs this file as a PreToolUse hook before each Bash
command. The hook reads three documented input fields: `session_id`, `cwd`,
and `tool_input.command` (https://code.claude.com/docs/en/hooks, read
2026-09-16). It acts only on a command that publishes work: `git push` or
`gh pr create`.

- The first such command binds the session to its branch.
- A later such command on another branch exits with code 2. Claude Code then
  blocks the command and shows the message on stderr.

The state lives in the git common directory, so every worktree shares it and
git never commits it: `<git common dir>/one-pr-one-session/<session_id>`.

Limits: another tool, such as Codex, runs no Claude Code hook. A fork gets a
new session id. A command that changes directory first can name a branch that
the hook cannot see. A push after a variable assignment (`X=1 git push`) or
inside a subshell does not start its segment, so the hook does not see it. The `one-pr-one-session` skill covers these cases.

Usage: the hook reads its JSON input on stdin. `--selftest` proves that the
hook binds a session and blocks a second branch.
"""
import json
import os
import re
import shlex
import subprocess
import sys
import tempfile
from pathlib import Path

BLOCKED = "Blocked: start a new clean session for this PR."
PUSH = re.compile(r"git\s+(?:-C\s+\S+\s+)?push\b(.*)")
PR_CREATE = re.compile(r"gh\s+pr\s+create\b(.*)")


def git(cwd, *args):
    out = subprocess.run(["git", "-C", cwd, *args], capture_output=True, text=True)
    return out.stdout.strip() if out.returncode == 0 else ""


def target_branch(command, cwd):
    """Return the branch that a publish command targets, "" when unknown, or None for another command."""
    for part in re.split(r"&&|\|\||;|\|", command):
        # A segment publishes only when git or gh is its first word, so text that
        # mentions "git push" in a quote, a commit message, or a grep never matches.
        part = part.strip()
        push, create = PUSH.match(part), PR_CREATE.match(part)
        if push:
            try:
                words = shlex.split(push.group(1))
            except ValueError:  # an unbalanced quote after the split on ; or |
                words = push.group(1).split()
            words = [w for w in words if not w.startswith("-")]
            if len(words) >= 2 and words[1] != "HEAD":
                return words[1].lstrip("+").split(":")[-1]
            return git(cwd, "rev-parse", "--abbrev-ref", "HEAD")
        if create:
            head = re.search(r"--head[= ](\S+)", create.group(1))
            return head.group(1).split(":")[-1] if head else git(cwd, "rev-parse", "--abbrev-ref", "HEAD")
    return None


def state_dir(cwd):
    override = os.environ.get("ONE_PR_SESSION_STATE_DIR")
    if override:
        return Path(override)
    common = git(cwd, "rev-parse", "--path-format=absolute", "--git-common-dir")
    return Path(common) / "one-pr-one-session" if common else None


def decide(hook_input):
    """Return (exit code, message) for one hook input."""
    command = (hook_input.get("tool_input") or {}).get("command", "")
    cwd = hook_input.get("cwd") or os.getcwd()
    branch = target_branch(command, cwd)
    if branch is None:
        return 0, ""
    session = hook_input.get("session_id", "")
    folder = state_dir(cwd)
    if not branch or not session or folder is None:
        return 2, f"{BLOCKED} The hook cannot read the branch or the session of this command (D-150)."
    record = folder / re.sub(r"[^A-Za-z0-9_.-]", "_", session)
    if record.exists():
        bound = record.read_text().strip()
        if bound != branch:
            return 2, f"{BLOCKED} This session is bound to the branch '{bound}', and the command targets '{branch}' (D-147)."
        return 0, ""
    folder.mkdir(parents=True, exist_ok=True)
    record.write_text(branch + "\n")
    return 0, ""


def selftest():
    cases = [
        ("a command that publishes nothing", "s1", "git status --short", 0),
        ("the first push binds the session", "s1", "git push -u origin docs/one-pr", 0),
        ("a second push to the same branch", "s1", "git push origin docs/one-pr", 0),
        ("a pull request on the same branch", "s1", "gh pr create --head docs/one-pr --title x", 0),
        ("a push to a second branch", "s1", "git push -u origin site/pr-20-other", 2),
        ("a pull request on a second branch", "s1", "make verify && gh pr create --head site/pr-20-other", 2),
        ("a push after cd on a second branch", "s1", "cd repo && git push origin site/pr-20-other", 2),
        ("a quoted push in a pipe", "s1", 'echo "git push origin site/pr-20-other" | cat', 0),
        ("a push in a commit message", "s1", 'git commit -m "Never git push origin main by hand"', 0),
        ("a push in a grep pattern", "s1", "grep -n 'git push origin site/x' notes.md", 0),
        ("another session on the second branch", "s2", "git push origin site/pr-20-other", 0),
    ]
    failed = 0
    with tempfile.TemporaryDirectory() as folder:
        os.environ["ONE_PR_SESSION_STATE_DIR"] = folder
        for name, session, command, expect in cases:
            code, message = decide({"session_id": session, "cwd": folder, "tool_input": {"command": command}})
            ok = code == expect and (expect == 0 or message.startswith(BLOCKED))
            print(f"session-hook-selftest: {'pass' if ok else 'FAIL'}: {name}")
            failed += 0 if ok else 1
    return 1 if failed else 0


def main():
    if "--selftest" in sys.argv:
        return selftest()
    code, message = decide(json.load(sys.stdin))
    if message:
        print(message, file=sys.stderr)
    return code


if __name__ == "__main__":
    sys.exit(main())

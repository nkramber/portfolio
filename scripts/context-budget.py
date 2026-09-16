#!/usr/bin/env python3
"""Check the byte size of the session-start context against its caps (D-159).

Claude Code loads `CLAUDE.md` into each session, and the read order of
`CLAUDE.md` adds the output of `make resume`, `docs/design.md`, the output of
`make decisions-index`, and `docs/questions.md`. Each byte of that set stays in
the context and goes to the model again with each later call of the session.
On 2026-09-16, before D-154 to D-157, the set held 237,987 bytes.

It fails when one part or the whole set grows past its cap. Raise a cap only
through an owner decision. Move history out of the set first: a completed phase
to `docs/roadmaps/`, an older handoff entry to the archive.

Usage: python3 scripts/context-budget.py [--selftest]
"""
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# Each part: the name, the file or the command that makes its text, and its cap in bytes.
PARTS = [
    ("CLAUDE.md", ["cat", "CLAUDE.md"], 20000),
    ("make resume", ["python3", "scripts/resume.py"], 8000),
    ("docs/design.md", ["cat", "docs/design.md"], 32000),
    ("make decisions-index", ["python3", "scripts/decisions-index.py"], 22000),
    ("docs/questions.md", ["cat", "docs/questions.md"], 6000),
]
TOTAL_CAP = 80000


def measure():
    """Return {name: bytes} for each part of the set."""
    sizes = {}
    for name, command, _ in PARTS:
        out = subprocess.run(command, cwd=ROOT, capture_output=True, check=True)
        sizes[name] = len(out.stdout)
    return sizes


def check(sizes):
    errors = []
    for name, _, cap in PARTS:
        if sizes[name] > cap:
            errors.append(f"{name} has {sizes[name]} bytes, above its cap of {cap}")
    total = sum(sizes.values())
    if total > TOTAL_CAP:
        errors.append(f"the session-start set has {total} bytes, above its cap of {TOTAL_CAP}")
    return errors


def selftest():
    """Plant one oversize part at a time, and require the named failure."""
    sizes = measure()
    cases = [
        ("the repository as it is", sizes, None),
        ("a design doc past its cap", {**sizes, "docs/design.md": 32001}, "docs/design.md has 32001 bytes"),
        ("a set past the total cap", {**sizes, "docs/questions.md": TOTAL_CAP}, "the session-start set has"),
    ]
    failed = 0
    for name, planted, expect in cases:
        errors = check(planted)
        ok = not errors if expect is None else any(expect in e for e in errors)
        print(f"context-budget-selftest: {'pass' if ok else 'FAIL'}: {name}")
        if not ok:
            failed += 1
            print("  got: " + (" | ".join(errors) or "no error"))
    return 1 if failed else 0


def main():
    if "--selftest" in sys.argv:
        return selftest()
    sizes = measure()
    errors = check(sizes)
    for error in errors:
        print(f"context-budget: {error}")
    if errors:
        return 1
    parts = ", ".join(f"{name} {size}" for name, size in sizes.items())
    print(f"context-budget: {sum(sizes.values())} of {TOTAL_CAP} bytes ({parts})")
    return 0


if __name__ == "__main__":
    sys.exit(main())

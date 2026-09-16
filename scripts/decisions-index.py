#!/usr/bin/env python3
"""Print one line for each owner decision: the id, the date, the topic, the first words, and each later change (D-157).

A session reads this index instead of the full register, then reads each row
that its task needs, for example: grep -F '| D-122 |' docs/decisions.md

The index comes from the table rows, so it cannot drift from the register. The
script fails when a row does not hold five cells, or when two rows share an id,
so the index never drops a decision.

Usage: python3 scripts/decisions-index.py [--selftest]
"""
import re
import sys
from pathlib import Path

REGISTER = Path(__file__).resolve().parent.parent / "docs" / "decisions.md"
# A cell can hold an escaped pipe, for example "Page not found \| Nate Kramber".
CELL = re.compile(r"(?<!\\)\|")
LATER = re.compile(r"(Superseded by|Revised in part by) (D-\d+)")
# The first words of the Decision cell tell a reader whether the row is relevant.
WORDS = 12


def index(text):
    """Return (lines, errors) for the register text."""
    lines, errors, seen = [], [], set()
    for number, line in enumerate(text.splitlines(), 1):
        if line.startswith("## "):
            lines.append("")
            lines.append(line[3:].strip())
            continue
        if not line.startswith("| D-"):
            continue
        cells = [cell.strip() for cell in CELL.split(line)[1:-1]]
        if len(cells) != 5 or not re.fullmatch(r"D-\d+", cells[0]):
            errors.append(f"line {number}: a decision row needs five cells: Id, Date, Topic, Decision, Effect")
            continue
        ident, date, topic, decision, effect = cells
        if ident in seen:
            errors.append(f"line {number}: the id {ident} is on two rows")
        seen.add(ident)
        words = decision.split()
        start = " ".join(words[:WORDS]) + (" ..." if len(words) > WORDS else "")
        changes = ", ".join(f"{kind.lower()} {later}" for kind, later in LATER.findall(effect))
        lines.append(f"{ident} {date} {topic}: {start}" + (f" ({changes})" if changes else ""))
    header = [
        f"Decision index of docs/decisions.md: {len(seen)} decisions.",
        "Read one row with: grep -F '| D-<n> |' docs/decisions.md",
    ]
    return header + lines, errors


def selftest():
    """Plant one defect at a time in the real register, and require the named failure."""
    text = REGISTER.read_text()
    first = next(line for line in text.splitlines() if line.startswith("| D-"))
    short = first.rsplit(" |", 2)[0] + " |"
    cases = [
        ("the register as it is", text, None),
        ("a row with four cells", text.replace(first, short), "needs five cells"),
        ("two rows with one id", text.replace(first, first + "\n" + first), "is on two rows"),
    ]
    failed = 0
    for name, planted, expect in cases:
        _, errors = index(planted)
        ok = not errors if expect is None else any(expect in e for e in errors)
        print(f"decisions-index-selftest: {'pass' if ok else 'FAIL'}: {name}")
        if not ok:
            failed += 1
            print("  got: " + (" | ".join(errors) or "no error"))
    return 1 if failed else 0


def main():
    if "--selftest" in sys.argv:
        return selftest()
    lines, errors = index(REGISTER.read_text())
    for error in errors:
        print(f"decisions-index: {error}", file=sys.stderr)
    if errors:
        return 1
    print("\n".join(lines))
    return 0


if __name__ == "__main__":
    sys.exit(main())

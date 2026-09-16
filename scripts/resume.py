#!/usr/bin/env python3
"""Print the start of the session handoff: the header, "Resume here", and the newest session entry (D-154).

A new session runs `make resume` as its first action. The full handoff also
holds "Facts that expire" and nine older entries. Each part that a session reads
stays in its context and goes to the model again with each later call, so the
session reads those parts only when its task needs them, and at its end (the
`session-handoff` skill).

Usage: python3 scripts/resume.py [FILE]
"""
import re
import sys
from pathlib import Path

HANDOFF = Path(__file__).resolve().parent.parent / "docs" / "session-handoff.md"


def resume(text):
    """Return the header, the "Resume here" section, and the newest session entry."""
    # Split before each level-two heading. A "### " heading stays inside its entry.
    parts = re.split(r"(?m)^(?=## )", text)
    header = parts[0]
    resume_here = next((part for part in parts if part.startswith("## Resume here")), None)
    entries = [part for part in parts if part.startswith("## Session ")]
    if resume_here is None or not entries:
        raise ValueError("the handoff has no '## Resume here' section or no '## Session' entry")
    note = (
        f"(`make resume` printed the newest of {len(entries)} session entries. "
        "The full file also holds \"Facts that expire\" and the older entries.)\n"
    )
    return header + resume_here + entries[0].rstrip("\n") + "\n\n" + note


def main():
    path = Path(sys.argv[1]) if len(sys.argv) > 1 else HANDOFF
    try:
        print(resume(path.read_text()), end="")
    except ValueError as error:
        print(f"resume: {error}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())

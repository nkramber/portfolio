#!/usr/bin/env python3
"""Check the link targets of the built site (D-166).

Every link that leaves the site opens a new tab, and every link that stays on
the site opens in the same tab. This check reads each HTML file of dist/ and
applies three rules:

- TARGET 1: a link to an `http://` or `https://` address holds `target="_blank"`.
- TARGET 2: such a link also holds `noopener` in `rel`. The HTML standard gives
  a `_blank` link this behavior already, so the attribute is for the reader of
  the page source and for an old browser (docs/external-facts.md).
- TARGET 3: a link to an address of this site holds no `target`.

The site gives no notice of the new tab. WCAG 2.2 puts that notice at level
AAA, and the site holds level AA (D-165).

Usage: python3 scripts/link-target-check.py [--selftest] [DIR]
"""
import sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

RULES = {
    "TARGET 1": "a link that leaves the site holds no target=\"_blank\"",
    "TARGET 2": "a link that leaves the site holds no noopener in rel",
    "TARGET 3": "a link that stays on the site holds a target",
}


class LinkReader(HTMLParser):
    """Collect the attributes of each `a` element that holds an href."""

    def __init__(self):
        super().__init__()
        self.links = []

    def handle_starttag(self, tag, attrs):
        if tag != "a":
            return
        values = dict(attrs)
        if "href" in values:
            self.links.append(values)


def findings(html):
    """Return one (rule, message) pair for each link that breaks a rule."""
    reader = LinkReader()
    reader.feed(html)
    out = []
    for link in reader.links:
        href = link["href"] or ""
        target = link.get("target")
        leaves = href.startswith("http://") or href.startswith("https://")
        if leaves:
            if target != "_blank":
                out.append(("TARGET 1", f"{href} holds target={target!r}, not \"_blank\""))
            if "noopener" not in (link.get("rel") or "").split():
                out.append(("TARGET 2", f"{href} holds rel={link.get('rel')!r}, with no noopener"))
        elif target is not None:
            out.append(("TARGET 3", f"{href} stays on the site and holds target={target!r}"))
    return out


def selftest():
    """Plant one defect at a time, and prove that each rule finds it."""
    good = (
        '<a href="https://github.com/nkramber" target="_blank" rel="noopener">GitHub</a>'
        '<a href="/">Go to the home page</a>'
    )
    cases = [
        ("the two link forms of the site", good, None),
        ("an outbound link with no target", '<a href="https://example.com/">x</a>', "TARGET 1"),
        (
            "an outbound link with no noopener",
            '<a href="https://example.com/" target="_blank">x</a>',
            "TARGET 2",
        ),
        ("an internal link with a target", '<a href="/" target="_blank">x</a>', "TARGET 3"),
    ]
    failed = 0
    for name, html, expect in cases:
        found = findings(html)
        ok = not found if expect is None else any(rule == expect for rule, _ in found)
        print(f"link-target-selftest: {'pass' if ok else 'FAIL'}: {name}")
        if not ok:
            failed += 1
            print("  got: " + (" | ".join(m for _, m in found) or "no finding"))
    return 1 if failed else 0


def main():
    flags = {a for a in sys.argv[1:] if a.startswith("--")}
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    if "--selftest" in flags:
        return selftest()
    folder = Path(args[0]) if args else ROOT / "dist"
    if not folder.is_dir():
        print(f"link-target-check: {folder} is absent, run make build first")
        return 1
    files = sorted(folder.rglob("*.html"))
    if not files:
        print(f"link-target-check: {folder} holds no HTML file")
        return 1
    total = 0
    for path in files:
        for rule, message in findings(path.read_text(encoding="utf-8")):
            print(f"{path}: rule {rule}: {message}")
            total += 1
    print(f"link-target-check: {len(files)} file(s), {total} finding(s)")
    return 1 if total else 0


if __name__ == "__main__":
    sys.exit(main())

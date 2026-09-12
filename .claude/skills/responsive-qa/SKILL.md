---
name: responsive-qa
description: The responsive checklist for every change to the site. Check each viewport width, both orientations, text zoom, text spacing, pointer targets, and reduced motion. Load before you open a pull request that changes the site.
---

# Responsive QA skill

Responsive layout is tenet T-1, and the owner named it the maximum focus (D-4). A change that looks right at one width alone is not done. Run this checklist before you open a pull request that changes the site. The `responsive-auditor` agent runs the part that a script can prove.

CAUTION: the stack pull request adds the local server and the screenshot tooling. Until it merges, no part of this checklist can run.

The WCAG facts below come from WCAG 2.2, the W3C Recommendation of 2024-12-12. The session read them at https://www.w3.org/TR/WCAG22/ and on the W3C Understanding page for 2.5.8 on 2026-09-12.

## Viewport widths

Check every width in this table, in CSS pixels. The roadmap questions can change the list.

| Width | Why it is on the list |
|---|---|
| 320 | The reflow width of WCAG 1.4.10, and the smallest phone |
| 375 | A small phone |
| 390 | A common phone |
| 430 | A large phone |
| 768 | A tablet in portrait |
| 1024 | A tablet in landscape, or a small laptop |
| 1280 | A laptop |
| 1440 | A desktop |
| 1920 | A full HD desktop |
| 2560 | A wide desktop |

Also resize the window slowly from 320 to 2560. A layout can break between two widths of the table.

## Checklist

- No layout scrolls sideways at a width of 320 CSS pixels or more (G-1, WCAG 1.4.10).
- No text clips, overlaps, or runs out of its box. Try a long project name and a long URL.
- Text resized to 200 percent keeps all content and every function (WCAG 1.4.4).
- The page keeps all content with the text spacing of WCAG 1.4.12.
- The spacing: line height 1.5, paragraph gap 2, letter spacing 0.12, word spacing 0.16, each times the font size.
- The layout works in portrait and in landscape, and it never locks one orientation (WCAG 1.3.4).
- Every pointer target is at least 24 by 24 CSS pixels, or it meets an exception of WCAG 2.5.8.
- The focus indicator shows on every control. No sticky element hides a focused control fully (WCAG 2.4.7, 2.4.11).
- Each hover effect has an equivalent for touch. No content or control hides behind hover alone.
- Each image reserves its space before it loads, so nothing moves on load.
- A full-height section fits the visible area of a phone, with the browser toolbar shown and hidden.
- Content stays inside the safe area of a phone with a notch or rounded corners.
- With `prefers-reduced-motion: reduce`, each motion animation stops or becomes a fade.
- Each color scheme of the site passes every item above.

## Evidence

- Write each width you checked, and its result, in the pull request text.
- Name each check you did by hand on a real phone, and the phone.
- When the host gives a preview address for each pull request, do the phone check on that address.

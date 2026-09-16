# Phase 2: The page

Status: complete. This file holds the entries of Phase 2, moved word for word from `docs/design.md` on 2026-09-16 (D-155). The roadmap section of `docs/design.md` keeps the phase heading, the phase gate, and a link to this file.

## PR-7: Design tokens, fonts, and accent color

Status: merged as #15, `a865051`, on 2026-09-14 UTC. Gitar approved it with no finding. The owner picked the fonts and the accent from the preview page (D-89, D-91), and OQ-5 closed. `make verify` passed: every Lighthouse category read 1, the first load weighed 38,974 bytes, the median LCP was 1,052 ms, and the CLS was 0. The owner checked the preview on an iPhone 16 Pro (D-93). After the deploy, `make preview-check` passed on `https://natekramber.com`.

Scope:

- A private preview page with three font pairings and three accent colors, in light and dark, at phone and desktop widths (D-42). The owner picks, and OQ-5 closes.
- The design tokens as CSS custom properties: color for each system scheme, a fluid type scale, and spacing (D-27, D-31).
- The two picked fonts, self-hosted as WOFF2 files, with a fallback stack (D-27).
- Base styles for text, links, focus indicators, and reduced motion (T-2).

Exit tests:

- Every text and control color meets WCAG contrast in the light and the dark scheme (G-8).
- The fonts keep the page inside the budget of D-37 (G-7).
- Every site check passes.

Gate: OQ-5 has its answer in `docs/decisions.md`, and the owner merges PR-7.

> *In plain English:* the page has no look today. This change lets the owner choose the fonts and the color from real examples. It then sets them once, so every later part of the page uses the same values.

## PR-8: Page shell

Status: merged as #17, `ec0d764`, on 2026-09-14 UTC. Gitar approved the last head with no finding, and D-94 to D-102 answer its design questions. The owner checked the preview on a phone, which led to D-102. After the deploy, `make preview-check` passed on `https://natekramber.com`.

Scope:

- The hero with the headline of D-29 and the links of D-20, and the About section (D-21). The Links section at the end of the page waits for the project cards (D-102).
- The About text from an owner interview (D-94). Until OQ-3 closes, the section holds no text and stays off the page.
- The page title, the meta description, a canonical address, the Open Graph tags, and the share image of D-97 (D-41).
- The icons of D-96, and a CSP with no `data:` in `img-src`.
- `make images`: a script draws the share image and the PNG icons in the Chromium build of Playwright. The PNG files stay in git (D-96, D-97).
- The 404 page keeps the words of D-74 in the new layout (D-98).
- The hero motion of D-95 in CSS, off under reduced motion (D-27).
- An axe scan of the page structure with best-practice rules such as `landmark-one-main` and `region` (G-8). A planted fixture proves that the scan can fail (G-3).

Out of scope:

- The project cards. Phase 3 holds them.
- A web app manifest and `theme-color`. Baseline lists both as Limited (G-6), and `default-src 'none'` blocks a manifest.

Exit tests:

- The page has one `h1`, one `main`, and a landmark for each section (G-8). The structure scan passes on both pages and fails on its fixture.
- The headline shows no sideways scroll and no clipped text at every width (G-1).
- Under `prefers-reduced-motion: reduce`, the hero does not move, and the keyframes change `translate` alone (D-95).
- At the first frame of the rise, the 404 page does not scroll (D-95).
- The share image and each icon serve from the address in the head (D-96, D-97).
- Every site check passes, and the built page holds no script (G-5).

Gate: the owner approves the shell on a preview address and merges PR-8.

> *In plain English:* the live page shows a placeholder today. This change builds the real top of the page, a place for the bio, and the links at the end. It adds an icon and a share card but no script, so the page stays fast.

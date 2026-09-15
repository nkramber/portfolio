---
paths:
  - "src/**"
  - "public/**"
  - "astro.config.mjs"
  - "package.json"
---

# Rules for the site code

These rules apply to every file of the site (D-30 to D-33, G-1 to G-11).

- Treat tenet T-1 as the first rule. Check each layout change at every width of the `responsive-qa` skill.
- Ship no client JavaScript. An Astro component renders to HTML at build time. A `script` element needs a decision first (D-33, G-5).
- Write plain CSS with custom properties, native nesting, container queries, and `:has()` (D-31). Add no CSS framework and no preprocessor.
- Put the CSS in a `<style>` block of a component, and Astro writes it to a stylesheet file (D-65). Write no `style` attribute and no `is:inline` style, because the CSP of D-57 blocks both (D-72).
- Self-host each font in `src/fonts/` with its license file. Use `font-display: optional`, and preload a face only on a page that shows it (D-90 to D-92, D-111).
- Put each animation and transition inside `@media (prefers-reduced-motion: no-preference)`. Never start text at an opacity of 0, because the paint metrics wait for it (D-95).
- Draw the share image and the PNG icons with `make images`, and commit the PNG files. Run it again after a change to the headline, the colors, the text face, or `public/favicon.svg` (D-96, D-97).
- Use a CSS feature only when Baseline lists it as Widely available. A Newly available feature adds polish alone, with a fallback (D-32, G-6).
- Size text and spacing with `rem`, `clamp()`, and container units. Set no fixed width on a text container.
- Give every image a width, a height, and alt text. Give a decorative image an empty `alt`.
- Keep one card component for every project. Put the facts of a project in the content collection, never in the component (G-2).
- Write each project as one JSON file in `src/content/projects/`. The schema in `src/content.config.ts` fails the build on a wrong field (D-22, D-105).
- Put test entries in `tests/fixtures/projects/`, never in `src/content/projects/`. Only a build with `PORTFOLIO_FIXTURES=1` loads them, and that build loads no site entry (D-103, D-112).
- Add a dependency only when the pull request text names its purpose and its size (T-4).
- Keep each component short and explicit. A new reader must understand it from the file itself (T-3).
- Run `make verify` before each pull request.

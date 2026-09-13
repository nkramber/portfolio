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
- Use a CSS feature only when Baseline lists it as Widely available. A Newly available feature adds polish alone, with a fallback (D-32, G-6).
- Size text and spacing with `rem`, `clamp()`, and container units. Set no fixed width on a text container.
- Give every image a width, a height, and alt text. Give a decorative image an empty `alt`.
- Keep one card component for every project. Put the facts of a project in the content collection, never in the component (G-2).
- Add a dependency only when the pull request text names its purpose and its size (T-4).
- Keep each component short and explicit. A new reader must understand it from the file itself (T-3).
- Run `make verify` before each pull request.

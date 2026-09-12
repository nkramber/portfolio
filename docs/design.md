# natekramber.com design

Status: **draft 1.** The owner approves draft 1 with the merge of PR-2. No site pull request starts before that merge. Written 2026-09-12 in ASD-STE100.

Draft 1 applies the roadmap answers D-19 to D-43. It supersedes draft 0, which held Phase 0 alone.

Owner decisions live in `docs/decisions.md` (D-#). Open questions live in `docs/questions.md` (OQ-#). The `design-doc-style` skill holds the template of this file (D-10).

## External facts

Each fact below has a source and the date the session read it. Verify a fact again before a pull request depends on it.

- WCAG 2.2 is the W3C Recommendation of 2024-12-12. Source: https://www.w3.org/TR/WCAG22/, read 2026-09-12.
- Core Web Vitals "good": LCP 2.5 s, INP 200 ms, CLS 0.1, at the 75th percentile. Source: https://web.dev/articles/vitals, read 2026-09-12.
- Baseline "Widely available" means 30 months after the date that all core browsers support a feature. Source: https://web.dev/baseline, read 2026-09-12.
- Baseline Widely available on 2026-09-12: container size queries, `:has()`, CSS nesting, subgrid, and the `dvh`, `svh`, and `lvh` units. Source: https://api.webstatus.dev/v1/features/.
- Baseline Newly available on 2026-09-12: `light-dark()`, `text-wrap: balance`, `@starting-style`, the Popover API, and same-document View Transitions. Scroll-driven animations and anchor positioning are Limited.
- Astro 7.0 came out on 2026-06-22. The latest version on 2026-09-12 is 7.3.2, and it needs Node 22.12.0 or newer. Sources: https://astro.build/blog/astro-7/ and https://docs.astro.build/en/install-and-setup/.
- Firebase recommends classic Hosting, not App Hosting, for a static site. Source: https://firebase.google.com/docs/app-hosting/product-comparison, read 2026-09-12.
- The Spark plan of Firebase Hosting includes 10 GB of storage, 360 MB of transfer each day, a custom domain, and SSL. Source: https://firebase.google.com/pricing, read 2026-09-12.
- A custom apex domain on Firebase Hosting needs a TXT record and an A record, and the certificate can take up to 24 hours. Source: https://firebase.google.com/docs/hosting/custom-domain, read 2026-09-12.
- GoDaddy does not permit a CNAME record at the apex. Source: https://www.godaddy.com/help/add-a-cname-record-19236, read 2026-09-12.
- A preview channel expires after 7 days by default. The official GitHub action for previews requires a JSON service account key. Sources: https://firebase.google.com/docs/hosting/manage-hosting-resources and https://github.com/FirebaseExtended/action-hosting-deploy, read 2026-09-12.
- Hosting request logs can go to Cloud Logging, with the request URL, the referrer, and the country of each request. The plan that this link needs is unverified. Source: https://firebase.google.com/docs/hosting/web-request-logs-and-metrics, read 2026-09-12.
- A Google Cloud budget sends alerts but does not cap spend. Source: https://docs.cloud.google.com/billing/docs/how-to/budgets, read 2026-09-12.

## 1. Thesis

The site shows the work of Nate Kramber on one page at `natekramber.com` (D-3, D-4). It is for peers and the curious, and it makes no hard sell (D-19). A visitor on any screen reads the headline and a short bio, opens each card in place, and follows a link out (D-20 to D-23). The site ships no client JavaScript, and it follows the system color scheme (D-27, D-33).

The plan puts the checks and a live placeholder first, then the design, then the page, then the cards. A live placeholder finds the domain, certificate, and deploy problems early, while nothing depends on them (D-40). The checks come before the page, so every page change passes them from its first commit (G-3, D-38). Each card comes from one component and one data entry, so a new project costs one entry and its images (D-2).

## 2. Tenets

`CLAUDE.md` quotes the tenets in full, and this file cites their ids. The order is T-1 Responsive first, T-2 Accessible, T-3 Simple and readable code, T-4 Fast, T-5 Document everything, and T-6 No attribution (D-39).

## 3. Guardrails

Every pull request keeps each guardrail. Only an owner decision changes a guardrail.

1. **G-1. No sideways scroll.** No layout scrolls sideways at any width from 320 CSS pixels up (T-1).
2. **G-2. One card for every project.** Every project card comes from one component and one data entry. No project gets its own layout code (D-2).
3. **G-3. A new check passes on its own pull request.** A pull request that creates a check passes that check. A planned check names the pull request that creates it.
4. **G-4. Pinned actions.** Every GitHub Action pins a commit SHA, with its tag in a comment (D-16).
5. **G-5. Zero client JavaScript.** The built site ships no script, unless a decision names the script and its purpose (D-33).
6. **G-6. Baseline Widely available.** Every essential feature is Baseline Widely available. A Newly available feature adds polish alone, with a fallback (D-32).
7. **G-7. The budget holds.** Every site pull request stays inside the performance budget of D-37, and CI enforces it.
8. **G-8. WCAG 2.2 level AA.** The axe scan passes with every card closed and open (T-2, D-38).
9. **G-9. No deploy key.** Every deploy authenticates through Workload Identity Federation. No service account key lives in the repository or in its secrets (D-35).
10. **G-10. Only `main` deploys.** Only a merge to `main` reaches production (D-35).
11. **G-11. Every card fact has a source.** Each fact on a card comes from its repository or from the owner. The site copy invents no metric (hard rule 9).

## 4. Roadmap

Each entry has an id (PR-# or M-#), a status, a scope, exit tests, and a gate. It ends with a plain-English paragraph. An M-# entry is a measurement: it changes no site code, and its result goes into `docs/decisions.md`.

### Phase 0: Foundation

#### PR-1: Repository foundation

Status: in review as #1. Gitar approved it with no finding on 2026-09-12.

Scope: `CLAUDE.md`, the `AGENTS.md` symlink, the rule files, six skills, four agents, the registers, draft 0 of this file, the session handoff, the STE checker, the `verify:docs` job, Dependabot, and the license (D-5 to D-18).

Exit tests:

- `make verify` passes on the branch.
- The `verify:docs` job passes on the pull request.
- Gitar reviews the pull request, and every finding has its answer (D-5).

Gate: the owner merges PR-1. Then `verify:docs` joins the `main` ruleset as a required check (D-11).

> *In plain English:* the repository has no rules and no plan today. This change writes both before any site code. It changes no site, so it cannot break one.

#### PR-2: Roadmap draft 1

Status: in review.

Scope:

- D-19 to D-43 in `docs/decisions.md`. OQ-1 and OQ-2 closed, and OQ-3 to OQ-5 added, in `docs/questions.md`.
- Draft 1 of this file: the external facts, the guardrails, the phases, and the sequence.
- Tenet T-6 narrowed to match D-26, and the voice of the `copy-editor` agent set by D-28.

Exit tests:

- `make verify` passes on the branch.
- Gitar reviews the pull request, and every finding has its answer (D-5).

Gate: the owner merges PR-2. The merge approves draft 1, and PR-3 can start.

> *In plain English:* the answers to the roadmap questions live in the conversation alone today. This change writes them down as decisions and turns them into an ordered plan. It changes no site.

### Phase 1: Stack, checks, and first deploy

Phase gate: `natekramber.com` serves the placeholder page over HTTPS, each merge to `main` deploys it, and every site check is a required check.

#### PR-3: Astro scaffold and placeholder page

Status: planned.

Scope:

- An Astro 7 project with npm and static output (D-30, D-41). `.nvmrc` pins the Node LTS version that the session verifies on the day.
- A placeholder page with the headline of D-29 and the two links of D-20 (D-40, D-41).
- A `verify:site` job that builds the site, and `make verify` runs the same build.
- The npm ecosystem in `.github/dependabot.yml` (D-16).
- `.claude/rules/site.md` for the files in `src/`: the code rules of D-31 to D-33.
- The build, local server, and screenshot commands in `CLAUDE.md`.

Out of scope:

- The site checks. PR-4 holds them.
- The design tokens and the fonts. PR-7 holds them.

Exit tests:

- `npm run build` passes, and the built HTML holds no `script` element (G-5).
- The `verify:site` job passes on the pull request.
- The placeholder page shows no sideways scroll at 320 CSS pixels, by hand.

Gate: the owner merges PR-3. Then `verify:site` joins the `main` ruleset as a required check.

> *In plain English:* the repository holds no site today. This change adds the smallest real page and the tools that build it. Nothing is live yet, so nothing can break for a visitor.

#### PR-4: Site checks

Status: planned.

Scope: the four checks of D-38, each as a `verify:site-*` job and a `make` target.

- Responsive tests: Playwright loads the page at each width of the `responsive-qa` skill. A test fails on sideways scroll, and each run saves a screenshot for each width.
- Accessibility scan: axe checks the page with every card closed and open.
- Lighthouse CI: the run fails when a score, the page weight, or the script weight breaks the budget of D-37. This pull request sets the page weight cap.
- HTML validation and an internal link check on the built site.

Exit tests:

- Each check passes on the placeholder page.
- Each check fails on a fixture with one planted defect. The defects: a wide element, a missing alt text, a large image, and a broken anchor.
- `make verify` runs all four checks.

Gate: each check joins the `main` ruleset after its first green run (D-11, D-38).

> *In plain English:* today nothing stops a change that breaks the layout on a phone or hurts accessibility. This change adds four automatic checks, and it proves that each check can fail. The page itself does not change.

#### PR-5: Google Cloud project, Hosting configuration, and previews

Status: planned.

Scope:

- `docs/deploy.md` with the setup commands. The owner runs them, because the session creates no cloud resource without the owner (D-34).
- The commands create a dedicated project on the Spark plan and a Workload Identity Federation pool (D-35).
- They also create a deploy service account with the least role that a Hosting deploy needs (G-9).
- `firebase.json` and `.firebaserc`: the build directory, the custom 404 page, and the security and cache headers (D-41).
- A preview workflow: each pull request deploys its build to a preview channel through Workload Identity Federation (D-35).

Out of scope:

- The deploy on merge and the domain. PR-6 holds them.

Exit tests:

- M-1 passes on this pull request, or the owner decides the next step (D-35).
- The repository and its secrets hold no service account key (G-9).

Gate: M-1 has a result in `docs/decisions.md`, and the owner merges PR-5.

> *In plain English:* the site has no home in Google Cloud today. This change writes the setup steps and the host settings. It also gives each change its own preview address, without a stored key.

#### M-1: Keyless preview deploy

Status: planned.

Scope: the preview workflow of PR-5 runs `firebase hosting:channel:deploy` with the credentials of Workload Identity Federation. The official GitHub action needs a JSON key, so it stays out (read 2026-09-12).

Exit tests:

- The workflow prints a preview URL, and the URL serves the build of the pull request.
- The workflow uses no JSON key.

Gate: a pass keeps the preview workflow. A fail removes the workflow, and the owner chooses between a scoped key and no previews (D-35).

> *In plain English:* nobody knows yet whether the Firebase tool accepts a deploy without a stored key. This test answers that before the live site depends on it.

#### PR-6: Deploy on merge and the domain

Status: planned.

Scope:

- A deploy workflow that runs on each push to `main` alone, through Workload Identity Federation (D-35, G-10).
- The GoDaddy records that the Firebase console gives: a TXT record and an A record for `natekramber.com`. The owner enters them (D-3, D-34).
- A redirect from `www.natekramber.com` to `natekramber.com` (D-41).
- The DNS records, the deploy, and the rollback steps in `docs/deploy.md`.

Exit tests:

- A merge to `main` deploys the placeholder page with no manual step.
- `https://natekramber.com` answers with a valid certificate, and `www` redirects to it.
- The response holds every header that `firebase.json` sets.
- The owner opens the site on a phone.

Gate: the placeholder page is live at `natekramber.com` (D-40).

> *In plain English:* the domain points nowhere today. This change puts the placeholder page on the real address, and each approved change then goes live on its own. The certificate can take up to a day, so the plan does this early.

#### M-2: Request logs on the Spark plan

Status: planned.

Scope: link Firebase Hosting to Cloud Logging on the Spark project. Make one test visit, then read its log entry. The plan that this link needs is unverified (read 2026-09-12).

Exit tests:

- The log entry holds the request URL, the referrer, and the country.
- The project still has no billing account (D-34).

Gate: a pass unblocks PR-13. A fail goes to the owner: the Blaze plan, or no visit counts (D-36).

> *In plain English:* the plan counts visits from the host's own logs, with no script on the page. This test checks that the free plan gives those logs.

### Phase 2: The page

Phase gate: the page shell passes every site check, and the owner approves it on a preview address or on a phone.

#### PR-7: Design tokens, fonts, and accent color

Status: planned.

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

#### PR-8: Page shell

Status: planned.

Scope:

- The hero with the headline of D-29, the About section, and the Links section (D-20, D-21).
- The About text from the owner (D-28). Until OQ-3 closes, the section holds no text and stays hidden.
- The page title, the meta description, and the social preview image (D-41).
- The content of the custom 404 page (D-41).
- Subtle motion in CSS, off under reduced motion (D-27).

Out of scope:

- The project cards. Phase 3 holds them.

Exit tests:

- The page has one `h1`, one `main`, and a landmark for each section (G-8).
- The headline shows no sideways scroll and no clipped text at every width (G-1).
- Every site check passes, and the built page holds no script (G-5).

Gate: the owner approves the shell on a preview address and merges PR-8.

> *In plain English:* the live page shows a placeholder today. This change builds the real top of the page, the About section, and the links. It adds no script, so the page stays fast.

### Phase 3: Project cards

Phase gate: both cards pass every site check, and the owner approves the text of each card.

#### PR-9: Project schema and card component

Status: planned.

Scope:

- A content collection schema with the fields of D-22: title, pitch, links, status, stack tags, highlights, screenshot or placeholder, and order (D-23).
- A link can carry a short label, such as "Invite only" (D-24).
- One card component. A native disclosure element opens the card in place (D-23, G-5).
- A designed placeholder image for a card with no screenshot (D-40).
- A test fixture entry, left out of the production build, with the longest title and the most tags that the schema allows.

Exit tests:

- The build fails on an entry with a missing required field.
- The card opens and closes with a mouse, a touch, and the keyboard, and the page holds no script (G-5).
- The fixture card shows no sideways scroll and no clipped text at every width (G-1).
- The axe scan passes with the card closed and open (G-8).

Gate: the owner merges PR-9.

> *In plain English:* the page has no project cards today. This change builds the one card that every project uses. A new project then needs only its facts and an image (G-2).

#### PR-10: Deck Tome card

Status: planned.

Scope: one project entry through the `add-project` skill (D-2, D-24).

- The name is "Deck Tome", and the order number puts the card first (D-24, D-43).
- The links go to `decktome.com` and the public repository, with the "Invite only" label (D-24).
- The text can describe how the owner directs AI coding agents (D-26).
- The card shows the placeholder image until OQ-4 closes (D-40).
- When a screenshot shows card art, the card carries the fan content line of Wizards of the Coast. The session verifies the current text of that policy first (D-41).

Exit tests:

- The owner approves the pitch, the summary, and the highlights.
- Each fact on the card has a source in the pull request text (G-11).
- Every site check passes.

Gate: the owner merges PR-10.

> *In plain English:* the page lists no projects today. This change adds Deck Tome, the live project, as the first card.

#### PR-11: What You Carry card

Status: planned.

Scope: one project entry through the `add-project` skill (D-2, D-25).

- The order number puts the card second (D-43).
- The card links to the public repository (D-25).
- The card does not mention Steam or any release plan (D-25).
- The status badge shows that the game is in development, and the card shows the placeholder image until OQ-4 closes (D-40).

Exit tests:

- The owner approves the pitch, the summary, and the highlights.
- Each fact on the card has a source in the pull request text (G-11).
- Every site check passes.

Gate: the owner merges PR-11.

> *In plain English:* the page shows one project after PR-10. This change adds the game as the second card. It says nothing about release plans that the owner did not announce.

### Phase 4: Launch and upkeep

Phase gate: the owner signs off M-3. That sign-off is the launch.

#### PR-12: Weekly outbound link check

Status: planned.

Scope: a scheduled workflow checks every outbound link of the built site once a week, and the owner can start it by hand (D-16).

Exit tests:

- The workflow passes on the current site.
- The workflow fails on a fixture with one dead link.

Gate: the owner merges PR-12.

> *In plain English:* a project can move or go offline without notice. This check finds a dead link within a week, so no visitor finds it first.

#### PR-13: Visit counts

Status: planned. M-2 must pass first.

Scope: `docs/analytics.md` with a saved Cloud Logging query that counts page views and referrers from the Hosting request logs (D-36).

Exit tests:

- The query returns the visits of one known day.
- The site still ships no script and sets no cookie (G-5).

Gate: the owner merges PR-13.

> *In plain English:* the owner cannot see visit counts today. This change gives a saved query over the host's own logs. The page stays free of trackers and cookies.

#### M-3: Launch audit

Status: planned.

Scope: run the `responsive-auditor` agent, the `accessibility-auditor` agent, and Lighthouse against `https://natekramber.com`. The owner checks the site on a real phone and a real desktop.

Exit tests:

- Each agent report holds no defect of high severity.
- Lighthouse on the live site meets the budget of D-37.
- The owner records the phones and the browsers of the hand check.

Gate: the owner signs off, and the result goes into `docs/decisions.md`.

> *In plain English:* the automatic checks run on a local build. This audit checks the real site on real devices before the owner calls it done.

### Later

These items have no id yet. Each one gets an entry when it starts.

- Real screenshots for both cards (OQ-4).
- The terminal-rpg card, through the `add-project` skill, when the project has something to show (D-2).

## 5. Sequence

One owner runs the sequence in strict order. A step starts only when the gate of the step before it holds.

1. PR-1, the repository foundation. Gate: the merge, then `verify:docs` becomes a required check.
2. PR-2, roadmap draft 1. Gate: the merge approves draft 1.
3. PR-3, the Astro scaffold and the placeholder page. Gate: `verify:site` becomes a required check.
4. PR-4, the site checks. Gate: each check becomes a required check.
5. PR-5, the Google Cloud project, the Hosting configuration, and previews. Gate: M-1 has a result.
6. M-1, the keyless preview deploy. It runs on the pull request of PR-5.
7. PR-6, the deploy on merge and the domain. Gate: the placeholder page is live.
8. M-2, the request logs on the Spark plan. Gate: the result is in `docs/decisions.md`.
9. PR-7, the design tokens, the fonts, and the accent color. Gate: OQ-5 closes.
10. PR-8, the page shell. Gate: the owner approves it on a preview address.
11. PR-9, the project schema and the card component.
12. PR-10, the Deck Tome card. Gate: the owner approves the card text.
13. PR-11, the What You Carry card. Gate: the owner approves the card text.
14. PR-12, the weekly outbound link check.
15. PR-13, the visit counts. It runs only when M-2 passes.
16. M-3, the launch audit. Gate: the owner signs off.

## 6. Open questions

`docs/questions.md` holds the register. OQ-3 blocks the About text of PR-8. OQ-4 blocks nothing at launch. OQ-5 blocks the merge of PR-7.

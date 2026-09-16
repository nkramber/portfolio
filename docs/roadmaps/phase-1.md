# Phase 1: Stack, checks, and first deploy

Status: complete. This file holds the entries of Phase 1, moved word for word from `docs/design.md` on 2026-09-16 (D-155). The roadmap section of `docs/design.md` keeps the phase heading, the phase gate, and a link to this file.

## PR-3: Astro scaffold and placeholder page

Status: merged as #3, `4aacda4`, on 2026-09-13 UTC. Gitar approved it after one finding, and `verify:site` became a required check after the merge.

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

## PR-4: Site checks

Status: merged as #4, `1942877`, on 2026-09-13 UTC. Gitar approved it after one finding, and the four `verify:site-*` checks became required checks after the merge.

Scope: the four checks of D-38, each as a `verify:site-*` job and a `make` target.

- Responsive tests: Playwright loads the page at each width of the `responsive-qa` skill. A test fails on sideways scroll, and each run saves a screenshot for each width.
- Accessibility scan: axe checks the page for WCAG 2.2 AA in the light and the dark scheme, with every card closed and open.
- Lighthouse budget: a script runs Lighthouse 13 three times and fails when a median breaks the budget of D-37 and D-48 (D-50).
- HTML validation with `html-validate`, and an internal link and anchor check with `linkinator` (D-46, D-47).

Exit tests:

- Each check passes on the placeholder page.
- Each check fails on a fixture with one planted defect. The defects: a wide element, a missing alt text, a heavy script, a duplicate id, and a broken anchor.
- `make verify` runs all four checks.

Gate: each check joins the `main` ruleset after its first green run (D-11, D-38).

> *In plain English:* today nothing stops a change that breaks the layout on a phone or hurts accessibility. This change adds four automatic checks, and it proves that each check can fail. The page itself does not change.

## PR-14: Agentic browsing in the Lighthouse budget

Status: merged as #7, `28dbda2`, on 2026-09-13 UTC. Gitar approved it with no finding.

Scope:

- An `agentic-browsing` floor of 0.95 in `lighthouse-budget.json` (D-60).
- The budget script reads that category like the other four categories.
- The self-test plants a bad `llms.txt` in a fixture site of its own. It checks the exact failure line of each planted defect.

Exit tests:

- `make lighthouse` passes on the placeholder page, and its output lists `agentic-browsing`.
- The budget fails on a planted defect that lowers `agentic-browsing`, and the output names the category (G-3).
- The self-test still fails on the planted heavy script.

Gate: the owner merges PR-14.

> *In plain English:* Lighthouse gives five scores today, and the budget checks only four of them. This change adds the missing score, so the budget checks every score, as the owner asked.

## PR-15: Stylesheet file and placeholder 404 page

Status: merged as #9, `d59be43`, on 2026-09-13 UTC. Gitar approved it with no finding.

Scope:

- `build.inlineStylesheets: 'never'` in `astro.config.mjs`, so the page loads its CSS from a file (D-57).
- A minimal `src/pages/404.astro`: one short line and a link home, in the style of the placeholder (D-64, D-74).
- One layout component, `src/layouts/Placeholder.astro`, for the head and the styles of both pages (D-73).
- The responsive tests, the axe scan, the HTML validation, and the link check also load the 404 page (D-71, G-1, G-8).
- `make no-inline-style-check` with a self-test, in the `verify:site` job (D-72).

Out of scope:

- The CSP header. PR-5 holds `firebase.json`.
- The final words of the 404 page. PR-8 holds them.
- The Lighthouse budget on the 404 page. The budget stays on the home page (D-71).

Exit tests:

- `make no-inline-style-check` passes on the build, and its self-test finds both planted defects (D-72, G-3).
- `dist/_astro/` holds the stylesheet.
- `dist/404.html` exists and holds no script (G-5).
- The responsive tests, the axe scan, the HTML validation, and the link check pass on both pages (D-71).
- The Lighthouse budget still holds on the home page (G-7).
- The `copy-editor` agent reviews the words of the 404 page (D-28).

Gate: the owner merges PR-15.

> *In plain English:* the page keeps its styles inside the HTML today, and a missing address shows the generic error page of the host. This change moves the styles into a file, so a strict security policy can permit them. It also adds a short page for a missing address, and a check that keeps styles out of the HTML.

## PR-16: Foreground preview server for the checks

Status: merged as #8, `162ec5b`, on 2026-09-13 UTC. Gitar approved it with no finding.

Scope:

- `ASTRO_PREVIEW_BACKGROUND` in the web server environment of `playwright.config.ts`, with a comment that names the Astro source (D-70).

Out of scope:

- The `make preview` target. An agent can still run that server in the background.

Exit tests:

- `make verify` passes in an agent shell with no extra variable.
- No `astro preview` process stays on port 4321 after the run.
- The `verify:site-responsive` and `verify:site-a11y` jobs still pass in CI.

Gate: the owner merges PR-16.

> *In plain English:* in a coding-agent shell, the local checks fail today, because Astro moves its preview server into the background. This change keeps that server in the foreground for the checks. CI does not change.

## PR-5: Google Cloud projects, Hosting configuration, and previews

Status: merged as #10, `4d36b43`, on 2026-09-14 UTC. Gitar approved it after one finding, and `verify:site-preview` became a required check before the merge (D-81). The projects `natekramber-prod` (number 321332406577) and `natekramber-preview` (number 573927778532) exist since 2026-09-14 (D-51, D-56, D-79). The owner account of decktome-prod owns both through a gcloud configuration named `natekramber` (D-52). D-53, D-54, D-56 to D-59, D-62, and D-75 to D-80 answer the design questions of PR-5, and PR-15 shipped its site code first (D-65).

Scope:

- `docs/deploy.md` with the setup commands. The session runs them with the owner account, and it stops when the owner must act (D-79).
- The commands create two dedicated projects on the Spark plan (D-56).
- Each project gets its own Workload Identity Federation pool. The preview provider trusts only pull request tokens of this repository (D-35, D-62).
- They also create one deploy service account in each project, with the least role that a Hosting deploy needs (G-9). The preview account gets no role in `natekramber-prod` (D-56).
- `firebase.json`: the build directory, the custom 404 page, the cache headers, and the security headers of D-57 and D-58. The repository has no `.firebaserc`, and each command names its project (D-54).
- `deploy/package.json` and its lockfile hold the Firebase CLI alone, with a Dependabot entry for `/deploy` (D-53).
- A preview workflow: each pull request deploys its build to a preview channel of `natekramber-preview` through Workload Identity Federation (D-35, D-56).
- A separate job posts the preview URL as one pull request comment, and it updates that comment on each push (D-66).
- Each preview deploy sets `--expires 30d`, and a job deletes the channel when its pull request closes (D-67).
- A header check in the preview workflow. It compares each header of the preview URL with `firebase.json`, and a Playwright test fails on any console error (D-59).

Out of scope:

- The deploy on merge, the domain, and the HSTS check on the live domain. PR-6 holds them.

Exit tests:

- M-1 passes on this pull request, or the owner decides the next step (D-35).
- The repository and its secrets hold no service account key (G-9).
- No service account of `natekramber-preview` holds a role in `natekramber-prod` (D-56, G-10).
- The header check passes on the preview URL, and it fails on one planted wrong header (D-59, G-3).
- A Dependabot pull request can still merge while `verify:site-preview` skips on it (D-68).

Gate: M-1 has a result in `docs/decisions.md`, and the owner merges PR-5. Then `verify:site-preview` joins the `main` ruleset (D-11, D-68). Refuted 2026-09-14: the check joined the ruleset before the merge of #10, right after its first green run (D-81).

> *In plain English:* the site has no home in Google Cloud today. This change writes the setup steps and the host settings. Each change gets its own preview address in a separate project, without a stored key, so a preview can never reach the live site.

## M-1: Keyless preview deploy

Status: passed on #10 on 2026-09-14 (D-80). The deploy needed `roles/firebasehosting.admin` alone, and the header check passed on the preview URL.

Scope: the preview workflow of PR-5 runs `firebase hosting:channel:deploy` on `natekramber-preview` with the credentials of Workload Identity Federation (D-56). The official GitHub action needs a JSON key, so it stays out (read 2026-09-12).

Exit tests:

- The workflow prints a preview URL, and the URL serves the build of the pull request.
- The workflow uses no JSON key.
- The header check of D-59 passes on the preview URL.
- The result names the least role set that the deploy needed. The Firebase docs ask for API Keys Viewer, but the Hosting deploy code of firebase-tools 15.30.0 calls no API Keys endpoint (read 2026-09-12).

Gate: a pass keeps the preview workflow. A fail removes the workflow, and the owner chooses between a scoped key and no previews (D-35).

> *In plain English:* nobody knows yet whether the Firebase tool accepts a deploy without a stored key. This test answers that before the live site depends on it.

## PR-6: Deploy on merge and the domain

Status: merged as #12, `af04c17`, on 2026-09-14 UTC. Gitar approved it with no finding. The first run of `deploy.yml` released the placeholder page with no manual step. Both certificates read `CERT_ACTIVE` at 15:58 UTC, and both domains read `HOST_ACTIVE` by 16:30 UTC after the second DNS visit (D-86). The owner opened the site on a phone, and `make preview-check` passed on `https://natekramber.com` at 17:04 UTC, with the HSTS header of D-58. No run tested the exit test of D-63 yet.

Scope:

- A deploy workflow that runs on each push to `main` and by hand, through Workload Identity Federation (D-35, D-84, G-10). Its job uses the environment `production` (D-63).
- The environment `production` accepts the `main` branch alone, and no administrator can bypass it. The session creates it, and the owner clears the bypass before the first run of the workflow (D-63, D-85).
- The live service account trusts only the OIDC subject of the environment `production` (D-62, D-63).
- The custom domains `natekramber.com` and `www.natekramber.com`, created through the Hosting API. `www` redirects to the apex with a 301 (D-41, D-82).
- Two DNS visits at GoDaddy by the owner (D-82, D-83). The first adds three TXT records, and the second changes the A record and the `www` CNAME after both certificates are active.
- The environment, the domains, the DNS records, and the rollback steps in `docs/deploy.md`.

Exit tests:

- A merge to `main` deploys the placeholder page with no manual step.
- `https://natekramber.com` answers with a valid certificate, and `www` redirects to it.
- The response holds every header that `firebase.json` sets.
- The HSTS header of `https://natekramber.com` reads `max-age=31536000; includeSubDomains` (D-58).
- A workflow run outside the environment `production` gets no token for the live service account (D-63).
- The owner opens the site on a phone.

Gate: the placeholder page is live at `natekramber.com` (D-40).

> *In plain English:* the domain points nowhere today. This change puts the placeholder page on the real address, and each approved change then goes live on its own. The certificate can take up to a day, so the plan does this early.

## M-2: Request logs on the Spark plan

Status: passed on 2026-09-14 (D-88). The Spark project with no billing account sends the request logs. The entry of a test visit held the URL, the referrer, and the country.

Scope: link Firebase Hosting to Cloud Logging on the Spark project. Make one test visit, then read its log entry. The plan that this link needs is unverified (read 2026-09-12). Resolved 2026-09-14: the Spark plan with no billing account gives the link (D-88).

Exit tests:

- The log entry holds the request URL, the referrer, and the country.
- The project still has no billing account (D-34).

Gate: a pass unblocks PR-13. A fail goes to the owner: the Blaze plan, or no visit counts (D-36).

> *In plain English:* the plan counts visits from the host's own logs, with no script on the page. This test checks that the free plan gives those logs.

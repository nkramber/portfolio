# Session handoff

`CLAUDE.md` sends you here first. Read "Resume here", then the newest session entry. The `session-handoff` skill holds the rules of this file (D-8).

This file keeps the ten newest sessions, newest first. `docs/session-handoff-archive.md` keeps every older session, word for word.

## Resume here (2026-09-16)

- **Main:** `2e50f34`, the squash merge of PR #25, the docs refresh.
- **Open pull requests:** #26, the branch `site/pr-13-visit-counts`, PR-13, in review.
- **Next action:** answer the Gitar review of #26. After the merge, start M-3, the launch audit, from `main`.
- **Blocked on:** OQ-3 blocks the About text. OQ-4 and OQ-8 block the images of the cards.
- **Next ids:** D-142, OQ-9, M-4, PR-18, Session 24.

## Facts that expire

- The GitHub settings, read 2026-09-14: squash merge alone, automatic delete of a merged branch, and ruleset `main` (id 23087504). The ruleset requires a pull request and refuses a force push and a delete. From 2026-09-12, GitHub Actions requires a full commit SHA for each action (D-61).
- The `main` ruleset requires seven checks from GitHub Actions (app id 15368), read 2026-09-16: `verify:docs`, `verify:site`, `verify:site-responsive`, `verify:site-a11y`, `verify:site-lighthouse`, `verify:site-html`, and `verify:site-preview`.
- `actions/checkout` tag v7.0.1 points to commit `3d3c42e5aac5ba805825da76410c181273ba90b1`, read 2026-09-16 from the GitHub API. It is still the newest release.
- `actions/setup-node` tag v7.0.0 points to commit `820762786026740c76f36085b0efc47a31fe5020`, read 2026-09-16 from the GitHub API. It is still the newest release.
- `actions/upload-artifact` tag v7.0.1 points to commit `043fb46d1a93c77aae656e7c1c64a875d1fc6a0a`, read 2026-09-16 from the GitHub API. It is still the newest release.
- The Node release schedule, read 2026-09-14: Node 22 is in maintenance until its end of life on 2027-04-30. Node 24 is the active LTS line until 2026-10-20, and Node 26 becomes LTS on 2026-10-28. Node 22.23.2 is still the newest Node 22 release.
- Astro 7.3.2 is the latest Astro on 2026-09-16 (npm registry), and it needs Node 22.12.0 or newer. The variable `ASTRO_TELEMETRY_DISABLED=1` stops its telemetry.
- On 2026-09-14, npm lists each check tool at its latest release: Playwright 1.63.0, axe-core 4.13.0, Lighthouse 13.4.1, html-validate 11.15.0, and linkinator 8.1.0. Chromium 153 (build 1243) and chrome-launcher 1.2.1 date from 2026-09-12.
- `npm audit` reads 0 vulnerabilities on 2026-09-14. Lighthouse CI 0.15.1 added 12 advisories before D-50 removed it.
- The Gitar trial still pauses automatic reviews on 2026-09-16, and it ends in 7 days. On 15 pull requests (#7, #8, #12 to #17, and #19 to #25), the pause note of the first head held a full review in its collapsed Code Review block. A later head of #17, of #19, and of #22 needed a `Gitar review` comment, and the `gitar-review` skill holds the traps.
- PR-5 created the projects `natekramber-prod` and `natekramber-preview` on 2026-09-14 (D-51, D-56, D-79). A project id is permanent, and a permission error before creation does not show whether an id is free.
- WCAG 2.2 is the W3C Recommendation of 2024-12-12, read 2026-09-12. The minimum target size of 2.5.8 is 24 by 24 CSS pixels.
- ASD-STE100 Issue 9, dated 2025-01-15, is the current issue, read 2026-09-14.
- Claude Code reads `CLAUDE.md` and not `AGENTS.md`. A rule file with a `paths` list loads when Claude reads a matching file. The session read both facts in the Claude Code memory docs on 2026-09-12.
- The toolchain on this Mac, read 2026-09-14: Python 3.9.6, pnpm 9.2.0, and gh 2.100.0. The default Node is 20.17.0, and nvm holds Node 22.23.2 with npm 10.9.8.
- The Playwright cache in `~/Library/Caches/ms-playwright` holds Chromium build 1243 and its headless shell, read 2026-09-14.
- The external facts of the roadmap, each with its source and its date, live in `docs/design.md`.
- The What You Carry repository `nkramber/what-you-carry` is public on 2026-09-15, and its D-106 still reads "Private until launch". The owner records that change in that repository (D-25).
- The cloud tools on this Mac, read 2026-09-14: gcloud 533.0.0 in `/opt/homebrew/bin`, and a global Firebase CLI 14.14.0 under Node 20.17.0 alone. The newest gcloud is 584.0.0 of 2026-09-09 (https://docs.cloud.google.com/sdk/docs/release-notes).
- The gcloud configurations on this Mac, read 2026-09-14: `default` (active) and `decktome` on the project `wallabee-dev`, and `natekramber` (inactive) for the owner projects.
- firebase-tools 15.30.1 came out at 21:07 UTC on 2026-09-14, and it is still the newest release. `deploy/package-lock.json` still pins 15.30.0 (npm registry, read 2026-09-16). Both need Node 20 or newer. Version 15.22.2 broke deploys through Workload Identity Federation, and 15.22.3 fixed them (npm registry and firebase-tools issue 10716, read 2026-09-12).
- `google-github-actions/auth` tag v3.0.0 points to commit `7c6bc770dae815cd3e89ee6cdf493a5fab2cc093`, read 2026-09-16 from the GitHub API. It is still the newest release. The tag is lightweight. The `releases/latest` endpoint returns the moving tag `v3`.
- The GitHub ids, read 2026-09-12: repository 1367643959 and owner 190805558. The OIDC `sub` prefix is `repo:nkramber@190805558/portfolio@1367643959`, the immutable format for a repository that GitHub created after 2026-07-15.
- The repository has one environment, `production`, and no secret or variable, read 2026-09-14. Workflows get a read token by default, and the workflows of a first-time contributor need approval.
- `dig` read the DNS of `natekramber.com` at `ns13.domaincontrol.com` at 04:11 UTC on 2026-09-15. The name servers are `ns13.domaincontrol.com` and `ns14.domaincontrol.com` at GoDaddy. The apex has one A record, `199.36.158.100`, and `www` is a CNAME to `natekramber-prod.web.app`. The apex holds the TXT record `hosting-site=natekramber-prod`, and the two `_acme-challenge` names hold the other two TXT records. The domain has no AAAA, MX, or CAA record.
- Lighthouse 13.4.1 has five categories, read 2026-09-13 from the installed source. A 404 for `/llms.txt` makes the audit `llms-txt` not applicable, so the placeholder page scores 1 for agentic browsing.
- Astro 7.3.2 runs `astro preview` in the background when `am-i-vibing` 0.4.0 detects an agent from a variable such as `AI_AGENT` or `CLAUDECODE`. `ASTRO_PREVIEW_BACKGROUND` turns that detection off (installed `dist/cli/preview/index.js`, read 2026-09-13).
- Playwright 1.63.0 merges `webServer.env` over `process.env` (installed `lib/runner/index.js`, read 2026-09-13).
- `astro preview` of Astro 7.3.2 sends `dist/404.html` with the status 404 for a missing address (installed `dist/core/preview/vite-plugin-astro-preview.js`, read 2026-09-13).
- Astro 7.3.2 writes a lock file for `astro preview`, and it refuses a second preview server of the same project. The flag `--ignore-lock` starts a second server anyway, and `--force` replaces the first (installed `dist/cli/preview/index.js`, read 2026-09-13).
- linkinator 8.1.0 reads each location as a glob inside `--server-root` (installed `build/src/options.js`, read 2026-09-13).
- The verify workflow runs on a pull request and by hand alone. On 2026-09-15 UTC, `main` has no run of the verify workflow, and its eight newest runs are deploy runs.
- The gcloud configuration `natekramber` exists since 2026-09-14. It stays inactive, and its account is the owner account of decktome-prod. The configuration `default` stays active on `wallabee-dev`.
- The projects `natekramber-preview` (number 573927778532) and `natekramber-prod` (number 321332406577) exist since 2026-09-14, with no billing account. Each has Firebase, its default Hosting site, a pool `github`, a provider, and a deploy service account (`docs/deploy.md`).
- The Firebase CLI of this Mac uses the Wallabee account by default, and the owner account is its second account (read 2026-09-14).
- `actions/download-artifact` tag v8.0.1 points to commit `3e5f45b2cfb9172054b4087a40e8e0b5a5461e7c`, read 2026-09-16 from the GitHub API. The tag is lightweight. It is still the newest release.
- `deploy/package-lock.json` pins firebase-tools 15.30.0 with 674 packages. On 2026-09-14, `npm audit` of `deploy/` reads 9 moderate advisories, and the root reads 0.
- On 2026-09-14, the `live` channel of `natekramber-preview` shows a release at 13:50 UTC. It came before any deploy of this repository, and its cause is unverified.
- At 04:11 UTC on 2026-09-15, `https://natekramber.com` answered 200 with `Strict-Transport-Security: max-age=31536000; includeSubDomains`, and `https://www.natekramber.com` answered 301 to the apex. Before the second DNS visit, GoDaddy sent `max-age=63072000; includeSubDomains; preload` (D-83).
- The environment `production` exists since 2026-09-14. Its branch policy lists `branch:main` alone, and the API reads `can_admins_bypass: false`.
- The custom domains `natekramber.com` and `www.natekramber.com` exist on `natekramber-prod` since 2026-09-14, and `www` redirects to the apex. Both read `OWNERSHIP_ACTIVE` at 14:52 UTC and `CERT_ACTIVE` at 15:58 UTC. `www` read `HOST_ACTIVE` at 16:20 UTC, and the apex at 16:30 UTC. Each certificate had the type `TEMPORARY` and the expiry 2026-12-13. At 04:11 UTC on 2026-09-15, both read `CERT_ACTIVE` with the type `GROUPED`, the standard certificate for Spark plan custom domains, and the expiry 2026-12-13.
- The three TXT records of the first DNS visit resolve at GoDaddy, Google, and Cloudflare on 2026-09-14.
- The owner made the second DNS visit on 2026-09-14 (D-86). At 16:09 UTC, both GoDaddy name servers gave the A record `199.36.158.100` at `@` and the CNAME `www` to `natekramber-prod.web.app`.
- The first run of `deploy.yml`, 34859481347, passed at 15:02 UTC on 2026-09-14. It released the version `8ca891d5ede885e2` to the live channel of `natekramber-prod`.
- The HSTS preload list holds neither `natekramber.com` nor `www.natekramber.com`, read 2026-09-14 from `hstspreload.org`.
- Since 17:22 UTC on 2026-09-14, the site `natekramber-prod` reads `cloudLoggingEnabled: true` (D-87). A config call with `false` removes the link.
- On 2026-09-14, both projects enable `logging.googleapis.com` and `monitoring.googleapis.com`. Before M-2, each project held the audit logs alone.
- M-2 passed on 2026-09-14 (D-88). The log `firebasehosting.googleapis.com/webrequests` of `natekramber-prod` holds the request URL with its query, the referrer, the country, the city, and the full IP address.
- At 17:16 UTC on 2026-09-14, an automated scan asked `natekramber.com` for `/key.json`, `/firebase-adminsdk.json`, and two other key files. Each request got a 404.
- On 2026-09-14, `gcloud billing projects describe natekramber-prod` reads `False`, with no billing account. A direct call to the Cloud Billing API returns 403, because that API is off in the project.
- The owner picked Atkinson Hyperlegible Next and Mono with the accent Blueprint cobalt on 2026-09-14 (D-91). The preview page of D-89 is a private page on claude.ai.
- Fontsource 5.3.0 serves the Latin variable WOFF2 files of both Atkinson faces: 33,996 bytes for Next and 17,752 bytes for Mono (read 2026-09-14). GitHub marks both upstream repositories as archived.
- Astro 7.3.2 has a fonts API. Its `Font` component writes a `style` element, and the CSP of D-57 blocks that element (installed `astro/components/Font.astro`, read 2026-09-14).
- web-features 3.38.0 is the latest release on 2026-09-14. The Web Status API has no feature id for some properties, so the compat key in its `data.json` gives their status.
- Since deploy run 35065647135 on `eb1dccf` (2026-09-16 UTC), `https://natekramber.com` serves the flat cards of PR-17. `make preview-check` passed on the site after that deploy, with `font-src 'self'` and `img-src 'self'` in the CSP.
- The owner checked the PR-7 preview on an iPhone 16 Pro in Chrome on 2026-09-14 (D-93).
- `/Users/nate/Repos/terminal-rpg` does not exist on this Mac on 2026-09-14.
- The Lighthouse budget of `make verify` read 1 in every category and a CLS of 0 from PR-7 to PR-11 (2026-09-15). The total bytes grew from 38,974 (PR-7) to 41,307 (PR-8), 44,768 (PR-9), 65,511 (PR-10), and 67,219 (PR-11). The median LCP grew from 1,052 ms to 1,352 ms. On `main` with PR-17, the total bytes read 64,242, because the highlights left the cards (2026-09-16).
- On `main`, `make verify` runs 58 responsive tests and 15 accessibility tests (2026-09-16).
- On `main`, a fixture build loads the fixture cards alone (D-112). It keeps its content cache in `node_modules/.astro-fixtures-1`, `-invalid`, or `-unknown`, and the site build keeps `node_modules/.astro`.
- The decktome working tree on this Mac holds the local branch `pr54-theme-words` with uncommitted Go changes, read 2026-09-14. Its docs match `origin/main` at `c7a4ff4`.
- At 02:02 UTC on 2026-09-15, `gh repo view` read `nkramber/decktome` as public. `https://decktome.com` answered 200, and `www.decktome.com` answered 301 to the apex.
- The decktome D-310 still reads "No public sign-up", and its D-577 of 2026-09-07 names the product "Deck Tome" (read 2026-09-14).
- The external drive holds `/Volumes/SSD-1TB/what-you-carry`, the source of PR-11. Its working tree is on the branch `feat/pr-65-ramp-meshes`, and the card of PR-11 cites its `main` at `a4bf6d6`. On 2026-09-16 the GitHub `main` of that repository reads `7345c9c`.
- On the PR-17 build, the Projects heading sits 46 to 110 px above the bottom of the first screen in portrait (D-117). On a landscape phone, it sits below that screen (D-128). The page keeps at least 64 px below its last card (D-137). The home page has 5 tab stops, and the smallest pointer target is 49.7 by 36.2 px.
- The owner merged #23 (PR-12) as `3ca291e` on 2026-09-16. Its tree matches the reviewed head `503dfd5`, and Gitar approved that head with no finding. Deploy run 35064220205 passed.
- The owner merged #24 (PR-17) as `eb1dccf` on 2026-09-16. Its tree matches the reviewed head `8da4c11`, and Gitar approved that head with no finding. Deploy run 35065647135 passed.
- Run 35064260365 of `links.yml`, started by hand on 2026-09-16, read 13 links of the live site. Each one answered 200, and the self-test failed on the planted dead link.
- The owner merged #25 as `2e50f34` at 13:32 UTC on 2026-09-16. Its tree matches the reviewed head `cc8f5f1`, and Gitar approved that head with no finding. Deploy run 35102613219 passed.
- The project `natekramber-prod` holds two saved queries since 13:42 UTC on 2026-09-16, `visits-page-requests` and `visits-after-machine-filter`, each with the visibility `SHARED` (D-140). It held none before.
- The `_Default` log bucket of `natekramber-prod` keeps 30 days and has no Log Analytics, read 2026-09-16. Cloud Logging gives 50 GiB of ingestion for each project each month at no charge.
- On 2026-09-15 the live site answered 901 requests, 580 of them a 404 scan. The page requests read 155, and the machine filter left 125 (D-139).

## Session 23: 2026-09-16

### What this session did, and why

- The session committed the docs refresh of Session 22 as `cc8f5f1`, and opened #25. Every check passed, and Gitar approved it with no finding.
- The owner merged #25 as `2e50f34`. Its tree matches the reviewed head, and deploy run 35102613219 passed.
- The session then started PR-13 from `main`. A read of the live request log gave the numbers of 2026-09-15.
- The owner answered three questions (D-139 to D-141). The count gives two numbers, the saved queries live in the project, and `make visits` joins the scope.
- The Logging API created `visits-page-requests` and `visits-after-machine-filter` at 13:42 UTC. The project held no saved query before.
- The session wrote `docs/analytics.md`, `scripts/visits.sh`, the `visits` target, the three decisions, six external facts, and this entry. Session 13 moved to the archive.

### State of the repository

- `main` is `2e50f34`, the squash merge of PR #25.
- Remote head: `origin/site/pr-13-visit-counts` at `<sha>`, checked after the push.
- `make verify`: every check passed.

### In flight

- PR-13 waits for the Gitar review and the merge.
- A filter change needs the same change in `scripts/visits.sh` and in the saved query. Nothing checks that the two agree.
- The owner left out the referrer query, the country query, the scan note, and the cost note of the same question (D-141).
- M-3, the launch audit, is the last item before the launch. It needs the two agents and a hand check on a real phone.
- OQ-4 waits for a screenshot, and OQ-8 waits for a logo file. Each card shows no image until then.
- The bio interview still waits for the answers of the owner (D-94). OQ-3 stays open.
- Nobody checked Safari 26 and VoiceOver yet: the link names of D-122, the status line, and the logo row.
- No run tested the PR-6 exit test of D-63 yet.
- firebase-tools 15.30.1 is out, and `deploy/` pins 15.30.0. The monthly Dependabot update of D-16 can move it.

### Traps and gotchas

- The tool sandbox refused a log read that asked for `httpRequest.remoteIp`, because the field holds an IP address. Read the log with no IP field.
- The sandbox also refused a change to the settings of Claude Code. Ask the owner for a permission rule.
- A saved query holds no time range. The Logs Explorer control selects the day, and `make visits` adds the day to the filter.
- gcloud 533.0.0 has no `saved-queries` command group, so the create call goes to the REST API.
- The live log is mostly noise. 580 of the 901 entries of 2026-09-15 were a 404 scan.

### Open questions that block progress

None blocks PR-13. OQ-3 blocks the About text, and OQ-4 with OQ-8 block the images of the cards.

### Next concrete action

Answer the Gitar review of PR-13. After the merge, start M-3, the launch audit, from `main`.

## Session 22: 2026-09-16

### What this session did, and why

- The owner merged #24 (PR-17) as `eb1dccf`. Its tree matches the reviewed head `8da4c11`, and Gitar approved that head with no finding.
- Deploy run 35065647135 passed, and `make preview-check` passed on `https://natekramber.com`. The live site shows the flat cards.
- The owner asked for a docs refresh before a context reset, with no commit, no push, and no pull request.
- The session read the facts that expire again. Two changed: the `main` of What You Carry, and the newest deploy run of this repository.
- Each action pin is still the newest release, the ruleset still requires seven checks, and firebase-tools 15.30.1 is still ahead of the pinned 15.30.0.
- The design doc marks PR-11, PR-12, and PR-17 merged, and the Phase 3 gate passed. Its correction lines read oldest first again.
- The external facts of the design doc gain the image research of PR-17. Session 12 moved to the archive.

### State of the repository

- `main` is `eb1dccf`, the squash merge of PR #24.
- Branch `docs/after-pr-17` holds this refresh, with no commit yet.
- `make ste-check`: 0 findings.

### In flight

- This refresh waits for a commit, a pull request, and the Gitar review.
- PR-13 has no branch and no research yet. It needs a way to count page views in Cloud Logging on a project with no billing account.
- OQ-4 waits for a screenshot, and OQ-8 waits for a logo file. Each card shows no image until then.
- A logo file needs an opaque ground. The fixture mark reads 2.81:1 against the dark page, and 3.10:1 on forced black.
- The bio interview still waits for the answers of the owner (D-94). OQ-3 stays open.
- Nobody checked Safari 26 and VoiceOver yet: the link names of D-122, the status line, and the logo row.
- The hairline around a screenshot reads 1.24:1 against the page, so the edge of a light screenshot is faint.
- No run tested the PR-6 exit test of D-63 yet.
- firebase-tools 15.30.1 is out, and `deploy/` pins 15.30.0. The monthly Dependabot update of D-16 can move it.
- The private preview page of D-89 still exists on claude.ai.

### Traps and gotchas

- The correction lines of `docs/design.md` read oldest first. Session 20 put its line above Session 19, and this session put both in order.
- A branch that starts before the merge of another pull request meets one conflict in `docs/decisions.md`. Each branch adds its rows at the end of the table.
- The responsive audit of a card change took about 20 minutes, and the accessibility audit about 10. Start each audit early, and run one at a time.
- `make verify` stops at its first step, so a failed `make ste-check` hides every other check.
- An HTML comment in an Astro template reaches the built page. A note about a component belongs in its frontmatter.

### Open questions that block progress

None blocks the refresh. OQ-3 blocks the About text, and OQ-4 with OQ-8 block the images of the cards.

### Next concrete action

Commit this refresh on `docs/after-pr-17`, open its pull request, and answer the Gitar review. After the merge, start PR-13, the visit counts, from `main` with read-only research.

## Session 21: 2026-09-16

### What this session did, and why

- The owner merged #23 (PR-12) as `3ca291e`. Its tree matches the reviewed head `503dfd5`, and Gitar approved that head with no finding.
- Deploy run 35064220205 passed. The session then started `links.yml` by hand, and run 35064260365 read 13 links with no dead link.
- The owner asked for a new card shape: no highlights, and room for a logo and a screenshot. The owner also asked to remove the Links section.
- The owner answered four questions (D-133 to D-136). The two audits gave two more answers (D-137, D-138).
- A read-only research pass read the image code of Astro 7.3.2. `Picture` cannot process an SVG, and an inline SVG import can carry a `style` element.
- The session wrote the card, the schema, the tests, and the docs. Session 11 moved to the archive.
- The responsive audit found no sideways scroll at any width. The branch fixes two of its four defects, and the owner accepted the other two.
- The accessibility audit found no WCAG 2.2 AA defect. The branch applies two of its three low items.

### State of the repository

- `main` is `3ca291e`, the squash merge of PR #23.
- Branch `site/pr-17-card-shape` holds PR-17 and this entry.
- Remote head: `origin/site/pr-17-card-shape` at the commit that holds this entry, checked after the push.
- `make verify` on Node 22.23.2 passes on the branch. Lighthouse reads 1 in every category, 64,242 total bytes, a median LCP of 1,352 ms, and a CLS of 0.

### In flight

- #24 waits for the Gitar review and the merge.
- OQ-8 waits for a logo file, and OQ-4 waits for a screenshot. Each card shows no image until then.
- A logo file needs an opaque ground. The fixture mark reads 2.81:1 against the dark page, and 3.10:1 on forced black.
- The bio interview still waits for the answers of the owner (D-94). OQ-3 stays open.
- Nobody checked Safari 26 and VoiceOver yet: the link names of D-122, the status line, and the logo row.
- The hairline around a screenshot reads 1.24:1 against the page, so the edge of a light screenshot is faint.
- No run tested the PR-6 exit test of D-63 yet.
- firebase-tools 15.30.1 is out, and `deploy/` pins 15.30.0. The monthly Dependabot update of D-16 can move it.
- The private preview page of D-89 still exists on claude.ai.

### Traps and gotchas

- The rebase of this branch met one conflict: both branches add rows at the end of `docs/decisions.md`. PR-12 holds D-130 to D-132, so this branch starts at D-133.
- `make verify` stops at its first step. A failed `make ste-check` hides every other check, so read the first lines of its log.
- A numbered list item of a `.md` file counts as a procedural step, so its limit is 20 words, not 25.
- An HTML comment in an Astro template reaches the built page. A note about the card belongs in the frontmatter.
- `Picture` fails the build on an SVG, and it still writes `source` addresses for files that never exist. So the schema refuses an SVG screenshot first.
- An ESM import of an SVG renders an inline `svg` element that can hold a `style` element, and the CSP of D-57 blocks it.

### Open questions that block progress

None blocks PR-17. OQ-3 blocks the About text.

### Next concrete action

Answer the Gitar review of #24, and post `Gitar review` only after the checks of the new head start. After the merge, start PR-13, the visit counts, from `main`.

## Session 20: 2026-09-16

### What this session did, and why

- The owner merged #22 (PR-11) as `c272a86` at 05:48 UTC. Its tree matches the reviewed head `b8a640e`, and Gitar approved that head with no finding.
- Deploy run 35061020052 passed, and `make preview-check` passed on `https://natekramber.com` at 05:50 UTC.
- The session started PR-12 with a read-only research pass on the outbound links of the site.
- The research found that LinkedIn answers 999 to an automated request, and that its `robots.txt` prohibits such a request. The owner chose the skip (D-130).
- The owner chose the live site as the target (D-131), and a failed run as the signal of a dead link (D-132).
- The session wrote `.github/workflows/links.yml`, `make link-check`, `make link-selftest`, the planted fixture, and the docs. Session 10 moved to the archive.
- `make link-check` read 13 links of the live site, each one at 200, and the self-test failed on the planted dead address.
- The owner asked for four changes of the page. PR-17 records them as decisions and applies them.
- The changes: no highlights, a flat card with a logo and a screenshot, no placeholder panel, and no Links section.

### State of the repository

- `main` is `c272a86`, the squash merge of PR #22.
- Branch `site/pr-12-link-check` holds PR-12 and this entry.
- Remote head: `origin/site/pr-12-link-check` at the commit that holds this entry, checked after the push.
- `make verify` on Node 22.23.2 passes on the branch, and `make link-check` passes on the live site.

### In flight

- #23 waits for the Gitar review and the merge.
- No run tested `links.yml` yet. A scheduled run reads the default branch, so its first run comes after the merge.
- PR-17 holds the four changes of the page that the owner asked for. The AI workflow line of D-114 then leaves the site.
- The bio interview still waits for the answers of the owner (D-94). OQ-3 stays open.
- OQ-4 stays open. After PR-17, a card shows no image until the owner gives a logo or a screenshot.
- Nobody checked Safari 26 yet for `::-webkit-details-marker`, the list role of `.tags`, and the summary in VoiceOver. The link names of D-122 need the same check.
- No run tested the PR-6 exit test of D-63 yet.
- firebase-tools 15.30.1 is out, and `deploy/` pins 15.30.0. The monthly Dependabot update of D-16 can move it.
- The private preview page of D-89 still exists on claude.ai.

### Traps and gotchas

- Two rows of `docs/decisions.md` ended with the same sentence, so an edit with that sentence alone matched both. Anchor each edit on the unique part of its row.
- The help output of linkinator is longer than 60 lines. The flag `--status-code "CODE:ACTION"` sits in the second half, and it can make a status pass, warn, or fail.
- LinkedIn answers 999 to an automated request, with a browser agent too, so a checker that reads it fails every week (D-130).
- `make link-check` needs the network and the live site. It stays out of `make verify`, which runs offline.

### Open questions that block progress

None blocks PR-12. OQ-3 blocks the About text.

### Next concrete action

Answer the Gitar review of #23, and post `Gitar review` only after the checks of the new head start. After the merge, start PR-17 from `main`: the flat card with a logo and a screenshot, and no Links section.

## Session 19: 2026-09-15

### What this session did, and why

- The owner merged #21, the handoff pointer, as `1315691` at 04:52 UTC on 2026-09-15. Its tree matches the reviewed head `e8c8d3b`, Gitar approved that head, and deploy run 34930474549 passed.
- The session started PR-11 with the `add-project` skill and a read-only research pass on What You Carry `main` at `a4bf6d6`.
- The owner chose a visually hidden project name in each card link (D-121). The question named two wrong WCAG facts, and the session corrected them from the W3C pages.
- The first run of the new link name test found a space before a hidden comma. A scratch page showed the cause, and the owner chose parentheses (D-122).
- The owner picked the pitch, the tags, and two highlights (D-123 to D-125). The copy review found jargon in one highlight, and the owner took its plain words (D-126).
- The session checked each card fact on What You Carry `main`, and the pull request text gives the source of each fact (G-11).
- The responsive audit found no sideways scroll at any width, and two low defects. The owner accepted both (D-127, D-128).
- The accessibility audit found no WCAG 2.2 AA defect in the light or the dark scheme. In the Chromium accessibility tree, each card link has the name of D-122 with no extra space.
- The session opened #22, and every check passed on `f6fd79f`. The Gitar pause note held an approval with no finding.
- The owner skipped the phone check and the VoiceOver check of the preview (D-129). Session 9 moved to the archive.

### State of the repository

- `main` is `1315691`, the squash merge of PR #21.
- Branch `site/pr-11-what-you-carry-card` holds PR-11 and this entry.
- Remote head: `origin/site/pr-11-what-you-carry-card` at the commit that holds this entry, checked after the push.
- `make verify` on Node 22.23.2 passes on the branch. Lighthouse reads 1 in every category, 67,219 total bytes, a median LCP of 1,352 ms, and a CLS of 0.

### In flight

- #22 waits for the Gitar review of the head that records D-129, and for the merge.
- What You Carry D-106 still reads "Private until launch", and that repository is public. The owner records the change there (D-25).
- The bio interview still waits for the answers of the owner (D-94). OQ-3 stays open.
- Nobody checked Safari 26 yet for `::-webkit-details-marker`, the list role of `.tags`, and the summary in VoiceOver. The link names of D-122 need the same check. Chromium keeps each hidden text in its own text node, so a screen reader can read "Status:" as a line of its own.
- No run tested the PR-6 exit test of D-63 yet.
- firebase-tools 15.30.1 is out, and `deploy/` pins 15.30.0. The monthly Dependabot update of D-16 can move it.
- The private preview page of D-89 still exists on claude.ai.

### Traps and gotchas

- The working tree of What You Carry is on a feature branch. The research pass and the copy review both read files there, so read each cited file on `origin/main` with `git show`.
- In another repository, `git status` can write the index. Pass `--no-optional-locks` to each git command there, and never run `git fetch` there.
- A visually hidden span counts as a block in the accessible name, so the name gets a space before its text. A hidden text that starts with a comma then reads "Source on GitHub , Deck Tome" (D-122).
- The question of D-121 gave WCAG 2.4.4 as level AA and the card heading as its context. Both were wrong: 2.4.4 is level A, and H80 is advisory alone. Read the W3C Understanding page before a question cites a level or a technique.
- The date of the owner changed at midnight in the session. So D-121 has the date 2026-09-14, and D-122 to D-128 have 2026-09-15.
- The responsive audit took about 20 minutes, and the two audits cannot share one `astro preview` server. So start the audits early, one after the other.

### Open questions that block progress

None blocks PR-11. OQ-3 blocks the About text.

### Next concrete action

Answer the Gitar review of #22, and post `Gitar review` only after the checks of the new head start. After the merge, start PR-12, the weekly outbound link check, from `main`.

## Session 18: 2026-09-14

### What this session did, and why

- The owner merged #19 (PR-10) as `0f983bb` at 04:07 UTC on 2026-09-15. Its tree matches the reviewed head `5eec2ba`, and Gitar approved that head with no finding.
- Deploy run 34927622727 passed. At 04:11 UTC, `make preview-check` passed on `https://natekramber.com`.
- The owner asked for every doc to show the current state before a context reset. The session read the expiring facts again and wrote this refresh. Session 8 moved to the archive.
- Both custom domains now read `CERT_ACTIVE` with the type `GROUPED`, the standard certificate for Spark plan custom domains. Hosting replaced the `TEMPORARY` certificates.
- Of the facts that the session read again, one changed: firebase-tools 15.30.1 came out, and `deploy/` still pins 15.30.0. The facts list drops the merge facts of #16 to #18 and the branch results of PR-7 to PR-10.

### State of the repository

- `main` is `0f983bb`, the squash merge of PR #19.
- Branch `docs/after-pr-10` holds this refresh, as a pull request of documents alone.
- Remote head: `origin/docs/after-pr-10` at the commit that holds this entry, checked after the push.
- `make ste-check`: 0 findings.

### In flight

- The refresh waits for the Gitar review, then for the merge.
- PR-11 has no branch and no research yet. At 02:06 UTC on 2026-09-15, the external drive held `/Volumes/SSD-1TB/what-you-carry`.
- firebase-tools 15.30.1 is out, and `deploy/` pins 15.30.0. The monthly Dependabot update of D-16 can move it.
- The accessibility audit of PR-10 found one AAA item for PR-11. Two cards give two links the same name, "Source on GitHub" (WCAG 2.4.9). A visually hidden project name fixes it, and that fix changes every card.
- The bio interview still waits for the answers of the owner (D-94). OQ-3 stays open.
- Nobody checked Safari 26 yet for `::-webkit-details-marker`, the list role of `.tags`, and the summary in VoiceOver.
- No run tested the PR-6 exit test of D-63 yet.
- The private preview page of D-89 still exists on claude.ai.

### Traps and gotchas

- The first head of #19 got a full Gitar review in the pause note with no comment. After the next push, Gitar put no check on the new head for more than 4 minutes.
- A `Gitar review` comment on that head gave a new summary comment with a new id, and a Gitar check on the head. So read the check runs of the head, not only the old summary comment.

### Open questions that block progress

None blocks the refresh. OQ-3 blocks the About text.

### Next concrete action

Answer the Gitar review of the refresh. After the merge, start PR-11, the What You Carry card, from `main` with the `add-project` skill.

## Session 17: 2026-09-14

### What this session did, and why

- The owner merged #18 (PR-9) as `1bced52` at 00:20 UTC on 2026-09-15. Its tree matches the reviewed head `56c9749`, and deploy run 34912742795 passed.
- `make preview-check` passed on `https://natekramber.com` at 00:27 UTC. PR-9 added no check job, so the ruleset did not change.
- The session started PR-10 with the `add-project` skill and a read-only research pass on the decktome repository.
- The first real entry breaks the fixture build: `fixture-screenshot.json` and Deck Tome both take order 1. The owner chose a fixture build with the fixture cards alone (D-112).
- The first card puts the mono face on the home page. A local measurement showed that a preload makes the face render on a fast first visit. The owner chose a preload on the home page alone (D-111).
- The owner picked the pitch, the highlights, the tags, and the links (D-113 to D-116). The owner kept the chosen words over two changes of the copy review.
- The session checked each card fact in the decktome repository, and with `gh` and `curl` (G-11).
- The session wrote PR-10: the entry, the Links section of D-102, the mono preload, the fixture change, the new tests, and the docs. Session 7 moved to the archive.
- The responsive audit passed 54 of 54 tests and found 4 defects. The owner chose three fixes (D-117 to D-119). The session accepts the fourth: at 320 px with 200 percent text and the 1.4.12 spacing together, "decktome.com" breaks before its last letter.
- The accessibility audit found no WCAG 2.2 AA defect in the light or the dark scheme.
- The session opened #19. Every check passed on `2948512`, and the Gitar pause note held an approval with no finding.
- The owner skipped the phone check of the preview (D-120).

### State of the repository

- `main` is `1bced52`, the squash merge of PR #18.
- Branch `site/pr-10-deck-tome-card` holds PR-10 and this entry.
- Remote head: `origin/site/pr-10-deck-tome-card` at the commit that holds this entry, checked after the push.
- `make verify` on Node 22.23.2 passes on the branch. Lighthouse reads 1 in every category, 65,511 total bytes, a median LCP of 1,354 ms, and a CLS of 0.

### In flight

- #19 waits for the Gitar review of the head that records D-120, and for the merge. The paused Gitar reviews a new head only after a `Gitar review` comment.
- The accessibility audit found one AAA item for PR-11. Two cards give two links the same name, "Source on GitHub" (WCAG 2.4.9). A visually hidden project name fixes it, and that fix changes every card.
- The bio interview still waits for the answers of the owner (D-94). OQ-3 stays open.
- Nobody checked Safari 26 yet for `::-webkit-details-marker`, the list role of `.tags`, and the summary in VoiceOver.
- No run tested the PR-6 exit test of D-63 yet.
- Each certificate has the type `TEMPORARY`, and nobody checked the permanent certificate yet.
- The private preview page of D-89 still exists on claude.ai.

### Traps and gotchas

- In zsh, `${PIPESTATUS[0]}` is empty, so an `EXIT=` line printed nothing. Use `$pipestatus` in zsh, or run the command in bash.
- The research report said that the decktome working tree matched `origin/main`. The tree held uncommitted Go changes, so check the diff of each cited file.
- A strict `grep` for the decision rows of decktome found 693 rows, and a count of unique ids found 721. Count the unique ids.
- A fixture build that adds its entries to the site entries breaks on the first real entry. Two entries share an order number, and the tests count the cards (D-112).
- The first card puts the mono face on the home page. So the font test that expects one font request must change with the card.
- A measurement script under `prefers-reduced-motion: reduce` read a note 22 px above its link right after a text size change. After 500 ms it read 16 px below, as the screenshot showed. The reset transition covers font sizes too, so wait one frame, or measure with motion allowed.

### Open questions that block progress

None blocks PR-10. OQ-3 blocks the About text.

### Next concrete action

Answer the Gitar review of PR-10, and request it only after the checks of the new head start. After the merge, start PR-11, the What You Carry card, with the `add-project` skill.

## Session 16: 2026-09-14

### What this session did, and why

- The owner merged #17 (PR-8) as `ec0d764` at 21:56 UTC. Its tree matches the reviewed head `bc8bb08`, and deploy run 34901522463 passed.
- `make preview-check` passed on `https://natekramber.com` at 21:59 UTC, with `img-src 'self'` in the CSP.
- The session started PR-9 with two read-only research passes: the content collection and images, and the disclosure card.
- The owner answered the PR-9 questions: D-103 to D-110.
- The session wrote PR-9: the schema, the card component, the Projects section, two fixture cards, the schema self-test, and the new tests.
- A browser test found fixture cards in `dist/`. One shared content cache let a site build reuse fixture entries, so each fixture build now has its own `cacheDir`.
- The responsive audit found 4 layout defects and 2 weak checks. The branch fixes all 6, and the owner chose D-108 to D-110.
- The accessibility audit found no WCAG 2.2 AA defect. The branch applies its 3 low items: forced-color outlines, a row gap, and a note description.
- The copy review found nothing to change. Session 6 moved to the archive.

### State of the repository

- `main` is `ec0d764`, the squash merge of PR #17.
- Branch `site/pr-9-project-cards` holds PR-9 and this entry.
- Remote head: `origin/site/pr-9-project-cards` at the commit that holds this entry, checked after the push.
- `make verify` on Node 22.23.2 passes on the branch.

### In flight

- PR-9 waits for the Gitar review and the merge. The live page shows no card until PR-10.
- The bio interview still waits for the answers of the owner (D-94). OQ-3 stays open.
- Nobody checked Safari 26 yet for `::-webkit-details-marker`, the list role of `.tags`, and the summary in VoiceOver.
- No run tested the PR-6 exit test of D-63 yet.
- Each certificate has the type `TEMPORARY`, and nobody checked the permanent certificate yet.
- The private preview page of D-89 still exists on claude.ai.

### Traps and gotchas

- Astro keeps the content store of a build in `cacheDir` (`dist/content/paths.js`). A site build after a fixture build with one shared cache reused the fixture entries, so each `PORTFOLIO_FIXTURES` value keeps its own cache.
- A research claim said that a plain build drops fixture entries. A real build did not, so check each cache claim with the exact build order.
- `page.addStyleTag` can return before the style applies. So the checks for text at 200 percent and the 1.4.12 spacing now wait for the computed style.
- A resize loop needs an animation frame between steps, or a size in `vw` keeps its old value.
- Under `prefers-reduced-motion: reduce`, the reset transition also covers `outline-offset`. So wait one frame before a script reads it.
- `@axe-core/playwright` needs a page from `browser.newContext()`. A page from `browser.newPage()` stops the scan with an error.
- The production build warns that the `projects` collection is empty. That warning is expected until PR-10 adds the first entry.
- An upload of two screenshots to the owner failed once with "socket hang up", and a second try worked.

### Open questions that block progress

None blocks PR-9. OQ-3 blocks the About text.

### Next concrete action

Answer the Gitar review of PR-9, and request it only after the checks of the new head start. After the merge, start PR-10, the Deck Tome card, with the `add-project` skill.

## Session 15: 2026-09-14

### What this session did, and why

- The owner merged #16, the docs refresh, as `8119f95` at 19:41 UTC. Its tree matches the reviewed head `0614f9d`, and Gitar approved it with no finding.
- The session started PR-8 with two read-only research passes: the head metadata, and the motion and page structure.
- The owner chose an interview for the bio (D-94). The session asked four interview questions, and the answers are still open.
- The owner chose the hero rise (D-95), the NK icon (D-96), and the share image with the headline (D-97). The 404 page keeps the words of D-74 (D-98).
- The session wrote PR-8: the layout, both pages, the icons, the share image script, the new tests, and the docs. Session 5 moved to the archive.
- The CSP drops `data:` from `img-src`, because D-57 kept it only for the placeholder favicon.
- The copy review found no defect. The owner took its one suggestion, a meta description in the words of D-29 (D-99).
- The responsive audit found four defects. The branch fixes three, and the fourth is a bare word break at 200 percent text on a 320 px screen.
- The accessibility audit found no WCAG 2.2 AA defect in the light or the dark scheme.
- The session opened #17. Every check passed on `c18d8ad`, and the pause note of Gitar held an approval with no finding.
- The owner kept both lists of profile links (D-100) and chose a hairline above the footer (D-101). The second commit applies D-99 and D-101.
- On a phone, the owner saw the same links twice with nothing between them. The owner then chose the hero list alone until the project cards arrive (D-102).

### State of the repository

- `main` is `8119f95`, the squash merge of PR #16.
- Branch `site/pr-8-page-shell` holds PR-8 as #17, and this entry.
- Remote head: `origin/site/pr-8-page-shell` at the commit that holds this entry, checked after the push.
- `make verify` on Node 22.23.2 passes on the branch.

### In flight

- #17 waits for a Gitar review of the new head, the phone check of the owner, and the merge.
- The bio interview waits for the answers of the owner. OQ-3 stays open until the owner approves the words (D-94).
- No run tested the PR-6 exit test of D-63 yet.
- Each certificate has the type `TEMPORARY` at 19:50 UTC, and nobody checked the permanent certificate yet.
- The private preview page of D-89 still exists on claude.ai.

### Traps and gotchas

- `grep` on this Mac is ugrep. A pattern with a long range such as `.{0,160}` stops with "exceeds complexity limits", so use Perl for a context search.
- Under `prefers-reduced-motion: reduce`, the reset gives each property a 0.01 ms transition. A script that reads a style right after a change gets the old value, so wait one frame.
- A `translate` start offset adds scroll to a page whose content fills the window. `main` clips vertical overflow, and a test holds the first frame still.
- The clip on `main` leaves 6 px below a focus ring in the worst case. In PR-9, give the last link inside `main` more than 6 px of space below it.
- The research pass saw no favicon request from the Playwright headless shell. The full Chromium build requested the icon with `channel: 'chromium'`.
- `make site-checks` runs the accessibility tests after the responsive tests, and Playwright empties `test-results/` at the start of each run. So read the responsive screenshots before the next Playwright run.
- On #17, a `Gitar review` comment came seconds after a push. Gitar put its check on the old head, and its text named no change of the new head. Post the comment after the checks of the new head start. Then read the commit of the Gitar check run.
- A push to #17 kept the preview address, and the preview comment named the new commit. So the owner can reload the same link after a push.

### Open questions that block progress

None blocks PR-8. OQ-3 blocks the About text.

### Next concrete action

Answer the Gitar review of PR-8, and ask the owner for the phone check on its preview address. Draft the bio when the interview answers come.

## Session 14: 2026-09-14

### What this session did, and why

- Gitar approved #15 (PR-7) with no finding, and all 12 checks passed.
- The first phone check showed a Firebase "Site Not Found" page. The owner typed the preview address, and its lowercase L reads like 1 or i.
- The owner chose the Mac clipboard for the address (D-93). The phone check then passed on an iPhone 16 Pro in Chrome.
- The owner merged #15 as `a865051` at 19:31 UTC. Its tree matches the reviewed head `6a05110`.
- Deploy run 34887408480 passed, and `make preview-check` passed on `https://natekramber.com`.
- The owner asked for every doc to show the current state before a context reset. The session read the expiring facts again and wrote this refresh.

### State of the repository

- `main` is `a865051`, the squash merge of PR #15.
- Branch `docs/after-pr-7` holds this refresh, as a pull request of documents alone.
- Remote head: `origin/docs/after-pr-7` at the commit that holds this entry, checked after the push.
- `make ste-check`: 0 findings.

### In flight

- The refresh waits for the Gitar review, then for the merge.
- PR-8 has no branch and no research yet. OQ-3 blocks its About text.
- No run tested the PR-6 exit test of D-63 yet.
- Each certificate has the type `TEMPORARY`, and nobody checked the permanent certificate yet.
- The private preview page of D-89 still exists on claude.ai.

### Traps and gotchas

- A preview address holds a random part, and a phone keyboard makes a look-alike typo easy. Give the owner the address with no typing (D-93).
- In zsh, an unquoted `--include=*.md` stops `grep` with "no matches found". The Session 7 trap cost time again, so quote the pattern.
- `/Users/nate/Repos/terminal-rpg` no longer exists on this Mac. Ask the owner before any work on that project.

### Open questions that block progress

None blocks the refresh. OQ-3 blocks the About text of PR-8.

### Next concrete action

Answer the Gitar review of the refresh. After the merge, start PR-8 from `main` with read-only research and owner questions.

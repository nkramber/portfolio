# Session handoff

`CLAUDE.md` sends you here first. Read "Resume here", then the newest session entry. The `session-handoff` skill holds the rules of this file (D-8).

This file keeps the ten newest sessions, newest first. `docs/session-handoff-archive.md` keeps every older session, word for word.

## Resume here (2026-09-14)

- **Main:** `8119f95`, the squash merge of PR #16, the docs refresh after PR-7.
- **Open pull requests:** #17 (PR-8), the page shell, on `site/pr-8-page-shell`. It waits for the Gitar review, the phone check of the owner, and the merge.
- **Next action:** answer the Gitar review of the newest head of #17, and ask the owner for the phone check again (D-93). Draft the bio from the interview answers (D-94).
- **Blocked on:** OQ-3 blocks the About text of PR-8.
- **Next ids:** D-103, OQ-8, M-4, PR-17, Session 16.

## Facts that expire

- The GitHub settings, read 2026-09-12: squash merge alone, automatic delete of a merged branch, and ruleset `main` (id 23087504). The ruleset requires a pull request and refuses a force push and a delete. From 2026-09-12, GitHub Actions requires a full commit SHA for each action (D-61).
- The `main` ruleset requires seven checks from GitHub Actions (app id 15368), read 2026-09-14: `verify:docs`, `verify:site`, `verify:site-responsive`, `verify:site-a11y`, `verify:site-lighthouse`, `verify:site-html`, and `verify:site-preview`.
- `actions/checkout` tag v7.0.1 points to commit `3d3c42e5aac5ba805825da76410c181273ba90b1`, read 2026-09-12 from the GitHub API.
- `actions/setup-node` tag v7.0.0 points to commit `820762786026740c76f36085b0efc47a31fe5020`, read 2026-09-12 from the GitHub API.
- `actions/upload-artifact` tag v7.0.1 points to commit `043fb46d1a93c77aae656e7c1c64a875d1fc6a0a`, read 2026-09-12 from the GitHub API.
- The Node release schedule, read 2026-09-12: Node 22 is in maintenance until its end of life on 2027-04-30. Node 24 is the active LTS line until 2026-10-20, and Node 26 becomes LTS on 2026-10-28.
- Astro 7.3.2 is the latest Astro on 2026-09-14 (npm registry), and it needs Node 22.12.0 or newer. The variable `ASTRO_TELEMETRY_DISABLED=1` stops its telemetry.
- On 2026-09-14, npm lists each check tool at its latest release: Playwright 1.63.0, axe-core 4.13.0, Lighthouse 13.4.1, html-validate 11.15.0, and linkinator 8.1.0. Chromium 153 (build 1243) and chrome-launcher 1.2.1 date from 2026-09-12.
- `npm audit` reads 0 vulnerabilities on 2026-09-14. Lighthouse CI 0.15.1 added 12 advisories before D-50 removed it.
- The Gitar trial still pauses automatic reviews on 2026-09-14. On #7, #8, and #12 to #15, the pause note held a full review in its collapsed Code Review block. A `Gitar review` comment runs one review, and the `gitar-review` skill holds the traps.
- PR-5 created the projects `natekramber-prod` and `natekramber-preview` on 2026-09-14 (D-51, D-56, D-79). A project id is permanent, and a permission error before creation does not show whether an id is free.
- WCAG 2.2 is the W3C Recommendation of 2024-12-12, read 2026-09-12. The minimum target size of 2.5.8 is 24 by 24 CSS pixels.
- ASD-STE100 Issue 9, dated 2025-01-15, is the current issue, read 2026-09-12.
- Claude Code reads `CLAUDE.md` and not `AGENTS.md`. A rule file with a `paths` list loads when Claude reads a matching file. The session read both facts in the Claude Code memory docs on 2026-09-12.
- The toolchain on this Mac, read 2026-09-12: Python 3.9.6, pnpm 9.2.0, and gh 2.100.0. The default Node is 20.17.0, and nvm holds Node 22.23.2 with npm 10.9.8.
- The Playwright cache in `~/Library/Caches/ms-playwright` holds Chromium build 1243, read 2026-09-12.
- The external facts of the roadmap, each with its source and its date, live in `docs/design.md`.
- The What You Carry repository is public on 2026-09-12, and its D-106 still reads "Private until launch". The owner records that change in that repository (D-25).
- decktome.com is invite-only on 2026-09-12 (decktome D-310).
- The cloud tools on this Mac, read 2026-09-12: gcloud 533.0.0 in `/opt/homebrew/bin`, and a global Firebase CLI 14.14.0 under Node 20.17.0 alone. The newest gcloud is 584.0.0 of 2026-09-09 (https://docs.cloud.google.com/sdk/docs/release-notes).
- The gcloud configurations on this Mac, read 2026-09-14: `default` (active) and `decktome` on the project `wallabee-dev`, and `natekramber` (inactive) for the owner projects.
- firebase-tools 15.30.0 came out on 2026-09-09, and npm still lists it as the latest release on 2026-09-14. It needs Node 20 or newer. Version 15.22.2 broke deploys through Workload Identity Federation, and 15.22.3 fixed them (npm registry and firebase-tools issue 10716, read 2026-09-12).
- `google-github-actions/auth` tag v3.0.0 points to commit `7c6bc770dae815cd3e89ee6cdf493a5fab2cc093`, read 2026-09-12 from the GitHub API. The tag is lightweight. The `releases/latest` endpoint returns the moving tag `v3`.
- The GitHub ids, read 2026-09-12: repository 1367643959 and owner 190805558. The OIDC `sub` prefix is `repo:nkramber@190805558/portfolio@1367643959`, the immutable format for a repository that GitHub created after 2026-07-15.
- The repository has one environment, `production`, and no secret or variable, read 2026-09-14. Workflows get a read token by default, and the workflows of a first-time contributor need approval.
- `dig` read the DNS of `natekramber.com` at `ns13.domaincontrol.com` at 16:14 UTC on 2026-09-14, after the second DNS visit. The name servers are `ns13.domaincontrol.com` and `ns14.domaincontrol.com` at GoDaddy. The apex has one A record, `199.36.158.100`, and `www` is a CNAME to `natekramber-prod.web.app`. The three TXT records stay, and the domain has no AAAA, MX, or CAA record.
- Lighthouse 13.4.1 has five categories, read 2026-09-13 from the installed source. A 404 for `/llms.txt` makes the audit `llms-txt` not applicable, so the placeholder page scores 1 for agentic browsing.
- Astro 7.3.2 runs `astro preview` in the background when `am-i-vibing` 0.4.0 detects an agent from a variable such as `AI_AGENT` or `CLAUDECODE`. `ASTRO_PREVIEW_BACKGROUND` turns that detection off (installed `dist/cli/preview/index.js`, read 2026-09-13).
- Playwright 1.63.0 merges `webServer.env` over `process.env` (installed `lib/runner/index.js`, read 2026-09-13).
- `astro preview` of Astro 7.3.2 sends `dist/404.html` with the status 404 for a missing address (installed `dist/core/preview/vite-plugin-astro-preview.js`, read 2026-09-13).
- Astro 7.3.2 writes a lock file for `astro preview`, and it refuses a second preview server of the same project. The flag `--ignore-lock` starts a second server anyway, and `--force` replaces the first (installed `dist/cli/preview/index.js`, read 2026-09-13).
- linkinator 8.1.0 reads each location as a glob inside `--server-root` (installed `build/src/options.js`, read 2026-09-13).
- The verify workflow runs on a pull request and by hand alone. On 2026-09-13, `gh run list --branch main` lists only Dependabot runs.
- The gcloud configuration `natekramber` exists since 2026-09-14. It stays inactive, and its account is the owner account of decktome-prod. The configuration `default` stays active on `wallabee-dev`.
- The projects `natekramber-preview` (number 573927778532) and `natekramber-prod` (number 321332406577) exist since 2026-09-14, with no billing account. Each has Firebase, its default Hosting site, a pool `github`, a provider, and a deploy service account (`docs/deploy.md`).
- The Firebase CLI of this Mac uses the Wallabee account by default, and the owner account is its second account (read 2026-09-14).
- `actions/download-artifact` tag v8.0.1 points to commit `3e5f45b2cfb9172054b4087a40e8e0b5a5461e7c`, read 2026-09-14 from the GitHub API. The tag is lightweight.
- `deploy/package-lock.json` pins firebase-tools 15.30.0 with 674 packages. On 2026-09-14, `npm audit` of `deploy/` reads 9 moderate advisories, and the root reads 0.
- On 2026-09-14, the `live` channel of `natekramber-preview` shows a release at 13:50 UTC. It came before any deploy of this repository, and its cause is unverified.
- On 2026-09-14 at 16:10 UTC, `https://natekramber.com` answered from Firebase Hosting with `Strict-Transport-Security: max-age=31536000; includeSubDomains` (`curl -I` at `199.36.158.100`). `make preview-check` passed on the live domain at 17:04 UTC. Before the second DNS visit, GoDaddy sent `max-age=63072000; includeSubDomains; preload` (D-83).
- The environment `production` exists since 2026-09-14. Its branch policy lists `branch:main` alone, and the API reads `can_admins_bypass: false`.
- The custom domains `natekramber.com` and `www.natekramber.com` exist on `natekramber-prod` since 2026-09-14, and `www` redirects to the apex. Both read `OWNERSHIP_ACTIVE` at 14:52 UTC and `CERT_ACTIVE` at 15:58 UTC. `www` read `HOST_ACTIVE` at 16:20 UTC, and the apex at 16:30 UTC. Each certificate has the type `TEMPORARY` and expires on 2026-12-13.
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
- On 2026-09-14, `make verify` on the PR-7 branch reads 1 in every Lighthouse category. It reads 38,974 total bytes, a median LCP of 1,052 ms, and a CLS of 0.
- web-features 3.38.0 is the latest release on 2026-09-14. The Web Status API has no feature id for some properties, so the compat key in its `data.json` gives their status.
- Since deploy run 34887408480 at 19:32 UTC on 2026-09-14, `https://natekramber.com` serves PR-7. `make preview-check` passes on it, with `font-src 'self'` in the CSP.
- The owner checked the PR-7 preview on an iPhone 16 Pro in Chrome on 2026-09-14 (D-93).
- `/Users/nate/Repos/terminal-rpg` does not exist on this Mac on 2026-09-14.
- The owner merged #16 as `8119f95` at 19:41 UTC on 2026-09-14. Its tree matches the reviewed head `0614f9d`, and Gitar approved it with no finding in the pause note.
- Deploy run 34888419843 passed on `8119f95` on 2026-09-14.
- At 19:50 UTC on 2026-09-14, both certificates still read `CERT_ACTIVE` with the type `TEMPORARY`.
- On 2026-09-14, `make lighthouse` on the PR-8 branch with D-102 reads 1 in every category. It reads 41,307 total bytes, a median LCP of 1,201 ms, and a CLS of 0.
- On 2026-09-14, every check of #17 passed on `c18d8ad`, and the Gitar pause note held an approval with no finding.

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

## Session 13: 2026-09-14

### What this session did, and why

- The owner merged #14, the M-2 result, as `175d9ff` at 17:49 UTC. Its tree matches the reviewed head `fb341ad`, and deploy run 34877052799 passed.
- The session started PR-7 with two read-only research passes: the platform facts, and the font candidates.
- The owner chose a private preview page (D-89) and the CSP change `font-src 'self'` (D-90).
- The session published the preview with three font pairings and three accents. The owner picked Atkinson Hyperlegible Next and Mono with Blueprint cobalt (D-91), and `font-display: optional` (D-92).
- The session wrote PR-7: the self-hosted fonts, the tokens, the base styles, six responsive checks, and the docs. Session 3 moved to the archive.
- The responsive audit found five defects. The branch fixes four, and the fifth is the zoom reading of WCAG 1.4.4 under "In flight".
- The accessibility audit found no WCAG 2.2 AA defect in light or dark. The branch fixes its one readability issue: the kept word pairs of the headline now wrap when enlarged text meets a narrow screen.

### State of the repository

- `main` is `175d9ff`, the squash merge of PR #14.
- Branch `site/pr-7-design-tokens` holds PR-7 and this entry.
- Remote head: `origin/site/pr-7-design-tokens` at the commit that holds this entry, checked after the push.
- `make verify` on Node 22.23.2 passes on the branch.

### In flight

- PR-7 waits for the Gitar review, the phone check of the owner on its preview address, and the merge.
- The zoom defect of Session 7 uses a stricter rule than the W3C text for WCAG 1.4.4. That text accepts any text scaling mechanism. A test holds each fluid text size within 2 times its minimum, so 400 percent zoom doubles it.
- No run tested the PR-6 exit test of D-63 yet.
- Each certificate has the type `TEMPORARY`, and nobody checked the permanent certificate yet.

### Traps and gotchas

- The Astro `Font` component writes a `style` element, so the CSP of D-57 blocks it. Write `@font-face` by hand in the layout.
- A `?url` import of a font gives the same hashed file as the `url()` in a style block. So the preload and the CSS match.
- `overflow-wrap: break-word` does not narrow an inline-block, so a long word in a link needs `anywhere`.
- `hyphens: auto` at every width can hyphenate the approved headline, so it applies only inside `@container (max-width: 14em)`.
- A Google Fonts request with a wrong axis range fails for every family in it. IBM Plex Mono is static on Google Fonts.
- The Web Status API returns no feature for `text-decoration-thickness`. The compat key in web-features `data.json` gives its status.
- Two audits cannot share one `astro preview` server, so the accessibility audit waited for the responsive audit.
- A no-break space never wraps, so enlarged text splits its words in the middle. A `white-space: nowrap` span can wrap again inside a container query.
- An `em` in a media query ignores the font size that the page sets, so a test with `html { font-size: 200% }` never reaches it. An `em` in a container query counts the font size of the container.

### Open questions that block progress

None blocks PR-7. OQ-3 blocks the About text of PR-8.

### Next concrete action

Answer the Gitar review of PR-7, and ask the owner for the phone check on its preview address. After the merge, start PR-8 from `main` with read-only research.

## Session 12: 2026-09-14

### What this session did, and why

- The owner merged #13, the docs refresh, as `1b623d3` at 17:12 UTC. Its tree matches the reviewed head `b29aca4`, and Gitar approved it with no finding.
- The merge started deploy run 34873295079, and it passed. The close run of `preview.yml` passed too.
- The session started M-2 with a read-only research pass. No primary source says whether the log link needs a billing account.
- The owner chose the Hosting API for the link (D-87). The session set `cloudLoggingEnabled` at 17:22 UTC, and the call returned HTTP 200.
- M-2 passed (D-88). A test visit of 17:28 UTC showed in the log `webrequests` at 17:39 UTC, with the URL, the referrer, and the country.
- The session wrote D-87, D-88, the M-2 and PR-13 status, step 15 of `docs/deploy.md`, six external facts, and this entry. Session 2 moved to the archive.

### State of the repository

- `main` is `1b623d3`, the squash merge of PR #13.
- Branch `docs/m-2-request-logs` holds the M-2 result, as a pull request of documents alone.
- Remote head: `origin/docs/m-2-request-logs` at the commit that holds this entry, checked after the push.
- `make ste-check`: 0 findings.

### In flight

- The M-2 result waits for the Gitar review, then for the merge.
- Cloud Logging keeps the IP address, the city, and the country of each visitor for 30 days (D-87). PR-13 can change that time.
- No run tested the PR-6 exit test of D-63 yet.
- Each certificate has the type `TEMPORARY`, and nobody checked the permanent certificate yet.

### Traps and gotchas

- A Hosting log entry shows 10 to 20 minutes after the request. So a watch for a test visit needs at least 30 minutes.
- The log held requests from 17:16 UTC, six minutes before the link at 17:22 UTC. The first test visit, at 17:23 UTC, did not show by 17:39 UTC.
- The first watch matched the test tag in the query alone. Hosting keeps the query in `requestUrl`, so that match works.
- `gcloud billing projects describe` reads the billing state. A direct call to the Cloud Billing API returns 403 in this project.

### Open questions that block progress

None blocks the M-2 result. OQ-3 blocks the About text of PR-8, and OQ-5 blocks the merge of PR-7.

### Next concrete action

Answer the Gitar review of the M-2 result. After the merge, start PR-7 from `main` with read-only research.

## Session 11: 2026-09-14

### What this session did, and why

- The owner merged #12 (PR-6) as `af04c17` at 15:01 UTC on 2026-09-14. Its tree matches the reviewed head `4fa6ec8`, and Gitar approved it with no finding.
- The first run of `deploy.yml`, 34859481347, released the placeholder page to `natekramber-prod` at 15:02 UTC with no manual step.
- The owner asked the session to watch the certificates. Both certificates read `CERT_ACTIVE` at 15:58 UTC, while the A records still pointed to GoDaddy.
- The owner chose to make the second DNS visit at once (D-86). The session read the GoDaddy help pages, then gave each step.
- At 16:09 UTC, both GoDaddy name servers gave the new records. `www` read `HOST_ACTIVE` at 16:20 UTC, and the apex at 16:30 UTC.
- The owner opened both addresses on a phone with Wi-Fi off, and saw the placeholder page with no warning. GoDaddy locked no record, so the owner removed no connection.
- At 17:04 UTC, `make preview-check PREVIEW_URL=https://natekramber.com` passed. Every header of `firebase.json` matched, and that includes the HSTS header of D-58. The console check and both self-tests passed.
- The session wrote this refresh. It adds D-86, the PR-6 status, a run record in `docs/deploy.md`, four external facts, `CLAUDE.md`, and this entry. Session 1 moved to the archive.

### State of the repository

- `main` is `af04c17`, the squash merge of PR #12.
- Branch `docs/after-pr-6` holds this refresh, as a pull request of documents alone.
- Remote head: `origin/docs/after-pr-6` at the commit that holds this entry, checked after the push.
- `make ste-check`: 0 findings.

### In flight

- The refresh waits for the Gitar review, then for the merge.
- Each certificate has the type `TEMPORARY` and expires on 2026-12-13. Hosting makes a more permanent certificate later, and nobody checked that step yet.
- No run tested the PR-6 exit test of D-63. A workflow run outside the environment `production` must get no token for the live service account.
- The GoDaddy Website Builder site can still exist in the GoDaddy account. The owner cancels any paid plan of that site (D-83).

### Traps and gotchas

- In zsh, `set -- $q` does not split the variable into words. A DNS loop then asked for the wrong names, and the empty answers gave a false sign of deleted records. Run such a loop in bash.
- `dig` with no server skips the DNS cache of macOS, but `curl`, Node, and Chromium use that cache. After the DNS change at 16:09 UTC, this Mac reached the old GoDaddy address until 17:04 UTC. So the live check waited 55 minutes.
- The Hosting API still found the old A records at 16:15 UTC, six minutes after the change. `www` became active at 16:20 UTC, and the apex 10 minutes later.
- `curl --resolve NAME:443:199.36.158.100` shows the certificate and the headers of Firebase Hosting before any DNS change.
- The HTTP challenge of Hosting fails with a 404 while the A records point to another host. The DNS challenge alone gives the certificate.

### Open questions that block progress

None blocks the refresh. OQ-3 blocks the About text of PR-8, and OQ-5 blocks the merge of PR-7.

### Next concrete action

Answer the Gitar review of the refresh. After the merge, start M-2 from `main` with read-only research.

## Session 10: 2026-09-14

### What this session did, and why

- The owner merged #11, the docs refresh, as `251afa5` on 2026-09-14 UTC. Its tree matches the reviewed head `1b41ce3`.
- Two read-only research passes read the custom domains of Firebase Hosting and the GitHub environment `production`.
- The owner answered four questions about PR-6: D-82 to D-85.
- The session created the environment `production` and both custom domains, and the owner cleared the administrator bypass (D-85).
- The owner added the three TXT records of the first DNS visit, and both domains then read `OWNERSHIP_ACTIVE` (D-82).
- The session wrote PR-6: `.github/workflows/deploy.yml`, steps 11 to 14 and the rollback of `docs/deploy.md`, and this entry.

### State of the repository

- `main` is `251afa5`, the squash merge of PR #11.
- Branch `site/pr-6-deploy-domain` holds PR-6 and this entry.
- Remote head: `origin/site/pr-6-deploy-domain` at the commit that holds this entry, checked after the push.
- `make ste-check`: 0 findings. The deploy workflow has no run yet, because it runs on `main` alone.

### In flight

- PR-6 waits for the Gitar review, then for the merge. The first run of `deploy.yml` comes with the merge.
- Both certificates wait for validation. When both read `CERT_ACTIVE`, the owner makes the second DNS visit (D-82).
- Step 12 of `docs/deploy.md` reads the state of both custom domains through the Hosting API.

### Traps and gotchas

- The API response of an environment holds `can_admins_bypass`. The jq operator `//` prints its fallback for `false`, so print the field with `tostring`.
- The A records of `natekramber.com` serve a GoDaddy Website Builder site, not a parking page (D-83).
- The Hosting API v1beta1 returns 403 without the header `x-goog-user-project`.
- For `www`, the Hosting API asks for a CNAME to `natekramber-prod.web.app`, not an A record.
- The deploy workflow runs on `main` alone, so no pull request can test the live deploy before its merge.

### Open questions that block progress

None blocks PR-6. OQ-3 blocks the About text of PR-8, and OQ-5 blocks the merge of PR-7.

### Next concrete action

Answer the Gitar review of PR-6. When both certificates read `CERT_ACTIVE`, ask the owner for the second DNS visit of `docs/deploy.md`.

## Session 9: 2026-09-14

### What this session did, and why

- The owner merged #10 (PR-5) as `4d36b43` on 2026-09-14 UTC. Its tree matches the reviewed head `a3be515`.
- Before the merge, the owner chose to add `verify:site-preview` to the `main` ruleset at once (D-81). The ruleset now requires seven checks.
- The merge closed #10, and the `closed` run of `preview:cleanup` deleted the channel `pr-10`. The channel list of `natekramber-preview` then showed the `live` channel alone (D-67).
- The session wrote this refresh: D-81, the D-11 note, the status of PR-5 and M-1, and this entry.
- The session started PR-6 with two read-only research passes: the custom domain of Firebase Hosting, and the GitHub environment `production`.

### State of the repository

- `main` is `4d36b43`, the squash merge of PR #10.
- Branch `docs/after-pr-5` holds this refresh, as a pull request of documents alone.
- Remote head: `origin/docs/after-pr-5` at the commit that holds this entry, checked after the push.
- `make ste-check`: 0 findings.

### In flight

- The refresh waits for the Gitar review, then for the merge.
- PR-6 has two research passes in this session alone, and no branch yet.

### Traps and gotchas

- `preview.yml` has no path filter, so a pull request of documents alone also deploys a preview and runs `verify:site-preview`.
- The GoDaddy parking host still sends an HSTS header with `preload`. PR-6 replaces that host.

### Open questions that block progress

None blocks the refresh. PR-6 needs the owner for the DNS records at GoDaddy. OQ-3 blocks the About text of PR-8, and OQ-5 blocks the merge of PR-7.

### Next concrete action

Answer the Gitar review of the refresh. Then read the PR-6 research reports, and ask the owner the PR-6 questions.

## Session 8: 2026-09-14

### What this session did, and why

- The owner merged #9 (PR-15) as `d59be43` on 2026-09-13 UTC. Its tree matches the reviewed head `71f10fb`, and it added no check job.
- The session started PR-5 with four read-only research passes. They read Firebase Hosting and its CLI, GitHub OIDC, Workload Identity Federation, the response headers, and the decktome deploy setup.
- The owner answered four questions: D-75 to D-78.
- The session wrote `firebase.json`, the `deploy/` npm project, `docs/deploy.md`, the header check, the console check, and `make preview-check`.
- On 2026-09-14 the owner asked the session to run `docs/deploy.md` (D-79). The session ran every step, and no step needed the owner.
- The session then wrote `.github/workflows/preview.yml` with the preview project number, and it opened PR-5 as #10. This entry rides in PR-5.
- The first preview run of #10 passed M-1 (D-80). The deploy needed no key and `roles/firebasehosting.admin` alone, and every header of `firebase.json` matched on the preview.
- That run failed `verify:site-preview`, because Chrome logs a console error for the 404 status of the 404 page itself. The console check now drops that one message (D-80).

### State of the repository

- `main` is `d59be43`, the squash merge of PR #9.
- Branch `site/pr-5-hosting-previews` holds PR-5 as #10, and this entry.
- Remote head: `origin/site/pr-5-hosting-previews` at the commit that holds this entry, checked after the push.
- `make verify` on Node 22.23.2 passes on the branch.
- The cloud setup of `docs/deploy.md` passed its step 10 checks on 2026-09-14.
- The channel `pr-10` of `natekramber-preview` serves the preview of #10, and it expires 30 days after the last push.

### In flight

- #10 waits for a green run of `verify:site-preview` with the console fix, then for the Gitar review, then for the merge.
- After the merge, `verify:site-preview` joins the `main` ruleset (D-68). Ask the owner before the ruleset change (`.claude/rules/github.md`).
- The live provider `portfolio-production` exists, but no token tested it yet. PR-6 tests it.
- The three low CSS defects of Session 7 wait for PR-7.
- Nobody checked yet whether the setting of D-61 stops the Dependabot jobs that GitHub runs.

### Traps and gotchas

- `gcloud config configurations create` activates the new configuration by default, and that change reaches every terminal. Use `--no-activate` and `CLOUDSDK_ACTIVE_CONFIG_NAME`.
- `gcloud projects describe` gives the same permission error for a free id and for a taken id. Only `gcloud projects create` tells the two cases apart.
- The Firebase CLI of this Mac uses the Wallabee account by default. Give `--account` to each Firebase command of the owner projects.
- A job that skips because a needed job failed reports success. So `verify:site-preview` runs with `!cancelled()`, and its first step fails when no preview exists.
- `firebase hosting:channel:delete` in CI deletes nothing without `--force`, and it still exits 0.
- In zsh, `set -- $ref` does not split the variable into words. A script that needs the split must run in bash.
- `actions/download-artifact` is at v8, and `actions/upload-artifact` is at v7. The v8 download still unzips a normal v7 upload, and a hash mismatch now fails the run.
- Chrome logs a console error for each response with the status 404, and that includes the page itself. A console check of a 404 page must drop that one message, or it always fails.
- `make preview-check` stops at the first failed step, so a failed console check hides the self-test of the header check.

### Open questions that block progress

None blocks #10. OQ-3 blocks the About text of PR-8, and OQ-5 blocks the merge of PR-7.

### Next concrete action

Read the preview run of the console fix on #10. When `verify:site-preview` passes, answer the Gitar review of the new head, and tell the owner that #10 is ready to merge.

## Session 7: 2026-09-13

### What this session did, and why

- The owner merged #7 (PR-14) as `28dbda2` and #8 (PR-16) as `162ec5b` on 2026-09-13 UTC. Each tree matches its reviewed head, and neither pull request added a check job.
- Gitar approved both pull requests with no finding. Each approval sat in the collapsed Code Review block of the pause note.
- `make verify` passed on `main` in this agent shell with no extra variable, so the exit tests of PR-16 hold.
- The session started PR-15 with read-only research: the Astro docs, the installed preview server of Astro, linkinator, and html-validate.
- The owner answered four questions about PR-15: D-71 to D-74.
- The session wrote PR-15: the stylesheet file, the placeholder layout, the 404 page, the inline style check, and the tests of the 404 page. This entry rides in PR-15.
- The `copy-editor` agent found no defect in the words of the 404 page.
- The `accessibility-auditor` agent found no WCAG 2.2 AA defect on either page. The `responsive-auditor` agent found no regression, and the home page screenshots match `main` byte for byte.

### State of the repository

- `main` is `162ec5b`, the squash merge of PR #8.
- Branch `site/pr-15-stylesheet-404` holds PR-15 and this entry.
- Remote head: `origin/site/pr-15-stylesheet-404` at the commit that holds this entry, checked after the push.
- `make verify` on Node 22.23.2 passes on `main` and on the branch.
- The Lighthouse budget of PR-15 reads 1 in each of the five categories, 0 script bytes, and 2,037 total bytes. The median LCP is 751 ms, and the CLS and the TBT are 0.

### In flight

- PR-15 waits for the Gitar review, then for the merge.
- PR-5 has its decisions, and no branch yet.
- Nobody checked yet whether the setting of D-61 stops the Dependabot jobs that GitHub runs.
- The auditors found three low defects in the CSS of PR-3, and PR-15 did not change that CSS. PR-7 holds the base styles, so the session left the defects for PR-7:
  - At 320 px with text at 200 percent, the words "systems." and "address." run into the side padding of the `h1`.
  - The CSS has no `overflow-wrap` rule, so a very long word makes the page scroll sideways at 320 px.
  - The `h1` measures 96 px at 200 percent zoom in a 1280 px window, where double size is 144 px (WCAG 1.4.4).

### Traps and gotchas

- The verify workflow runs on pull requests alone, so a merge to `main` starts no check. After two merges, run `make verify` on `main`.
- No page links to `404.html`, so the link check from `dist` never read it. `html-check` now starts at `'**/*.html'` with `--server-root dist`.
- With two locations and no `--server-root`, linkinator reported the stylesheet and the home link of `dist/` as broken.
- Astro 7.3.2 refuses a second `astro preview` server of the same project. So two auditors cannot serve the same build at the same time, and one auditor waited for the other.
- In zsh, an unquoted `--include=*.js` stops `grep` with "no matches found". Quote the pattern.
- A `cd` in one tool command moves the working directory of the next commands. Use absolute paths.

### Open questions that block progress

None blocks PR-5. OQ-3 blocks the About text of PR-8, and OQ-5 blocks the merge of PR-7.

### Next concrete action

Answer the Gitar review of PR-15. After the owner merges it, start PR-5 from `main` with read-only research, and verify the current `firebase-tools` version first (hard rule 9).

## Session 6: 2026-09-12

### What this session did, and why

- The owner merged PR #5 as `30fc74e`. Its tree matches the reviewed head `95e2948`, and it added no required check.
- The session started PR-5 with four read-only research passes. The passes read the Firebase CLI, Workload Identity Federation, GitHub OIDC, the security headers, and the decktome deploy setup.
- The owner answered fifteen questions about PR-5, PR-6, and the checks: D-53, D-54, and D-56 to D-68.
- The session turned on the GitHub setting that requires a full commit SHA for each action (D-61).
- The owner asked to move the repository to the external drive, and then queued the move for the next session (D-55).
- On 2026-09-13 the owner canceled the move as a miscommunication (D-69). No file moved, and the session removed the checklist of the move.
- Gitar approved #6 after two findings: the order of the correction-pass dates in `docs/design.md`, and a stale pointer in D-55. The fixes are `b0f05db` and `5abd241`.
- The owner merged #6 as `cf80bf3` on 2026-09-13 UTC. Its tree matches the reviewed head `5abd241`, and GitHub deleted the branch.
- The session wrote PR-14 as #7. It adds the `agentic-browsing` floor of D-60, a fixture site with a bad `llms.txt`, and exact failure lines in the Lighthouse self-test.
- `make verify` then failed in this agent shell, because Astro ran `astro preview` as a detached background server. That server was also the source of the old server on port 4321, and the session stopped it.
- The owner chose a separate fix, PR-16 (D-70). The session wrote PR-16, and this entry rides in it.
- The session changed no page code and moved no file.

### State of the repository

- `main` is `cf80bf3`, the squash merge of PR #6.
- Branch `site/pr-14-agentic-browsing-budget` holds PR-14 as #7, at `84d440f`.
- Branch `site/pr-16-foreground-preview` holds PR-16 and this entry.
- Remote head: `origin/site/pr-16-foreground-preview` at the commit that holds this entry, checked after the push.
- `make verify` on Node 22.23.2 passes on both branches. PR-14 needs `ASTRO_PREVIEW_BACKGROUND=1` until PR-16 merges.
- The Lighthouse budget of PR-14 reads 1 in each of the five categories, 0 script bytes, and 1,793 total bytes. The median LCP is 621 ms, and the CLS and the TBT are 0.

### In flight

- #7 (PR-14) and PR-16 wait for the Gitar review, then for the merge.
- PR-15 and PR-5 have their decisions, and no branch yet. The research reports live in this session alone, so `docs/design.md` keeps the key facts with their sources.
- Nobody checked yet whether the setting of D-61 stops the Dependabot jobs that GitHub runs. A manual Dependabot check by the owner gives the answer.

### Traps and gotchas

- A workflow that names a missing GitHub environment creates it with no protection. So PR-6 creates `production` before its workflow runs (D-63).
- Ask a confirmation question before any step of a request that changes where the repository lives. The move request of D-55 was a miscommunication (D-69).
- The gcloud configurations `default` and `decktome` both point at `wallabee-dev`. The decktome handoff records that `decktome` also uses the Wallabee account (2026-09-10).
- Firebase IAM cannot keep a preview deploy off the live site. D-56 answers with a second project.
- The `astro preview` server of the checks ignores `firebase.json`, so no check sees the headers of D-57 and D-58 yet.
- The OIDC `sub` of this repository holds both numeric ids. The name-only examples in the Google docs do not match it.
- `firebase projects:addfirebase` returns 403 until the account opens the Firebase console once (decktome `docs/setup-gcp.md`).
- The Firebase CLI hides the cause of an auth failure without `--debug`. Its debug log prints no `Authorization` header (firebase-tools 15.30.0 source, tested on Node 22.23.2).
- A `curl` of `cloud.google.com/sdk/docs` returns an empty page, because the docs moved to `docs.cloud.google.com`. Use `curl -L`.
- In an agent shell, Astro 7.3.2 starts `astro preview` as a detached background server, and the command exits at once. Playwright then fails, and the server stays on port 4321. PR-16 sets `ASTRO_PREVIEW_BACKGROUND` for the checks (D-70).
- The old heavy-script self-test matched `totalBytes` in the results table, so any failure of the fixture passed it. PR-14 matches the failure line `totalBytes: N is above`.
- A missing `llms.txt` does not lower agentic browsing, because Lighthouse marks a 404 as not applicable. Only a served file with a defect fails the audit.

### Open questions that block progress

None blocks PR-14, PR-15, or PR-16. OQ-3 blocks the About text of PR-8, and OQ-5 blocks the merge of PR-7.

### Next concrete action

Answer the Gitar reviews of #7 and PR-16. After both merges, start PR-15 from `main`: the stylesheet file of D-57 and the minimal 404 page of D-64.

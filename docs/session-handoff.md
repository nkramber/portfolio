# Session handoff

`CLAUDE.md` sends you here first. Read "Resume here", then the newest session entry. The `session-handoff` skill holds the rules of this file (D-8).

This file keeps the ten newest sessions, newest first. `docs/session-handoff-archive.md` keeps every older session, word for word.

## Resume here (2026-09-15)

- **Main:** `1315691`, the squash merge of PR #21, which points the handoff at the merge of PR #20.
- **Open pull requests:** #22 on branch `site/pr-11-what-you-carry-card`, PR-11. It waits for the Gitar review and the merge.
- **Next action:** answer the Gitar review of #22. After the merge, start PR-12, the weekly outbound link check, from `main`.
- **Blocked on:** OQ-3 blocks the About text.
- **Next ids:** D-129, OQ-8, M-4, PR-17, Session 20.

## Facts that expire

- The GitHub settings, read 2026-09-14: squash merge alone, automatic delete of a merged branch, and ruleset `main` (id 23087504). The ruleset requires a pull request and refuses a force push and a delete. From 2026-09-12, GitHub Actions requires a full commit SHA for each action (D-61).
- The `main` ruleset requires seven checks from GitHub Actions (app id 15368), read 2026-09-14: `verify:docs`, `verify:site`, `verify:site-responsive`, `verify:site-a11y`, `verify:site-lighthouse`, `verify:site-html`, and `verify:site-preview`.
- `actions/checkout` tag v7.0.1 points to commit `3d3c42e5aac5ba805825da76410c181273ba90b1`, read 2026-09-14 from the GitHub API. It is still the newest release.
- `actions/setup-node` tag v7.0.0 points to commit `820762786026740c76f36085b0efc47a31fe5020`, read 2026-09-14 from the GitHub API. It is still the newest release.
- `actions/upload-artifact` tag v7.0.1 points to commit `043fb46d1a93c77aae656e7c1c64a875d1fc6a0a`, read 2026-09-14 from the GitHub API. It is still the newest release.
- The Node release schedule, read 2026-09-14: Node 22 is in maintenance until its end of life on 2027-04-30. Node 24 is the active LTS line until 2026-10-20, and Node 26 becomes LTS on 2026-10-28. Node 22.23.2 is still the newest Node 22 release.
- Astro 7.3.2 is the latest Astro on 2026-09-14 (npm registry), and it needs Node 22.12.0 or newer. The variable `ASTRO_TELEMETRY_DISABLED=1` stops its telemetry.
- On 2026-09-14, npm lists each check tool at its latest release: Playwright 1.63.0, axe-core 4.13.0, Lighthouse 13.4.1, html-validate 11.15.0, and linkinator 8.1.0. Chromium 153 (build 1243) and chrome-launcher 1.2.1 date from 2026-09-12.
- `npm audit` reads 0 vulnerabilities on 2026-09-14. Lighthouse CI 0.15.1 added 12 advisories before D-50 removed it.
- The Gitar trial still pauses automatic reviews on 2026-09-15. On 11 pull requests (#7, #8, #12 to #17, and #19 to #21), the pause note of the first head held a full review in its collapsed Code Review block. A later head of #17 and of #19 needed a `Gitar review` comment, and the `gitar-review` skill holds the traps.
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
- firebase-tools 15.30.1 came out at 21:07 UTC on 2026-09-14, and `deploy/package-lock.json` still pins 15.30.0 (npm registry, read 2026-09-14). Both need Node 20 or newer. Version 15.22.2 broke deploys through Workload Identity Federation, and 15.22.3 fixed them (npm registry and firebase-tools issue 10716, read 2026-09-12).
- `google-github-actions/auth` tag v3.0.0 points to commit `7c6bc770dae815cd3e89ee6cdf493a5fab2cc093`, read 2026-09-14 from the GitHub API. It is still the newest release. The tag is lightweight. The `releases/latest` endpoint returns the moving tag `v3`.
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
- `actions/download-artifact` tag v8.0.1 points to commit `3e5f45b2cfb9172054b4087a40e8e0b5a5461e7c`, read 2026-09-14 from the GitHub API. The tag is lightweight. It is still the newest release.
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
- Since deploy run 34927622727 on `0f983bb` (2026-09-15 UTC), `https://natekramber.com` serves PR-10 with the Deck Tome card. At 04:11 UTC, `make preview-check` passed on it, with `font-src 'self'` and `img-src 'self'` in the CSP.
- The owner checked the PR-7 preview on an iPhone 16 Pro in Chrome on 2026-09-14 (D-93).
- `/Users/nate/Repos/terminal-rpg` does not exist on this Mac on 2026-09-14.
- The Lighthouse budget of `make verify` read 1 in every category and a CLS of 0 from PR-7 to PR-11 (2026-09-15). The total bytes grew from 38,974 (PR-7) to 41,307 (PR-8), 44,768 (PR-9), 65,511 (PR-10), and 67,219 (PR-11). The median LCP grew from 1,052 ms to 1,352 ms.
- On the PR-11 branch, `make verify` runs 57 responsive tests and 16 accessibility tests (2026-09-15).
- On `main`, a fixture build loads the fixture cards alone (D-112). It keeps its content cache in `node_modules/.astro-fixtures-1` or `node_modules/.astro-fixtures-invalid`, and the site build keeps `node_modules/.astro`.
- The decktome working tree on this Mac holds the local branch `pr54-theme-words` with uncommitted Go changes, read 2026-09-14. Its docs match `origin/main` at `c7a4ff4`.
- At 02:02 UTC on 2026-09-15, `gh repo view` read `nkramber/decktome` as public. `https://decktome.com` answered 200, and `www.decktome.com` answered 301 to the apex.
- The decktome D-310 still reads "No public sign-up", and its D-577 of 2026-09-07 names the product "Deck Tome" (read 2026-09-14).
- At 05:45 UTC on 2026-09-15, the external drive holds `/Volumes/SSD-1TB/what-you-carry`, the source of PR-11. Its working tree is on the branch `feat/pr-65-ramp-meshes`, and the card of PR-11 cites its `main` at `a4bf6d6`. GitHub `main` then moved to `4bc8cd4`.
- On the PR-11 build, the Projects heading sits 46 to 110 px above the bottom of the first screen in portrait (D-117). On a landscape phone, it sits below that screen (D-128). The footer line sits 48 px below the box of the last card at 320 to 430 px (D-118). The smallest pointer target is 49.7 by 36.2 px, and the home page has 9 tab stops.
- The owner merged #21, the handoff pointer, as `1315691` at 04:52:03 UTC on 2026-09-15. Its tree matches the reviewed head `e8c8d3b`, and Gitar approved that head with no finding. Deploy run 34930474549 passed.
- The owner merged #20, the docs refresh, as `5fffed4` at 04:32:35 UTC on 2026-09-15. Its tree matches the reviewed head `69a4689`, and Gitar approved that head with no finding. Deploy run 34929234875 passed.

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
- The session opened #22. Session 9 moved to the archive.

### State of the repository

- `main` is `1315691`, the squash merge of PR #21.
- Branch `site/pr-11-what-you-carry-card` holds PR-11 and this entry.
- Remote head: `origin/site/pr-11-what-you-carry-card` at the commit that holds this entry, checked after the push.
- `make verify` on Node 22.23.2 passes on the branch. Lighthouse reads 1 in every category, 67,219 total bytes, a median LCP of 1,352 ms, and a CLS of 0.

### In flight

- #22 waits for the Gitar review and the merge.
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

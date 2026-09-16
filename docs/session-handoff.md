# Session handoff

`make resume` prints the header, "Resume here", and the newest session entry (D-154). Read the rest of this file when the task needs it, and at the end of the session. The `session-handoff` skill holds the rules of this file (D-8).

This file keeps the ten newest sessions, newest first. `docs/session-handoff-archive.md` keeps every older session, word for word.

## Resume here (2026-09-16)

- **Do this first:** start a new clean session for each pull request. Run `make resume`, then read `.claude/skills/one-pr-one-session/SKILL.md` before any work for a pull request (D-147, D-154).
- **Base:** `7cdb7a8`, the commit of `origin/main` where this pull request started.
- **Pull requests:** #36, the branch `docs/pr-21-gitar-wait` (PR-21), pending the owner merge. No other pull request is open.
- **Next action:** in a new clean session, ask the owner how a link tells the visitor about a new tab (T-2). The owner asked on 2026-09-16 that each link opens in a new tab.
- **Blocked on:** M-3 waits for the hand check of the owner, and its 17 steps sit in `docs/design.md`. The Gitar trial ends about 2026-09-22. OQ-3 blocks the About text. OQ-4 and OQ-8 block the images of the cards.
- **Next ids:** D-161, OQ-9, M-4, PR-22, Session 30.

## Facts that expire

- The GitHub settings, read 2026-09-14: squash merge alone, automatic delete of a merged branch, and ruleset `main` (id 23087504). The ruleset requires a pull request and refuses a force push and a delete. From 2026-09-12, GitHub Actions requires a full commit SHA for each action (D-61).
- The `main` ruleset requires eight checks from GitHub Actions (app id 15368). The session read them back on 2026-09-16, after the change of D-149: `verify:docs`, `verify:site`, `verify:site-responsive`, `verify:site-a11y`, `verify:site-lighthouse`, `verify:site-html`, `verify:site-preview`, and `verify:pr-lifecycle`.
- `actions/checkout` tag v7.0.1 points to commit `3d3c42e5aac5ba805825da76410c181273ba90b1`, read 2026-09-16 from the GitHub API. It is still the newest release.
- `actions/setup-node` tag v7.0.0 points to commit `820762786026740c76f36085b0efc47a31fe5020`, read 2026-09-16 from the GitHub API. It is still the newest release.
- `actions/upload-artifact` tag v7.0.1 points to commit `043fb46d1a93c77aae656e7c1c64a875d1fc6a0a`, read 2026-09-16 from the GitHub API. It is still the newest release.
- The Node release schedule, read 2026-09-14: Node 22 is in maintenance until its end of life on 2027-04-30. Node 24 is the active LTS line until 2026-10-20, and Node 26 becomes LTS on 2026-10-28. Node 22.23.2 is still the newest Node 22 release.
- Astro 7.3.2 is the latest Astro on 2026-09-16 (npm registry), and it needs Node 22.12.0 or newer. The variable `ASTRO_TELEMETRY_DISABLED=1` stops its telemetry.
- On 2026-09-14, npm lists each check tool at its latest release: Playwright 1.63.0, axe-core 4.13.0, Lighthouse 13.4.1, html-validate 11.15.0, and linkinator 8.1.0. Chromium 153 (build 1243) and chrome-launcher 1.2.1 date from 2026-09-12.
- `npm audit` reads 0 vulnerabilities on 2026-09-14. Lighthouse CI 0.15.1 added 12 advisories before D-50 removed it.
- The Gitar trial still pauses automatic reviews on 2026-09-16. Its note on #28 read "trial ends in 6 days", so the trial ends about 2026-09-22. On 18 pull requests (#7, #8, #12 to #17, and #19 to #28), the pause note of the first head held a full review in its collapsed Code Review block. A later head of #17, of #19, and of #22 needed a `Gitar review` comment, and the `gitar-review` skill holds the traps.
- On 2026-09-16, the Gitar check of `gitar-bot` on the heads of #30, #31, and #32 started 8 to 31 seconds after the commit. Each check completed in 80 seconds or less. The push wait of D-160 is three minutes.
- PR-5 created the projects `natekramber-prod` and `natekramber-preview` on 2026-09-14 (D-51, D-56, D-79). A project id is permanent, and a permission error before creation does not show whether an id is free.
- WCAG 2.2 is the W3C Recommendation of 2024-12-12, read 2026-09-12. The minimum target size of 2.5.8 is 24 by 24 CSS pixels.
- ASD-STE100 Issue 9, dated 2025-01-15, is the current issue, read 2026-09-14.
- Claude Code reads `CLAUDE.md` and not `AGENTS.md`. A rule file with a `paths` list loads when Claude reads a matching file. The session read both facts in the Claude Code memory docs on 2026-09-12.
- The toolchain on this Mac, read 2026-09-14: Python 3.9.6, pnpm 9.2.0, and gh 2.100.0. The default Node is 20.17.0, and nvm holds Node 22.23.2 with npm 10.9.8.
- The Playwright cache in `~/Library/Caches/ms-playwright` holds Chromium build 1243 and its headless shell, read 2026-09-14.
- The external facts of the roadmap, each with its source and its date, live in `docs/external-facts.md` (D-156).
- Claude Code keeps one JSONL file for each session of this repository in `~/.claude/projects/-Users-nate-Repos-portfolio/`. Each model call holds a `usage` object with the input, cache-read, cache-write, output, and thinking tokens (read 2026-09-16).
- The ten sessions of 2026-09-13 to 2026-09-16 held 424.0M tokens, 96 percent of them cache reads. They wrote their prompt cache with a lifetime of one hour (read 2026-09-16).
- Anthropic prices a 1-hour cache write at 2 times the base input price, and a 5-minute cache write at 1.25 times. A cache read costs 0.1 times (https://platform.claude.com/docs/en/build-with-claude/prompt-caching, read 2026-09-16).
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
- The owner merged #26 as `f656d84` at 14:04 UTC on 2026-09-16. Its tree matches the reviewed head `b908e31`, and deploy run 35106063488 passed.
- The live site serves the build of `main` at `f656d84` byte for byte. Each of the 8 published files matched `dist/` by SHA-256, read 2026-09-16.
- Lighthouse on the live site read 1 in every category on 2026-09-16. It read 55,240 total bytes, an LCP of 1,224 ms, a CLS of 0, and a TBT of 0. `make preview-check` passed on the live site after that deploy.
- The M-3 audits of 2026-09-16 found 6 low responsive defects and 3 low accessibility items. Neither report holds a defect of medium or high severity, and neither page fails WCAG 2.2 level AA.
- On `main` with PR-18, `make verify` reads 64,356 total bytes. The tag outline holds 3.19:1 in light and 3.30:1 in dark, and the card hairline stays at 1.24:1 and 1.34:1.
- The owner merged #27 (PR-18) as `def59ef` at 16:31 UTC on 2026-09-16. Its tree matches the reviewed head `4b5d2d5`, and deploy run 35122477540 passed.
- The owner merged #28 as `fce6d7d` at 16:36 UTC on 2026-09-16. It replaced `LICENSE` with GPL-3.0, Gitar approved it, and deploy run 35122957665 passed.
- After both deploys, `make preview-check` passed on the live site, and all 10 live files matched `dist/` by SHA-256 (2026-09-16).
- The owner merged #25 as `2e50f34` at 13:32 UTC on 2026-09-16. Its tree matches the reviewed head `cc8f5f1`, and Gitar approved that head with no finding. Deploy run 35102613219 passed.
- The project `natekramber-prod` holds two saved queries since 13:42 UTC on 2026-09-16, `visits-page-requests` and `visits-after-machine-filter`, each with the visibility `SHARED` (D-140). It held none before.
- The `_Default` log bucket of `natekramber-prod` keeps 30 days and has no Log Analytics, read 2026-09-16. Cloud Logging gives 50 GiB of ingestion for each project each month at no charge.
- On 2026-09-15 the live site answered 901 requests, 580 of them a 404 scan. The page requests read 155, and the machine filter left 125 (D-139).

## Session 29: 2026-09-16

### What this session did, and why

- The owner asked that the `gitar-review` skill always waits three minutes or more after a push. After that wait, a session can ask for a manual review only when no automatic review started (D-160).
- The session read the Gitar check runs of #30, #31, #32, and #35. On the first three, the check started 8 to 31 seconds after the commit. Each check completed in 80 seconds or less. #35 has no Gitar check on its head.
- The skill now has the push wait in steps 4 to 8, the section "Find an automatic review", a trap, and command E. Command E read the Gitar check of the head of #32.
- The skill no longer says that each repository holds the same file. The copies in decktome and What You Carry matched this file before the change, and this pull request does not change them (D-1).
- The session wrote D-160, the PR-21 entry of the design, and this entry. Session 19 moved to the archive.

### State of the repository

- Base: `origin/main` at `7cdb7a8` when the session started.
- Remote head: `origin/docs/pr-21-gitar-wait` at the commit that holds this entry, checked after the push.
- `make verify`: every check passed.

### In flight

- PR-21 (#36) waits for the Gitar review of its newest head and the owner merge.
- The owner can copy the new skill to decktome and What You Carry.
- The owner asked that each link opens in a new tab. That work needs a new clean session.
- M-3 waits for the hand check of the owner. OQ-4 waits for a screenshot, and OQ-8 waits for a logo file.
- The bio interview still waits for the answers of the owner (D-94). OQ-3 stays open.

### Traps and gotchas

- The git snapshot at the session start named the branch of PR-20. `git status` showed `main`, because the owner merged #35 before the session started.
- The design doc says the entries of Phases 0 to 3 "move", not "moves". An exact text match on the wrong verb failed.

### Open questions that block progress

None blocks PR-21. OQ-3 blocks the About text, and OQ-4 with OQ-8 block the images of the cards.

### Next concrete action

In a new clean session, run `make resume`. Then ask the owner how a link tells the visitor that it opens a new tab (T-2).

## Session 28: 2026-09-16

### What this session did, and why

- The owner asked for a read-only token audit of this repository. The session read the usage records of the ten newest sessions, from 2026-09-13 to 2026-09-16.
- The records held 424.0M tokens, and 96 percent of them were cache reads. The read order loaded 237,987 bytes before the work started, and each later model call sent them again.
- The owner then asked for the P0 and P1 changes of the audit in one pull request, with no global change (D-153).
- The session wrote `make resume`, `make decisions-index`, and `make context-budget`, with a self-test for each check (D-154, D-157, D-159).
- It moved the entries of Phases 0 to 3 to `docs/roadmaps/`, and the external facts to `docs/external-facts.md` (D-155, D-156). Each non-blank line of the old design doc is in the new files.
- It wrote the rule for a pause of more than one hour (D-158), the read order, the skill changes, and this entry. Session 18 moved to the archive.
- A forward test gave the next action of the handoff to evaluators. The old read order read about 238 KB and used 134,336 tokens.
- The first evaluator of the new read order read about 83 KB and used 70,811 tokens. It missed the decisions on the CSP, contrast, and the 404 words.
- The read order now asks for a search of the index for each limit of the change. A new evaluator with the same prompt then named those decisions, with 78,599 tokens.

### State of the repository

- Base: `origin/main` at `1bee1b0` when the session started.
- Remote head: `origin/docs/pr-20-session-start-context` at the commit that holds this entry, checked after the push.
- `make verify`: every check passed. `make context-budget` reads the session-start set at about 27 percent of its bytes before this pull request.

### In flight

- PR-20 (#35) waits for the Gitar review of its newest head and the owner merge.
- The next three sessions give the measurement for a shorter `CLAUDE.md`, a short Gitar status command, and bounded reads of test logs (D-153).
- The owner keeps the global plugins, skills, and servers, and the reasoning effort, outside this repository (D-153).
- The owner asked that each link opens in a new tab. That work needs a new clean session.
- M-3 waits for the hand check of the owner. OQ-4 waits for a screenshot, and OQ-8 waits for a logo file.
- The bio interview still waits for the answers of the owner (D-94). OQ-3 stays open.

### Traps and gotchas

- The Read tool returns part of a file above 25,000 tokens. The old `docs/design.md` counted 33,087 tokens, so a full read needed two calls.
- Two rows of `docs/decisions.md` hold an escaped pipe (`\|`) in a cell. A split on each pipe gives the wrong cells.
- The tool shell is zsh. A command such as `echo ===` fails with "== not found", and the compound command stops there.
- A subagent gets the `CLAUDE.md` of the session start, not the file on disk. One evaluator read 20 KB of the old handoff before it found `make resume`.
- An evaluator prompt that names the topics to search makes the test too easy. Give each evaluator the same prompt.
- `make resume` reads the handoff on disk. Write the new entry only after each evaluator ran `make resume`.

### Open questions that block progress

None blocks PR-20. OQ-3 blocks the About text, and OQ-4 with OQ-8 block the images of the cards.

### Next concrete action

In a new clean session, run `make resume`. Then ask the owner how a link tells the visitor that it opens a new tab (T-2).

## Session 27: 2026-09-16

### What this session did, and why

- The owner asked for a pull request of the branch `update-gitar-skill`. The branch holds one commit, `747d3ec`, with a change to the `gitar-review` skill.
- The skill change reads the Gitar reply to each `Gitar review` comment. A refusal reply starts no review, and the dashboard comment then does not change.
- The skill change also reads the newest dashboard comment in each check, because Gitar can replace that comment with a new id.
- The summary of a review is no longer a condition of a current review. A review that adds no finding can keep the old summary, word for word.
- Pull request #33 used the same branch, and it closed at 20:39 UTC with no merge. Its body had no session binding and no matrix (D-147, D-148).
- The commit `747d3ec` also added the worktree `.claude/worktrees/one-pr-one-session` as a submodule pointer by mistake. The owner approved a fix, and this session removed the pointer from the index.
- The session wrote this entry, and moved Session 17 to the archive.

### State of the repository

- Base: `origin/main` at `799cbaa` when the session started.
- Remote head: `origin/update-gitar-skill` at the commit that holds this entry, checked after the push.
- `make verify`: every check passed.

### In flight

- The branch `update-gitar-skill` waits for the Gitar review of its newest head and the owner merge.
- The owner asked that each link opens in a new tab. That work needs a new clean session.
- M-3 waits for the hand check of the owner. OQ-4 waits for a screenshot, and OQ-8 waits for a logo file.
- The bio interview still waits for the answers of the owner (D-94). OQ-3 stays open.

### Traps and gotchas

- Git does not ignore `.claude/worktrees/`. A `git add -A` or `git commit -a` in the main checkout can add a worktree as a submodule pointer. Read `git diff --stat origin/main...HEAD` before each push.
- A closed pull request keeps its branch. Read `gh pr list --state all --head <branch>` before you open a pull request for an old branch.

### Open questions that block progress

None blocks this pull request. OQ-3 blocks the About text, and OQ-4 with OQ-8 block the images of the cards.

### Next concrete action

In a new clean session, ask the owner how a link tells the visitor that it opens a new tab (T-2).

## Session 26: 2026-09-16

### What this session did, and why

- The owner asked for one pull request in each clean session, with every document of the work in that pull request (2026-09-16).
- The session read the handoff, `CLAUDE.md`, the design, both registers, and each skill. Git showed that #29, #30, and #31 merged before the session, and "Resume here" still named #29 as open.
- Three rules permitted a later pull request that records a merge. They were D-12, the last rule of the `session-handoff` skill, and the status template of `design-doc-style`. 9 of the first 31 pull requests followed that pattern, from #5 to #29.
- The owner answered four questions (D-148 to D-151), and D-147 records the request.
- The session wrote the skill, the checks, the hook, the workflow, the decisions, G-12, PR-19, and this entry. Session 16 moved to the archive.
- A forward test gave seven realistic requests to a fresh evaluator. It stopped a second pull request and a fork, and it refused a merge record. It found two gaps: a narrow pattern for a merge record, and the binding of a correction session. The branch fixes both.
- The session opened #32. `verify:pr-lifecycle` passed on its first run, and the session added it to the `main` ruleset (D-149).
- An edit of the body started a new run of `verify:pr-lifecycle` with no push, so the `edited` type works.
- Gitar approved the first head with one finding. The hook read "git push" inside a quote, a commit message, or a grep, and it blocked that harmless command. The fix reads a push only at the start of a command segment.
- During the first Gitar round, the owner gave two rules (D-152). The session answers its own Gitar findings, and each finding gets its answer before the merge.
- The work ran in the worktree `.claude/worktrees/one-pr-one-session`, from `origin/main` at `20d1e7e`.

### State of the repository

- Base: `origin/main` at `20d1e7e` when the session started.
- Remote head: `origin/docs/one-pr-one-session` at the commit that holds this entry, checked after the push.
- `make verify`: every check passed.

### In flight

- PR-19 (#32) waits for the Gitar review of its newest head and the owner merge.
- From the ruleset change of D-149, a pull request with no session binding or no matrix cannot merge. A web pull request of the owner needs the matrix too (D-151).
- The hook of D-150 did not guard this session, because the session started before the hook existed.
- The owner asked that each link opens in a new tab. That work needs a new clean session.
- M-3 waits for the hand check of the owner. OQ-4 waits for a screenshot, and OQ-8 waits for a logo file.
- The bio interview still waits for the answers of the owner (D-94). OQ-3 stays open.
- No run tested the PR-6 exit test of D-63 yet.

### Traps and gotchas

- In a worktree session, the tool refuses a shell command that names git inside a heredoc or a compound command. Run each git command alone, and edit files with the edit tool.
- `$CLAUDE_PROJECT_DIR` names the main checkout, also in a worktree. Python exits 2 on a missing file, and exit 2 blocks the call, so the hook command exits 0 first when the file is absent.
- The GitHub webhook page gives a wrong description of the `edited` type of `pull_request`. Watch a real run after a body edit.
- The hook reads a push only at the start of a command segment. A push after a variable assignment, or in a subshell, gets no check.
- A status in the matrix holds a semicolon. The STE checker skips inline code, so put each status in backticks.

### Open questions that block progress

None blocks PR-19. OQ-3 blocks the About text, and OQ-4 with OQ-8 block the images of the cards.

### Next concrete action

In a new clean session, ask the owner how a link tells the visitor that it opens a new tab (T-2).

## Session 25: 2026-09-16

### What this session did, and why

- The owner merged #27 (PR-18) as `def59ef`. Its tree matches the reviewed head `4b5d2d5`, and deploy run 35122477540 passed.
- The owner then merged #28 as `fce6d7d`. It replaced the MIT text of `LICENSE` with GPL-3.0, and deploy run 35122957665 passed.
- `make preview-check` passed on `https://natekramber.com`. All 10 live files matched `dist/` by SHA-256, and the live page holds the 5 list roles.
- #28 left D-18, `README.md`, and `CLAUDE.md` on MIT. The owner answered that GPL-3.0 is on purpose, with the reservation of the site content (D-146).
- The owner asked for a clean stopping point. The session wrote D-146, the license text of `README.md` and `CLAUDE.md`, and the PR-18 status.
- The M-3 entry of `docs/design.md` now holds the hand check in 17 steps, so the list does not depend on the chat.
- The PR-18 entry gains the safety sentence that the style skill asks for. Session 15 moved to the archive.

### State of the repository

- `main` is `fce6d7d`, the squash merge of PR #28.
- Remote head: `origin/docs/after-pr-18` at the commit that holds this entry, checked after the push.
- `make verify`: every check passed.

### In flight

- This wrap-up waits for the Gitar review and the merge.
- M-3 waits for the hand check of the owner. The 17 steps sit in the M-3 entry of `docs/design.md`. The result becomes D-147, and M-3 then reads passed.
- The Gitar trial ends about 2026-09-22. The note on #28 read "trial ends in 6 days". Gitar is the only review of D-5, so the owner needs a plan before that date.
- OQ-4 waits for a screenshot, and OQ-8 waits for a logo file. Each card shows no image until then.
- The accessibility audit asks for a new run when the first image lands.
- The bio interview still waits for the answers of the owner (D-94). OQ-3 stays open.
- No run tested the PR-6 exit test of D-63 yet.
- firebase-tools 15.30.1 is out, and `deploy/` pins 15.30.0. The monthly Dependabot update of D-16 can move it.

### Traps and gotchas

- The owner can merge a pull request and push a new one while the session works. Run `git fetch origin` before each wrap-up, and trust git.
- A change to `LICENSE` alone leaves D-18, `README.md`, and `CLAUDE.md` behind. Search for the old license name after such a change.
- `scripts/lighthouse-budget.mjs` takes a built directory alone. The live run of M-3 used a copy that takes an address, in the ignored folder `test-results/`.
- The `design-doc-style` skill asks each plain-English note to say why the change is safe. Load the skill before each edit of `docs/design.md`.

### Open questions that block progress

None blocks the wrap-up. M-3 waits for the hand check of the owner. OQ-3 blocks the About text, and OQ-4 with OQ-8 block the images of the cards.

### Next concrete action

After the merge of this wrap-up, ask the owner for the result of the M-3 hand check. Record it as D-147, and mark M-3 passed.

## Session 24: 2026-09-16

### What this session did, and why

- The owner merged #26 as `f656d84`. Its tree matches the reviewed head, and deploy run 35106063488 passed.
- The session then started M-3, the launch audit. It first compared each of the 8 live files with `dist/`, and every file matched by SHA-256.
- Lighthouse on `https://natekramber.com` read 1 in every category, with 55,240 total bytes and an LCP of 1,224 ms. `make preview-check` passed on the live site.
- The `responsive-auditor` agent ran 58 tests and swept every width from 320 to 2560. It found 6 low defects and no defect of medium or high severity.
- The `accessibility-auditor` agent found no WCAG 2.2 level AA failure, and 3 low items. It confirmed the hairline at 1.24:1 and 1.34:1.
- The owner answered four questions (D-142 to D-145). PR-18 holds the two fixes, and the other findings stay as they are.
- The session wrote the token `--color-tag-rule`, the three list roles, the html-validate exclusion, the four decisions, five external facts, and this entry.

### State of the repository

- `main` is `f656d84`, the squash merge of PR #26.
- Remote head: `origin/site/pr-18-audit-fixes` at the commit that holds this entry, checked after the push.
- `make verify`: every check passed.

### In flight

- PR-18 waits for the Gitar review and the merge.
- M-3 waits for the hand check of the owner, and then for the sign-off. The two audits gave a list of 12 items for the phone, and a list of 8 items for the screen reader.
- Nobody ran Safari 26 and VoiceOver yet. D-143 lowers that risk, and it does not close the check.
- OQ-4 waits for a screenshot, and OQ-8 waits for a logo file. Each card shows no image until then.
- The accessibility audit asks for a new run when the first image lands, because no script can judge the words of an alt text.
- The bio interview still waits for the answers of the owner (D-94). OQ-3 stays open.
- No run tested the PR-6 exit test of D-63 yet.
- firebase-tools 15.30.1 is out, and `deploy/` pins 15.30.0. The monthly Dependabot update of D-16 can move it.

### Traps and gotchas

- `html-validate` calls `role="list"` on a `ul` redundant, and `make verify` stops there. The rule takes an `exclude` list, so the fix stays narrow.
- The audit gave a dark value of `#5a5a57` for the tag border, and that value reads 2.75:1. Measure each color before you write it.
- `astro preview` binds to `localhost` and not to `127.0.0.1` on this Mac. A poll of `127.0.0.1` never sees the server.
- The two audits together took about 18 minutes. Start the responsive audit first, and run the live checks while it works.
- A tool sandbox can refuse a settings change of Claude Code, and a log read that names an IP field.

### Open questions that block progress

None blocks PR-18. OQ-3 blocks the About text, and OQ-4 with OQ-8 block the images of the cards.

### Next concrete action

Answer the Gitar review of PR-18. After the merge, give the owner the hand-check list of M-3, and record the result as a decision.

## Session 23: 2026-09-16

### What this session did, and why

- The session committed the docs refresh of Session 22 as `cc8f5f1`, and opened #25. Every check passed, and Gitar approved it with no finding.
- The owner merged #25 as `2e50f34`. Its tree matches the reviewed head, and deploy run 35102613219 passed.
- The session then started PR-13 from `main`. A read of the live request log gave the numbers of 2026-09-15.
- The owner answered three questions (D-139 to D-141). The count gives two numbers, the saved queries live in the project, and `make visits` joins the scope.
- The Logging API created `visits-page-requests` and `visits-after-machine-filter` at 13:42 UTC. The project held no saved query before.
- The session wrote `docs/analytics.md`, `scripts/visits.sh`, the `visits` target, the three decisions, six external facts, and this entry. Session 13 moved to the archive.
- Gitar found one bug in `scripts/visits.sh`: a pipe hid the exit status of gcloud, so a failed read printed a count of 0. The fix `2bef180` closed it, and Gitar approved that head.

### State of the repository

- `main` is `2e50f34`, the squash merge of PR #25.
- Remote head: `origin/site/pr-13-visit-counts` at the commit that holds this entry, checked after the push.
- `make verify`: every check passed.

### In flight

- PR-13 waits for the merge. Gitar approved the head that holds the fix, and it closed its one finding.
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
- A pipe hides the exit status of the first command, and POSIX `sh` has no `pipefail`. So `gcloud ... | wc -l` turns a failed read into a count of 0.
- `grep -c` exits 1 when it counts 0 lines. Under `set -e`, that stops a script on a day with no entry, so the count needs `|| true`.

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

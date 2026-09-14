# Session handoff

`CLAUDE.md` sends you here first. Read "Resume here", then the newest session entry. The `session-handoff` skill holds the rules of this file (D-8).

This file keeps the ten newest sessions, newest first. `docs/session-handoff-archive.md` keeps every older session, word for word.

## Resume here (2026-09-14)

- **Main:** `d59be43`, the squash merge of PR #9, PR-15.
- **Open pull requests:** PR-5 on `site/pr-5-hosting-previews`. It waits for its first preview run (M-1), then for the Gitar review, then for the merge.
- **Next action:** read the first preview run of PR-5, and record the M-1 result in `docs/decisions.md`. Then answer the Gitar review.
- **Blocked on:** nothing blocks M-1. OQ-3 blocks the About text, and OQ-5 blocks the merge of PR-7.
- **Next ids:** D-80, OQ-8, M-4, PR-17, Session 9.

## Facts that expire

- The GitHub settings, read 2026-09-12: squash merge alone, automatic delete of a merged branch, and ruleset `main` (id 23087504). The ruleset requires a pull request and refuses a force push and a delete. From 2026-09-12, GitHub Actions requires a full commit SHA for each action (D-61).
- The `main` ruleset requires six checks from GitHub Actions (app id 15368): `verify:docs`, `verify:site`, `verify:site-responsive`, `verify:site-a11y`, `verify:site-lighthouse`, and `verify:site-html`.
- `actions/checkout` tag v7.0.1 points to commit `3d3c42e5aac5ba805825da76410c181273ba90b1`, read 2026-09-12 from the GitHub API.
- `actions/setup-node` tag v7.0.0 points to commit `820762786026740c76f36085b0efc47a31fe5020`, read 2026-09-12 from the GitHub API.
- `actions/upload-artifact` tag v7.0.1 points to commit `043fb46d1a93c77aae656e7c1c64a875d1fc6a0a`, read 2026-09-12 from the GitHub API.
- The Node release schedule, read 2026-09-12: Node 22 is in maintenance until its end of life on 2027-04-30. Node 24 is the active LTS line until 2026-10-20, and Node 26 becomes LTS on 2026-10-28.
- Astro 7.3.2 is the latest Astro on 2026-09-13 (npm registry), and it needs Node 22.12.0 or newer. The variable `ASTRO_TELEMETRY_DISABLED=1` stops its telemetry.
- The check tools on 2026-09-12: Playwright 1.63.0 with Chromium 153 (build 1243), axe-core 4.13.0, Lighthouse 13.4.1, chrome-launcher 1.2.1, html-validate 11.15.0, and linkinator 8.1.0.
- `npm audit` reads 0 vulnerabilities on 2026-09-12. Lighthouse CI 0.15.1 added 12 advisories before D-50 removed it.
- The Gitar trial still pauses automatic reviews on 2026-09-13. On #7 and #8, the pause note held a full review in its collapsed Code Review block. A `Gitar review` comment runs one review, and the `gitar-review` skill holds the traps.
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
- firebase-tools 15.30.0 came out on 2026-09-09, and it needs Node 20 or newer. Version 15.22.2 broke deploys through Workload Identity Federation, and 15.22.3 fixed them (npm registry and firebase-tools issue 10716, read 2026-09-12).
- `google-github-actions/auth` tag v3.0.0 points to commit `7c6bc770dae815cd3e89ee6cdf493a5fab2cc093`, read 2026-09-12 from the GitHub API. The tag is lightweight. The `releases/latest` endpoint returns the moving tag `v3`.
- The GitHub ids, read 2026-09-12: repository 1367643959 and owner 190805558. The OIDC `sub` prefix is `repo:nkramber@190805558/portfolio@1367643959`, the immutable format for a repository that GitHub created after 2026-07-15.
- The repository has no environment, no secret, and no variable, read 2026-09-12. Workflows get a read token by default, and the workflows of a first-time contributor need approval.
- The DNS of `natekramber.com`, read 2026-09-12: GoDaddy name servers and two A records of the GoDaddy parking host. `www` is a CNAME to the apex, and the domain has no MX, TXT, or CAA record.
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
- `deploy/package-lock.json` pins firebase-tools 15.30.0 with 674 packages. On 2026-09-13, `npm audit` of `deploy/` reads 9 moderate advisories, and the root reads 0.

## Session 8: 2026-09-14

### What this session did, and why

- The owner merged #9 (PR-15) as `d59be43` on 2026-09-13 UTC. Its tree matches the reviewed head `71f10fb`, and it added no check job.
- The session started PR-5 with four read-only research passes. They read Firebase Hosting and its CLI, GitHub OIDC, Workload Identity Federation, the response headers, and the decktome deploy setup.
- The owner answered four questions: D-75 to D-78.
- The session wrote `firebase.json`, the `deploy/` npm project, `docs/deploy.md`, the header check, the console check, and `make preview-check`.
- On 2026-09-14 the owner asked the session to run `docs/deploy.md` (D-79). The session ran every step, and no step needed the owner.
- The session then wrote `.github/workflows/preview.yml` with the preview project number. This entry rides in PR-5.

### State of the repository

- `main` is `d59be43`, the squash merge of PR #9.
- Branch `site/pr-5-hosting-previews` holds PR-5 and this entry.
- Remote head: `origin/site/pr-5-hosting-previews` at the commit that holds this entry, checked after the push.
- `make verify` on Node 22.23.2 passes on the branch. The preview workflow has no run yet.
- The cloud setup of `docs/deploy.md` passed its step 10 checks on 2026-09-14.

### In flight

- PR-5 waits for its first preview run, which is M-1, then for the Gitar review, then for the merge.
- After the first green run of `verify:site-preview`, that check joins the `main` ruleset (D-68). Ask the owner before the ruleset change (`.claude/rules/github.md`).
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

### Open questions that block progress

None blocks M-1. OQ-3 blocks the About text of PR-8, and OQ-5 blocks the merge of PR-7.

### Next concrete action

Read the first run of `.github/workflows/preview.yml` on the PR-5 pull request. Record the M-1 result in `docs/decisions.md`, then answer the Gitar review.

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

## Session 5: 2026-09-12

### What this session did, and why

- The owner merged PR #4 as `1942877`. The session added the four `verify:site-*` checks to the `main` ruleset (D-11).
- The owner asked for every document to read the current state before a context wipe. The session changed no site code.
- The owner answered the two questions that PR-5 needs first: the project id `natekramber-prod` (D-51), and the account of decktome-prod (D-52).
- The refresh touched the design status lines, both registers, this file, `README.md`, and `CLAUDE.md`.
- It also touched the two auditor agents and four skills: `gitar-review`, `ste-writing`, `responsive-qa`, and `add-project`.

### State of the repository

- `main` is `1942877`, the squash merge of PR #4.
- Branch `docs/handoff-after-pr-4` holds this refresh, as a pull request of documents alone.
- Remote head: `origin/docs/handoff-after-pr-4` at the commit that holds this entry, checked after the push.
- `make verify` on Node 22.23.2 passes on this branch.

### In flight

- The refresh waits for the Gitar review, then for the merge.

### Traps and gotchas

- A pull request of documents alone still runs every site check, because the verify workflow has no path filter. The six jobs finish in under two minutes.
- A fresh checkout needs `make install` and `make browsers` before `make verify`, with Node 22.23.2 first on the `PATH`.
- PR-5 creates cloud resources, so the owner runs its setup commands. Create the gcloud configuration `natekramber` first, and check the active project before every command (D-52).
- Verify the current version of `firebase-tools` and the Workload Identity Federation steps before PR-5 depends on them (hard rule 9).

### Open questions that block progress

None blocks PR-5. OQ-3 blocks the About text of PR-8, and OQ-5 blocks the merge of PR-7. OQ-4 blocks nothing at launch.

### Next concrete action

Answer the Gitar review of the refresh. After the owner merges it, start PR-5 from `main` with read-only research, then write `docs/deploy.md`.

## Session 4: 2026-09-12

### What this session did, and why

- The owner merged PR #3 as `4aacda4`. The session added `verify:site` to the `main` ruleset as a required check (D-11).
- A research pass read the versions, the Node ranges, and the options of each check tool at their primary sources.
- The owner chose `html-validate`, `linkinator`, a weight cap of 300 KB, and Lighthouse CI (D-46 to D-49).
- The install of Lighthouse CI added 12 npm audit advisories. Lighthouse 13.4.1 alone audits clean, so the owner replaced Lighthouse CI with a short budget script (D-50).
- The session wrote PR-4: four checks, a planted defect for each check, and four CI jobs.
- The first run found two real defects. The placeholder links failed WCAG contrast in the dark scheme, and the link check scanned no link. PR-4 fixes both.

### State of the repository

- `main` is `4aacda4`, the squash merge of PR #3.
- Branch `site/pr-4-site-checks` holds PR-4.
- Remote head: `origin/site/pr-4-site-checks` at the commit that holds this entry, checked after the push.
- `make verify` on Node 22.23.2 passes: 0 STE findings, a clean build, and every site check.
- The Lighthouse budget reads 1 in each category, 0 script bytes, and 1,793 total bytes. The median LCP is 615 ms, and the CLS and the TBT are 0.
- `npm audit`: 0 vulnerabilities.

### In flight

- PR-4 waits for the Gitar review, then for the merge.
- After the merge, the four `verify:site-*` checks join the `main` ruleset.

### Traps and gotchas

- linkinator matches a `--skip` pattern against its local server address, `http://127.0.0.1`, and not against the path it prints. The pattern in the Makefile skips only the URLs off that server.
- A check that scans nothing can pass. Each check has a self-test with a planted defect, and the link self-test caught this trap.
- The Playwright install removed the older browser builds 1208 and 1234 from `~/Library/Caches/ms-playwright`. A decktome smoke run can need `playwright install chromium` again.
- Lighthouse scored accessibility 0.91 before the dark contrast fix and 1 after it. The cause is unverified: a headless run can follow the dark setting of macOS.
- Lighthouse CI 0.15.1 brings 12 npm audit advisories. Do not add it again without a decision (D-50).
- The Lighthouse budget reads its bytes from a server with no compression, so the live site weighs less than the budget output.
- On the ubuntu-latest runner, Chrome with its sandbox on never opened its debug port, and Lighthouse failed with ECONNREFUSED. The budget script starts Chrome with `--no-sandbox`, as Playwright does by default.
- Gitar found that a run count of 0 passed the budget with no measurement, because the median of no values is NaN. The script refuses that count now, and the self-test proves it.

### Open questions that block progress

None blocks PR-4. OQ-3 blocks the About text of PR-8, and OQ-5 blocks the merge of PR-7.

### Next concrete action

Answer the Gitar review of PR-4. After the owner merges it, add the four `verify:site-*` checks to the `main` ruleset, then start PR-5, the Google Cloud project.

## Session 3: 2026-09-12

### What this session did, and why

- The owner merged PR #2 as `60048ba`, which approved draft 1 of `docs/design.md`. The sequence then allowed PR-3.
- The session checked each fact of PR-3 at its primary source: the Node release schedule, the npm registry, the Astro template, and GitHub.
- The owner chose Node 22 LTS over Node 24 LTS (D-44), and turned off the telemetry of Astro (D-45).
- The session wrote PR-3: the Astro 7 project, the placeholder page, the `verify:site` job, the `make` targets, the npm ecosystem in Dependabot, and `.claude/rules/site.md`.
- The package file does not include the `allowScripts` field of the Astro template. Neither local npm version documents that field or reads it in its source.

### State of the repository

- `main` is `60048ba`, the squash merge of PR #2.
- Branch `site/pr-3-astro-scaffold` holds PR-3.
- Remote head: `origin/site/pr-3-astro-scaffold` at the commit that holds this entry, checked after the push.
- `make verify` on Node 22.23.2: 0 findings, one page built, and no script element in `dist/`.
- `npm install`: 193 packages and 0 vulnerabilities.
- Headless Chromium screenshots at 320 and 1440 CSS pixels show no clipped text and no sideways scroll.

### In flight

- PR-3 waits for the Gitar review, then for the merge.
- After the merge, `verify:site` joins the `main` ruleset as a required check.

### Traps and gotchas

- The `--force-dark-mode` flag of the headless shell does not change `prefers-color-scheme`. The dark screenshot had the same file size and the same look as the light one, so the dark scheme has no check yet. PR-4 can emulate the color scheme in Playwright.
- A foreground `sleep` is blocked in this tool. `curl --retry-connrefused` waits for the preview server with no `sleep`.
- `astro preview` does not stop on its own. Start it in the background, keep its process id, and stop it after the screenshots.
- The first local build and preview ran before D-45, with telemetry on. A direct `npm run` command still sends telemetry, so use the `make` targets.
- Astro 7.3.2 needs Node 22.12.0 or newer, and the default Node on this Mac is 20.17.0.
- Gitar on PR #3 found that the placeholder padding used `env(safe-area-inset-*)` with the default `viewport-fit`. With that default, the browser insets the page into the safe area itself (WebKit, 2017-09-22), so the padding did nothing and PR-3 removed it. A full-bleed design in PR-8 needs `viewport-fit=cover` and the insets.

### Open questions that block progress

None blocks PR-3. OQ-3 blocks the About text of PR-8, and OQ-5 blocks the merge of PR-7.

### Next concrete action

Answer the Gitar review of PR-3. After the owner merges it, add `verify:site` to the `main` ruleset, then start PR-4, the site checks.

## Session 2: 2026-09-12

### What this session did, and why

- The owner asked for the roadmap questions after the repository questions. The session asked eleven batches, and D-19 to D-43 record the answers.
- Two background research passes read the hosting terms, the tools, Baseline, and Google Cloud, each fact with a source and a date.
- A read-only pass over decktome and What You Carry drafted the facts of both cards.
- The session checked two conflicts before it asked. decktome D-556 names the product "Decktome", and What You Carry D-106 keeps its repository private. The owner answered both (D-24, D-25).
- The owner typed "GCP" for both hosting and analytics. The session asked a follow-up for each, and D-34 and D-36 record the answers.
- The session wrote PR-2: D-19 to D-43, OQ-1 and OQ-2 closed, OQ-3 to OQ-5, draft 1 of `docs/design.md`, and tenet T-6 narrowed by D-26.
- The owner merged PR #1 as `dcd98e6`. The session added `verify:docs` to the `main` ruleset as a required check (D-11), and rebased PR #2 onto `main`.

### State of the repository

- `main` is `dcd98e6`, the squash merge of PR #1. Gitar approved PR #1 with no finding before the merge.
- Branch `docs/roadmap-draft-1` holds PR #2, rebased onto `main` after the merge.
- Remote head: `origin/docs/roadmap-draft-1` at the commit that holds this entry, checked after the push.
- `make verify`: 0 findings.

### In flight

- PR #2 waits for the Gitar review of its rebased head, then for the merge.

### Traps and gotchas

- PR #2 stacked on PR #1. After the squash merge, GitHub moved its base to `main`, and `git rebase --onto origin/main 6d37ff9 docs/roadmap-draft-1` removed the old commit of PR #1. A rebase gives a new head, so Gitar needs a new review.
- The ruleset requires `verify:docs` from the GitHub Actions app alone, so a check of that name from another app does not count.
- On PR #1, the Gitar pause note came with a full review in a collapsed block. Read that block before you post `Gitar review`.
- On PR #2, the automatic Gitar pass covered the first head alone. A push after that pass got no Gitar check, so the session posted `Gitar review` for the new head.
- The official Firebase action for previews needs a JSON key. M-1 tests the command line tool with keyless credentials first.
- Astro 7 needs Node 22.12 or newer, and the default Node on this Mac is 20.17.0.
- A typed answer can name a platform and not a choice. Ask a follow-up before you record it.
- In this shell, `set -e` did not stop a script after `make verify` failed, and a commit with a finding reached PR #2. Chain each step with `&&`.

### Open questions that block progress

OQ-3 blocks the About text of PR-8. OQ-5 blocks the merge of PR-7. OQ-4 blocks nothing at launch.

### Next concrete action

Answer the Gitar review of PR #2. After the owner merges it, start PR-3, the Astro scaffold, from `main`.

## Session 1: 2026-09-12

### What this session did, and why

- The owner asked for the docs first: `CLAUDE.md`, the agents, the skills, and the session handoff. The owner named decktome and What You Carry as the model, and decktome as the model for review (D-1).
- The session read both repositories. It then asked four batches of repository questions, and D-1 to D-18 record the answers.
- The session changed the GitHub settings of the repository, as D-11 asks.
- The session verified the external facts of the skills against primary sources: WCAG 2.2, ASD-STE100, and the Claude Code docs.
- The session wrote PR-1: `CLAUDE.md`, the symlink, six skills, four agents, three rule files, the registers, the design draft, the checker, the verify workflow, Dependabot, and the license.

### State of the repository

- `main` is `e6369bd`. Branch `docs/foundation` holds PR-1.
- `make verify`: 0 findings.

### In flight

PR-1 waits for the Gitar review.

### Traps and gotchas

- Claude Code does not read `AGENTS.md`. The symlink serves other tools, so edit `CLAUDE.md` alone.
- A rule file in `.claude/rules/` loads only when a session reads a file that its `paths` list matches. Codex never loads it.
- The checker reads "is read-only" as passive voice. Write "treat the repository as read-only".
- The checker counts a numbered list item as a procedural step, with a limit of 20 words.
- `/Volumes/SSD-1TB` is an external drive. The What You Carry path is absent when the owner disconnects the drive.
- The GitHub API lists no app installation for a `gh` token, so the session took the Gitar scope from the owner (D-5).

### Open questions that block progress

None blocks PR-1. OQ-1 and OQ-2 block draft 1 of `docs/design.md`.

### Next concrete action

Answer the Gitar review of PR-1. Ask the roadmap questions while the review runs.

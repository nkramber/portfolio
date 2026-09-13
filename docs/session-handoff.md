# Session handoff

`CLAUDE.md` sends you here first. Read "Resume here", then the newest session entry. The `session-handoff` skill holds the rules of this file (D-8).

This file keeps the ten newest sessions, newest first. `docs/session-handoff-archive.md` keeps every older session, word for word.

## Resume here (2026-09-12)

- **Main:** `60048ba`, the squash merge of PR #2, roadmap draft 1.
- **Open pull requests:** PR-3, the Astro scaffold (`site/pr-3-astro-scaffold`). It waits for the Gitar review.
- **Next action:** answer the Gitar review of PR-3. After the merge, add `verify:site` to the `main` ruleset.
- **Blocked on:** nothing blocks PR-3. OQ-3 blocks the About text, and OQ-5 blocks the merge of PR-7.
- **Next ids:** D-46, OQ-6, M-4, PR-14, Session 4.

## Facts that expire

- The GitHub settings, read 2026-09-12: squash merge alone, automatic delete of a merged branch, and ruleset `main` (id 23087504). The ruleset requires a pull request, refuses a force push and a delete, and requires the `verify:docs` check from GitHub Actions (app id 15368).
- `actions/checkout` tag v7.0.1 points to commit `3d3c42e5aac5ba805825da76410c181273ba90b1`, read 2026-09-12 from the GitHub API.
- `actions/setup-node` tag v7.0.0 points to commit `820762786026740c76f36085b0efc47a31fe5020`, read 2026-09-12 from the GitHub API.
- The Node release schedule, read 2026-09-12: Node 22 is in maintenance until its end of life on 2027-04-30. Node 24 is the active LTS line until 2026-10-20, and Node 26 becomes LTS on 2026-10-28.
- Astro 7.3.2 is the latest Astro on 2026-09-12, and it needs Node 22.12.0 or newer. The variable `ASTRO_TELEMETRY_DISABLED=1` stops its telemetry.
- WCAG 2.2 is the W3C Recommendation of 2024-12-12, read 2026-09-12. The minimum target size of 2.5.8 is 24 by 24 CSS pixels.
- ASD-STE100 Issue 9, dated 2025-01-15, is the current issue, read 2026-09-12.
- Claude Code reads `CLAUDE.md` and not `AGENTS.md`. A rule file with a `paths` list loads when Claude reads a matching file. The session read both facts in the Claude Code memory docs on 2026-09-12.
- The toolchain on this Mac, read 2026-09-12: Python 3.9.6, pnpm 9.2.0, and gh 2.100.0. The default Node is 20.17.0, and nvm holds Node 22.23.2 with npm 10.9.8.
- A Playwright headless shell, build 1234, sits in `~/Library/Caches/ms-playwright`, read 2026-09-12.
- The external facts of the roadmap, each with its source and the date 2026-09-12, live in `docs/design.md`.
- The What You Carry repository is public on 2026-09-12, and its D-106 still reads "Private until launch". The owner records that change in that repository (D-25).
- decktome.com is invite-only on 2026-09-12 (decktome D-310).

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

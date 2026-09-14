# Session handoff archive

This file keeps every session that `docs/session-handoff.md` no longer holds, newest first, word for word. The STE checker skips this file, because a dated record is history.

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

# Session handoff

`CLAUDE.md` sends you here first. Read "Resume here", then the newest session entry. The `session-handoff` skill holds the rules of this file (D-8).

This file keeps the ten newest sessions, newest first. `docs/session-handoff-archive.md` keeps every older session, word for word.

## Resume here (2026-09-12)

- **Main:** `e6369bd`, the first commit. It holds an empty `CLAUDE.md`.
- **Open pull requests:** #1 (`docs/foundation`), approved by Gitar and ready to merge. PR-2, roadmap draft 1 (`docs/roadmap-draft-1`), stacked on #1, waits for the Gitar review.
- **Next action:** after the owner merges #1, add `verify:docs` to the `main` ruleset, and rebase PR-2 onto `main`.
- **Blocked on:** PR-3 waits for the merge of PR-2. OQ-3 blocks the About text, and OQ-5 blocks the merge of PR-7.
- **Next ids:** D-44, OQ-6, M-4, PR-14, Session 3.

## Facts that expire

- The GitHub settings, read 2026-09-12: squash merge alone, automatic delete of a merged branch, and ruleset `main` (id 23087504). The ruleset requires a pull request and refuses a force push and a delete. It holds no required check yet.
- `actions/checkout` tag v7.0.1 points to commit `3d3c42e5aac5ba805825da76410c181273ba90b1`, read 2026-09-12 from the GitHub API.
- WCAG 2.2 is the W3C Recommendation of 2024-12-12, read 2026-09-12. The minimum target size of 2.5.8 is 24 by 24 CSS pixels.
- ASD-STE100 Issue 9, dated 2025-01-15, is the current issue, read 2026-09-12.
- Claude Code reads `CLAUDE.md` and not `AGENTS.md`. A rule file with a `paths` list loads when Claude reads a matching file. The session read both facts in the Claude Code memory docs on 2026-09-12.
- The toolchain on this Mac, read 2026-09-12: Python 3.9.6, Node 20.17.0, npm 11.6.2, pnpm 9.2.0, and gh 2.100.0.
- Astro 7.3.2 is the latest Astro on 2026-09-12, and it needs Node 22.12.0 or newer.
- The external facts of the roadmap, each with its source and the date 2026-09-12, live in `docs/design.md`.
- The What You Carry repository is public on 2026-09-12, and its D-106 still reads "Private until launch". The owner records that change in that repository (D-25).
- decktome.com is invite-only on 2026-09-12 (decktome D-310).

## Session 2: 2026-09-12

### What this session did, and why

- The owner asked for the roadmap questions after the repository questions. The session asked eleven batches, and D-19 to D-43 record the answers.
- Two background research passes read the hosting terms, the tools, Baseline, and Google Cloud, each fact with a source and a date.
- A read-only pass over decktome and What You Carry drafted the facts of both cards.
- The session checked two conflicts before it asked. decktome D-556 names the product "Decktome", and What You Carry D-106 keeps its repository private. The owner answered both (D-24, D-25).
- The owner typed "GCP" for both hosting and analytics. The session asked a follow-up for each, and D-34 and D-36 record the answers.
- The session wrote PR-2: D-19 to D-43, OQ-1 and OQ-2 closed, OQ-3 to OQ-5, draft 1 of `docs/design.md`, and tenet T-6 narrowed by D-26.

### State of the repository

- `main` is `e6369bd`. PR #1 (`docs/foundation`, head `6d37ff9`) is open, and Gitar approved it with no finding.
- Branch `docs/roadmap-draft-1` holds PR-2. Its base is `docs/foundation`, so the pull request shows its own commit alone.
- `make verify`: 0 findings.

### In flight

- PR #1 waits for the owner to merge.
- PR-2 waits for the Gitar review, then for the merge of PR #1.

### Traps and gotchas

- PR-2 stacks on PR #1. After the squash merge of PR #1, rebase PR-2 onto `main`: `git rebase --onto origin/main 6d37ff9 docs/roadmap-draft-1`. Then set the base with `gh pr edit <number> --base main`, and push with `--force-with-lease`.
- On PR #1, the Gitar pause note came with a full review in a collapsed block. Read that block before you post `Gitar review`.
- The official Firebase action for previews needs a JSON key. M-1 tests the command line tool with keyless credentials first.
- Astro 7 needs Node 22.12 or newer, and the default Node on this Mac is 20.17.0.
- A typed answer can name a platform and not a choice. Ask a follow-up before you record it.

### Open questions that block progress

OQ-3 blocks the About text of PR-8. OQ-5 blocks the merge of PR-7. OQ-4 blocks nothing at launch.

### Next concrete action

The owner merges PR #1. Then add `verify:docs` to the `main` ruleset, rebase PR-2 onto `main`, and answer its Gitar review.

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

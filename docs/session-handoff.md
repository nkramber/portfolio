# Session handoff

`CLAUDE.md` sends you here first. Read "Resume here", then the newest session entry. The `session-handoff` skill holds the rules of this file (D-8).

This file keeps the ten newest sessions, newest first. `docs/session-handoff-archive.md` keeps every older session, word for word.

## Resume here (2026-09-12)

- **Main:** `e6369bd`, the first commit. It holds an empty `CLAUDE.md`.
- **Open pull requests:** PR-1, the repository foundation, on branch `docs/foundation`. It waits for the Gitar review.
- **Next action:** answer the Gitar review of PR-1. Ask the roadmap questions, and record each answer.
- **Blocked on:** nothing blocks PR-1. OQ-1 and OQ-2 block draft 1 of `docs/design.md`.
- **Next ids:** D-19, OQ-3, Session 2.

## Facts that expire

- The GitHub settings, read 2026-09-12: squash merge alone, automatic delete of a merged branch, and ruleset `main` (id 23087504). The ruleset requires a pull request and refuses a force push and a delete. It holds no required check yet.
- `actions/checkout` tag v7.0.1 points to commit `3d3c42e5aac5ba805825da76410c181273ba90b1`, read 2026-09-12 from the GitHub API.
- WCAG 2.2 is the W3C Recommendation of 2024-12-12, read 2026-09-12. The minimum target size of 2.5.8 is 24 by 24 CSS pixels.
- ASD-STE100 Issue 9, dated 2025-01-15, is the current issue, read 2026-09-12.
- Claude Code reads `CLAUDE.md` and not `AGENTS.md`. A rule file with a `paths` list loads when Claude reads a matching file. The session read both facts in the Claude Code memory docs on 2026-09-12.
- The toolchain on this Mac, read 2026-09-12: Python 3.9.6, Node 20.17.0, npm 11.6.2, pnpm 9.2.0, and gh 2.100.0.

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

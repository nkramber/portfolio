# Phase 0: Foundation

Status: complete. This file holds the entries of Phase 0, moved word for word from `docs/design.md` on 2026-09-16 (D-155). The roadmap section of `docs/design.md` keeps the phase heading, the phase gate, and a link to this file.

## PR-1: Repository foundation

Status: merged as #1, `dcd98e6`, on 2026-09-12. Gitar approved it with no finding, and `verify:docs` became a required check after the merge.

Scope: `CLAUDE.md`, the `AGENTS.md` symlink, the rule files, six skills, four agents, the registers, draft 0 of this file, the session handoff, the STE checker, the `verify:docs` job, Dependabot, and the license (D-5 to D-18).

Exit tests:

- `make verify` passes on the branch.
- The `verify:docs` job passes on the pull request.
- Gitar reviews the pull request, and every finding has its answer (D-5).

Gate: the owner merges PR-1. Then `verify:docs` joins the `main` ruleset as a required check (D-11).

> *In plain English:* the repository has no rules and no plan today. This change writes both before any site code. It changes no site, so it cannot break one.

## PR-2: Roadmap draft 1

Status: merged as #2, `60048ba`, on 2026-09-12. Gitar approved it with no finding.

Scope:

- D-19 to D-43 in `docs/decisions.md`. OQ-1 and OQ-2 closed, and OQ-3 to OQ-5 added, in `docs/questions.md`.
- Draft 1 of this file: the external facts, the guardrails, the phases, and the sequence.
- Tenet T-6 narrowed to match D-26, and the voice of the `copy-editor` agent set by D-28.

Exit tests:

- `make verify` passes on the branch.
- Gitar reviews the pull request, and every finding has its answer (D-5).

Gate: the owner merges PR-2. The merge approves draft 1, and PR-3 can start.

> *In plain English:* the answers to the roadmap questions live in the conversation alone today. This change writes them down as decisions and turns them into an ordered plan. It changes no site.

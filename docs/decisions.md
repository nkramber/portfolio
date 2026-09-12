# Decisions

Status: active register. Owner: Nate Kramber. Started 2026-09-12. Written in ASD-STE100.

This file records each owner decision. Each decision has an id (D-#). The numbers never change. A changed decision stays in this file, and its Effect column names the later decision. `.claude/rules/registers.md` holds the rules of this file.

How to read this file:

- The Decision column gives the answer.
- The Effect column gives what the decision changes, binds, or supersedes.
- A date in the Effect column marks a later revision.

## Project

| Id | Date | Topic | Decision | Effect |
|---|---|---|---|---|
| D-1 | 2026-09-12 | Reference repositories | Use decktome and What You Carry as the model for `CLAUDE.md`, skills, agents, rules, and the other docs. A separate Codex review after a code pull request is not a rule here. Follow decktome for review. | The rules that both repositories share apply here: a branch for each change, the owner merges, ask questions at once, push back with evidence, other repositories read-only, and a date on each external fact. |
| D-2 | 2026-09-12 | First projects | Deck Tome and What You Carry are the first projects. The project cards are reusable, so a new project such as terminal-rpg is easy to add. | One card component and one data entry for each project (G-2). The `add-project` skill holds the procedure. |
| D-3 | 2026-09-12 | Domain | The owner bought `natekramber.com`. GoDaddy is the registrar. | DNS starts at GoDaddy. The hosting question (OQ-2) reads this. |
| D-4 | 2026-09-12 | Site shape | A single-page layout on current design trends. A maximum focus on responsive layout, simple and readable code, and best practices. | Sets tenets T-1 and T-3. The roadmap questions set the details. |

## Repository and process

| Id | Date | Topic | Decision | Effect |
|---|---|---|---|---|
| D-5 | 2026-09-12 | Review | Gitar is the only reviewer. Every pull request waits for its review, documents alone included. When Gitar pauses automatic reviews and posts no review, comment `Gitar review` on the pull request. The owner states that the Gitar app covers every repository of the owner. | Hard rule 4 and the `gitar-review` skill. |
| D-6 | 2026-09-12 | Attribution | No AI attribution in any file, commit, pull request, branch name, or comment. | Tenet T-6 and hard rule 6. `.claude/settings.json` sets both attribution strings empty. |
| D-7 | 2026-09-12 | Writing standard | ASD-STE100 for every doc, skill, agent, and rule file, with a checker. The words a visitor reads on the site are exempt. | Hard rule 5, the `ste-writing` skill, `scripts/ste-check.py`, and the `verify:docs` job. |
| D-8 | 2026-09-12 | Session handoff | The hybrid format: a "Resume here" block, then numbered session entries in six parts. The file keeps the ten newest entries, and the archive keeps the rest. | The `session-handoff` skill. |
| D-9 | 2026-09-12 | Agent file | `AGENTS.md` is a symlink to `CLAUDE.md`. | One source of truth. Edit `CLAUDE.md` alone. |
| D-10 | 2026-09-12 | Planning docs | The trimmed design template: status, thesis, tenets, guardrails, roadmap, and sequence in `docs/design.md`. Decisions in `docs/decisions.md`, questions in `docs/questions.md`. Lessons, findings, and a cost model join when an entry fills them. | The `design-doc-style` skill. |
| D-11 | 2026-09-12 | Git guards | Squash merge alone, automatic delete of a merged branch, and a `main` ruleset that requires a pull request and refuses a force push and a delete. Each required check joins the ruleset after its first run. The owner did not choose a pre-commit hook, a `where` script, commit prefixes, or a pull request template. | GitHub settings changed 2026-09-12. Ruleset `main`, id 23087504. |
| D-12 | 2026-09-12 | Pull requests per session | One concern per pull request. No limit per session. | Hard rule 3. |
| D-13 | 2026-09-12 | Skills | `ste-writing`, `design-doc-style`, `gitar-review`, `add-project`, `responsive-qa`, and `session-handoff`. | `.claude/skills/`. |
| D-14 | 2026-09-12 | Agents | `project-researcher`, `responsive-auditor`, `accessibility-auditor`, and `copy-editor`. | `.claude/agents/`. |
| D-15 | 2026-09-12 | Rule style | Ranked tenets and numbered hard rules. The owner sets the order and the words of the tenets in the roadmap questions. | `CLAUDE.md`. OQ-1. |
| D-16 | 2026-09-12 | Upkeep | Dependabot opens one grouped pull request for each ecosystem each month. Every action pins a commit SHA. One local command runs every check. A weekly workflow checks every outbound link. | `.github/dependabot.yml` and `make verify`. The link check arrives with the site, because the site holds the links. |
| D-17 | 2026-09-12 | Rule location | `CLAUDE.md` holds the tenets, the hard rules, and the read order. Rules for one area live in `.claude/rules/`, scoped by path. | `CLAUDE.md` lists each rule file. |
| D-18 | 2026-09-12 | License | MIT for the code. The site text, photos, and images stay all rights reserved. | `LICENSE` and the License section of `README.md`. |

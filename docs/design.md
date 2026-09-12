# natekramber.com design

Status: **draft 0.** The roadmap waits on the roadmap questions. Nothing in this file binds a site pull request until the owner approves draft 1. Written 2026-09-12 in ASD-STE100.

External facts: none yet. Each external fact gets a source and a date when it enters this file.

Owner decisions live in `docs/decisions.md` (D-#). Open questions live in `docs/questions.md` (OQ-#). The `design-doc-style` skill holds the template of this file (D-10).

## 1. Thesis

The site shows the work of Nate Kramber on one page at `natekramber.com` (D-3, D-4). A visitor on any screen learns who Nate is, sees each project on a card, and follows a link to the work. The plan writes the rules first, then builds the page, then the cards, because each part stands on the one before it. Each card comes from one component and one data entry, so a new project costs one entry and its images (D-2).

## 2. Tenets

`CLAUDE.md` quotes the tenets in full, and this file cites their ids. OQ-1 sets their final order and words.

## 3. Guardrails

Every pull request keeps each guardrail. Only an owner decision changes a guardrail.

1. **G-1. No sideways scroll.** No layout scrolls sideways at any width from 320 CSS pixels up (T-1).
2. **G-2. One card for every project.** Every project card comes from one component and one data entry. No project gets its own layout code (D-2).
3. **G-3. A new check passes on its own pull request.** A pull request that creates a check passes that check. A planned check names the pull request that creates it.
4. **G-4. Pinned actions.** Every GitHub Action pins a commit SHA, with its tag in a comment (D-16).

The roadmap questions add the guardrails of the stack, the performance budget, and the browser support.

## 4. Roadmap

Each entry has an id (PR-# or M-#), a status, a scope, exit tests, and a gate. It ends with a plain-English paragraph.

### Phase 0: Foundation

#### PR-1: Repository foundation

Status: in review.

Scope:

- `CLAUDE.md`, the `AGENTS.md` symlink, and the three rule files in `.claude/rules/`.
- Six skills and four agents (D-13, D-14).
- The registers, this file, and the session handoff.
- The STE checker, the `verify:docs` job, and `make verify` (D-7, D-16).
- Dependabot for the pinned actions, the license, and `README.md` (D-16, D-18).

Out of scope:

- Every file of the site. The roadmap questions set the stack first.
- The weekly link check. It arrives with the site, because the site holds the links (D-16).

Exit tests:

- `make verify` passes on the branch.
- The `verify:docs` job passes on the pull request.
- Gitar reviews the pull request, and every finding has its answer (D-5).

Gate: the owner merges PR-1. Then `verify:docs` joins the `main` ruleset as a required check (D-11).

> *In plain English:* the repository has no rules and no plan today. This change writes both before any site code. It changes no site, so it cannot break one.

### Phase 1 onward

The roadmap questions set these phases. Draft 1 of this file adds them.

## 5. Sequence

1. PR-1, the repository foundation. The owner merges it.
2. The roadmap questions. The session asks each one and records each answer.
3. Draft 1 of this file. The owner approves it before the first site pull request.

## 6. Open questions

`docs/questions.md` holds the register.

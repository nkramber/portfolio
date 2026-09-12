---
name: design-doc-style
description: Section template and rules for docs/design.md, trimmed from the design template of decktome and What You Carry. Load before you edit the design doc.
---

# Design-doc style skill

The owner chose a trimmed design template (D-10). This skill gives the sections and the rules. Load `ste-writing` first.

The design doc is one file: `docs/design.md`. A phase with many entries can move to its own file in `docs/roadmaps/`. The roadmap section then links to that file.

## Section template

1. **Status header.** State the status of the doc and the date of each external fact. Add a dated line for each correction pass.
2. **Thesis.** Write one paragraph. Say what the site is for and why the plan has its order.
3. **Tenets.** List the tenet ids. Point to `CLAUDE.md` for the full text.
4. **Guardrails.** Number each invariant that every pull request must keep (G-#).
5. **Roadmap.** Put the entries in phases. Use the entry template below for each entry.
6. **Sequence.** Write one strict ordered list. Mark each gate.
7. **Open questions.** Link to `docs/questions.md`.

## Sections that join later

Add one of these sections only when an entry fills it (D-10):

- **Lessons learned (L-#).** Each lesson names the event that taught it.
- **Finding register (F-#).** A numbered table. Each finding carries its evidence, its date, and the entry it binds.
- **Cost model.** What the site costs, what nobody knows yet, and the measurement that will give the answer.

## Entry template

```markdown
#### PR-<n>: <title>

Status: <planned | in progress | in review | merged as #<number>, `<sha>` | parked, D-# | dropped, D-#>.

Scope:

- <what the pull request changes>

Out of scope:

- <what a later entry holds, with its id>

Exit tests:

- <a named test or check that must pass before the merge>

Gate: <what must hold before the next entry starts>.

> *In plain English:* <what the site lacks today, what the change does, and why it is safe>.
```

## Rules

- Ids: PR-# pull requests, M-# measurements, G-# guardrails, T-# tenets, F-# findings, L-# lessons, D-# decisions, OQ-# questions.
- The numbers continue across revisions. Never renumber.
- One concern for each pull request applies to each entry.
- Cite a decision by its id. Never restate it.
- Every external fact has a source and a date.
- Never delete a refuted claim. Mark it refuted, give the date, and keep it.

## Plain-English paragraph rules

- Max 25 words in a sentence (STE rule 6.3).
- No code identifiers, unless the reader needs one.
- Say what the site lacks today, what the change does, and why the change is safe.

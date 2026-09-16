---
name: design-doc-style
description: Section template and rules for docs/design.md, trimmed from the design template of decktome and What You Carry. Load before you edit the design doc.
---

# Design-doc style skill

The owner chose a trimmed design template (D-10). This skill gives the sections and the rules. Load `ste-writing` first.

The design doc is `docs/design.md`. Each session reads it at the start, so it holds the current plan alone. Two parts live in other files:

- When the gate of a phase passes, its entries move word for word to `docs/roadmaps/phase-<n>.md`. The roadmap section keeps the phase heading, the phase gate, and a link that names each entry id (D-155).
- `docs/external-facts.md` holds each external fact. Add a new fact at the end of its list (D-156).

## Section template

1. **Status header.** State the status of the doc. Add a dated line for each correction pass. Point to `docs/external-facts.md` (D-156).
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

Status: <planned | in progress | complete in #<number> | parked, D-# | dropped, D-#>.

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
- A pull request writes its own status, "complete in #<number>", before the merge. It records no merge commit, because git holds it (D-147). An older status that reads "merged as" stays as history.
- Cite a decision by its id. Never restate it.
- Every external fact has a source and a date.
- Never delete a refuted claim. Mark it refuted, give the date, and keep it.

## Plain-English paragraph rules

- Max 25 words in a sentence (STE rule 6.3).
- No code identifiers, unless the reader needs one.
- Say what the site lacks today, what the change does, and why the change is safe.

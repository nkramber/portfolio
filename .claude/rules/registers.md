---
paths:
  - "docs/decisions.md"
  - "docs/questions.md"
  - "docs/design.md"
  - "docs/roadmaps/*.md"
  - "docs/external-facts.md"
---

# Rules for the registers

These rules keep the decision register, the questions register, and the design document true to their history (D-10).

- Give each new entry the next free id. Never renumber an id, and never use one again.
- Record each owner answer in `docs/decisions.md` with the date. Cite the question id when the answer closes a question.
- Close a question in `docs/questions.md` with the date and the D-# id. Keep the question in the file.
- Never delete a changed decision. Write `Superseded by D-N` in its Effect column when the whole answer changes.
- Write `Revised in part by D-N` when one part changes. Name the part that changed and the part that stands.
- Cite the newer decision when you cite a superseded one.
- Never delete a refuted claim in `docs/design.md`, `docs/roadmaps/`, or `docs/external-facts.md`. Mark it refuted, give the date, and keep it.
- Give each external fact a source and the date you read it.
- Date each entry with the local date of the owner. Mark the time of a GitHub event with UTC, for example "2026-09-13 UTC".
- Record each answer the owner gives in conversation as a decision. The handoff alone is not a record.

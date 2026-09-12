---
paths:
  - "**/*.md"
---

# Rules for Markdown files

These rules apply to every hand-written `.md` file (D-7).

- Load the `ste-writing` skill before you write. Every doc, skill, agent, and rule file follows ASD-STE100.
- The words a visitor reads on the site are exempt. The `copy-editor` agent reviews them in the voice of the site.
- Run `make ste-check` before you commit a `.md` file. The `verify:docs` job runs the same check on each pull request.
- Use one term for each concept. The `ste-writing` skill lists the project terms.
- Write each file name in `docs/` in lowercase, with hyphens.
- Put each file path, command, and code identifier in backticks.
- Write no email, phone number, or street address, unless a decision approves it (hard rule 10).
- Edit `CLAUDE.md`, never `AGENTS.md`. `AGENTS.md` is a symlink (D-9).

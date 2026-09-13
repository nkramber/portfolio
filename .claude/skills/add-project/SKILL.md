---
name: add-project
description: Add a project to the site as a new project card. Read the source repository read-only, draft the entry, add the images, and check the card at every width. Load when the owner names a new project, for example terminal-rpg.
---

# Add-project skill

Every project on the site uses one card component and one data entry (D-2, G-2). A new project costs one entry and its images, and no layout code. This skill gives the procedure.

CAUTION: PR-9 sets the data file, the field list, and the image sizes. Until PR-9 merges, step 4 and step 5 have no target. Read the file map of `CLAUDE.md` for the current paths.

## Procedure

1. Confirm the project name, the source repository path, and the public links with the owner.
2. Run the `project-researcher` agent on the source repository. It reads the repository and never changes it.
3. Show the draft entry to the owner. Ask what the site can show, for example a private repository link or a screenshot.
4. Add one entry to the project data file. Fill every required field of the schema.
5. Add the images at the sizes and formats that `docs/design.md` sets. Give each content image alt text.
6. Run the `copy-editor` agent on the card text.
7. Load the `responsive-qa` skill, and check the card at every width.
8. Run the `accessibility-auditor` agent on the section that holds the card.
9. Record each owner answer in `docs/decisions.md`.
10. Open a pull request for this project alone. Then load the `gitar-review` skill.

## Rules

- Treat the source repository as read-only (hard rule 1).
- Never copy a secret, a private path, an email, or a personal detail from the source repository.
- Never write layout code for one project. A change to the card changes every card (G-2). Ask the owner before you change the card.
- Take each fact about a project from its repository or from the owner. When a fact is unclear, ask. Do not guess.

---
name: add-project
description: Add a project to the site as a new project card. Read the source repository read-only, draft the entry, add the images, and check the card at every width. Load when the owner names a new project, for example terminal-rpg.
---

# Add-project skill

Every project on the site uses one card component and one data entry (D-2, G-2). A new project costs one entry and its images, and no layout code. This skill gives the procedure.

Each project is one JSON file in `src/content/projects/`. The schema in `src/content.config.ts` gives every field and its limit, and it fails the build on a wrong field (D-22, D-105).

## Procedure

1. Confirm the project name, the source repository path, and the public links with the owner.
2. Run the `project-researcher` agent on the source repository. It reads the repository and never changes it.
3. Show the draft entry to the owner. Ask what the site can show, for example a private repository link or a screenshot.
4. Add one JSON file to `src/content/projects/`, named after the project, for example `deck-tome.json`. Fill every required field of the schema. Give the card an order number that no other entry uses (D-23).
5. Put each screenshot next to its entry file. Name the file and its alt text in the `screenshot` field. With no screenshot, the card shows the placeholder panel of D-106.
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

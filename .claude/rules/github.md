---
paths:
  - ".github/**"
---

# Rules for GitHub workflows and settings

These rules apply to every workflow, the Dependabot file, and each change to the repository settings (D-11, D-16).

- Pin every action to a full commit SHA. Put its tag in a comment on the same line.
- Verify each pin with `gh api repos/<owner>/<repo>/git/ref/tags/<tag>`. Record the date in a comment above the jobs.
- An annotated tag points to a tag object, not to a commit. Read the commit SHA from that tag object.
- Give each workflow `permissions: contents: read`. Name the reason for each extra permission in a comment.
- Give each job a `timeout-minutes` value.
- Name each check job `verify:<area>`. The `main` ruleset requires each check by that name.
- Add a new required check to the ruleset after its first green run. A required check that never runs blocks every merge.
- Ask the owner before you change a repository setting or the ruleset. Record the change in `docs/decisions.md`.
- Give each new ecosystem in `.github/dependabot.yml` a monthly schedule, one group, and `rebase-strategy: disabled`.

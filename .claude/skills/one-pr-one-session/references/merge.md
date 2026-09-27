# The confirmation and the auto-merge

Section 7 of the `one-pr-one-session` skill names this file at the hand-over point. It holds the merge summary, the commands of the auto-merge, and the merge settings (D-176 to D-179). The steps come from What You Carry and The Thing Below, with no Codex gate (D-177).

## The conditions

Turn on the auto-merge only when each of these conditions holds:

- Each item of the completion gate of the skill holds.
- The handoff entry of this session is on origin, with the state "pending the merge".
- The Gitar pass is current for the effective head under the `gitar-review` skill.
- Each Gitar finding has its answer, and each review thread is resolved (D-179).
- The owner confirmed the merge after the summary below.

## The summary

Put the summary inside the question of `AskUserQuestion`, so the owner reads it with the choice. Give each part a few sentences:

- **What:** the concern of the pull request, and what it changes.
- **How:** the approach, and the main files.
- **CI:** the result of each required check, with the run id. Name each red check and its cause.
- **Gitar review:** the head of the current pass, each finding, and its answer.

Give three options: confirm the auto-merge, merge by hand, or not yet. Put each other point for the owner in one more question of the same batch.

## Procedure: the auto-merge

1. Push the handoff commit of this session.
2. Get a Gitar check on the new tip with the `gitar-review` skill. The ruleset reads the check of the tip itself.
3. Ask the owner to confirm the merge, with the summary.
4. On "not yet", stop. Do the next step that the owner names.
5. On "merge by hand", give the end message of the skill, and wait for the "Merged" message.
6. On a yes, run the three commands below. Run the wait in the background.
7. When the state is `MERGED`, write the prompt of section 8 of the skill at once.

```bash
gh pr merge <n> --auto --squash
gh pr checks <n> --watch --required --interval 60
gh pr view <n> --json state,mergedAt,mergeCommit
```

When each check passes and the state stays `OPEN`, read the cause:

```bash
gh pr view <n> --json mergeStateStatus,autoMergeRequest
```

An open review thread, or a `Gitar` check that did not complete, holds the merge.

## Procedure: a push after the confirmation

A push after the confirmation changes what the owner confirmed. So the session asks again.

1. Turn off the auto-merge with `gh pr merge <n> --disable-auto`.
2. Correct the cause, and push the commit with its handoff entry.
3. Get a Gitar pass of the new head with the `gitar-review` skill, and answer each finding.
4. Go to step 3 of "Procedure: the auto-merge".

A failed check leaves the pull request open, and the auto-merge stays on. Do this procedure for the fix too.

## The merge settings

These values held on 2026-09-27 UTC, after the changes of D-178 and D-179:

| Setting | Value |
|---|---|
| `allow_auto_merge` | `true` |
| `allow_squash_merge` | `true`, the one merge method (D-11) |
| `allow_merge_commit` and `allow_rebase_merge` | `false` |
| `delete_branch_on_merge` | `true` |
| Ruleset `main`, id 23087504 | no delete, no force push, a pull request with squash alone, 0 approvals, and resolved review threads |
| Required checks | `verify:docs`, `verify:site`, `verify:site-responsive`, `verify:site-a11y`, `verify:site-lighthouse`, `verify:site-html`, `verify:site-preview`, `verify:pr-lifecycle`, and `Gitar` |
| Bypass list | empty, so the owner merge takes the same checks |

Read the live values with these commands, and compare them with the table:

```bash
gh api repos/nkramber/portfolio --jq '{allow_auto_merge, allow_squash_merge, allow_merge_commit, allow_rebase_merge, delete_branch_on_merge}'
gh api repos/nkramber/portfolio/rulesets/23087504 --jq '{bypass_actors, rules: [.rules[] | {type, parameters}]}'
```

A setting of the repository is outward-facing. A session changes one only after the approval of the owner, in the pull request that changes this table.

## Traps

- The `Gitar` check turns green with open findings. The thread rule stops an open inline finding. It does not read the dashboard comment, so the session reads that comment before the summary.
- The ruleset reads the `Gitar` check of the tip, also when the tip changes the metadata set alone. D-163 keeps the review current, but the tip still needs its own check.
- On #40, two heads kept a `Gitar` check at `in_progress` after a later push. Such a check on the tip holds the merge. After the push wait, comment `Gitar review` under the `gitar-review` skill.
- A merge can come before the wait starts. Read the state after each command.

---
name: gitar-review
description: Wait for the Gitar review of a pull request and answer every finding. Verify each finding as a claim, then fix and reply, or refute, reply, and resolve. Load after each push to a pull request, documents alone included.
---

# Gitar review skill

Gitar is the only review this repo asks for (D-5). The GitHub app `gitar-bot` reviews every pull request after each push. A pull request of documents alone waits for the review too. The owner merges only when every finding has its answer.

## Procedure

Do these steps after each push.

1. Wait for the Gitar pass. It posts a summary comment and one line comment for each finding.
2. Read the newest summary comment by its author. Gitar can delete a summary and post a new one with a new id.
3. List the review threads with the query below. Read each thread that is not resolved.
4. Read each finding as a claim, not a fact. Reproduce its trigger. Read the rule or the decision it names.
5. Decide the merit of the finding: full, partial, or none.
6. For full merit, make the smallest change that fixes the finding. Commit and push it.
7. Reply on the thread with the commit that fixes the finding.
8. For no merit, reply on the thread with the reason and the evidence. Then resolve the thread.
9. For partial merit, fix the part with merit. Refute the rest in the same reply.
10. Wait for the next pass after each push. Repeat from step 3 for each new finding.
11. Stop when Gitar approves, or when every finding has its answer and a new pass adds none.
12. Tell the owner that the pull request is ready to merge.

## Rules for each reply

- State the evidence: the command, the test, the decision id, or the commit.
- Name no agent, harness, or model as the source of the work (T-6).
- Never accept a finding only to close the review faster. A wrong fix costs more than a written disagreement.
- Never widen a fix past the rule that the finding names.
- When a finding conflicts with an owner decision, quote both and ask the owner (hard rule 8).

## When Gitar pauses

The Gitar trial has a processing limit for each period. At that limit, Gitar posts a note that it paused automatic reviews.

- When the note comes with no review, comment `Gitar review` on the pull request. Answer the manual review the same way (D-5).
- When the note comes beside a full review, answer that review. No comment is necessary.

## Traps

- A green Gitar check does not prove that no finding is open. Read the threads.
- The REST API names the author `gitar-bot[bot]`, and the GraphQL API names it `gitar-bot`. The session read both names on 2026-09-12, on decktome pull request #144.
- The owner can merge a pull request before a finding gets its answer. A commit on that branch then never reaches `main`. Carry the fix to a new branch from `main`. Reply on the old thread with the new pull request.

## Commands

```bash
# The checks of the pull request, the Gitar check included
gh pr checks <number>

# The comments on the pull request itself. Gitar posts its summary here.
gh api repos/nkramber/portfolio/issues/<number>/comments \
  --jq '.[] | {id, user: .user.login, created_at, body}'

# Every review thread, with its id, its state, and its comments
gh api graphql -F number=<number> -f query='
  query($number: Int!) {
    repository(owner: "nkramber", name: "portfolio") {
      pullRequest(number: $number) {
        reviewThreads(first: 100) {
          nodes {
            id
            isResolved
            path
            line
            comments(first: 20) { nodes { databaseId author { login } body } }
          }
        }
      }
    }
  }'

# Reply on a thread. The comment id is the databaseId of the first comment.
gh api repos/nkramber/portfolio/pulls/<number>/comments/<comment-id>/replies \
  -f body='<reply>'

# Resolve a thread. The thread id comes from the query above.
gh api graphql -f id=<thread-id> -f query='
  mutation($id: ID!) {
    resolveReviewThread(input: {threadId: $id}) { thread { isResolved } }
  }'

# Ask for a manual review when Gitar paused and posted no review
gh pr comment <number> --body "Gitar review"
```

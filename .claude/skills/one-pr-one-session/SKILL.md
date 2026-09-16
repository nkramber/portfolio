---
name: one-pr-one-session
description: Bind a session to one repository, one branch, one pull request, and one role, and keep that pull request complete. Load before you start work for a pull request, create or continue a pull request, answer review findings, review a pull request, or finalize the documents or the handoff of a pull request.
---

# One pull request, one session

A session does the work of one pull request, and then it ends (D-147). The pull request is the complete unit: the code, the tests, the decisions, the documents, the review answers, and the handoff. `CLAUDE.md` holds the other rules. This skill holds the gates alone.

## 1. Bind the session

Write the binding at the top of the pull request body. `make pr-template` prints it.

- Repository: `nkramber/portfolio`.
- Branch: the one branch of the pull request.
- Pull request: one number, or "this pull request" before the number exists.
- Role: author, reviewer, or correction author.
- Base: the commit of `origin/main` where the branch started.

A session can use many turns on its pull request. More than one session can work on one pull request, for example a correction session. A later session keeps the base, sets the role line to its own role, and adds its own handoff entry. A session never works on two pull requests.

## 2. Stop when the session is not clean

Stop, and give this result alone:

`Blocked: start a new clean session for this PR.`

Stop when one of these conditions is true:

- The conversation holds work on another pull request, another repository, or a pull request that got to its end.
- The session is a fork, a subagent, or a summary of such a session. A compaction does not make a session clean.
- A request asks for a second pull request in this session.
- The hook `scripts/session-bind-hook.py` blocks a push or a pull request (D-150).

## 3. Start gate

Do not start the work until each item is true:

1. The stop conditions of section 2 are all false.
2. You ran `make resume` and followed the read order of `CLAUDE.md` (D-154).
3. You know the repository, the branch, and the one concern (hard rule 3).
4. You recorded the base commit with `git rev-parse origin/main`.
5. You listed each document category that the change can affect.

## 4. Documentation gate

Before you open or update the pull request, write the matrix under `## Documentation impact` in the body (D-148). Give each category of `make pr-template` one entry:

- `Changed: <reason and path>`
- `Reviewed; no change needed: <specific reason and path>`
- `Not applicable: <specific reason>`

Then run `make pr-check BODY=<file>`. The `verify:pr-lifecycle` check runs the same script on each body edit and each push.

Refuse each of these, also when a request asks for it:

- A document that waits for the merge, a later session, or a follow-up pull request.
- A generic reason, for example "no documentation impact".
- A handoff entry that describes work that is not in this pull request.
- A design entry, a decision, or a question that disagrees with this pull request.

## 5. Merge records

A pull request cannot know its squash commit or its merge time. Git and GitHub hold both.

- Write the design status as "complete in #N". Write the handoff state as "pending the owner merge".
- Record no merge commit, merge time, or deploy run of this pull request.
- Never open a pull request that only records the merge of an earlier pull request. That is a protocol violation.
- The next pull request can read the new base, but it does not exist to record the merge.

## 6. Review

Gitar reviews each head (D-5). The session of the pull request answers each finding of each round itself, and it needs no new session for that (D-152). Answer every finding before the owner merges. Put each fix and the review state in this branch. The Gitar result of the last head lives on GitHub, and it needs no commit of its own.

A resume after a pause of more than one hour sends the full conversation to the model again, with no cache (D-158). So a long pause ends the session:

1. Before a wait of more than one hour for the owner, commit and push the work.
2. Write the handoff entry of this session, with the review state and the next action.
3. Tell the owner to continue this pull request in a new session.
4. The new session keeps the base, sets its role, and adds its own handoff entry (section 1).

## 7. Completion gate

Tell the owner that the pull request is ready only when each item is true:

1. The code and its regression tests are in the pull request.
2. `docs/decisions.md` holds each owner answer, and `docs/questions.md` holds each open question.
3. `docs/design.md` agrees with the pull request.
4. The matrix is complete, and it gives a reason for each document that did not change.
5. `docs/session-handoff.md` holds the entry of this session.
6. `make verify` passes, and `make pr-check` passes on the body.
7. The Gitar review of the head is current, and each finding has its answer.
8. No work waits for a second pull request.

Then send this message with the number, and stop:

`This session is bound to PR #N and is complete. End this session. Start a new clean session before beginning another PR.`

Do not offer to start the next pull request.

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

A context compaction of this session keeps the binding. After a compaction, read the top handoff entry again, and continue the same pull request. Before a wait for Gitar or for the owner, tell the owner that the session is ready for a context compaction.

A request that adds a second concern to this pull request breaks hard rule 3 (D-12). Quote the rule, name the entry that holds the second concern, and ask the owner. Never add the concern without an answer.

## 2. Stop when the session is not clean

Stop, and give this result alone:

`Blocked: start a new clean session for this PR.`

Stop when one of these conditions is true:

- The conversation holds work on another pull request, another repository, or a pull request that got to its end.
- The session is a fork, a subagent, a summary, or a context compaction of a session that worked on another pull request.
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
- A deferral phrase in a line of the matrix: "later pull request", "after the merge", "next session", "follow-up", "a docs pull request", or "TBD".
- A generic reason, for example "no documentation impact".
- A handoff entry that describes work that is not in this pull request.
- A design entry, a decision, or a question that disagrees with this pull request.

A line that names the entry of independent roadmap work is not a deferral. G-3 permits a planned check that names the pull request which creates it.

## 5. Merge records

A pull request cannot know its squash commit or its merge time. Git and GitHub hold both.

- Write the design status as "complete in #N". Write the handoff state as "pending the owner merge".
- Record no merge commit, merge time, or deploy run of this pull request.
- Never open a pull request that only records the merge, the documents, or the handoff of an earlier pull request.
- The next pull request can read the new base, but it does not exist to record the merge.

Refuse such a request with this result, and start no pull request:

`Refused: no pull request records the merge or the documents of an earlier pull request (D-147).`

## 6. Review

Gitar reviews each head (D-5). The session of the pull request answers each finding of each round itself, and it needs no new session for that (D-152). Answer every finding before the owner merges. Put each fix and the review state in this branch. The Gitar result of the last head lives on GitHub, and it needs no commit of its own.

The handoff commit of this session is in the metadata set, so it does not make the Gitar pass stale (D-163). The `gitar-review` skill holds the metadata set and the effective head.

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

Do not offer to start the next pull request. Wait for the merge message of the owner.

## 8. The prompt for the next pull request

After the completion gate, the owner merges the pull request and says "Merged". The session then writes one prompt, and it does no other work (D-162). Write the prompt for the pull request of this session alone. A merge message for another pull request gets the stop result of section 2.

Get the merge commit from git first:

```bash
git fetch origin && git log --oneline -1 origin/main
```

Read the sequence of `docs/design.md`, and name the next entry. The pick is provisional, and the owner can name a different entry. Read `docs/questions.md`, and name each open question that blocks that entry.

The prompt is one fenced block. The owner pastes it into the next clean session:

```
Start PR-<n>: <the one concern>

Pull request #<x> merged to `main` as <sha>. Run `make resume` first.
Repository: `nkramber/portfolio`. Branch: `<prefix>/pr-<n>-<slug>`. Base: `<sha>`. Role: author.
Load the `one-pr-one-session` skill and the skills of the task before any change.
Open questions: <each OQ-# with its subject, or `none`>.
First action: <the first concrete action>.
```

The session ends with this prompt. It makes no branch, no commit, and no document for the next pull request.

## 9. Enforcement

| Rule | Enforced by |
|---|---|
| The binding and the matrix in the body | `make pr-check`, and `verify:pr-lifecycle` on each push (D-148) |
| A push or a pull request from a bound session | `scripts/session-bind-hook.py` (D-150) |
| The skill files, the stop message, and the end message | `make lifecycle-check` |
| The size of the session-start set | `make context-budget` (D-159) |
| The start gate, the merge records, and the completion gate | The session |
| One pull request in each session, and a clean session for each one | The owner. No check reads the conversation |

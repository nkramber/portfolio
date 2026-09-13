---
name: session-handoff
description: Read the session handoff at the start of a session and update it at the end. Keep the Resume here block current, add a numbered session entry in six parts, keep ten entries, and move older entries to the archive. Load at the start and at the end of each session.
---

# Session handoff skill

Continuity is tenet T-5. A fresh session knows only what the files say. `docs/session-handoff.md` is the resume point, in the hybrid format (D-8).

The file has four parts, in this order:

1. The header: what the file is, and the rule of ten entries.
2. "Resume here": the state and the next action, in five lines.
3. "Facts that expire": each fact that can go stale, with the date the session read it.
4. The session entries, newest first.

## At the start of a session

1. Read "Resume here" first, then the newest session entry.
2. Run `git fetch origin` and `git status --short --branch`.
3. Compare the state of git with "Resume here". When they differ, trust git and tell the owner.
4. Read the files that the next action names.

## At the end of a session

1. Run `git fetch origin`. Read `docs/session-handoff.md` again, because another session can change it.
2. Take the highest session number and add one.
3. Add the new entry above the newest entry. Never add text to an older entry.
4. Write the six parts of the entry. Use the template below.
5. Update "Resume here": `main`, the open pull requests, the next action, the blockers, and the next ids.
6. Update "Facts that expire" with each fact the session read, and its date.
7. Count the entries. Move each entry after the tenth to the top of the archive, word for word.
8. Commit the handoff with the work it describes, on the same branch.
9. Push the branch.
10. Run `git fetch origin` and `git status --short --branch`. The status must show no `[ahead N]`.
11. Run `gh pr view --json headRefOid --jq .headRefOid`. The hash must equal `git rev-parse HEAD`.

## Templates

```markdown
## Resume here (<YYYY-MM-DD>)

- **Main:** `<sha>`, <the newest merge>.
- **Open pull requests:** <#number, branch, and state, or none>.
- **Next action:** <the first thing to do>.
- **Blocked on:** <each OQ-# and the work it blocks, or nothing>.
- **Next ids:** D-<n>, OQ-<n>, Session <n>.
```

```markdown
## Session <n>: <YYYY-MM-DD>

### What this session did, and why

- <each change, and the owner request or decision behind it>

### State of the repository

- `main` is `<sha>`, <the newest merge>.
- Remote head: `origin/<branch>` at `<sha>`, checked after the push.
- `make verify`: <result>.

### In flight

<each open pull request and its state>

### Traps and gotchas

- <each trap that cost this session time>

### Open questions that block progress

<each OQ-# and the work it blocks, or "None.">

### Next concrete action

<one action that a fresh session can start at once>
```

## Rules

- Write the handoff in ASD-STE100. The checker reads this file, and it skips the archive.
- Name the remote head in "State of the repository".
- Date each entry with the local date of the owner. Mark the time of a GitHub event with UTC.
- Record each trap that cost the session time. The next session reads it before it makes the same mistake.
- Never edit an older entry, except to move it to the archive.
- A merge to `main` after the session ends needs no new entry. The next session records it.

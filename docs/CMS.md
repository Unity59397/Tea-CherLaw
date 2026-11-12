> **Status: built on Supabase.** Everything below describes the rules; they are now enforced by `supabase/classrooms.sql` (functions named after the `Api` methods) and `src/cms/api.ts` calls them.
> See `docs/ACCOUNTS.md` for setup and the privacy design. The sections about "the prototype" are historical.

# Classrooms (prototype) and how to connect a server

The classroom screens are built and work in the browser, but there is **no server**. Everything is stored in `localStorage`
(`tc.cms`, `tc.session`) so the screens can be designed and tried. All of it lives behind one object, `Api`, in
`src/cms/api.ts`. Every `Api` method is `async`, takes plain data and throws `ApiError(code, message)`, so when a server
exists, each method becomes a `fetch` and **no screen needs to change**.

Already removed: the prototype sign-up, role switcher and example classrooms (`Api.session` now only reads who is signed in; the account and its role come from Supabase and are mirrored in by `mirrorAccount` in `src/cms/session.ts`). Delete when the classroom server is live: the local stores in `src/cms/session.ts`, the role
switcher and demo panel on the Account page, and the "prototype" notes (`ProtoNote` in `src/components/cms/common.tsx`).

## Pages

| Address | Who | What |
|---|---|---|
| `/account` | everyone | Sends signed-in people to `/profile`; others see the schools-only note and the sign-in / sign-up buttons |
| `/teach` | teacher | Dashboard: classrooms and playlists |
| `/teach#c=<id>&t=progress\|homework\|students\|invite\|settings` | teacher | One classroom |
| `/teach#p=<id\|new>` | teacher | Playlist editor |
| `/class` | student (and regular user, to join) | Homework, progress, join by code, leave |
| `/join#t=<token>` or `/join#c=<code>` | anyone | Invite landing page |

All four are `noindex` and left out of the sitemap. The header shows **Teach** (teacher) or **My classes** (student) only for those
roles, plus an account button for everyone.

## Roles

- **Teacher**: creates classrooms, playlists, homework and invites; sees progress for their own classrooms only. Cannot join a classroom.
- **Student**: member of at least one classroom. Sees homework and their own progress; can leave.
- **Regular user**: revision tools only. Joining a classroom (invite or code) makes them a student. On the real site a role must only
  be changed by the server (joining, or an admin or school action for teachers). Decide how someone becomes a teacher
  (self-serve with school email check, or approved by an admin) before launch.

## Data model

```
User        { id, name, role: 'teacher'|'student'|'user', email, created }
Classroom   { id, teacherId, name (1-40, unique per teacher), created, memberIds[], invite }
Invite      { code: '100000'-'999999', token: 14 random chars, expiresOn: 'YYYY-MM-DD'|null, created, revoked }
Playlist    { id, teacherId, name (1-60, unique per teacher), ids[] (cases, ordered, max 200), updated }
Assignment  { id, classId, title (1-60), note (<=300), caseIds[] (a COPY of the playlist when set), due: 'YYYY-MM-DD'|null, created }
Progress    { userId, caseId, s: 'got'|'again', t: timestamp }          one row per person per case
```

Invite state is derived: `none`, `off` (revoked), `expired` (after the end of `expiresOn`, server time zone Europe/London), `active`.
A classroom has one invite at a time; "new link and code" replaces it, so the old ones stop working at once.

## Endpoints the server needs (same names as `Api`)

| Api method | Suggested route | Rule to enforce on the server |
|---|---|---|
| `classes.list/get` | `GET /classes`, `/classes/:id` | Teacher: own only. Student: member only, public fields only |
| `classes.create/rename/remove` | `POST/PATCH/DELETE /classes` | Teacher, own. Max 30 per teacher, names unique per teacher |
| `classes.removeMember` | `DELETE /classes/:id/members/:userId` | Owning teacher, or the member removing themselves |
| `invites.create/setExpiry/revoke` | `POST/PATCH/DELETE /classes/:id/invite` | Owning teacher. Expiry not in the past |
| `invites.lookup` | `GET /invites/:codeOrToken` | Public, **rate-limited** (6-digit codes can be guessed). Returns state, class name, teacher name only |
| `invites.join` | `POST /invites/:codeOrToken/join` | Signed in, not a teacher, invite active, class under 60 students. Promotes `user` to `student` |
| `playlists.*` | `/playlists` | Teacher, own. Cases must exist. Max 50 playlists, 200 cases |
| `assignments.list/create/remove` | `/classes/:id/assignments` | Owner or member to read; owner to write. Due date today or later |
| `progress.record` | `PUT /progress/:caseId` | Signed in. Body `{ s: 'got'|'again'|null }` |
| `progress.importMarks` | `POST /progress/import` | Signed in. Only fills cases with no mark yet |
| `progress.mine` | `GET /progress` | Own marks |
| `progress.forClass` | `GET /classes/:id/progress` | Owning teacher. Returns marks **only for cases in that classroom's homework**, plus total counts and last-active, never the student's other marks |

Server notes:
- Never trust the browser for role or ownership: derive the user from the session on every request.
- Invite links in the prototype use `#t=<token>` so the token is never sent to a server in the URL. With a server, `/join/<token>` is fine.
  Keep the token long and random; the 6-digit code is only 900,000 possibilities, so rate-limit lookups and joins per IP and per account.
- Expiry is checked on every lookup and join. Existing students stay in the classroom after the invite expires.
- Homework stores its own copy of the cases, so editing or deleting a playlist later never changes work already set.
- Progress is keyed by case id. If a case id is ever renamed, migrate `Progress.caseId`.

## Privacy: needs doing before real accounts

Many students will be under 18. Before storing real accounts:
- Rewrite `src/pages/Privacy.tsx`: what is collected (name, email, role, class membership, marks, last active), who sees it (the teacher of
  a classroom the student joined), lawful basis, retention, how to leave a classroom and delete an account.
- UK GDPR and the ICO Age Appropriate Design Code apply. Do a DPIA. Minimise data (a display name is enough for students).
- The join screens already tell students exactly what the teacher can see; keep that wording true when the real server is built.
- The server must not return a student's marks outside the classroom's homework to the teacher (see `progress.forClass`).

## Suggested order of work

1. Accounts: sign-up, sign-in, sessions, email verification, password reset. (Done: the prototype role switcher is gone; roles come from the school email.)
2. Replace `db()` and each `Api` method with `fetch` calls (keep the same arguments and return shapes).
3. Move classrooms, invites, playlists, assignments and progress to the database; add rate limits.
4. Send marks to `progress.record` from the revise screen (already wired through `cmsRecord`) and keep local marks working signed out.
5. Rewrite the privacy policy, add account deletion and data export.
6. Optional later: teacher notes per student, due-date reminders, assigning to individual students, CSV export of progress, archiving a classroom at year end.

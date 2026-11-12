# Accounts (sign-up, email confirmation, profile)

Accounts use **Supabase** (hosted login + Postgres). The site stays a static site on GitHub Pages: the browser talks to Supabase directly with the
public "anon" key, and the rules in `supabase/schema.sql` (row level security) are what protect the data.
Until you connect a project the account pages say "Accounts aren't switched on yet".

## Who can register, and what role they get
**Currently only verified schools can register accounts** (the sign-up, sign-in and `/account` pages say so). The role is decided **by the database** from the email address, never by the browser:

| Email ends with | Account type |
|---|---|
| `@ndonline.ac.uk` | student |
| `@notredamecoll.ac.uk` | teacher |
| anything else | refused at sign-up (and when changing email) |

The match is on the whole part after the `@`, ignoring case, so `x@ndonline.ac.uk.evil.com`, `x@evilndonline.ac.uk` and `x@sub.ndonline.ac.uk` are all refused. If someone later changes their email (they must open the link sent to the new address),
their role follows the new address. To add a school: add a row to `school_domains` in `supabase/schema.sql` (run it again) **and** a line to `src/auth/schools.ts` (so the form can explain it).

## What exists
| Page | Address | Does |
|---|---|---|
| Sign up | `/signup` | name, school email, password (10+), "I'm 16 or over and have read the privacy policy". Sends the confirmation email. Resend / change address. |
| Sign in | `/login` | email + password. Unconfirmed emails are refused with a "send it again" button. |
| Forgot password | `/forgot` | emails a reset link (the reply is the same whether or not the address has an account). |
| Email links land on | `/auth/callback` | confirms the email (and signs in), or lets you choose a new password. |
| Profile | `/profile` | name, year group, account type (read only), change email, change password, sign out, delete account. |

Code: `src/auth/` (client + all calls, friendly errors), `src/pages/AuthPages.tsx`. Accounts cannot sign in until the email link has been opened.
A person's **role** (student / teacher) lives in `profiles.role`, is set by the database from the school email, and cannot be changed from the browser. The classroom screens (Teach, My classes, Join) use that role.
The old prototype sign-up, role switcher and example classrooms have been removed.

## One-off setup (about 15 minutes)
1. **Create a project** at supabase.com (free tier is fine; choose a UK/EU region).
2. **Database:** SQL Editor > New query > paste all of `supabase/schema.sql` > Run. Then a second new query: paste all of `supabase/classrooms.sql` > Run (classrooms, invites, homework, marks and account sync). Both are safe to run again after any change.
3. **Authentication > Providers > Email:** keep *Enable email provider* and *Confirm email* ON. Set *Minimum password length* to **10** and *Password requirements* to letters + digits. (Leaked-password protection, on paid plans, is worth switching on too.)
4. **Authentication > URL Configuration:**
   - *Site URL*: the live address, e.g. `https://tea-cher.co.uk` (or `https://<user>.github.io/<repo>` before the domain is set up: no trailing slash).
   - *Redirect URLs*: add `<site>/auth/callback` and `http://localhost:5173/auth/callback` for local testing.
5. **Authentication > Email Templates**: replace the links so they work from any device and browser (the default links need the same browser that signed up):
   - *Confirm signup*: `<h2>Confirm your email</h2><p><a href="{{ .SiteURL }}/auth/callback?token_hash={{ .TokenHash }}&type=signup">Confirm my email</a></p>`
   - *Reset password*: `<h2>Reset your password</h2><p><a href="{{ .SiteURL }}/auth/callback?token_hash={{ .TokenHash }}&type=recovery">Choose a new password</a></p>`
   - *Change email address*: `<p><a href="{{ .SiteURL }}/auth/callback?token_hash={{ .TokenHash }}&type=email_change">Confirm the new email</a></p>`
   Say who it is from in the text ("Tea-cher, a No-Tea Studio project") so people recognise it.
6. **Email sending for real use:** Supabase's built-in sender is for testing only (a handful of emails an hour, and it may land in spam).
   Authentication > SMTP Settings: add a sender such as Resend, Brevo or Postmark using an address on your own domain, and set up SPF/DKIM there.
7. **Connect the site:** Project Settings > API: copy the *Project URL* and the *anon public* key.
   - Local: copy `.env.example` to `.env.local` and fill both in, then `npm run dev`.
   - GitHub: repository Settings > Secrets and variables > Actions > **Variables** > add `SUPABASE_URL` and `SUPABASE_ANON_KEY`. The workflow passes them to the build.
   The anon key is meant to be public. **Never** put the `service_role` key in this project or in GitHub variables for the site.

## Security: what protects what
**Rate limiting.** Real limits must be on the server, because anyone can skip the website and call Supabase directly:
- Supabase Auth > **Rate Limits** (dashboard) — suggested values: emails sent **4/hour** (only matters with your own SMTP; the built-in sender has a much lower limit), sign-ups and sign-ins **30 per 5 minutes per IP**, token refreshes **150 per 5 minutes per IP**, verifications **30 per 5 minutes per IP**.
  Auth also has a built-in 60-second gap between emails to the same address.
- Auth > **Attack Protection**: turn on *Enable Captcha protection* (Cloudflare Turnstile is free), and set the site key in the sign-up form when you do (`captchaToken` option in `src/auth/auth.ts`).
- The database refuses profile changes more often than once every 2 seconds (`touch_updated_at` in `schema.sql`).
- The website also slows people down (`src/auth/throttle.ts`): 3 sign-ups per email per hour, 1 confirmation email per minute, 2 reset emails per 5 minutes, 5 password changes / 10 minutes, and the sign-in form locks for 15 minutes after 5 wrong passwords.
  This is a courtesy and a safety net, **not** a defence on its own (it lives in the browser).

**SQL injection.** The site never builds SQL text. Every query goes through the Supabase client, which sends values as parameters (PostgREST), and the only functions it can call are `delete_my_account` (takes no input).
On top of that: row level security (everyone sees only their own profile), column-level grants (the browser can write only `display_name` and `year_group`), `check` constraints on every column, and every database function runs with `set search_path = ''` and fully qualified names.
Do not add any `execute`/dynamic SQL to the functions, and keep new tables on row level security with explicit grants.

**Other attacks covered**
- *Script injection (XSS):* React escapes everything it draws, nothing uses `dangerouslySetInnerHTML`, names are limited to 40 characters with `< >` and control characters refused, and a **Content-Security-Policy** (a meta tag added by `scripts/prerender.mjs`, since GitHub Pages can't send headers) allows only our own scripts, our own page and Supabase.
- *Account takeover / email-link tricks:* links are one-time tokens verified by Supabase; the callback page checks the token's shape and type, removes the token from the address bar and history, and the `Referrer-Policy` is `strict-origin-when-cross-origin`. Only the fixed `/auth/callback` address is ever used as a redirect (no `next=` URL is followed), and the allowed Redirect URLs list in Supabase stops anyone else being used.
- *Privilege escalation:* role from the database, not the browser (see above). *Account enumeration:* sign-up, forgot-password and sign-in give the same answer whether or not an address has an account.
- *Weak passwords:* 10+ characters, and not a common word, a single repeated character, or your own email name.
- *Clickjacking:* GitHub Pages can't send `X-Frame-Options`/`frame-ancestors`. If you move to a host that can (Cloudflare Pages, Netlify, Vercel), add `Content-Security-Policy: frame-ancestors 'none'`.
- *Secrets:* only the public anon key is ever in the site; `.env*` is git-ignored; never use the `service_role` key here.
- Keep dependencies updated (`npm audit`, Dependabot) and avoid adding third-party scripts: each one would need adding to the CSP.

## Before real people use it
- `src/pages/Privacy.tsx` now describes accounts, but have it checked (and fill in the Supabase region and your contact address): what is collected (name, email, year group, role, class membership, marks), who sees it (the teacher of
  a class the student joined), where it is stored (Supabase, region you chose), how long, how to delete it (Profile > Delete my account), and a contact address. Register with the ICO
  if you are not exempt, and have a lawyer or the ICO's guidance check it: this is children's-age personal data.
- The 16-or-over tick is a safeguard, not age verification. Decide your position on students under 16 (consent rules differ).
- Add the cookie banner wording for the sign-in cookie/local storage Supabase uses (strictly necessary).

## Classrooms and account sync (built)
All stored in Supabase by `supabase/classrooms.sql`; nothing about classrooms is kept in the browser any more.
- **Tables** (no direct access for the browser at all): `classes` (with its invite), `class_members`, `playlists`, `assignments`, `progress`, `user_data`, `invite_attempts`.
- **Functions** the site calls (`src/cms/api.ts` is one-to-one with them): each works out who you are from the login, checks role and ownership, validates input, and returns only what you may see. Errors carry a short code in `hint`.
- **Who sees what:** a teacher sees only their own classrooms; a student sees the classrooms they are in (name, teacher, homework). A teacher sees a student's **name, marks on the cases in that classroom's homework, the total number of cases marked, and when they last revised** (`progress_for_class`) and nothing else.
- **Joining:** needs a signed-in student; the 6-digit code can only be tried 10 times wrong per 10 minutes per account (`invite_attempts`); the long link token is 128 bits.
- **Account sync** (`src/auth/sync.ts`): deck, saved cases, playlists, last playlist and marks follow the account. First time on a device they are merged with what is already there; afterwards the latest change wins per item, sent ~2 s after you make it and picked up on sign-in and when you return to the tab.
  Signing out sends anything waiting and then clears the device's copy (shared school computers); it stays in the account. A different person signing in on the same device never inherits the previous person's unsent data.
- **Lazy loading:** the Supabase library (about 200 KB) is a separate file. It is fetched only when someone is already signed in (`tc.auth` exists), a sign-in link is in the address, or someone submits a sign-in/sign-up form or opens a page that needs it. Visitors who never sign in never download it.
- Limits: 30 classrooms per teacher, 60 students per classroom, 50 playlists, 200 cases per playlist/homework, 60 homework items per classroom, 1000 marks per person.

## Also built
- **Live-ish updates:** an open classroom screen re-reads from the database every 20 seconds, whenever the tab is shown again, and straight after your own changes. (True push updates via Supabase Realtime are not used: they would need tables that students and teachers can subscribe to, which the locked-table design deliberately avoids.)
- **Teacher notes:** a private note (up to 1000 characters) per student per classroom (`student_notes`, `notes_list` / `note_set`). Only that classroom's teacher can read it; it is deleted when the student leaves or is removed. Students are told notes exist. It is not part of a student's data download or the CSV files.
- **Individual homework:** homework can be set for the whole classroom or for chosen students (`assignments.student_ids`). Students only see homework for everyone or for them, and a teacher only sees a student's marks on cases in homework that applies to that student.
- **CSV export:** "Download summary" and "Download every mark" on the Progress tab (made in the browser; spreadsheet formulas are neutralised).
- **Data download:** Profile > Your data > "Download my data" (`export_my_data()`): account details, revision, marks, classrooms and playlists as JSON.

## Next steps (not built yet)
- Archiving a classroom at year end, and a reminder email for overdue homework.
- A "forgot to confirm" admin view (Supabase's dashboard can already confirm or delete users by hand).

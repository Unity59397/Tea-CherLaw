# Tea-cher

OCR A Level Law (H418) case revision site. A No-Tea Studio project. Built with **React 19 + TypeScript + Vite**, and **prerendered to plain static HTML**
so search engines (and people without JavaScript) get real text, then the browser takes over ("hydration").

## How it works, in short
- `data/*.js` hold the 392 cases (format in `SCHEMA.md`). `npm run data` turns them into JSON the app imports (`src/generated/`, never edit).
- Each page is a React component in `src/pages/`. `src/App.tsx` lists the routes (`/`, `/library`, `/revise`, `/saved`, `/shared`, `/privacy`,
  `/account`, `/teach`, `/class`, `/join`, `/cases/`, `/cases/<id>`).
- `npm run build` renders every page to HTML on the server (`scripts/prerender.mjs`, 400+ files), including a real page for each case, a sitemap and `robots.txt`.
  In the browser the same React code hydrates that HTML and the interactive pages (library, revise, saved, classrooms) work from there.
- The 480 KB of case text is **not** in the main script: pages that need it download it once (`src/lib/data.ts`). Case pages and the "All cases" list
  carry their own text in the HTML, so they need no download.
- **Hydration rule:** the first browser render must equal the server HTML. So nothing may read `localStorage`, `window`, dates or random numbers while
  rendering. Saved things come through the stores in `src/lib/store.ts` (they read as their starting value until the page is running), and pages that
  need the cases show a plain "shell" (`src/components/Shell.tsx`) until they have loaded.

## View it
    npm install
    npm run dev        # live-reloading dev server (http://localhost:5173)
    npm run build      # the real, prerendered site in dist/
    npm run serve      # serve dist/ the way GitHub Pages does (http://localhost:8080)
Everything in `dist/`, `dist-ssr/` and `src/generated/` is generated: never edit it, it is safe to delete. Needs Node 20.19 or newer (22 LTS recommended: Vite 8 will not run on older 20.x).

## Where to work
    data/                  the cases (SCHEMA.md) and taxonomy.js (the topics)
    public/                images and icons copied as they are (hero.jpg, og-image.jpg, favicon.svg ...)
    site.json              domain and names, used for canonical links and the sitemap
    src/
      pages/               one component per page
      components/          header and footer (Layout), details sheet (SheetHost), save popup (PickerHost), case card, library parts, cms/ (classroom screens)
      state/               what the site remembers: deck, marks, saved cases and playlists (all in this browser)
      lib/                 data loading, taxonomy, stores, sharing, SEO text, icons
      cms/                 classroom API (api.ts: one call per database function) and who-is-signed-in (session.ts)
      styles/              CSS, one file per part of the site (listed in index.css)
    scripts/               build-data, prerender, check-site, serve
    tools/validate.js      checks every case against SCHEMA.md

## Workflow
    npm run validate    # every case against SCHEMA.md, and all links point to real cases
    npm run build       # data -> type check -> client build -> server build -> prerender
    npm run check       # validate + build + check-site (titles, descriptions, canonicals, links, sitemap)

- **New page:** add `src/pages/Yourpage.tsx` (draw a Shell until its data is ready), add a route in `src/App.tsx`, its search text in `src/lib/seo.ts`, and a link in `src/components/Layout.tsx`.
- **New cases:** put them in a NEW file in `data/` (for example `data/tort-add-c.js`), copy the layout of an existing one, then run `npm run check`.
- **Featured case timing on the home page:** `FEATURE_SECS` in `src/pages/Home.tsx`.
- **Flashcards:** the card shows *What happened* in bold, larger type and *The rule* in plain type (`.fc-story` and `.fc-rule` in `src/styles/60-flashcard-feed.css` and `30-home.css`).

## Saving, playlists and sharing
- **Save** (bookmark icon) saves into the playlist you used last (or just Saved), says where, offers Change; tapping again removes it with Undo (`src/state/useSaving.ts`).
- **Playlists** are named groups inside Saved. A case in a playlist is always saved; removing it from Saved takes it out of every playlist. Data lives in `tc.saved`, `tc.lists`, `tc.lastList`.
- **Sharing a playlist** makes a link `/shared#v=1&n=<name>&c=<5 characters per case>`. There is no server, so the link carries the list itself after the `#`
  (never sent anywhere). Each case is a 5-character code from its id (`src/lib/sharecode.ts`; `tools/validate.js` holds an identical copy and fails the
  build if two ids ever get the same code, so old links stay valid). Keep the two copies identical.

## Accounts (email sign-up with confirmation)
**Currently only verified schools can register accounts**: `@ndonline.ac.uk` emails become students and `@notredamecoll.ac.uk` emails become teachers, automatically (enforced in the database).
Sign up, sign in, forgot password and profile use Supabase (`src/auth/`, `src/pages/AuthPages.tsx`, `supabase/schema.sql`). Setup steps, email templates and what
is still to do are in **`docs/ACCOUNTS.md`**. Without the two `VITE_SUPABASE_*` values the account pages say accounts aren't switched on.

## Classrooms and sync
Teachers (`@notredamecoll.ac.uk`) make classrooms with an invite link or 6-digit code, playlists, homework and see per-student progress; students (`@ndonline.ac.uk`) join and see homework.
Everything is stored in Supabase (`supabase/classrooms.sql`; run it after `schema.sql`) and `src/cms/api.ts` is a thin layer over its functions. A signed-in person's deck, saved cases, playlists and marks
follow their account (`src/auth/sync.ts`). `docs/ACCOUNTS.md` covers setup, who can see what, and rate limits. The privacy policy covers accounts; get it checked before launch.

## Publishing on GitHub Pages
`.github/workflows/pages.yml` runs `npm run check` and deploys `dist/` on every push to `main`.
One-off setup: Settings > Pages > Source: **GitHub Actions**.
- At `https://<user>.github.io/<repo>/` nothing else is needed: the workflow builds every link with the `/<repo>/` prefix.
- On the custom domain tea-cher.co.uk: set the domain in Pages settings, tick "Enforce HTTPS", and add a repository **variable** named `CUSTOM_DOMAIN`
  (Settings > Secrets and variables > Actions > Variables, any value) so links are built for the root.
Locally, `BASE_PATH=/repo/ npm run build` does the same. Do not commit `dist/`. Links have no `.html`; GitHub Pages serves `/library` from `library.html`.

## Domain and SEO
The domain is in `site.json`. Change it there and rebuild: canonical links, social tags, `sitemap.xml` and `robots.txt` all update.
Every page has its own title, description, canonical link and social tags (`src/lib/seo.ts`); home has WebSite and Organization data, case pages have breadcrumb data.
`public/og-image.jpg`, `favicon.svg` and `apple-touch-icon.png` are simple placeholders: replace them with final artwork (same names).
After launch, add the site to Google Search Console and submit `/sitemap.xml`.

## Notes for what comes next
- **AdSense:** nothing is installed; advertising consent is always off. Add a real "Advertising" choice to the cookie banner first, and load Google's script only when it is on.
- **Real accounts:** progress, deck and playlists would move to a server behind a login. That brings personal data, so update the privacy policy (`src/pages/Privacy.tsx`) and cookie banner first.

## Content
The case content has not been independently verified. Check against your textbook and the OCR specification.

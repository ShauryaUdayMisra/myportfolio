# Shaurya — Personal Site

Personal portfolio site built with Next.js 15, TypeScript, and Tailwind CSS. Deployable to Railway.

---

## TODO

Before going live, complete these items in the order listed:

### Content (in `src/data/content.ts`)
- [ ] **Surname** — add your last name to `meta.name` if you want it shown
- [ ] **Substack URL** — replace every `TODO_SUBSTACK_URL` with your actual Substack link (links with a `TODO_` placeholder are hidden automatically until replaced)
- [ ] **GitHub URL** — replace `TODO_GITHUB_URL`
- [ ] **LinkedIn URL** — replace `TODO_LINKEDIN_URL`
- [ ] **Metrics** — update `47` and `10` in INTRN's metrics if numbers have changed
- [ ] **Site URL** — update `meta.siteUrl` to your final Railway URL once deployed

### Assets (drop files into `/public/`)
- [ ] **Resume PDF** — add `/public/resume.pdf`; the download link in the footer is already wired up
- [ ] **OG image** — replace `/public/og-image.svg` with a real `/public/og-image.png` (1200×630 px) for better social sharing; update `meta.ogImage` in `content.ts` to `/og-image.png`

### Design
- [ ] **Accent colour** — current palette is midnight navy (`#0A0F1C`) with soft gold accent (`#E0A83C`). To change it, update:
  - `src/app/globals.css` → the `:root` design tokens
  - `tailwind.config.ts` → `theme.extend.colors`
  - `src/data/content.ts` → `meta.accentColor`
  - `public/favicon.svg` and `public/og-image.svg`

---

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Railway

1. Push this repo to GitHub (or connect your local folder via Railway CLI).

2. In the Railway dashboard → **New Project** → **Deploy from GitHub repo** → select this repo.

3. Railway auto-detects Next.js via Nixpacks. No extra config needed.

4. Set any environment variables you need under **Variables** in the Railway dashboard (none required by default).

5. The `start` script is `next start -p ${PORT:-3000}` — Railway injects `PORT` automatically.

6. Once deployed, copy the Railway URL and update `meta.siteUrl` in `src/data/content.ts`, then redeploy.

### Manual deploy via Railway CLI

```bash
npm install -g @railway/cli
railway login
railway init        # creates a new project
railway up          # deploys
railway domain      # prints your public URL
```

---

## Project structure

The site is a hub-and-spoke: the homepage (`/`) shows three clickable tiles —
INTRN, Moro Agami, Crypto Club — each opening its own page at `/<slug>`,
rendered from the matching entry in `content.sections`. Below the tiles the
homepage lists every post from The Handshake (the Substack blog); each post
opens on-site at `/blog/<slug>` in a new tab, with a "Read on Substack" button
on the post page.

```
src/
├── app/
│   ├── globals.css      # design tokens, utility classes, .post-body styles
│   ├── layout.tsx       # fonts, metadata, html shell
│   ├── page.tsx         # homepage — name + section tiles + blog list
│   ├── [slug]/
│   │   └── page.tsx     # section pages (intrn, moro-agami, crypto-club)
│   └── blog/
│       ├── page.tsx     # /blog → redirects to /#blog
│       └── [postSlug]/
│           └── page.tsx # full blog post pages
├── components/
│   ├── Footer.tsx       # email, links, note — shown on every page
│   └── CountUp.tsx      # animated metric numbers
└── data/
    ├── content.ts       # ← ALL section copy, links, and blocks live here
    ├── posts.json       # generated blog posts — do not hand-edit
    └── posts.ts         # typed wrapper + date/reading-time helpers
```

To add or reorder sections, edit the `sections` array in `content.ts` — the
homepage tiles and pages update automatically.

**Everything you need to edit is in `src/data/content.ts`.** Component files only need to change if you want structural or design changes.

**Blog posts sync from Substack:** after publishing a new post, run
`node scripts/import-substack.mjs` and commit the updated `src/data/posts.json`
plus any new images in `public/blog/`. Post images are downloaded locally and
Substack subscribe/share widgets are stripped automatically.

---

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styles:** Tailwind CSS v3 + custom CSS properties
- **Fonts:** Instrument Serif (display) · DM Sans (grotesque) · JetBrains Mono (monospace) via `next/font/google`
- **Deploy:** Railway (Nixpacks, Node 20)

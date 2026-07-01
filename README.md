# Shaurya — Personal Site

Personal portfolio site built with Next.js 15, TypeScript, and Tailwind CSS. Deployable to Railway.

---

## TODO Checklist

Before going live, complete these items in the order listed:

### Content (in `src/data/content.ts`)
- [ ] **Surname** — add your last name to `meta.name` if you want it shown
- [ ] **Substack URL** — replace every `TODO_SUBSTACK_URL` with your actual Substack link
- [ ] **GitHub URL** — replace `TODO_GITHUB_URL`
- [ ] **LinkedIn URL** — replace `TODO_LINKEDIN_URL`
- [ ] **About intro** — rewrite the first paragraph in `about.paragraphs` in your own voice (Cuttack → Bengaluru journey)
- [ ] **Metrics** — update `47` and `10` in INTRN's metrics if numbers have changed
- [ ] **JLI essay** — add the essay URL to `writing[1].url` if publicly available
- [ ] **Site URL** — update `meta.siteUrl` to your final Railway URL once deployed

### Assets (drop files into `/public/`)
- [ ] **Headshot** — add your photo to `/public/headshot.jpg` (or `.png`) and update the `<img>` in `src/components/About.tsx` (currently shows a placeholder block)
- [ ] **Resume PDF** — add `/public/resume.pdf`; the download link in Contact is already wired up
- [ ] **OG image** — replace `/public/og-image.svg` with a real `/public/og-image.png` (1200×630 px) for better social sharing; update `meta.ogImage` in `content.ts` to `/og-image.png`

### Design
- [ ] **Accent colour** — `#D4793A` is a warm amber placeholder. Once you've picked your final colour, replace it in:
  - `src/app/globals.css` → `--accent:` and `--accent-dim:`
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

```
src/
├── app/
│   ├── globals.css      # design tokens, utility classes
│   ├── layout.tsx       # fonts, metadata, html shell
│   └── page.tsx         # page composition
├── components/
│   ├── Nav.tsx          # fixed nav, mobile menu
│   ├── Hero.tsx         # full-viewport intro
│   ├── Ventures.tsx     # INTRN + Moro Gami case studies
│   ├── Leadership.tsx   # Crypto Club, Herald, Boarding
│   ├── Writing.tsx      # Substack + JLI essay
│   ├── About.tsx        # bio + interests
│   ├── Contact.tsx      # email + links
│   ├── Footer.tsx       # minimal footer
│   ├── CountUp.tsx      # animated metric numbers
│   └── SectionHeader.tsx# reusable section label
├── data/
│   └── content.ts       # ← ALL copy and links live here
└── hooks/
    └── useInView.ts     # IntersectionObserver helper
```

**Everything you need to edit is in `src/data/content.ts`.** Component files only need to change if you want structural or design changes.

---

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styles:** Tailwind CSS v3 + custom CSS properties
- **Fonts:** Fraunces (display serif) · DM Sans (grotesque) · JetBrains Mono (monospace) via `next/font/google`
- **Deploy:** Railway (Nixpacks, Node 20)

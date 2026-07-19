# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # dev server on localhost:3000
npm run build   # production build — run this to verify changes; there are no tests
npm run start   # serve the production build (binds to $PORT, defaults to 3000)
npm run lint    # next lint
```

Deploys happen automatically: the repo is GitHub-connected to Railway (`nixpacks.toml` config), so pushing to `main` triggers a build and deploy.

If the build fails with a missing-module error inside `node_modules` (has happened with a corrupted autoprefixer), fix with `rm -rf node_modules && npm install`.

## Architecture

Personal portfolio for Shaurya Uday Misra, structured hub-and-spoke:

- `/` (`src/app/page.tsx`) — landing page: name, first-person intro, one clickable tile per entry in `content.sections`, then the blog post list (divider + every post from The Handshake, opening in a new tab).
- `/[slug]` (`src/app/[slug]/page.tsx`) — one page per section (`intrn`, `moro-agami`, `crypto-club`), statically generated via `generateStaticParams`, rendered from that section's typed `blocks`.
- `/blog/[postSlug]` (`src/app/blog/[postSlug]/page.tsx`) — one page per blog post, rendered from `src/data/posts.json` via `dangerouslySetInnerHTML` styled by `.post-body` in `globals.css`; `/blog` itself redirects to `/#blog`. **`posts.json` and `public/blog/` images are generated — never hand-edit them; regenerate with `node scripts/import-substack.mjs`** (fetches all public posts from odysseyunhashed.substack.com, strips Substack widgets, localizes images). Post text is Shaurya's published writing and is imported verbatim; the content rules below apply only to site copy we author.

**`src/data/content.ts` is the single source of truth for all copy, links, metrics, and section structure.** Adding/reordering entries in `content.sections` updates the homepage tiles and routes automatically; component files only change for structural or design work. Key mechanics in that file:

- `SectionBlock` is a discriminated union (`text` / `metrics` / `list` / `links` / `roles`) rendered by the `Block` switch in `[slug]/page.tsx`.
- `external: true` on a section makes its homepage tile link straight to `url` in a new tab, makes `/[slug]` a redirect to `url`, and removes it from the prev/next footer nav (no section uses it currently; the machinery is kept for future use).
- `showUrlOnTile: true` renders `url` as a separately clickable link on the homepage tile (INTRN uses this). This works via a stretched-link overlay because nesting `<a>` inside `<Link>` is invalid HTML — keep that pattern if touching the tiles.
- `isLiveUrl()` gates every outbound link: anything whose href is `null` or starts with `TODO_` renders as plain text (or is hidden in the footer) until a real URL is supplied.
- TypeScript over-narrows the literal types of `content.sections`; widen with `const sections: Section[] = content.sections` at the point of use if you hit `never` errors.

**Design tokens live in two places that must be kept in sync:** CSS custom properties in `src/app/globals.css` (`:root`) and `theme.extend.colors` in `tailwind.config.ts`. The palette is pastel navy (`#1F2B47`) with a soft gold accent (`#E0A83C`); the accent also appears in `public/favicon.svg` and `public/og-image.svg`. Each section carries its own accent colour in `content.ts`. Fonts: Space Grotesk (display headings, no italics), DM Sans (body), JetBrains Mono (labels/chips) — all via `next/font/google` in `layout.tsx`.

## Content rules (from Shaurya)

- The venture is **Moro Agami**, never "Moro Gami".
- **INTRN keeps its purple** (`#B46BFC`) regardless of any palette changes.
- The Crypto Club is "the school's first ever crypto club" — never call it a "curriculum".
- First-person copy (intro, About) must sound personal and genuine: **no em-dashes** there.
- INTRN metrics mirror the "Platform Highlights" on intrn.xyz — check the live site before updating them.
- Outstanding content TODOs (GitHub/LinkedIn URLs, resume PDF, real OG PNG, final Railway URL) are tracked in README.md; leave the `TODO_` placeholder convention intact so `isLiveUrl()` keeps hiding them.

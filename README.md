# rizkiromadon.eu.cc — Observatory Log

Portfolio frontend built with Next.js 15 (App Router), React 19, Chakra UI 2 (fully re-themed), and TypeScript.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/` — routes: home, `projects`, `about`, `contact`
- `app/robots.ts` — generates `robots.txt` at build time
- `app/sitemap.ts` — generates `sitemap.xml` at build time
- `app/opengraph-image.tsx` — generates the shared Open Graph / Twitter card image at build time
- `components/layout` — NavBar, Footer
- `components/ui` — InstrumentReadout, StatusBadge, SectionHeading
- `components/sections` — HeroSection, ProjectCard, ProjectGrid, AboutContent, ContactForm
- `theme/` — custom Chakra theme (colors, typography, component variants)
- `lib/projects.ts` — typed project data source
- `lib/site.ts` — owner/site metadata, also used as the single source of truth for SEO copy (titles, description, keywords)

## Theming

The palette stays dark (`void`/`panel`) but uses a vibrant "signal spectrum" accent system instead of a single phosphor color:

- `theme/foundations/colors.ts` exports the base colors (`phosphor`, `amber`, `cyan`, `violet`, `magenta`) plus a `gradients` object (`signalSpectrum`, `auroraGlow`, `panelBorder`) reused across the app.
- The hero name and primary CTA (`Button` variant `spectrumSolid`) use `gradients.signalSpectrum`.
- The body background carries a faint multi-color `auroraGlow` radial gradient for ambient depth.
- Project cards reveal a gradient border-glow on hover (`theme/components/Card.ts`), and each stack tag in `InstrumentReadout` cycles through the spectrum colors instead of one static accent.
- `StatusBadge` and `SectionHeading` accept a `tone` / `eyebrowColor` prop so each page section can carry a different accent from the same palette.

## SEO

- Each route (`/`, `/projects`, `/about`, `/contact`) sets its own `title`, `description`, canonical URL, and Open Graph fields via the App Router `metadata` export — nothing relies only on the root default.
- `metadataBase` is set from `site.website`, so relative canonical/OG URLs resolve correctly wherever the site is deployed.
- `app/opengraph-image.tsx` renders a single 1200×630 PNG at build time (via `next/og`) reused for both Open Graph and Twitter cards — no manual image upload needed. Edit that file to change the design.
- `app/robots.ts` and `app/sitemap.ts` are generated as static `robots.txt` / `sitemap.xml` files at build time, fully compatible with static export.
- Structured data: a `Person` JSON-LD block is injected in the root layout so search engines can associate the site with `site.name`, `site.role`, and the GitHub profile as `sameAs`.
- Heading hierarchy: each page has exactly one `<h1>` (the hero title on `/`, or the page's `SectionHeading` with `as="h1"` on `/about`, `/contact`, `/projects`); sections below use `<h2>`, project cards use `<h3>`.
- When updating name, role, bio, or URLs, edit `lib/site.ts` once — titles, descriptions, JSON-LD, and OG image text all derive from it.

## Adding a new project

Add a new entry to the array in `lib/projects.ts` following the existing `Project` shape (`slug`, `name`, `description`, `stack`, `link`). `ProjectGrid` picks it up automatically on both the home page preview and `/projects`.

## Deploying to Cloudflare Pages

This project is configured for static export (`output: "export"` in `next.config.mjs`), which is the supported path for hosting a Next.js site on Cloudflare Pages.

1. Push the repo to GitHub/GitLab and connect it in the Cloudflare Pages dashboard, or deploy manually.
2. Build settings:
   - Framework preset: `Next.js (Static HTML Export)`
   - Build command: `npm run build`
   - Build output directory: `out`
3. Manual deploy alternative, using Wrangler:
   ```bash
   npm run build
   npx wrangler pages deploy out
   ```

Notes:
- `next/image` optimization is disabled (`images.unoptimized: true`) since Cloudflare Pages doesn't run the Next.js image server — this project doesn't use `next/image`, so it has no effect here.
- All pages in this project are fully static (no API routes, no `cookies()`/`headers()`, no per-request data), so static export covers the whole site with no loss of functionality.
- Cloudflare's current guidance favors deploying Next.js via Workers (using `@opennextjs/cloudflare`) over Pages static export for projects that may later need server rendering. Since this site has no server-side needs, Pages static export is the simpler and sufficient choice — revisit only if the site later adds features like a real contact-form backend.

## Dependency notes

- Next.js is pinned to `15.5.21` (Maintenance LTS). Next.js 14 reached end-of-life in October 2025, and Cloudflare Pages now requires at least `14.2.35` to auto-configure — this project instead moved to the supported 15.x line.
- Next.js 15's App Router requires React 19, so `react`/`react-dom` are pinned to `^19.0.0`. Chakra UI v2's published peer dependency range only lists React 18, but it works correctly with React 19 in practice — if `npm install` reports a peer dependency conflict, retry with `npm install --legacy-peer-deps`. Package managers that resolve peer deps more loosely (bun, pnpm, yarn) typically install without any flag.


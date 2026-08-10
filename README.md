# rizkiromadon.eu.cc — Observatory Log

Portfolio frontend built with Next.js (App Router), Chakra UI (fully re-themed), and TypeScript.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/` — routes: home, `projects`, `about`, `contact`
- `components/layout` — NavBar, Footer
- `components/ui` — InstrumentReadout, StatusBadge, SectionHeading
- `components/sections` — HeroSection, ProjectCard, ProjectGrid, AboutContent, ContactForm
- `theme/` — custom Chakra theme (colors, typography, component variants)
- `lib/projects.ts` — typed project data source
- `lib/site.ts` — owner/site metadata

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


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

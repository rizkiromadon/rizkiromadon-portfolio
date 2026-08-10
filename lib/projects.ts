import type { Project } from "./types";

const projects: Project[] = [
  {
    slug: "tempcdn",
    name: "tempcdn",
    description:
      "A no-login file upload backend. Files are stored in Cloudflare R2 with metadata tracked in SQLite, and each file is automatically deleted after 24 hours.",
    stack: ["Go", "Cloudflare R2", "SQLite"],
    link: "https://github.com/rizkiromadon/tempcdn",
  },
  {
    slug: "tempcdn-frontend",
    name: "tempcdn-frontend",
    description:
      "The web interface for tempcdn, providing drag-and-drop uploads and shareable links with a dark, minimal UI.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    link: "https://github.com/rizkiromadon/tempcdn-frontend",
  },
];

export default projects;

import type { Project } from "./types";

const projects: Project[] = [
  {
    slug: "tempcdn",
    name: "tempcdn",
    description:
      "A no-login file upload backend. Files are stored in Cloudflare R2 with metadata tracked in SQLite, and each file is automatically deleted after 24 hours.",
    highlights: [
      "No authentication required — upload and get a shareable link immediately",
      "Cloudflare R2 as the object storage backend, keeping file storage decoupled from the app server",
      "SQLite tracks per-file metadata (upload time, expiry) without needing a separate database service",
      "A scheduled cleanup process removes each file automatically 24 hours after upload",
    ],
    stack: ["Go", "Cloudflare R2", "SQLite"],
    link: "https://github.com/rizkiromadon/tempcdn",
  },
  {
    slug: "tempcdn-frontend",
    name: "tempcdn-frontend",
    description:
      "The web interface for tempcdn, providing drag-and-drop uploads and shareable links with a dark, minimal UI.",
    highlights: [
      "Drag-and-drop upload flow talking directly to the tempcdn API",
      "Generates a shareable link as soon as an upload completes",
      "Built with shadcn/ui on top of Tailwind CSS for a consistent, minimal component set",
      "Dark UI matching the ephemeral, no-frills nature of the backend it's built for",
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    link: "https://github.com/rizkiromadon/tempcdn-frontend",
  },
];

export default projects;

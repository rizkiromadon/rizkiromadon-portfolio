import type { Project } from "./types";

const projects: Project[] = [
  {
    slug: "tempcdn",
    name: "tempcdn",
    description:
      "Backend upload file tanpa proses login. File disimpan di Cloudflare R2, metadata di SQLite, setiap file terhapus otomatis setelah 24 jam.",
    stack: ["Go", "Cloudflare R2", "SQLite"],
    link: "https://github.com/rizkiromadon/tempcdn",
  },
  {
    slug: "tempcdn-frontend",
    name: "tempcdn-frontend",
    description: "Antarmuka untuk tempcdn — dark industrial UI.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    link: "https://github.com/rizkiromadon/tempcdn-frontend",
  },
];

export default projects;

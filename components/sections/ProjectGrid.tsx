import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "@/components/sections/ProjectCard";
import projects from "@/lib/projects";

export default function ProjectGrid() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} width="100%">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </SimpleGrid>
  );
}

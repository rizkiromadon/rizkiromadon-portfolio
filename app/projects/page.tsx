import type { Metadata } from "next";
import { Box, VStack } from "@chakra-ui/react";
import ProjectGrid from "@/components/sections/ProjectGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import site from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Backend and frontend projects built by ${site.name}, including Go services and TypeScript interfaces.`,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `Projects — ${site.name}`,
    description: `Backend and frontend projects built by ${site.name}, including Go services and TypeScript interfaces.`,
    url: `${site.website}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <Box
      maxWidth="1100px"
      marginX="auto"
      paddingX={{ base: 4, md: 8 }}
      paddingY={{ base: 12, md: 16 }}
    >
      <VStack align="stretch" spacing={10}>
        <SectionHeading as="h1" eyebrow="Full archive" eyebrowColor="cyan" title="Projects" />
        <ProjectGrid />
      </VStack>
    </Box>
  );
}

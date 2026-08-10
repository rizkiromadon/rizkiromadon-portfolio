import { Box, VStack } from "@chakra-ui/react";
import ProjectGrid from "@/components/sections/ProjectGrid";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProjectsPage() {
  return (
    <Box
      maxWidth="1100px"
      marginX="auto"
      paddingX={{ base: 4, md: 8 }}
      paddingY={{ base: 12, md: 16 }}
    >
      <VStack align="stretch" spacing={10}>
        <SectionHeading eyebrow="Full archive" title="Proyek" />
        <ProjectGrid />
      </VStack>
    </Box>
  );
}

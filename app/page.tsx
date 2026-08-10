import { Box, Link as ChakraLink, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import ProjectGrid from "@/components/sections/ProjectGrid";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HomePage() {
  return (
    <Box maxWidth="1100px" marginX="auto" paddingX={{ base: 4, md: 8 }}>
      <HeroSection />
      <VStack align="stretch" spacing={8} paddingBottom={24}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-end" flexWrap="wrap" gap={4}>
          <SectionHeading eyebrow="Recent transmissions" title="Proyek" />
          <ChakraLink
            as={NextLink}
            href="/projects"
            fontFamily="var(--font-space-mono), monospace"
            fontSize="sm"
            color="phosphor"
            _hover={{ color: "amber", textDecoration: "none" }}
          >
            Lihat semua →
          </ChakraLink>
        </Box>
        <ProjectGrid />
      </VStack>
    </Box>
  );
}

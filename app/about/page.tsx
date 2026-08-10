import type { Metadata } from "next";
import { Box, VStack } from "@chakra-ui/react";
import AboutContent from "@/components/sections/AboutContent";
import SectionHeading from "@/components/ui/SectionHeading";
import site from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.role} based in ${site.location}. ${site.bio}`,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About — ${site.name}`,
    description: `${site.role} based in ${site.location}. ${site.bio}`,
    url: `${site.website}/about`,
  },
};

export default function AboutPage() {
  return (
    <Box
      maxWidth="1100px"
      marginX="auto"
      paddingX={{ base: 4, md: 8 }}
      paddingY={{ base: 12, md: 16 }}
    >
      <VStack align="stretch" spacing={10}>
        <SectionHeading as="h1" eyebrow="Observer log" eyebrowColor="violet" title="About" />
        <AboutContent />
      </VStack>
    </Box>
  );
}

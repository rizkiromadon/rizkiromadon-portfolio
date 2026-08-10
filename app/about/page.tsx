import { Box, VStack } from "@chakra-ui/react";
import AboutContent from "@/components/sections/AboutContent";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <Box
      maxWidth="1100px"
      marginX="auto"
      paddingX={{ base: 4, md: 8 }}
      paddingY={{ base: 12, md: 16 }}
    >
      <VStack align="stretch" spacing={10}>
        <SectionHeading eyebrow="Observer log" title="Tentang" />
        <AboutContent />
      </VStack>
    </Box>
  );
}

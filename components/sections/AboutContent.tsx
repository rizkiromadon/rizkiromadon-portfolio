import { Box, Link as ChakraLink, Text, VStack } from "@chakra-ui/react";
import StatusBadge from "@/components/ui/StatusBadge";
import site from "@/lib/site";

export default function AboutContent() {
  return (
    <VStack align="flex-start" spacing={8} maxWidth="640px">
      <StatusBadge label="Observer profile" tone="phosphor" />
      <Text
        fontFamily="var(--font-inter), sans-serif"
        fontSize={{ base: "md", md: "lg" }}
        lineHeight="relaxed"
        color="signal"
      >
        {site.name} adalah {site.bio.charAt(0).toLowerCase() + site.bio.slice(1)}
      </Text>
      <Text
        fontFamily="var(--font-inter), sans-serif"
        fontSize="md"
        lineHeight="relaxed"
        color="dim"
      >
        Berbasis di {site.location}, aktivitas dan proyek dicatat secara
        berkala di GitHub — dari eksperimen backend kecil hingga antarmuka
        yang menyertainya.
      </Text>
      <Box
        border="1px solid"
        borderColor="whiteAlpha.100"
        borderRadius="3px"
        padding={5}
        width="100%"
      >
        <VStack align="flex-start" spacing={3}>
          <Text
            fontFamily="var(--font-space-mono), monospace"
            fontSize="xs"
            letterSpacing="wider"
            textTransform="uppercase"
            color="dim"
          >
            Koordinat
          </Text>
          <ChakraLink
            href={site.github}
            isExternal
            fontFamily="var(--font-space-mono), monospace"
            fontSize="sm"
            color="phosphor"
            _hover={{ color: "amber", textDecoration: "none" }}
          >
            {site.githubHandle}
          </ChakraLink>
          <ChakraLink
            href={site.website}
            isExternal
            fontFamily="var(--font-space-mono), monospace"
            fontSize="sm"
            color="phosphor"
            _hover={{ color: "amber", textDecoration: "none" }}
          >
            {site.websiteLabel}
          </ChakraLink>
        </VStack>
      </Box>
    </VStack>
  );
}

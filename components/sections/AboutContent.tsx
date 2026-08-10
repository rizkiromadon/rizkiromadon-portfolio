import { Box, Link as ChakraLink, Text, VStack } from "@chakra-ui/react";
import StatusBadge from "@/components/ui/StatusBadge";
import SkillsGrid from "@/components/ui/SkillsGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import site from "@/lib/site";
import skillGroups from "@/lib/skills";

export default function AboutContent() {
  return (
    <VStack align="flex-start" spacing={10} maxWidth="720px">
      <VStack align="flex-start" spacing={8} width="100%">
        <StatusBadge label="Observer profile" tone="violet" />
        <Text
          fontFamily="var(--font-inter), sans-serif"
          fontSize={{ base: "md", md: "lg" }}
          lineHeight="relaxed"
          color="signal"
        >
          {site.name} is a {site.role}. {site.bio}
        </Text>
        <Text
          fontFamily="var(--font-inter), sans-serif"
          fontSize="md"
          lineHeight="relaxed"
          color="dim"
        >
          Based in {site.location}, work and side projects are logged
          regularly on GitHub — from small backend experiments to the
          interfaces built around them. {site.status}, learning primarily by
          building and shipping real projects rather than through formal
          coursework.
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
              Coordinates
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

      <VStack align="flex-start" spacing={5} width="100%">
        <SectionHeading
          eyebrow="Instrument panel"
          eyebrowColor="cyan"
          title="Skills & Tools"
        />
        <SkillsGrid groups={skillGroups} />
      </VStack>
    </VStack>
  );
}

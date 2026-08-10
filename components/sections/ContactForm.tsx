import { Box, Link as ChakraLink, Text, VStack } from "@chakra-ui/react";
import StatusBadge from "@/components/ui/StatusBadge";
import site from "@/lib/site";

const channels = [
  {
    label: "GitHub",
    value: site.githubHandle,
    href: site.github,
    note: "Code, projects, and commit history.",
  },
  {
    label: "Website",
    value: site.websiteLabel,
    href: site.website,
    note: "Main site and other links.",
  },
];

export default function ContactForm() {
  return (
    <VStack align="flex-start" spacing={8} maxWidth="520px" width="100%">
      <StatusBadge label="Open channel" tone="magenta" />
      <Text
        fontFamily="var(--font-inter), sans-serif"
        fontSize="md"
        lineHeight="relaxed"
        color="dim"
      >
        The most direct way to reach {site.name} is through the channels
        below.
      </Text>
      <VStack align="stretch" spacing={4} width="100%">
        {channels.map((channel) => (
          <Box
            key={channel.label}
            as="a"
            href={channel.href}
            target="_blank"
            rel="noopener noreferrer"
            border="1px solid"
            borderColor="whiteAlpha.100"
            borderRadius="3px"
            padding={5}
            transition="border-color 200ms ease"
            _hover={{ borderColor: "phosphor", textDecoration: "none" }}
            _focusVisible={{
              outline: "2px solid",
              outlineColor: "phosphor",
              outlineOffset: "2px",
            }}
          >
            <VStack align="flex-start" spacing={1}>
              <Text
                fontFamily="var(--font-space-mono), monospace"
                fontSize="xs"
                letterSpacing="wider"
                textTransform="uppercase"
                color="dim"
              >
                {channel.label}
              </Text>
              <ChakraLink
                as="span"
                fontFamily="var(--font-space-mono), monospace"
                fontSize="md"
                color="phosphor"
                pointerEvents="none"
              >
                {channel.value}
              </ChakraLink>
              <Text
                fontFamily="var(--font-inter), sans-serif"
                fontSize="sm"
                color="dim"
              >
                {channel.note}
              </Text>
            </VStack>
          </Box>
        ))}
      </VStack>
    </VStack>
  );
}

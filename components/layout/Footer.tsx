import { Box, Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import site from "@/lib/site";

export default function Footer() {
  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
      marginTop={20}
    >
      <Flex
        maxWidth="1100px"
        marginX="auto"
        paddingX={{ base: 4, md: 8 }}
        paddingY={6}
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        justify="space-between"
        gap={2}
      >
        <Text
          fontFamily="var(--font-space-mono), monospace"
          fontSize="xs"
          letterSpacing="wide"
          color="dim"
        >
          {site.location.toUpperCase()} · TRANSMITTING
        </Text>
        <ChakraLink
          href={site.github}
          isExternal
          fontFamily="var(--font-space-mono), monospace"
          fontSize="xs"
          letterSpacing="wide"
          color="dim"
          _hover={{ color: "phosphor", textDecoration: "none" }}
        >
          {site.githubHandle}
        </ChakraLink>
      </Flex>
    </Box>
  );
}

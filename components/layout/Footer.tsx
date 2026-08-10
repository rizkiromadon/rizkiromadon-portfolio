import { Box, Flex, HStack, Link as ChakraLink, Text } from "@chakra-ui/react";
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
        <HStack spacing={2}>
          <Box
            width="6px"
            height="6px"
            borderRadius="full"
            bg="phosphor"
            boxShadow="0 0 6px 1px rgba(143,227,207,0.8)"
          />
          <Text
            fontFamily="var(--font-space-mono), monospace"
            fontSize="xs"
            letterSpacing="wide"
            color="dim"
          >
            {site.location.toUpperCase()} · TRANSMITTING
          </Text>
        </HStack>
        <ChakraLink
          href={site.github}
          isExternal
          fontFamily="var(--font-space-mono), monospace"
          fontSize="xs"
          letterSpacing="wide"
          color="dim"
          _hover={{ color: "cyan", textDecoration: "none" }}
        >
          {site.githubHandle}
        </ChakraLink>
      </Flex>
    </Box>
  );
}

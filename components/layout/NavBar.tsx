"use client";

import { Box, Flex, HStack, Link as ChakraLink, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import site from "@/lib/site";

const navItems = [
  { href: "/", label: "Home", accent: "phosphor" },
  { href: "/projects", label: "Projects", accent: "cyan" },
  { href: "/about", label: "About", accent: "violet" },
  { href: "/contact", label: "Contact", accent: "magenta" },
] as const;

export default function NavBar() {
  const pathname = usePathname();

  return (
    <Box
      as="nav"
      aria-label="Main navigation"
      position="sticky"
      top={0}
      zIndex={10}
      bg="void"
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
    >
      <Flex
        maxWidth="1100px"
        marginX="auto"
        paddingX={{ base: 4, md: 8 }}
        paddingY={4}
        align="center"
        justify="space-between"
      >
        <ChakraLink
          as={NextLink}
          href="/"
          aria-label={`${site.name} — Home`}
          fontFamily="var(--font-space-mono), monospace"
          fontSize="sm"
          letterSpacing="wide"
          color="signal"
          _hover={{ color: "cyan", textDecoration: "none" }}
        >
          RIZKI ROMADON
        </ChakraLink>
        <HStack as="ul" spacing={{ base: 4, md: 8 }} listStyleType="none">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Box as="li" key={item.href}>
                <ChakraLink
                  as={NextLink}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  fontFamily="var(--font-space-mono), monospace"
                  fontSize="xs"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  color={isActive ? item.accent : "dim"}
                  _hover={{ color: item.accent, textDecoration: "none" }}
                  transition="color 160ms ease"
                >
                  <Text as="span">{item.label}</Text>
                </ChakraLink>
              </Box>
            );
          })}
        </HStack>
      </Flex>
    </Box>
  );
}

"use client";

import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { motion, useReducedMotion, type Transition } from "framer-motion";
import NextLink from "next/link";
import site from "@/lib/site";

const heroTransition: Transition = { duration: 0.6, ease: "easeOut" };

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={heroTransition}
    >
      <VStack align="flex-start" spacing={6} paddingY={{ base: 16, md: 28 }}>
        <Text
          fontFamily="var(--font-pixelify-sans), monospace"
          fontSize="xs"
          letterSpacing="widest"
          textTransform="uppercase"
          color="amber"
        >
          Log entry · Signal acquired
        </Text>
        <Heading
          as="h1"
          fontFamily="var(--font-space-mono), monospace"
          fontSize={{ base: "4xl", md: "5xl" }}
          lineHeight="tight"
          color="signal"
          maxWidth="18ch"
        >
          {site.name}
        </Heading>
        <Text
          fontFamily="var(--font-inter), sans-serif"
          fontSize={{ base: "md", md: "lg" }}
          lineHeight="relaxed"
          color="dim"
          maxWidth="52ch"
        >
          {site.bio} Mencatat proyek dari {site.location} seperti pengamat
          yang mencatat sinyal dari observatorium.
        </Text>
        <HStack spacing={4} paddingTop={2}>
          <Button as={NextLink} href="/projects" variant="phosphorOutline">
            Lihat Proyek
          </Button>
          <Button as={NextLink} href="/contact" variant="ghost">
            Kontak
          </Button>
        </HStack>
        <Box
          width="100%"
          maxWidth="360px"
          height="1px"
          bg="whiteAlpha.100"
          marginTop={4}
        />
      </VStack>
    </motion.div>
  );
}

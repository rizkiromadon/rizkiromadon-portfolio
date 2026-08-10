import type { Metadata } from "next";
import { Box, VStack } from "@chakra-ui/react";
import ContactForm from "@/components/sections/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import site from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} via GitHub or the links below.`,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact — ${site.name}`,
    description: `Get in touch with ${site.name} via GitHub or the links below.`,
    url: `${site.website}/contact`,
  },
};

export default function ContactPage() {
  return (
    <Box
      maxWidth="1100px"
      marginX="auto"
      paddingX={{ base: 4, md: 8 }}
      paddingY={{ base: 12, md: 16 }}
    >
      <VStack align="stretch" spacing={10}>
        <SectionHeading as="h1" eyebrow="Open channel" eyebrowColor="magenta" title="Contact" />
        <ContactForm />
      </VStack>
    </Box>
  );
}

import { Box, VStack } from "@chakra-ui/react";
import ContactForm from "@/components/sections/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactPage() {
  return (
    <Box
      maxWidth="1100px"
      marginX="auto"
      paddingX={{ base: 4, md: 8 }}
      paddingY={{ base: 12, md: 16 }}
    >
      <VStack align="stretch" spacing={10}>
        <SectionHeading eyebrow="Open channel" title="Kontak" />
        <ContactForm />
      </VStack>
    </Box>
  );
}

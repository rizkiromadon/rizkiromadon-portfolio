import { Heading, Text, VStack } from "@chakra-ui/react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: SectionHeadingProps) {
  return (
    <VStack
      align={align === "center" ? "center" : "flex-start"}
      spacing={2}
      textAlign={align}
    >
      {eyebrow ? (
        <Text
          fontFamily="var(--font-pixelify-sans), monospace"
          fontSize="xs"
          letterSpacing="widest"
          textTransform="uppercase"
          color="amber"
        >
          {eyebrow}
        </Text>
      ) : null}
      <Heading
        as="h2"
        fontFamily="var(--font-space-mono), monospace"
        fontSize={{ base: "2xl", md: "3xl" }}
        lineHeight="tight"
        color="signal"
        fontWeight="bold"
      >
        {title}
      </Heading>
    </VStack>
  );
}

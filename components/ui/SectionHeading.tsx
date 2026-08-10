import { Heading, Text, VStack } from "@chakra-ui/react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  eyebrowColor?: "amber" | "phosphor" | "cyan" | "violet" | "magenta";
};

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  as = "h2",
  eyebrowColor = "amber",
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
          color={eyebrowColor}
        >
          {eyebrow}
        </Text>
      ) : null}
      <Heading
        as={as}
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

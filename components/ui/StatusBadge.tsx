import { Box, HStack, Text } from "@chakra-ui/react";

type StatusBadgeProps = {
  label: string;
  tone?: "phosphor" | "amber" | "dim";
};

export default function StatusBadge({
  label,
  tone = "amber",
}: StatusBadgeProps) {
  return (
    <HStack
      spacing={2}
      border="1px solid"
      borderColor={tone}
      borderRadius="2px"
      paddingX={2}
      paddingY="2px"
      width="fit-content"
    >
      <Box width="6px" height="6px" bg={tone} flexShrink={0} />
      <Text
        fontFamily="var(--font-pixelify-sans), monospace"
        fontSize="xs"
        letterSpacing="wider"
        textTransform="uppercase"
        color={tone}
        lineHeight={1}
      >
        {label}
      </Text>
    </HStack>
  );
}

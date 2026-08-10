import { Box, HStack, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import type { SkillGroup } from "@/lib/types";

type SkillsGridProps = {
  groups: SkillGroup[];
};

const accents = ["phosphor", "cyan", "violet", "magenta", "amber"] as const;

export default function SkillsGrid({ groups }: SkillsGridProps) {
  return (
    <VStack align="stretch" spacing={6} width="100%">
      {groups.map((group, groupIndex) => {
        const accent = accents[groupIndex % accents.length];

        return (
          <Box
            key={group.label}
            border="1px solid"
            borderColor="whiteAlpha.100"
            borderRadius="3px"
            padding={5}
          >
            <VStack align="flex-start" spacing={3}>
              <HStack spacing={2}>
                <Box width="6px" height="6px" bg={accent} flexShrink={0} />
                <Text
                  fontFamily="var(--font-space-mono), monospace"
                  fontSize="xs"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  color={accent}
                >
                  {group.label}
                </Text>
              </HStack>
              <Wrap spacing={2}>
                {group.skills.map((skill) => (
                  <WrapItem key={skill}>
                    <Box
                      border="1px solid"
                      borderColor="whiteAlpha.100"
                      borderRadius="2px"
                      paddingX={3}
                      paddingY={1}
                    >
                      <Text
                        fontFamily="var(--font-inter), sans-serif"
                        fontSize="sm"
                        color="signal"
                      >
                        {skill}
                      </Text>
                    </Box>
                  </WrapItem>
                ))}
              </Wrap>
            </VStack>
          </Box>
        );
      })}
    </VStack>
  );
}

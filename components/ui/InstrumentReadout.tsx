"use client";

import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

type InstrumentReadoutProps = {
  stack: string[];
  accent?: "phosphor" | "amber";
};

const barHeights = (seed: number) => {
  const pattern = [3, 6, 4, 8, 5, 7, 2, 6];
  return pattern.map((value, index) => ((value + seed * (index + 1)) % 8) + 3);
};

export default function InstrumentReadout({
  stack,
  accent = "phosphor",
}: InstrumentReadoutProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <VStack align="stretch" spacing={2} width="100%">
      {stack.map((item, index) => {
        const heights = barHeights(item.length + index);
        const isActive = activeIndex === index;

        return (
          <HStack
            key={item}
            spacing={3}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            role="group"
            cursor="default"
          >
            <HStack spacing="2px" align="flex-end" height="16px" flexShrink={0}>
              {heights.map((h, barIndex) => (
                <Box
                  key={barIndex}
                  width="3px"
                  height={`${h}px`}
                  bg={isActive ? accent : "dim"}
                  transition="background-color 160ms ease, height 160ms ease"
                  opacity={isActive ? 1 : 0.6}
                />
              ))}
            </HStack>
            <Text
              fontFamily="var(--font-space-mono), monospace"
              fontSize="xs"
              letterSpacing="wide"
              color={isActive ? "signal" : "dim"}
              transition="color 160ms ease"
              textTransform="uppercase"
            >
              {item}
            </Text>
          </HStack>
        );
      })}
    </VStack>
  );
}

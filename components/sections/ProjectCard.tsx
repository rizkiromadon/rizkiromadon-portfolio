import { Card, CardBody, CardHeader, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import InstrumentReadout from "@/components/ui/InstrumentReadout";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card height="100%">
      <CardHeader>
        <ChakraLink
          href={project.link}
          isExternal
          _hover={{ textDecoration: "none" }}
        >
          <Heading
            as="h3"
            fontFamily="var(--font-space-mono), monospace"
            fontSize="lg"
            color="signal"
            _hover={{ color: "phosphor" }}
            transition="color 160ms ease"
          >
            {project.name}
          </Heading>
        </ChakraLink>
      </CardHeader>
      <CardBody display="flex" flexDirection="column" gap={5}>
        <Text
          fontFamily="var(--font-inter), sans-serif"
          fontSize="sm"
          lineHeight="base"
          color="dim"
        >
          {project.description}
        </Text>
        <InstrumentReadout stack={project.stack} />
      </CardBody>
    </Card>
  );
}

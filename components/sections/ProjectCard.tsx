import { Card, CardBody, CardHeader, Heading, Link as ChakraLink, List, ListItem, Text } from "@chakra-ui/react";
import InstrumentReadout from "@/components/ui/InstrumentReadout";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
  variant?: "compact" | "full";
};

export default function ProjectCard({ project, variant = "full" }: ProjectCardProps) {
  return (
    <Card height="100%">
      <CardHeader>
        <ChakraLink
          href={project.link}
          isExternal
          aria-label={`View ${project.name} repository on GitHub (opens in a new tab)`}
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
        {variant === "full" ? (
          <List spacing={2}>
            {project.highlights.map((highlight) => (
              <ListItem
                key={highlight}
                display="flex"
                alignItems="baseline"
                gap={2}
                fontFamily="var(--font-inter), sans-serif"
                fontSize="sm"
                lineHeight="base"
                color="dim"
              >
                <Text as="span" color="phosphor" fontSize="xs" lineHeight="inherit">
                  ▸
                </Text>
                <Text as="span">{highlight}</Text>
              </ListItem>
            ))}
          </List>
        ) : null}
        <InstrumentReadout stack={project.stack} />
      </CardBody>
    </Card>
  );
}

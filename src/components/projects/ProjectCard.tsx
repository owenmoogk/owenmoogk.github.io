import type { Project } from '@api/projects';
import { Box, Card, Flex, Image, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

// Fixed dimensions so every card in the grid is identical in size,
// regardless of title length or whether a date is present.
const IMAGE_HEIGHT = 200;
const BODY_HEIGHT = 46;

export default function ProjectCard({ data }: { data: Project }) {
  const types = data.types.map((x: string) => x.toLowerCase());
  return (
    <Link to={data.name} style={{ display: 'block', height: '100%' }}>
      <Card withBorder shadow="xl" radius="lg" h="100%" p="sm">
        <Card.Section>
          <Image
            src={'/assets/projects/' + data.name + '/main.png'}
            h={IMAGE_HEIGHT}
            fit="cover"
            alt={data.title}
          />
        </Card.Section>
        <Flex
          mt={10}
          h={BODY_HEIGHT}
          justify="space-between"
          align="center"
          gap={10}
        >
          <Box miw={0}>
            <Title order={4} m={0} lineClamp={1} title={data.title}>
              {data.title}
            </Title>
            {data.date && (
              <Text
                size="sm"
                c="color-mix(in srgb, var(--mantine-color-dimmed), var(--mantine-color-text))"
              >
                {data.date}
              </Text>
            )}
          </Box>
          <Flex gap={6} align="center" style={{ flexShrink: 0 }}>
            {types.map(
              (type, key) =>
                key < 3 && ( // only show the first 3
                  <Image
                    h={22}
                    w={22}
                    fit="contain"
                    src={'/assets/icons/' + type + '.svg'}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                    key={key}
                    alt=""
                  />
                )
            )}
          </Flex>
        </Flex>
      </Card>
    </Link>
  );
}

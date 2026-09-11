import type { Project } from '@api/projects';
import { Box, Card, Flex, Image, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function FeaturedIcon({
  data,
  enableImages = true,
  linkPrefix = '',
}: {
  data: Project;
  enableImages?: boolean;
  linkPrefix?: string;
}) {
  const types = data.types.map((x: string) => x.toLowerCase());
  return (
    <Box w="min(800px, 100%)">
      <Link to={linkPrefix + data.name}>
        <Card
          orientation="horizontal"
          withBorder
          shadow="xl"
          radius="lg"
          w="100%"
        >
          {enableImages && (
            <Card.Section visibleFrom="sm" pr={20}>
              <Image
                src={'/assets/projects/' + data.name + '/main.png'}
                w={250}
                h="100%"
              />
            </Card.Section>
          )}
          <Flex direction="column" gap={10} my="auto">
            <Box>
              <Title order={3} m={0}>
                {data.title}
              </Title>
              {data.date && <Text size="sm">{data.date}</Text>}
              <Text pt={5}>{data.description}</Text>
            </Box>
            <Flex gap={10} align="center">
              {types.map(
                (type, key) =>
                  key < 3 && ( // only show the first 3
                    <Image
                      mah={25}
                      maw={25}
                      fit="contain"
                      src={'/assets/icons/' + type.toLowerCase() + '.svg'}
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                      key={key}
                    />
                  )
              )}
            </Flex>
          </Flex>
        </Card>
      </Link>
    </Box>
  );
}

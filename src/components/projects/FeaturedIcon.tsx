import { Box, Card, Flex, Image, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function FeaturedIcon(props: {
  data: {
    name: string;
    types: string[];
    title: string;
    date?: string;
    description?: string;
    link?: string;
  };
}) {
  const data = props.data;
  const types = data.types.map((x: string) => x.toLowerCase());
  return (
    <Link to={data.link ?? data.name} className="featuredIconLink">
      <Card withBorder shadow="xl" radius="lg" miw={300} maw={350}>
        <Card.Section>
          <Image
            src={'/assets/projects/' + data.name + '/main.png'}
            height={250}
          />
        </Card.Section>
        <Flex mt={15} justify="space-between" gap={20}>
          <Box className="featuredText">
            <Title order={3} m={0}>
              {data.title}
            </Title>
            {data.date && <Text size="sm">{data.date}</Text>}

            {/* these are here for sorting, we still want them to be searchable */}
            <span className="contentDesc" style={{ display: 'none' }}>
              {data.description}
            </span>
            <span className="type" style={{ display: 'none' }}>
              {data.types}
            </span>
          </Box>
          <Flex gap={10} align={'center'}>
            {types.map((type, key) => (
              <Image
                mah={30}
                maw={30}
                src={'/assets/icons/' + type.toLowerCase() + '.svg'}
                className="iconImage"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
                key={key}
                alt=""
              />
            ))}
          </Flex>
        </Flex>
      </Card>
    </Link>
  );
}

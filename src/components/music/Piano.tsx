import { Box, Card, Container, Flex, Text, Title } from '@mantine/core';
import { Helmet } from 'react-helmet-async';

import type { PianoSong } from './PianoSongs';
import { pianoSongs } from './PianoSongs';

export default function Piano() {
  return (
    <Container>
      <Helmet>
        <title>Music - Owen Moogk</title>
      </Helmet>
      <p className="title">Piano</p>
      <p className="subtitle">Imperfect renditions of songs I like.</p>
      <Flex justify="center" gap={20} wrap="wrap" mt={30}>
        {pianoSongs.map((song) => (
          <Song {...song} key={song.youtubeLink} />
        ))}
      </Flex>
    </Container>
  );
}

const Song = (song: PianoSong) => {
  return (
    <Card withBorder shadow="xl" radius="lg">
      <Card.Section>
        <iframe
          width={450}
          height={(450 * 9) / 16}
          style={{
            maxWidth: '100%',
            border: 'none',
          }}
          src={song.youtubeLink}
        />
      </Card.Section>
      <Flex mt={10} justify="space-between" gap={20}>
        <Box>
          <Title order={4} my={0}>
            {song.name}
          </Title>
          <Text size="sm" fs="italic">
            {song.artist}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
};

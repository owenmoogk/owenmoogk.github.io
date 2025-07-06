import { Anchor, Box, Container, Group, Text, Title } from '@mantine/core';
import { Helmet } from 'react-helmet-async';
import { FaGithub, FaLinkedin, FaSpotify } from 'react-icons/fa';

import { linkedIn } from '@global/global';

export default function ContactPage() {
  const iconProps = {
    size: 30,
    color: 'inherit',
    fill: 'var(--mantine-color-text)',
  };

  const linkProps = {
    target: '_blank',
    rel: 'noreferrer',
  };

  return (
    <Container>
      <Helmet>
        <title>{'Contact - Owen Moogk'}</title>
      </Helmet>
      <p className="title">Contact</p>
      <Box ta={'center'}>
        <Title order={2} fw={'normal'}>
          Say hello...
        </Title>
        <Text>
          <Anchor
            href="mailto:owenmoogk@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            owenmoogk@gmail.com
          </Anchor>
        </Text>
        <Title order={2} fw={'normal'}>
          ...or find me here
        </Title>

        <Group gap={15} justify="center">
          <a href={linkedIn} {...linkProps}>
            <FaLinkedin {...iconProps} />
          </a>
          <a href="https://github.com/owenmoogk" {...linkProps}>
            <FaGithub {...iconProps} />
          </a>
          <a
            href="https://open.spotify.com/user/uoxjt33b2c9axd2h9d74l3wag?si=R-cfHOGkSvGN-Ru5N81miQ"
            {...linkProps}
          >
            <FaSpotify {...iconProps} />
          </a>
        </Group>
      </Box>
    </Container>
  );
}

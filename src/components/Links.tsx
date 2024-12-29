import { Anchor, Stack } from '@mantine/core';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { linkedIn } from '@global/global';

export default function Links() {
  const iconProps = {
    color: 'var(--mantine-color-text)',
    size: 30,
  };

  return (
    <Stack pos={'fixed'} bottom="20px" right="20px" gap={10}>
      <Anchor
        href="https://github.com/owenmoogk"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub {...iconProps} />
      </Anchor>
      <Anchor
        href={linkedIn}
        aria-label="Linkedin"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin {...iconProps} />
      </Anchor>
    </Stack>
  );
}

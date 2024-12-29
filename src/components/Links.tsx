import { Anchor, Stack } from '@mantine/core';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { linkedIn } from '@global/global';

export default function Links() {
  const iconProps = {
    color: 'var(--mantine-color-text)',
  };

  return (
    <Stack id="links" gap={10}>
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

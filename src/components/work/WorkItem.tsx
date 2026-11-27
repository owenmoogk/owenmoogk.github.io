import {
  Accordion,
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Text,
} from '@mantine/core';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { FaBuilding } from 'react-icons/fa';

export type StringDictionary = Record<string, string>;

export const LOGO_SIZE = 48;
export const LOGO_GAP = 12;

type Props = {
  title: string;
  subtitle: string;
  summary?: ReactNode;
  dateString?: string;
  logo?: string;
  divider?: boolean;
};

function Logo({ src, alt }: { src?: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  const hasImage = !!src && !failed;
  return (
    <Center
      w={LOGO_SIZE}
      h={LOGO_SIZE}
      bdrs={4}
      fz={22}
      c="dimmed"
      bg={
        hasImage
          ? 'white'
          : 'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-5))'
      }
      style={{ flexShrink: 0, overflow: 'hidden' }}
    >
      {hasImage ? (
        <Image
          src={src}
          alt={alt}
          w="100%"
          h="100%"
          fit="contain"
          onError={() => setFailed(true)}
        />
      ) : (
        <FaBuilding aria-hidden />
      )}
    </Center>
  );
}

export default function WorkItem(props: Props) {
  function getSummary(summary?: ReactNode): ReactNode {
    if (summary) {
      return typeof summary === 'string' ? (
        <Text
          size="sm"
          dangerouslySetInnerHTML={{
            __html: summary
              .replaceAll('\n', '<br>')
              .replaceAll('\t', '&nbsp&nbsp'),
          }}
        />
      ) : (
        summary
      );
    }
    return null;
  }

  return (
    <Accordion.Item value={props.title + '-' + props.subtitle}>
      {/* Divider starts at the text column, like LinkedIn */}
      {props.divider && <Divider ml={LOGO_SIZE + LOGO_GAP} />}
      <Accordion.Control>
        <Flex gap={LOGO_GAP} align="center">
          <Logo src={props.logo} alt={props.subtitle} />
          <Box miw={0}>
            <Text fw={600} size="md" lh={1.3}>
              {props.title}
            </Text>
            <Text size="sm" lh={1.4}>
              {props.subtitle}
            </Text>
            {props.dateString && (
              <Text size="sm" c="dimmed" lh={1.4}>
                {props.dateString}
              </Text>
            )}
          </Box>
        </Flex>
      </Accordion.Control>
      <Accordion.Panel>
        {getSummary(props.summary) ?? (
          <Text size="sm">No information yet.</Text>
        )}
      </Accordion.Panel>
    </Accordion.Item>
  );
}

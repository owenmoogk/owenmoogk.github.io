import { Accordion, Box, Flex, Text, Title } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import type { ReactNode } from 'react';

export type StringDictionary = Record<string, string>;

type Props = {
  title: string;
  subtitle: string;
  summary?: ReactNode;
  dateString?: string;
};

export default function WorkItem(props: Props) {
  const { width } = useViewportSize();

  function getSummary(summary?: ReactNode) {
    if (summary) {
      return (
        <Box>
          {typeof summary === 'string' ? (
            <p
              dangerouslySetInnerHTML={{
                __html: summary
                  .replaceAll('\n', '<br>')
                  .replaceAll('\t', '&nbsp&nbsp'),
              }}
            />
          ) : (
            summary
          )}
        </Box>
      );
    }
    return null;
  }

  return (
    <Accordion.Item value={props.title + '-' + props.subtitle}>
      <Accordion.Control>
        <Flex justify="space-between" fw="bold" mr={20}>
          <Title order={5} m={0} maw="90%">
            {props.title} -{' '}
            <Text component="span" fs="italic">
              {props.subtitle}
            </Text>
          </Title>
          <Text
            className="workTitleDate"
            w="fit-content"
            m={0}
            hidden={width < 600}
          >
            {props.dateString}
          </Text>
        </Flex>
      </Accordion.Control>
      <Accordion.Panel>
        {getSummary(props.summary) ?? 'No information yet.'}
      </Accordion.Panel>
    </Accordion.Item>
  );
}

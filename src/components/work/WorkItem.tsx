import { Accordion, Box, Flex, Text, Title } from '@mantine/core';
import type { ReactNode } from 'react';

export type StringDictionary = Record<string, string>;

type Props = {
  title: string;
  subtitle: string;
  summary?: ReactNode;
  dateString?: string;
};

export default function WorkItem(props: Props) {
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
    <Accordion.Item value={props.title} key={props.title}>
      <Accordion.Control>
        <Flex justify={'space-between'} fw={'bold'} mr={20}>
          <Title order={4} m={0}>
            {props.title}
          </Title>
          <Text className="workTitleDate" w={'fit-content'} m={0}>
            {props.dateString}
          </Text>
        </Flex>
        <Text fs="italic" m={0}>
          {props.subtitle}
        </Text>
      </Accordion.Control>
      <Accordion.Panel>{getSummary(props.summary)}</Accordion.Panel>
    </Accordion.Item>
  );
}

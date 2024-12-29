import { Box, Flex, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { ReactNode } from 'react';
import { FaChevronRight } from 'react-icons/fa';

export type StringDictionary = Record<string, string>;

type Props = {
  title: string;
  subtitle: string;
  summary?: ReactNode;
  dateString?: string;
};

export default function WorkItem(props: Props) {
  const [collapsed, { toggle }] = useDisclosure(true);

  function getSummary(summary?: ReactNode) {
    if (summary && !collapsed) {
      return (
        <div className="content">
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
        </div>
      );
    }
    return null;
  }

  return (
    <Stack align="center" gap={0}>
      <Flex justify="space-between" align="center" w="100%" gap={25}>
        <div onClick={toggle}>
          {props.summary ? (
            <FaChevronRight
              style={{
                transform: collapsed ? 'rotate(0deg)' : 'rotate(90deg)',
                transition: 'transform 0.3s',
              }}
            />
          ) : (
            <FaChevronRight color="transparent" />
          )}
        </div>
        <Stack className="titleBlock" w="100%" onClick={toggle} gap={0}>
          <div className="workTitle">
            <span>{props.title}</span>
            <span className="workTitleDate">{props.dateString}</span>
          </div>
          {props.subtitle}
        </Stack>
      </Flex>
      <Flex ml={42}>{getSummary(props.summary)}</Flex>
    </Stack>
  );
}

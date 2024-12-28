import { useDisclosure } from '@mantine/hooks';
import type { ReactNode } from 'react';
import React from 'react';

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
    if (summary) {
      return (
        <div className="content" style={{ height: collapsed ? '0' : '' }}>
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
    <div className="workItem">
      {props.summary ? (
        <div className="graphics" onClick={toggle}>
          <div className="svg">
            <svg
              style={{
                transition: '0.3s',
                transform: !collapsed ? 'rotate(90deg)' : 'rotate(0deg',
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
            </svg>
          </div>
        </div>
      ) : (
        <div className="graphics" onClick={toggle}>
          <div className="svg" />
        </div>
      )}

      <div className="text">
        <div className="titleBlock" onClick={toggle}>
          <div className="workTitle">
            <span>{props.title}</span>
            <span className="workTitleDate">{props.dateString}</span>
          </div>
          {props.subtitle}
        </div>
        {getSummary(props.summary)}
      </div>
    </div>
  );
}

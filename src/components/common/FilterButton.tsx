import { Text } from '@mantine/core';
import type { Dispatch, SetStateAction } from 'react';

export default function FilterButton(props: {
  displayName?: string;
  name: string;
  setFilter: Dispatch<SetStateAction<string>>;
  filter: string;
  handle?: string;
}) {
  const { name, filter } = props;
  const displayName = props.displayName ?? name;
  const handle = props.handle ?? name;

  return (
    <span
      className={'sort_' + name + ' btn ' + (filter === name ? 'active' : '')}
      onClick={() => props.setFilter(handle)}
      style={{
        border: '2px solid var(--' + name + ', grey)',
        color: 'var(--' + name + ')',
      }}
    >
      <Text>{displayName}</Text>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .sort_${name}.active{
          background-color: var(--${name}) !important;
          color: var(--textColor) !important
        }
        .sort_${name}:hover{
          background-color: var(--${name}) !important;
          color: var(--textColor) !important
        }
      `,
        }}
      />
    </span>
  );
}

import { Box, Text } from '@mantine/core';
import type { Dispatch, SetStateAction } from 'react';

export default function FilterButton(props: {
  displayName: string;
  name: string;
  setFilter: Dispatch<SetStateAction<string>>;
  filter: string;
}) {
  const { name, filter, displayName } = props;

  const isActive = filter === name;

  return (
    <Box
      onClick={() => props.setFilter(name)}
      style={{
        border: '2px solid var(--color' + name + ', grey)',
        backgroundColor: isActive ? 'var(--color' + name + ') !important' : '',
        color: isActive
          ? 'var(--textColor) !important'
          : 'var(--color' + name + ')',
        cursor: 'pointer',
        transition: '0.3s',
        margin: '0 5px 5px 0',
        padding: '4px 6px',
      }}
      bdrs={4}
    >
      <Text>{displayName}</Text>
    </Box>
  );
}

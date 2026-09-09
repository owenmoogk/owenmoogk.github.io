import { Box } from '@mantine/core';

export default function Tag(props: { type: string }) {
  const type = props.type;
  return (
    <Box
      display="inline-flex"
      bdrs={10}
      pr={5}
      h="fit-content"
      my="auto"
      style={{
        border:
          '2px solid var(--' +
          type.toLowerCase().replace(/[^a-z]/gi, '') +
          ',grey)',
        alignItems: 'center',
      }}
    >
      <Box
        h={15}
        w={15}
        bdrs="50%"
        m={5}
        className="circle"
        style={{
          backgroundColor:
            'var(--' + type.toLowerCase().replace(/[^a-z]/gi, '') + ',grey)',
        }}
      />
      {type}
    </Box>
  );
}

import { Anchor, Container, Text } from '@mantine/core';

export default function NotFoundPage() {
  return (
    <Container id="notFoundPage" ta={'center'}>
      <h1 className="title">404!</h1>
      <p className="subtitle">Uh oh, looks like I lost you.</p>
      <Text>
        If there should be a valid page here, please{' '}
        <Anchor href="/contact">let me know</Anchor>.
        <br />
        <br />
        Country roads... <Anchor href="/">take me home</Anchor>.
      </Text>
    </Container>
  );
}

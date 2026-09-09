import { AppShell, Box, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import './main.css';
import { paths } from './Paths';
import { Spotlight } from '@components/Spotlight';

export default function App() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <AppShell
      padding="md"
      navbar={{
        width: 250,
        breakpoint: 'md',
        collapsed: { mobile: !opened },
      }}
    >
      <Box
        hiddenFrom="md"
        pos="fixed"
        top={15}
        right={15}
        p={3}
        style={{
          backdropFilter: 'blur(5px)',
          background: 'rgba(128, 128, 128, 0.2)',
          borderRadius: '5px',
          zIndex: 2,
        }}
        w="fit-content"
        h="fit-content"
      >
        <Burger opened={opened} onClick={toggle} />
      </Box>

      <AppShell.Navbar>
        <Nav close={close} />
      </AppShell.Navbar>
      <AppShell.Main>
        <Spotlight />
        <Box pb={50} px={{ base: 15, md: 40 }} pt={20}>
          <Routes>
            {paths.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children?.map((child, childIndex) => (
                  <Route
                    key={childIndex}
                    path={child.path}
                    element={child.element}
                  />
                ))}
              </Route>
            ))}
          </Routes>
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}

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
        top={10}
        left={10}
        p={3}
        style={{
          backdropFilter: 'blur(3px)',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '5px',
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
        <Box pb={50} pt={20} pl={40}>
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

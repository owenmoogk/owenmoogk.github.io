import { Container } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import './main.css';
import { paths } from './Paths';
import Links from '@components/Links';
import { Spotlight } from '@components/Spotlight';

export default function App() {
  const { width } = useViewportSize();

  return (
    <>
      <Nav />
      <Links />
      <Spotlight />
      <div id="backgroundDiv" />
      <Container
        maw={width < 700 ? '100vw' : 'calc(100vw - 120px)'}
        m="auto"
        pb={50}
        pt={40}
      >
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
      </Container>
    </>
  );
}

import { Container } from '@mantine/core';
import { Helmet } from 'react-helmet';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

import Assets from './components/assets/Assets';
import Blog from './components/blog/Blog';
import BlogPost from './components/blog/BlogPost';
import ContactPage from './components/contact/Contact';
import Homepage from './components/homepage/Homepage';
import { Nav } from './components/Nav';
import NotFoundPage from './components/NotFoundPage';
import ProjectDirectory from './components/projects/ProjectDirectory';
import ProjectPage from './components/projects/ProjectPage';
import Sitemap from './components/Sitemap';
import Workpage from './components/work/Workpage';
import './main.css';
// import Adventures from '@components/adventures/adventures';
import Links from '@components/Links';
import Memories from '@components/memories/memories';
import Projects from '@components/projects/Projects';
import { assetUrl } from '@global/global';

function Redirect({ to }: { to: string }) {
  window.location.replace(to);
  return null;
}

export default function App() {
  return (
    <>
      <Nav />
      <Links />
      <div id="backgroundDiv" />
      <Container maw={'100vw'} pb={50} pt={40}>
        <Routes>
          <Route path="/projects" element={<HelmetTitle name="Projects" />}>
            <Route index element={<Projects />} />
            <Route path="directory" element={<ProjectDirectory />} />
            <Route path=":name" element={<ProjectPage />} />
          </Route>
          <Route path="/notes" element={<HelmetTitle name="Notes" />}>
            <Route index element={<Blog />} />
            <Route path=":name" element={<BlogPost />} />
          </Route>
          <Route path="/work" element={<Workpage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/sitemap" element={<Sitemap />} />
          {/* <Route path="/adventures" element={<Adventures />} /> */}
          <Route path="/memories" element={<Memories />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route
            path="/github"
            element={<Redirect to="https://github.com/owenmoogk/" />}
          />
          <Route
            path="/resume"
            element={<Redirect to={assetUrl + 'resume/resume.pdf'} />}
          />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Container>
    </>
  );
}

function HelmetTitle(props: { name: string }) {
  return (
    <>
      <Helmet>
        <title>{props.name + ' - Owen Moogk'}</title>
      </Helmet>
      <Outlet />
    </>
  );
}

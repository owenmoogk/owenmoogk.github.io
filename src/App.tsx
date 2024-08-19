import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  Navigate,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import Assets from './components/Assets';
import Blog from './components/blog/Blog';
import BlogPost from './components/blog/BlogPost';
import ContactPage from './components/contact/Contact';
import Homepage from './components/homepage/Homepage';
import Nav from './components/Nav';
import NotFoundPage from './components/NotFoundPage';
import './main.css';
import ProjectDirectory from './components/projects/ProjectDirectory';
import ProjectPage from './components/projects/ProjectPage';
import Sitemap from './components/Sitemap';
import Workpage from './components/work/Workpage';
import Projects from '@components/projects/Projects';

function Redirect() {
  window.location.replace('https://github.com/owenmoogk/');
  return (<></>);
}

export default function App() {

  const [ darkMode, setDarkMode ] = useState(localStorage.getItem('darkmode') !== 'false');

  function toggleDarkMode() {
    localStorage.setItem('darkmode', darkMode ? 'false' : 'true');
    setDarkMode(!darkMode);
  }

  function updateDarkMode(darkMode: boolean) {
    if (darkMode) { document.body.classList.add('dark'); } else { document.body.classList.remove('dark'); }
  }

  useEffect(() => { updateDarkMode(darkMode); }, [ darkMode ]);

  updateDarkMode(darkMode);

  return (
    <>
      <div id="backgroundDiv" />
      <Router>
        <Nav toggleDarkMode={toggleDarkMode} />
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
          <Route path="/" element={<Homepage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/github" element={<Redirect />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </>
  );
}

function HelmetTitle(props: {
  name: string;
}) {
  return (
    <>
      <Helmet>
        <title>{props.name + ' - Owen Moogk'}</title>
      </Helmet>
      <Outlet />
    </>
  );
}

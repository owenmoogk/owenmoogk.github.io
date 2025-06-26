import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, Outlet } from 'react-router-dom';

import Assets from './components/assets/Assets';
import ContactPage from './components/contact/Contact';
import Homepage from './components/homepage/Homepage';
// import Blog from './components/notes/Blog';
// import BlogPost from './components/notes/BlogPost';
import NotFoundPage from './components/NotFoundPage';
import ProjectDirectory from './components/projects/ProjectDirectory';
import ProjectPage from './components/projects/ProjectPage';
import Sitemap from './components/Sitemap';
import Workpage from './components/work/Workpage';
import './main.css';
import Adventures from '@components/adventures/adventures';
import Memories from '@components/memories/memories';
import SpotifyFavorites from '@components/music/Music';
import Piano from '@components/music/Piano';
// import Collections from '@components/notes/collections/Collections';
import ProjectIdeas from '@components/projects/ProjectIdeas';
import Projects from '@components/projects/Projects';
import { assetUrl } from '@global/global';

export type PathList = {
  path: string;
  element: ReactNode;
  children?: PathList[];
};

export const paths: PathList[] = [
  {
    path: '/projects',
    element: <HelmetTitle name="Projects" />,
    children: [
      { path: '', element: <Projects /> },
      { path: 'directory', element: <ProjectDirectory /> },
      { path: 'ideas', element: <ProjectIdeas /> },
      { path: ':name', element: <ProjectPage /> },
    ],
  },
  // {
  //   path: '/notes',
  //   element: <HelmetTitle name="Notes" />,
  //   children: [
  //     { path: '', element: <Blog /> },
  //     { path: 'collections', element: <Collections /> },
  //     { path: ':name', element: <BlogPost /> },
  //   ],
  // },
  { path: '/work', element: <Workpage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/assets', element: <Assets /> },
  { path: '/sitemap', element: <Sitemap /> },
  { path: '/adventures', element: <Adventures /> },
  { path: '/memories', element: <Memories /> },
  { path: '/', element: <Homepage /> },
  { path: '/404', element: <NotFoundPage /> },
  { path: '/music/favorites', element: <SpotifyFavorites /> },
  { path: '/music/piano', element: <Piano /> },
  {
    path: '/github',
    element: <Redirect to="https://github.com/owenmoogk/" />,
  },
  {
    path: '/resume',
    element: <Redirect to={assetUrl + 'resume/resume.pdf'} />,
  },
  { path: '*', element: <Navigate to="/404" /> },
];

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

function Redirect({ to }: { to: string }) {
  window.location.replace(to);
  return null;
}

import React from 'react';
import Helmet from 'react-helmet';
import {
  Route,
  Routes,
} from 'react-router-dom';
import ProjectDirectory from './projects/ProjectDirectory';
import ProjectPage from './projects/ProjectPage';
import Projects from './projects/Projects';

export default function ProjectRouter() {
  return (
    <>
      <Helmet>
        <title>{'Projects - Owen Moogk'}</title>
      </Helmet>
      <Routes>
        <Route path="" element={<Projects />} />
        <Route path="/directory" element={<ProjectDirectory />} />
        <Route path="/:name" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

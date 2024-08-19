import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { fetchProjects } from '../api/projects';
import type { Project } from '../api/types';
import global from '../global/global.json';
const { homepage } = global;

export default function Sitemap() {

  const [ projectData, setProjectData ] = useState<Project[]>();

  useEffect(() => {
    fetchProjects()
      .then(response => setProjectData(response))
      .catch(() => null);
  }, []);

  return (
    <div className="main" id="resourcePage">
      <Helmet>
        <title>{'Sitemap - Owen Moogk'}</title>
      </Helmet>
      <p className="title">Sitemap</p>
      <p className="subtitle">All other subpages (that are worth looking at).</p>
      {projectData ?
        <div className="assets">
          <ul>
            <li><a href="/assets">/assets</a></li>
            <li><a href="/projects/directory">/projects/directory</a></li>
            <br />
            {projectData.map((project, key) => {
              // don't include external links in sitemap (eg. Janik's Cat Feeder)
              if (project.externalLink && !project.externalLink.includes('https://')) {
                const link = homepage + project.externalLink;
                let linkDisplay = project.externalLink;
                if (linkDisplay.endsWith('/')) { linkDisplay = linkDisplay.slice(0, -1); }
                if (!linkDisplay.startsWith('/')) { linkDisplay = '/' + linkDisplay; }
                return (
                  <li key={key}>
                    <a href={link} target="_blank" rel="noreferrer">{linkDisplay}</a>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
        : null
      }
    </div>
  );
}

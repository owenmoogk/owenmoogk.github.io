import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

import type { Project } from '@api/projects';
import { homepageUrl } from '@global/global';

import data from '@api/projects.json';

const projectData = data as Project[];

export default function Sitemap() {
  return (
    <div className="main" id="resourcePage">
      <Helmet>
        <title>{'Sitemap - Owen Moogk'}</title>
      </Helmet>
      <p className="title">Sitemap</p>
      <p className="subtitle">
        All other subpages (that are worth looking at).
      </p>
      <div className="assets">
        <ul>
          <li>
            <Link to="/assets">/assets</Link>
          </li>
          <li>
            <Link to="/projects/directory">/projects/directory</Link>
          </li>
          <li>
            <Link to="/memories">/memories</Link>
          </li>
          <br />
          {projectData.map((project, key) => {
            // don't include external links in sitemap (eg. Janik's Cat Feeder)
            if (
              project.externalLink &&
              !project.externalLink.includes('https://')
            ) {
              const link = homepageUrl + project.externalLink;
              let linkDisplay = project.externalLink;
              if (linkDisplay.endsWith('/')) {
                linkDisplay = linkDisplay.slice(0, -1);
              }
              if (!linkDisplay.startsWith('/')) {
                linkDisplay = '/' + linkDisplay;
              }
              return (
                <li key={key}>
                  <Link to={link} target="_blank" rel="noreferrer">
                    {linkDisplay}
                  </Link>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
}

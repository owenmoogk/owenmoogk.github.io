import { Flex } from '@mantine/core';
import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

import type { PathList } from '../Paths';
import { paths } from '../Paths';
import type { Project } from '@api/projects';
import { homepageUrl } from '@global/global';

import data from '@api/projects.json';

const projectData = data as Project[];

function renderPathLinks(paths: PathList[], parent?: string): ReactNode {
  if (!parent) parent = '';
  return paths.map(
    (path, key) =>
      path.path &&
      path.path !== '/' &&
      !path.path.startsWith(':') &&
      path.path !== '*' && (
        <>
          <li key={key}>
            <Link to={parent + path.path}>{parent + path.path}</Link>
          </li>
          {path.children &&
            renderPathLinks(path.children, parent + path.path + '/')}
        </>
      )
  );
}

export default function Sitemap() {
  return (
    <Flex align="center" direction="column">
      <Helmet>
        <title>Sitemap - Owen Moogk</title>
      </Helmet>
      <p className="title">Sitemap</p>
      <p className="subtitle">All subpages on my domain.</p>
      <div>
        <ul>
          {renderPathLinks(paths)}
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
    </Flex>
  );
}

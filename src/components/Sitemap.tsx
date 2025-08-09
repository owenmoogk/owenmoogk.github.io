import { Flex } from '@mantine/core';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

import type { PathList } from '../Paths';
import { paths } from '../Paths';
import type { Project } from '@api/projects';
import { homepageUrl } from '@global/global';

import data from '@api/projects.json';
import type { ReactNode } from 'react';

const projectData = data as Project[];

export function getAllPathLinks(
  paths: PathList[],
  parent?: string
): PathList[] {
  if (!parent) parent = '';
  const returnPaths: PathList[] = [];
  for (const path of paths) {
    if (
      path.path &&
      path.path !== '/' &&
      !path.path.startsWith(':') &&
      path.path !== '*' &&
      path.path !== '/404'
    ) {
      returnPaths.push({ ...path, path: parent + path.path });
      if (path.children) {
        returnPaths.push(
          ...getAllPathLinks(path.children, parent + path.path + '/')
        );
      }
    }
  }
  return returnPaths;
}

function getPathElements(): ReactNode {
  return getAllPathLinks(paths).map((path, key) => (
    <li key={key}>
      <Link to={path.path}>{path.path}</Link>
    </li>
  ));
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
          {getPathElements()}
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

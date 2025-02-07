import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import type { Project } from '@api/projects';
import { homepageUrl } from '@global/global';

export default function ProjectIcon(props: { data: Project }) {
  const data = props.data;
  const githubLink =
    data.githubLink ?? 'https://github.com/owenmoogk/' + data.name;
  const types = data.types.map((x: string) => x.toLowerCase());
  const primaryType = types[0] ?? '';
  let externalLink: string | undefined = data.externalLink?.includes('https://')
    ? data.externalLink
    : homepageUrl + data.externalLink;
  // if it doesn't exist just leave it
  externalLink = data.externalLink ? externalLink : data.externalLink;

  return (
    <Link to={'../' + data.name}>
      {/* content is the overarching; primary type is for the after pseudo element style above; and type is for sorting*/}
      <div className={'content ' + primaryType + 'Tile ' + types.join(' ')}>
        <div>
          <span className="contentTitle">{data.title}</span>
          <span className="dot">--</span>
          <span className="contentDesc">{data.description}</span>

          {/* this is just for sorting, not display */}
          <span className="type" style={{ display: 'none' }}>
            {types.map((x) => x)}
          </span>
        </div>

        <div className="projectIcons">
          {externalLink && (
            <a href={externalLink} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt size={19} />
            </a>
          )}

          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer">
              <FaGithub size={24} />
            </a>
          )}
        </div>
      </div>
    </Link>
  );
}

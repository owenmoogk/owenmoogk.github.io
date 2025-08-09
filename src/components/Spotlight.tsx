import { snakeToTitleCase } from '@api/util';
import { Spotlight as MantineSpotlight } from '@mantine/spotlight';
import { paths } from '../Paths';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import type { SpotlightActions } from '@mantine/spotlight/lib/Spotlight';
import projectData from '../api/projects.json';
import { getAllPathLinks } from './Sitemap';

export function Spotlight() {
  const navigate = useNavigate();

  const actions: SpotlightActions[] = getAllPathLinks(paths).map((path) => ({
    onClick: async () => navigate(path.path),
    label:
      path.name ??
      path.path
        .split('/')
        .filter((x) => !!x)
        .map((pathName) => snakeToTitleCase(pathName))
        .join(' > '),
    id: path.path,
    description: path.path,
  }));

  const projectActions: SpotlightActions[] = projectData.map((proj) => ({
    label: 'Projects > ' + proj.title,
    id: proj.name + 'project',
    description: proj.description,
    onClick: async () => navigate('/projects/' + proj.name),
  }));

  actions.push(...projectActions);

  return (
    <MantineSpotlight
      scrollable
      actions={actions}
      nothingFound="Nothing found..."
      highlightQuery
      searchProps={{
        leftSection: <FaSearch />,
        placeholder: 'Search...',
      }}
    />
  );
}

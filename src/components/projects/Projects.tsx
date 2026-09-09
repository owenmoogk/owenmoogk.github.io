import { Box, Flex } from '@mantine/core';
import { useState } from 'react';
import { Link } from 'react-router';

import FeaturedIcon from './FeaturedIcon';
import data from '../../api/projects.json';
import FilterButton from '../common/FilterButton';
import type { Project } from '@api/projects';

const projectData = data as Project[];

export default function ProjectPage() {
  const [filter, setFilter] = useState<string>('');

  return (
    <Box id="projectPage">
      <p className="title">Projects</p>
      <p className="subtitle">
        These are some of my favorite projects. For a complete list, have a look{' '}
        <Link to="/projects/directory">here</Link>.
      </p>
      <Flex my={20}>
        <FilterButton
          name=""
          displayName="All"
          setFilter={setFilter}
          filter={filter}
        />
        <FilterButton
          name="python"
          displayName="Python"
          setFilter={setFilter}
          filter={filter}
        />
        <FilterButton
          name="javascript"
          displayName="Javascript"
          setFilter={setFilter}
          filter={filter}
        />
        <FilterButton
          name="react"
          displayName="React"
          setFilter={setFilter}
          filter={filter}
        />{' '}
        <FilterButton
          name="solidworks"
          displayName="SolidWorks"
          setFilter={setFilter}
          filter={filter}
        />
      </Flex>

      <Flex wrap="wrap" gap={20}>
        {projectData.map((data, key) => {
          const dataTypes = data.types.map((item) => item.toLowerCase());
          if (data.featured && (dataTypes.includes(filter) || filter === '')) {
            return <FeaturedIcon data={data} key={key} />;
          }
          return null;
        })}
      </Flex>
    </Box>
  );
}

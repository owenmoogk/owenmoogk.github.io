import { Container } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';

import FeaturedIcon from './FeaturedIcon';
import FilterButton from '../common/FilterButton';
import type { Project } from '@api/projects';
import { fetchProjects } from '@api/projects';

export default function ProjectPage() {
  const [projectData, setProjectData] = useState<Project[]>();
  const [filter, setFilter] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects()
      .then((data) => setProjectData(data))
      .catch(() => void navigate('/404'));
  }, [navigate]);

  return (
    <Container maw={1400} id="projectPage">
      <p className="title" id="projectTitle">
        Projects
      </p>
      <p className="subtitle">
        These are some of my favorite projects. For a complete list, have a look{' '}
        <Link to="/projects/directory">here</Link>.
      </p>
      <div id="sortingContainer">
        <div id="buttonContainer">
          <FilterButton
            name="All"
            handle=""
            setFilter={setFilter}
            filter={filter}
          />
          <FilterButton name="Python" setFilter={setFilter} filter={filter} />
          <FilterButton
            name="Javascript"
            setFilter={setFilter}
            filter={filter}
          />
          <FilterButton name="React" setFilter={setFilter} filter={filter} />
          <FilterButton
            name="Solidworks"
            setFilter={setFilter}
            filter={filter}
          />
        </div>
      </div>

      <div id="featuredProjects">
        <div id="featuredContainer">
          {projectData?.map((data, key) => {
            const dataTypes = data.types.map((item) => item.toLowerCase());
            if (
              data.featured &&
              (dataTypes.includes(filter) || filter === '')
            ) {
              return <FeaturedIcon data={data} key={key} />;
            }
            return null;
          })}
        </div>
      </div>
    </Container>
  );
}

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import FilterButton from '../common/FilterButton';
import FeaturedIcon from './FeaturedIcon';
import type { Project } from '@api/projects';
import { fetchProjects } from '@api/projects';

export default function ProjectPage() {

  const [ projectData, setProjectData ] = useState<Project[]>();
  const [ filter, setFilter ] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects()
      .then(data => setProjectData(data))
      .catch(() => navigate('/404'));
  }, [ navigate ]);

  return (
    <div className="main" id="projectPage">
      <p className="title" id="projectTitle">Projects</p>
      <p className="subtitle">These are some of my favorite projects. For a complete list, have a look <a href="/projects/directory">here</a>.</p>
      <div id="sortingContainer">
        <div id="buttonContainer">
          <FilterButton name="All" handle="" setFilter={setFilter} filter={filter} />
          <FilterButton name="Python" setFilter={setFilter} filter={filter} />
          <FilterButton name="Javascript" setFilter={setFilter} filter={filter} />
          <FilterButton name="React" setFilter={setFilter} filter={filter} />
          <FilterButton name="Solidworks" setFilter={setFilter} filter={filter} />
        </div>
      </div>

      <div id="featuredProjects">
        <div id="featuredContainer">
          {projectData
            ? projectData.map((data, key) => {
              const dataTypes = data.types.map(item => item.toLowerCase());
              if (data.featured && (dataTypes.includes(filter) || filter === '')) {
                return (
                  <FeaturedIcon data={data} key={key} />
                );
              }
              return (null);
            })
            : null
          }
        </div>
      </div>
    </div>
  );
}

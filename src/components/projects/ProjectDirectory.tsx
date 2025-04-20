import { Box, TextInput } from '@mantine/core';
import { useState } from 'react';

import ProjectIcon from './ProjectIcon';
import data from '../../api/projects.json';
import FilterButton from '../common/FilterButton';
import type { Project } from '@api/projects';

const projectData = data as Project[];

export default function ProjectDirectory() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filter, setFilter] = useState<string>('');

  return (
    <Box className="projectDirectoryPage" id="projectPage" maw={800} m="auto">
      <p className="title" id="projectTitle">
        Project Directory
      </p>
      <p className="subtitle">
        All my projects. A lot of them are old, simple or just not worth showing
        off. But we all start somewhere.
      </p>
      <div id="sortingContainer">
        <div id="buttonContainer">
          <FilterButton
            name=""
            displayName="All"
            handle=""
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
          />
          <FilterButton
            name="django"
            displayName="Django"
            setFilter={setFilter}
            filter={filter}
          />
          <FilterButton
            name="solidworks"
            displayName="SolidWorks"
            setFilter={setFilter}
            filter={filter}
          />
          <FilterButton
            name="mechanical"
            displayName="Mechanical"
            setFilter={setFilter}
            filter={filter}
          />
        </div>
        <TextInput
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Search"
          title="Type to search"
          id="projectSearchBox"
        />
      </div>
      <div id="projectIcons">
        {projectData.map((data, key) => {
          const dataTypes = data.types.map((item) => item.toLowerCase());
          const searchQueryLower = searchQuery.toLowerCase();
          const matchesSearchQuery =
            data.description.toLowerCase().includes(searchQueryLower) ||
            data.name.toLowerCase().includes(searchQueryLower) ||
            data.title.toLowerCase().includes(searchQueryLower);

          if (
            (dataTypes.includes(filter) || filter === '') &&
            (matchesSearchQuery || searchQueryLower === '')
          ) {
            return <ProjectIcon data={data} key={key} />;
          }
        })}
      </div>
    </Box>
  );
}

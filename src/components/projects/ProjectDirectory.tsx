import { Box, Flex, TextInput } from '@mantine/core';
import { useState } from 'react';

import data from '../../api/projects.json';
import FilterButton from '../common/FilterButton';
import type { Project } from '@api/projects';
import FeaturedIcon from './FeaturedIcon';

const projectData = data as Project[];

export default function ProjectDirectory() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filter, setFilter] = useState<string>('');

  return (
    <Box maw={800}>
      <p className="title">Project Directory</p>
      <p className="subtitle">
        All my projects. A lot of them are old, simple or just not worth showing
        off. But we all start somewhere.
      </p>
      <Flex my={20} direction="column">
        <Flex wrap="wrap">
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
        </Flex>
        <TextInput
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Search"
          title="Type to search"
          id="projectSearchBox"
          maw={300}
        />
      </Flex>
      <Flex direction="column" gap={15}>
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
            return (
              <FeaturedIcon
                data={data}
                key={key}
                enableImages={false}
                linkPrefix="../"
              />
            );
          }
        })}
      </Flex>
    </Box>
  );
}

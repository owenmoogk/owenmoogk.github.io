import { Box, Flex } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { useState } from 'react';
import { Link } from 'react-router';

import ProjectCard from './ProjectCard';
import data from '../../api/projects.json';
import FilterButton from '../common/FilterButton';
import type { Project } from '@api/projects';

const projectData = data as Project[];

const CARD_MIN = 250;
const CARD_MAX = 320;
const CARD_GAP = 15;
const MAX_COLS = 4;

export default function ProjectPage() {
  const [filter, setFilter] = useState<string>('');

  // Fit as many columns as possible at CARD_MIN, then let them grow up to
  // CARD_MAX (at most MAX_COLS per row). The gap stays fixed and any leftover
  // space sits on the right.
  const { ref: gridRef, width } = useElementSize();
  const cols = Math.min(
    MAX_COLS,
    Math.max(1, Math.floor((width + CARD_GAP) / (CARD_MIN + CARD_GAP)))
  );
  const colWidth = Math.min(CARD_MAX, (width - (cols - 1) * CARD_GAP) / cols);
  const gridTemplateColumns =
    width > 0
      ? `repeat(${String(cols)}, ${String(colWidth)}px)`
      : `repeat(auto-fill, minmax(${String(CARD_MIN)}px, ${String(CARD_MAX)}px))`;

  return (
    <Box>
      <p className="title">Projects</p>
      <p className="subtitle">
        These are some of my favorite projects. For a complete list, have a look{' '}
        <Link to="/projects/directory">here</Link>.
      </p>
      <Flex my={20} wrap="wrap">
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
          name="solidworks"
          displayName="SolidWorks"
          setFilter={setFilter}
          filter={filter}
        />
      </Flex>

      <Box
        ref={gridRef}
        style={{
          display: 'grid',
          gridTemplateColumns,
          gap: CARD_GAP,
          // A single column means a narrow (mobile) screen, so center it
          justifyContent: cols === 1 ? 'center' : 'start',
        }}
      >
        {projectData.map((data, key) => {
          const dataTypes = data.types.map((item) => item.toLowerCase());
          if (data.featured && (dataTypes.includes(filter) || filter === '')) {
            return <ProjectCard data={data} key={key} />;
          }
          return null;
        })}
      </Box>
    </Box>
  );
}

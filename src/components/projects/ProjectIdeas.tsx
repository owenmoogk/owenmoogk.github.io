import { Box } from '@mantine/core';

import useFetchData from '@api/useGetData';
import { MarkdownRenderer } from '@components/common/MarkdownRenderer';

const fetchIdeas = async () => {
  const ideas = await fetch('/assets/projects/ideas.md');
  return await ideas.text();
};

export default function ProjectIdeas() {
  const ideaMarkdown = useFetchData(fetchIdeas, null);
  return (
    <Box className="projectDirectoryPage" id="projectPage" maw={700} m="auto">
      <p className="title" id="projectTitle">
        Future Project Ideas
      </p>
      <p className="subtitle">
        Everything that's been sitting around in my brain for too long.
      </p>
      {ideaMarkdown && <MarkdownRenderer content={ideaMarkdown} />}
    </Box>
  );
}

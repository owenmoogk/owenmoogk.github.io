import { Box, Flex, Title } from '@mantine/core';
import { GithubCard } from 'github-repo-card';
import { Helmet } from 'react-helmet-async';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import Tag from '../common/Tags';
import { fetchProjectJSON, fetchProjectMarkdown } from '@api/projects';
import useFetchData from '@api/useGetData';
import { MarkdownRenderer } from '@components/common/MarkdownRenderer';
import { homepageUrl } from '@global/global';

export default function ProjectPage() {
  const { name } = useParams();

  const projectName = name ?? '';

  const metaData = useFetchData(fetchProjectJSON, projectName);
  const projectData = useFetchData(fetchProjectMarkdown, projectName);

  function parseMarkdown(data: string) {
    if (!data) {
      return '';
    }

    // this replaces the image paths to point to the proper project directory
    // https://stackoverflow.com/questions/52852425/change-image-source-in-markdown-text-using-node-js
    // it's called a 'capture group' in regex
    // however, it doesn't match anything with https:// because that means it's an external link
    // also, it doesn't match anything that starts with a slash, because that means it wants the root directory (eg "contact me" is /contact, and not the project dir)
    data = data.replaceAll(
      /\]\((?!https?:\/\/)(?!\/)(.+?)(?=(.+))/g,
      `](/assets/projects/${projectName}/$1`
    );

    // replace the src on video tags
    data = data.replaceAll(
      /<video src=("|')(.+?)\1><\/video>/g,
      `<video src="/assets/projects/${projectName}/$2" controls></video>`
    );

    return data;
  }

  function buildProjectPage() {
    if (!metaData) {
      return;
    }

    let externalLink: string | undefined = metaData.externalLink?.includes(
      'https://'
    )
      ? metaData.externalLink
      : homepageUrl + (metaData.externalLink ?? '');
    // if it doesn't exist just leave it
    externalLink = metaData.externalLink ? externalLink : metaData.externalLink;

    return (
      <div id="projectBody">
        <Helmet>
          <title>{metaData.title + ' - Owen Moogk'}</title>
        </Helmet>
        <div className="title">{metaData.title}</div>
        <p className="subtitle">{metaData.date}</p>
        <Flex id="icons" gap="sm" align="center" mb={20}>
          {metaData.githubLink === '' ? null : (
            <a
              href={
                metaData.githubLink
                  ? metaData.githubLink
                  : 'https://github.com/owenmoogk/' + projectName
              }
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={24} />
            </a>
          )}

          {externalLink && (
            <a href={externalLink} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt size={20} />
            </a>
          )}

          {metaData.types.map((type: string, key: number) => {
            return <Tag type={type} key={key} />;
          })}
        </Flex>
        <div id="blocks">
          <MarkdownRenderer
            content={parseMarkdown(projectData ?? '')}
            projectName={projectName}
          />
        </div>
        {metaData.githubLink === undefined && (
          <Box w="100%">
            <Title order={3}>Check it out on GitHub!</Title>
            <GithubCard username="owenmoogk" repo={projectName} />
          </Box>
        )}
      </div>
    );
  }

  return metaData && projectData ? (
    buildProjectPage()
  ) : (
    // will put errors here if there are any
    <div id="projectBody" />
  );
}

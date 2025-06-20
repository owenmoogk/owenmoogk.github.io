import { Box, Flex, Image, Text } from '@mantine/core';
import { useEffect } from 'react';
import ReactCompareImage from 'react-compare-image';
import { Helmet } from 'react-helmet-async';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import MarkdownView from 'react-showdown';

import Tag from '../common/Tags';
import { fetchProjectJSON, fetchProjectMarkdown } from '@api/projects';
import useFetchData from '@api/useGetData';
import { homepageUrl } from '@global/global';

export default function ProjectPage() {
  const { name } = useParams();

  const projectName = name ?? '';

  const metaData = useFetchData(fetchProjectJSON, projectName);
  const projectData = useFetchData(fetchProjectMarkdown, projectName);

  // this is really stupid and is fully bad practice,
  // but......
  // showdown doesn't handle videos properly so its not my fault, ok...?
  // TLDR: Giving the videos controls because showdown removes them.
  useEffect(() => {
    const interval = setInterval(() => {
      document.querySelectorAll('video').forEach((video) => {
        video.setAttribute('controls', 'true');
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

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

        <Flex id="icons" gap="sm" align="center">
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
          <MarkdownView
            markdown={parseMarkdown(projectData ?? '')}
            options={{ tables: true, emoji: true }}
            components={{
              img(props: { alt: string; src: string }) {
                return (
                  <Flex
                    justify={'center'}
                    direction={'column'}
                    component="span"
                    mb={30}
                  >
                    <Image src={props.src} alt="" p={0} m={0} />
                    <Text
                      mt={10}
                      size={'14px'}
                      c={
                        'light-dark(var(--mantine-color-dark-4),var(--mantine-color-gray-1))'
                      }
                      ta={'center'}
                      lh={'20px'}
                      component="span"
                    >
                      {props.alt}
                    </Text>
                  </Flex>
                );
              },
              h4(props: { children: string[] }) {
                const [image1, image2] = props.children[0].split(',');
                return (
                  <div className="sliderContainer">
                    <ReactCompareImage
                      leftImage={
                        '/assets/projects/' + projectName + '/' + image1
                      }
                      rightImage={
                        '/assets/projects/' + projectName + '/' + image2
                      }
                      aspectRatio="taller"
                      handle={
                        <button
                          style={{
                            height: '50px',
                            outline: 'none',
                            width: '10px',
                            border: 'none',
                            borderRadius: '5px',
                          }}
                        />
                      }
                    />
                    <span className="subtitle">
                      Move the slider to see inside.
                    </span>
                  </div>
                );
              },
            }}
          />
        </div>
      </div>
    );
  }

  return metaData && projectData ? (
    buildProjectPage()
  ) : (
    // will put errors here if there are any
    <div id="projectBody" className="main" />
  );
}

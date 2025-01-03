import { Flex } from '@mantine/core';
import { useEffect, useState } from 'react';
import ReactCompareImage from 'react-compare-image';
import { Helmet } from 'react-helmet-async';

import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import MarkdownView from 'react-showdown';

import Tag from '../common/Tags';
import type { Project } from '@api/projects';
import { fetchProjectJSON, fetchProjectMarkdown } from '@api/projects';
import { homepageUrl } from '@global/global';

export default function ProjectPage() {
  const [projectData, setProjectData] = useState<string>();
  const [metaData, setMetaData] = useState<Project>();
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjectJSON(name ?? '')
      .then((response) => setMetaData(response))
      .catch(() => void navigate('/404'));

    fetchProjectMarkdown(name ?? '')
      .then((response) => setProjectData(response))
      .catch(() => void navigate('/404'));
  }, [name, navigate]);

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
      `](/assets/projects/${name}/$1`
    );

    // replace the src on video tags
    data = data.replaceAll(
      /<video src=("|')(.+?)\1><\/video>/g,
      `<video src="/assets/projects/${name}/$2" controls></video>`
    );

    return data;
  }

  function buildProjectPage() {
    if (!metaData) {
      return;
    }

    let externalLink = metaData.externalLink?.includes('https://')
      ? metaData.externalLink
      : homepageUrl + metaData.externalLink;
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
                  : 'https://github.com/owenmoogk/' + name
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
              h4(props: { children: string[] }) {
                const [image1, image2] = props.children[0].split(',');
                return (
                  <div className="sliderContainer">
                    <ReactCompareImage
                      leftImage={'/assets/projects/' + name + '/' + image1}
                      rightImage={'/assets/projects/' + name + '/' + image2}
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

import { CodeHighlight } from '@mantine/code-highlight';
import { Flex, Image, Text } from '@mantine/core';
import { useEffect } from 'react';
import ReactCompareImage from 'react-compare-image';
import MarkdownView from 'react-showdown';

export const MarkdownRenderer = (props: {
  content: string;
  projectName?: string;
}) => {
  const { projectName, content } = props;

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

  return (
    <MarkdownView
      markdown={content}
      options={{ tables: true, emoji: true }}
      components={{
        img(props: { alt: string; src: string }) {
          return (
            <Flex justify="center" direction="column" component="span" mb={30}>
              <Image src={props.src} alt="" p={0} m={0} />
              <Text
                mt={10}
                size="14px"
                c="light-dark(var(--mantine-color-dark-4),var(--mantine-color-gray-1))"
                ta="center"
                lh="20px"
                component="span"
              >
                {props.alt}
              </Text>
            </Flex>
          );
        },
        code(props: { children: string[]; className?: string }) {
          const language = props.className?.split(' ')[0];
          if (!language) {
            return (
              <code
                style={{
                  backgroundColor:
                    'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-6))',
                }}
              >
                {props.children[0]}
              </code>
            );
          }
          return <CodeHighlight language={language} code={props.children[0]} />;
        },
        h4(props: { children: string[]; id: string }) {
          if (props.children[0].includes('::compare-image')) {
            if (!projectName) {
              console.warn(
                'Warning: Project Name not passed to MarkdownRenderer'
              );
              return;
            }
            const [image1, image2] = props.children[0]
              .split('[')[1]
              .split(']')[0]
              .split(',');
            return (
              <Flex
                className="sliderContainer"
                direction="column"
                align="center"
                justify="center"
                m="auto"
              >
                <ReactCompareImage
                  leftImage={'/assets/projects/' + projectName + '/' + image1}
                  rightImage={'/assets/projects/' + projectName + '/' + image2}
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
                <Text className="subtitle">Move the slider to see inside.</Text>
              </Flex>
            );
          }
          return <h4 id={props.id}>{props.children}</h4>;
        },
      }}
    />
  );
};

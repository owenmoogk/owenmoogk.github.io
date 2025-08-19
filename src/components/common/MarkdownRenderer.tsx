import { CodeHighlight } from '@mantine/code-highlight';
import { Flex, Image, Text } from '@mantine/core';
import type { ReactNode } from 'react';
import ReactCompareImage from 'react-compare-image';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import remarkGfm from 'remark-gfm';

export const MarkdownRenderer = (props: {
  content: string;
  projectName?: string;
}) => {
  const { projectName, content } = props;

  const CompareImage = (props: { id: string; children: ReactNode }) => {
    if (!projectName) {
      console.warn('Warning: Project Name not passed to MarkdownRenderer');
      return;
    }
    if (typeof props.children !== 'string') return;
    const [image1, image2] = props.children.split(',');
    return (
      <Flex className="sliderContainer" direction="column" m="auto">
        <ReactCompareImage
          leftImage={'/assets/projects/' + projectName + '/' + image1}
          rightImage={'/assets/projects/' + projectName + '/' + image2}
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
  };

  const components = {
    img: (props: { src?: string; alt?: string }) => {
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
    code(props: { className?: string; children?: ReactNode }) {
      if (typeof props.children !== 'string') return;
      const language = props.className?.split('language-')[1];
      if (!language) {
        return (
          <code
            style={{
              backgroundColor:
                'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-6))',
            }}
          >
            {props.children}
          </code>
        );
      }
      return <CodeHighlight language={language} code={props.children} />;
    },
    'compare-image': CompareImage,
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkDirective, remarkDirectiveRehype]}
      rehypePlugins={[rehypeRaw]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  );
};

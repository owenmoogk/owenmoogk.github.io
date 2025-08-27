import { CodeHighlight } from '@mantine/code-highlight';
import { Flex, Image, Text } from '@mantine/core';
import { useState, type ReactNode } from 'react';
import ReactCompareImage from 'react-compare-image';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import { Carousel as MantineCarousel } from '@mantine/carousel';
import remarkGfm from 'remark-gfm';
import Lightbox from 'yet-another-react-lightbox';
import { useViewportSize } from '@mantine/hooks';

const getImagePath = (imagePath: string, projectName?: string) => {
  if (projectName) {
    return '/assets/projects/' + projectName + '/' + imagePath;
  }
  return imagePath;
};

export const MarkdownRenderer = (props: {
  content: string;
  projectName?: string;
}) => {
  const { projectName, content } = props;

  const CompareImage = (props: { id: string; children: ReactNode }) => {
    if (typeof props.children !== 'string') return;
    const [image1, image2] = props.children.split(',');
    return (
      <Flex className="sliderContainer" direction="column" m="auto">
        <ReactCompareImage
          leftImage={getImagePath(image1, projectName)}
          rightImage={getImagePath(image2, projectName)}
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

  const Carousel = (props: { id: string; children: ReactNode }) => {
    const [index, setIndex] = useState<number>(-1);
    const { width: screenWidth } = useViewportSize();

    if (typeof props.children !== 'string') return;
    const baseImages = props.children.split(',');
    const images = baseImages.map((image) => getImagePath(image, projectName));
    return (
      <>
        <MantineCarousel
          height={250}
          maw="100%"
          emblaOptions={{ align: 'start', dragFree: true }}
        >
          {images.map((img, key) => (
            <Image
              src={img}
              key={img}
              style={{
                height: '250px',
                width: 'fit-content',
                marginRight: '20px',
              }}
              onClick={() => setIndex(key)}
            />
          ))}
        </MantineCarousel>
        <Lightbox
          video={{ autoPlay: true }}
          index={index}
          slides={images.map((img) => ({ src: img }))}
          open={index >= 0}
          close={() => setIndex(-1)}
          controller={{ closeOnBackdropClick: true }}
          carousel={{ padding: screenWidth > 700 ? '40px' : '0px' }}
        />
      </>
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
    carousel: Carousel,
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

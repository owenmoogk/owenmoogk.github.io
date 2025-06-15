import { Box, Image, Text, useMantineColorScheme } from '@mantine/core';
import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import MarkdownView from 'react-showdown';
import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import SyntaxHighlighter from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
import light from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-light';

import Tag from '../common/Tags';
import { getBlog, parseMarkdown } from '@api/blogs';
import useFetchData from '@api/useGetData';
import { snakeToTitleCase } from '@api/util';
import { headshot } from '@global/global';

const SyntaxHighlighterComponent =
  SyntaxHighlighter as unknown as FC<SyntaxHighlighterProps>;

export default function BlogPost() {
  const { name } = useParams();
  const { colorScheme } = useMantineColorScheme();

  const { content, blog } = useFetchData(getBlog, name ?? '') ?? {
    content: null,
    blog: null,
  };

  return (
    <div className="main">
      <div id="blogPage" className="blogPostPage">
        {blog && (
          <>
            <p className="title" style={{ letterSpacing: '-0.50px' }}>
              {blog.title}
            </p>
            <div className="tags" id="icons">
              {blog.tags.map((type, key) => (
                <Tag type={snakeToTitleCase(type)} key={key} />
              ))}
            </div>
            <div className="meta">
              <div className="author">
                <img src={headshot} className="headshot" alt="" />
                <div className="text">
                  <p>Owen Moogk</p>
                  <p className="date">{blog.date.toString()}</p>
                </div>
              </div>
            </div>

            <p>
              <MarkdownView
                markdown={parseMarkdown(content)}
                options={{ tables: true, emoji: true }}
                components={{
                  img(props: { alt: string; src: string }) {
                    return (
                      <Box mb={30}>
                        <Image src={props.src} alt="" p={0} m={0} />
                        <Text
                          mt={10}
                          size={'14px'}
                          c={
                            'light-dark(var(--mantine-color-dark-4),var(--mantine-color-gray-1))'
                          }
                          ta={'center'}
                          lh={'20px'}
                        >
                          {props.alt}
                        </Text>
                      </Box>
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
                    return (
                      <SyntaxHighlighterComponent
                        style={colorScheme === 'dark' ? dark : light}
                        language={language}
                        customStyle={{
                          lineHeight: '20px',
                          fontSize: '14px',
                          backgroundColor:
                            'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-6))',
                        }}
                      >
                        {props.children[0]}
                      </SyntaxHighlighterComponent>
                    );
                  },
                }}
              />
            </p>
          </>
        )}
      </div>
    </div>
  );
}

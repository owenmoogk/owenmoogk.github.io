// import { Text } from '@mantine/core';
// import { useReadingTime } from 'react-hook-reading-time';
import { useParams } from 'react-router-dom';

import Tag from '../common/Tags';
import { getBlog, parseMarkdown } from '@api/blogs';
import useFetchData from '@api/useGetData';
import { snakeToTitleCase } from '@api/util';
import { MarkdownRenderer } from '@components/common/MarkdownRenderer';
import { headshot } from '@global/global';

export default function BlogPost() {
  const { name } = useParams();

  const { content, blog } = useFetchData(getBlog, name ?? '') ?? {
    content: null,
    blog: null,
  };

  // let readingTime: string | null = (
  //   useReadingTime(content ?? '') as { text: string }
  // ).text;

  // if (!content) {
  //   readingTime = null;
  // }

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
            {/* <Text fs="italic" size="sm" mt={0}>
              {readingTime}
            </Text> */}
            <div className="meta">
              <div className="author">
                <img src={headshot} className="headshot" alt="" />
                <div className="text">
                  <p>Owen Moogk</p>
                  <p className="date">{blog.date.toString()}</p>
                </div>
              </div>
            </div>
            <MarkdownRenderer content={parseMarkdown(content)} />
          </>
        )}
      </div>
    </div>
  );
}

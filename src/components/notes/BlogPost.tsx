import { useParams } from 'react-router-dom';
import MarkdownView from 'react-showdown';

import Tag from '../common/Tags';
import { getBlog, parseMarkdown } from '@api/blogs';
import useFetchData from '@api/useGetData';
import { headshot } from '@global/global';

export default function BlogPost() {
  const { name } = useParams();

  const { content, blog } = useFetchData(getBlog, name ?? '') ?? {
    content: null,
    blog: null,
  };

  function capitalizeWords(str: string) {
    return str
      .split(' ') // Split the string by spaces to get each word
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter and lower case the rest
      .join(' '); // Join the words back into a single string
  }

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
                <Tag type={capitalizeWords(type)} key={key} />
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

            <p
              style={{
                // fontFamily:
                // 'source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif',
                lineHeight: '32px',
                fontSize: '20px',
                letterSpacing: '-.2px',
              }}
            >
              <MarkdownView
                markdown={parseMarkdown(content)}
                options={{ tables: true, emoji: true }}
              />
            </p>
          </>
        )}
      </div>
    </div>
  );
}

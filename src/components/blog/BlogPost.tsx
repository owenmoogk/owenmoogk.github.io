import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MarkdownView from 'react-showdown';

import Tag from '../common/Tags';
import type { BlogPost as BlogType } from '@api/blogs';
import { getBlog, parseMarkdown } from '@api/blogs';
import { headshot } from '@global/global';

export default function BlogPost() {
  const [content, setContent] = useState<string>();
  const [blogData, setBlogData] = useState<BlogType>();
  const { name } = useParams();

  useEffect(() => {
    getBlog(name ?? '')
      .then(({ content, blog }) => {
        setContent(content);
        setBlogData(blog);
      })
      .catch(() => null);
  }, [name]);

  function capitalizeWords(str: string) {
    return str
      .split(' ') // Split the string by spaces to get each word
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter and lower case the rest
      .join(' '); // Join the words back into a single string
  }

  return (
    <div className="main">
      <div id="blogPage" className="blogPostPage">
        {blogData && (
          <>
            <p className="title">{blogData.title}</p>
            <div className="tags" id="icons">
              {blogData.tags.map((type, key) => (
                <Tag type={capitalizeWords(type)} key={key} />
              ))}
            </div>
            <div className="meta">
              <div className="author">
                <img src={headshot} className="headshot" alt="" />
                <div className="text">
                  <p className="authorText">Owen Moogk</p>
                  <p className="date">{blogData.date.toString()}</p>
                </div>
              </div>
            </div>
            <MarkdownView
              markdown={parseMarkdown(content ?? '')}
              options={{ tables: true, emoji: true }}
            />
          </>
        )}
      </div>
    </div>
  );
}

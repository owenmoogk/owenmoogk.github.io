import { format } from 'date-fns';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import FilterButton from '../common/FilterButton';
import type { BlogPost } from '@api/blogs';
import { getBlogs } from '@api/blogs';
import useFetchData from '@api/useGetData';
import { blogLink } from '@global/global';

export default function Blog() {
  const blogData = useFetchData(getBlogs, null);

  const [filter, setFilter] = useState<string>('');

  return (
    <div className="main">
      <p className="title">Notes</p>
      <p className="subtitle">For everything goin' on up there.</p>
      <div id="sortingContainer">
        <div id="buttonContainer">
          <FilterButton
            name="Personal"
            displayName="Personal Reflections"
            setFilter={setFilter}
            filter={filter}
          />
          <FilterButton
            name="internet"
            displayName="Internet Bits"
            setFilter={setFilter}
            filter={filter}
          />
          <FilterButton
            name="Tech"
            displayName="Technology"
            setFilter={setFilter}
            filter={filter}
          />
          <FilterButton
            name="All"
            handle=""
            setFilter={setFilter}
            filter={filter}
          />
        </div>
      </div>
      <div id="blogPage">
        {blogData?.map((post, key) => {
          const postTags = post.tags.map((item) =>
            item.replace(' ', '_').toLowerCase()
          );
          if (postTags.includes(filter) || filter === '') {
            return <BlogItem post={post} key={key} />;
          }
          return null;
        }) ?? <p style={{ textAlign: 'center' }}>Loading blogs...</p>}
        <br />
      </div>
    </div>
  );
}

function BlogItem(props: { post: BlogPost }) {
  const post = props.post;
  return (
    <Link to={post.file_name}>
      <div className="blogPost">
        <div className="text">
          <h3>{post.title}</h3>
          <p className="subtitle">{format(post.date, 'MMMM d, yyyy')}</p>
        </div>
        <div className="image">
          <img src={blogLink + '/' + post.image} alt="" />
        </div>
      </div>
    </Link>
  );
}

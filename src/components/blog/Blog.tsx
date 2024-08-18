import { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import links from '../../global/links.json';
import { getBlogs } from 'src/api/blogs';

export type BlogPost = {
  title: string;
  link: string;
  date: Date;
  content: string;
};

export default function Blog() {

  const [ blogData, setBlogData ] = useState<BlogPost[]>();

  useEffect(() => {
    getBlogs()
      .then(posts => setBlogData(posts))
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="main">
      <Helmet>
        <title>{'Blog - Owen Moogk'}</title>
      </Helmet>
      <p className="title">Blog</p>
      <div id="blogPage">
        {
          blogData?.map((post, key) => <>
            <BlogItem post={post} key={key} />
            <hr />
          </>)
          ??
            <p style={{ textAlign: 'center' }}>Loading blogs...</p>
        }
        <br />
        <p style={{ textAlign: 'center' }}>... read more on <a href={links.medium} target="_blank" rel="noreferrer">Medium</a></p>
        <br />
      </div>
    </div>
  );
}

function BlogItem(props: {
  post: BlogPost;
}) {

  function formatDate(date: Date) {
    // Define months array for formatting
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    // Extract date components
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Format the date string
    const formattedDate = month + ' ' + day + ', ' + year;

    return formattedDate;
  }

  const post = props.post;
  return (
    <div className="blogPost">
      <h3><a href={post.link} className="postTitle" target="_blank" rel="noreferrer">{post.title}</a></h3>
      <p className="subtitle">{formatDate(post.date)}</p>
      <p className="blogContent">{post.content} &nbsp; <a href={post.link} target="_blank" rel="noreferrer">continue on Medium</a></p>
    </div>
  );
}

import { Flex, Text, Title } from '@mantine/core';
import { format } from 'date-fns';
import { useReadingTime } from 'react-hook-reading-time';
import { Link } from 'react-router-dom';

import useFetchData from '@api/useGetData';
import type { BlogPost } from '@api/blogs';
import { getBlog, getBlogs } from '@api/blogs';

export default function Blog() {
  const blogData = useFetchData(getBlogs, null);

  // const [filter, setFilter] = useState<string>('');
  // const tags = Array.from(new Set(blogData?.flatMap((post) => post.tags)));

  return (
    <div id="blogList">
      <p className="title">Notes</p>
      <p className="subtitle">Some fun tid-bits.</p>
      {/* <Flex wrap="wrap" my={20}>
        <FilterButton
          displayName="All"
          name="allnotes"
          {...{ setFilter, filter }}
        />
        {tags.map((tag) => (
          <FilterButton
            name={tag}
            key={tag}
            displayName={snakeToTitleCase(tag)}
            {...{ setFilter, filter }}
          />
        ))}
      </Flex> */}
      <Flex direction="column" gap={25} mt={20}>
        {blogData?.map((post, key) => {
          // const postTags = post.tags.map((item) =>
          //   item.replace(' ', '_').toLowerCase()
          // );
          // if (postTags.includes(filter) || filter === '') {
          return <BlogItem post={post} key={key} />;
          // }
          // return null;
        }) ?? <p style={{ textAlign: 'center' }}>Loading blogs...</p>}
        <br />
      </Flex>
    </div>
  );
}

function BlogItem(props: { post: BlogPost }) {
  const post = props.post;

  const blog = useFetchData(getBlog, post.file_name);

  let timeEstimate: string | null = (
    useReadingTime(blog?.content ?? '') as { text: string }
  ).text;

  if (!blog) {
    timeEstimate = null;
  }

  return (
    <Link to={post.file_name}>
      <Flex direction="column" justify="center">
        <Title order={3} m={0} fw="normal">
          {post.title}
        </Title>
        <Text fs="italic" size="sm">
          {/* {post.tags.map((x) => snakeToTitleCase(x)).join(', ')} */}
          {/* &nbsp; – &nbsp; */}
          {format(post.date, 'MMMM d, yyyy')}
          {timeEstimate && <>&nbsp; – &nbsp;{timeEstimate}</>}
        </Text>
      </Flex>
    </Link>
  );
}

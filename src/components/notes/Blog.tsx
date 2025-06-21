import { Box, Flex, Image, Paper, Text, Title } from '@mantine/core';
import { format } from 'date-fns';
// import { useState } from 'react';
import { useState } from 'react';
import { useReadingTime } from 'react-hook-reading-time';
import { Link } from 'react-router-dom';

// import FilterButton from '../common/FilterButton';
import type { BlogPost } from '@api/blogs';
import { getBlog, getBlogs } from '@api/blogs';
import useFetchData from '@api/useGetData';
import { snakeToTitleCase } from '@api/util';
import FilterButton from '@components/common/FilterButton';
import { blogLink } from '@global/global';

export default function Blog() {
  const blogData = useFetchData(getBlogs, null);

  const [filter, setFilter] = useState<string>('');
  const tags = Array.from(new Set(blogData?.flatMap((post) => post.tags)));

  return (
    <div className="main" id="blogList">
      <p className="title">Notes</p>
      <p className="subtitle">For everything goin' on up there.</p>
      <div id="sortingContainer">
        <div id="buttonContainer">
          <FilterButton
            handle=""
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
        </div>
      </div>
      <Flex gap={20} direction={'column'}>
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
      <Paper style={{ overflow: 'hidden' }} radius="lg">
        <Flex m={-16} gap={20}>
          <Box miw={130}>
            <Image src={blogLink + '/' + post.image} h={130} maw={130} alt="" />
          </Box>
          <Flex direction="column" justify="center">
            <Title order={3} m={0}>
              {post.title}
            </Title>
            <Text fs="italic" size="sm" mt={10}>
              {post.tags.map((x) => snakeToTitleCase(x)).join(', ')}
              &nbsp; – &nbsp;
              {format(post.date, 'MMMM d, yyyy')}
              {timeEstimate && <>&nbsp; – &nbsp;{timeEstimate}</>}
            </Text>
          </Flex>
          <div className="image" />
        </Flex>
      </Paper>
    </Link>
  );
}

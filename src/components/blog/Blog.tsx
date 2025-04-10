import { Box, Flex, Image, Paper, Text, Title } from '@mantine/core';
import { format } from 'date-fns';
// import { useState } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// import FilterButton from '../common/FilterButton';
import type { BlogPost } from '@api/blogs';
import { getBlogs } from '@api/blogs';
import useFetchData from '@api/useGetData';
import FilterButton from '@components/common/FilterButton';
import { blogLink } from '@global/global';

export default function Blog() {
  const blogData = useFetchData(getBlogs, null);

  const [filter, setFilter] = useState<string>('');

  return (
    <div className="main" id="blogList">
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
  return (
    <Link to={post.file_name}>
      <Paper style={{ overflow: 'hidden' }} radius="lg">
        <Flex m={-15} gap={20}>
          <Box miw={200}>
            <Image src={blogLink + '/' + post.image} h={150} maw={200} alt="" />
          </Box>
          <Flex direction="column" justify="center">
            <Title order={3} m={0}>
              {post.title}
            </Title>
            <Text fs="italic" size="sm" mt={10}>
              {format(post.date, 'MMMM d, yyyy')}
            </Text>
          </Flex>
          <div className="image" />
        </Flex>
      </Paper>
    </Link>
  );
}

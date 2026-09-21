import { useParams } from 'react-router-dom';
import useFetchData from '@api/useGetData';
import { MarkdownRenderer } from '@components/common/MarkdownRenderer';
import { headshot } from '@global/global';
import { getBlog, parseMarkdown } from '@api/blogs';
import { Box, Flex, Image, Text } from '@mantine/core';

export default function BlogPost() {
  const { name } = useParams();

  const { content, blog } = useFetchData(getBlog, name ?? '') ?? {
    content: null,
    blog: null,
  };

  return (
    <Box maw={700}>
      {blog && (
        <>
          <p className="title" style={{ letterSpacing: '-0.50px' }}>
            {blog.title}
          </p>

          {/* <div className="tags" id="icons">
              {blog.tags.map((type, key) => (
                <Tag type={snakeToTitleCase(type)} key={key} />
              ))}
            </div> */}
          <Flex direction="row" align="center" gap={10}>
            <Image src={headshot} bdrs="50%" h={40} w={40} m={0} />
            <div className="text">
              <Text>Owen Moogk</Text>
              <Text className="date" fz={12}>
                {blog.date.toString()}
              </Text>
            </div>
          </Flex>
          <MarkdownRenderer content={parseMarkdown(content)} />
        </>
      )}
    </Box>
  );
}

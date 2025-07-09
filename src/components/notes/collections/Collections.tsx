import { Box, Text, Title } from '@mantine/core';

import CollectionItem from './CollectionItem';
import blog from './files/blog.json';
// import comedy from './files/comedy.json';
import music from './files/music.json';
import politics from './files/politics.json';
import type { CollectionItem as CollectionItemType } from '@api/blogs';
import { snakeToTitleCase } from '@api/util';

export default function Collections() {
  const collections: {
    category: string;
    description: string;
    items: CollectionItemType[];
  }[] = [
    {
      category: 'Long Form Articles (and videos)',
      description:
        'Some of my favorite peices that made me think... and want to read again.',
      items: blog,
    },
    {
      category: 'Music',
      description: "Best live music pieces I've heard (some live!).",
      items: music,
    },
    {
      category: 'Politics',
      description:
        "More about 'incentive structures' than politics, but some interesting information.",
      items: politics,
    },
    // {
    //   category: 'Comedy',
    //   description: 'Things that I find quite funny. Proceed at your own risk',
    //   items: comedy,
    // },
  ];
  return (
    <div id="blogList">
      <p className="title">Other Very Good Reads...</p>
      <p className="subtitle">
        ...and videos and music, things I keep coming back to.
      </p>

      {collections.map(({ category, description, items }, key) => (
        <Box mt={40} key={key}>
          <Title order={2}>{snakeToTitleCase(category)}</Title>
          <Text>{description}</Text>
          <br />
          {items.map((item, key) => (
            <CollectionItem item={item} key={key} />
          ))}
        </Box>
      ))}
    </div>
  );
}

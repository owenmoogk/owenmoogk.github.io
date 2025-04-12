import { Accordion, Card, Title } from '@mantine/core';

import CollectionItem from './CollectionItem';
import { getCollections } from '@api/blogs';
import useFetchData from '@api/useGetData';

export default function Collections() {
  const collections = useFetchData(getCollections, null);

  return (
    <div className="main" id="blogList">
      <p className="title">Collections</p>
      <p className="subtitle">To *not* see something for the last time</p>

      <Card mt={40}>
        <Accordion chevronPosition="right">
          {collections?.map(({ category, items }) => (
            <Accordion.Item
              key={category}
              value={category.charAt(0).toUpperCase() + category.slice(1)}
            >
              <Accordion.Control>
                <Title order={4} m={0}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                {items.map((item, key) => (
                  <CollectionItem item={item} key={key} />
                ))}
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Card>
    </div>
  );
}

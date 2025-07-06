import { Anchor, Flex } from '@mantine/core';
import {
  FaFilePdf,
  FaGlobe,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

import type { CollectionItem } from '@api/blogs';

export default function CollectionItem(props: { item: CollectionItem }) {
  const { item } = props;

  const Icon = item.url.includes('youtube.com')
    ? FaYoutube
    : item.url.includes('.pdf')
      ? FaFilePdf
      : item.url.includes('x.com')
        ? FaTwitter
        : item.url.includes('tiktok.com')
          ? FaTiktok
          : FaGlobe;

  return (
    <Flex gap={10} align="center" mt={5}>
      <Flex align="center">
        <Icon size={18} />
      </Flex>
      <Anchor href={item.url} target="_blank" rel="noreferrer" size="md">
        {item.title}
      </Anchor>
    </Flex>
  );
}

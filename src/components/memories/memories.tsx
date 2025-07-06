import { Box, Text } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { useState } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';
import { Lightbox } from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';
import 'yet-another-react-lightbox/styles.css';

import { getImageMetadata } from '@api/memories';
import useFetchData from '@api/useGetData';

export default function Memories() {
  const [index, setIndex] = useState<number>(-1);
  const { width } = useViewportSize();
  const { metadata, slideData, thumbnailMetadata } = useFetchData(
    getImageMetadata,
    null
  ) ?? {
    slideData: [],
    thumbnailMetadata: [],
    metadata: [],
  };

  return (
    <div >
      <p className="title">Through My Eyes</p>
      <p className="subtitle">Family, Friends, Projects and Travels</p>
      <br />
      <div>
        <RowsPhotoAlbum
          photos={thumbnailMetadata}
          onClick={({ index }) => setIndex(index)}
          targetRowHeight={250}
          render={{
            extras: (_, photo) =>
              metadata[photo.index].city && (
                <Box
                  pos="absolute"
                  bottom={0}
                  p={10}
                  w="100%"
                  ta="right"
                  c="white"
                  fs="italic"
                  fw="bold"
                  bg="rgba(0,0,0,0.3)"
                >
                  <Text>
                    {metadata[photo.index].city}
                    {metadata[photo.index].country && ', '}
                    {metadata[photo.index].country}
                    {/* {new Date(
                    metadata[photo.index].date.replace(
                      /^(\d{4}):(\d{2}):(\d{2})/,
                      '$1-$2-$3'
                    )
                  ).getFullYear()} */}
                  </Text>
                </Box>
              ),
          }}
        />
      </div>
      <Lightbox
        plugins={[Video]}
        video={{ autoPlay: true }}
        index={index}
        slides={slideData}
        open={index >= 0}
        close={() => setIndex(-1)}
        controller={{ closeOnBackdropClick: true }}
        carousel={{ padding: width > 700 ? '40px' : '0px' }}
      />
    </div>
  );
}

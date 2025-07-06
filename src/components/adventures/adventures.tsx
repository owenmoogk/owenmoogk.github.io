import { Carousel } from '@mantine/carousel';
import {
  Anchor,
  Box,
  Container,
  Flex,
  Image,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure, useViewportSize } from '@mantine/hooks';
import { Map, Marker, ZoomControl } from 'pigeon-maps';
import { maptiler } from 'pigeon-maps/providers';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';

import type { Adventure } from './places';
import { adventures } from './places';
import type { WantToGo } from './wanttogo';
import { wantToGo } from './wanttogo';
import { getImageMetadata } from '@api/memories';
import useFetchData from '@api/useGetData';

const apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

function getDistance(loc1: [number, number], loc2: [number, number]) {
  return Math.sqrt((loc1[0] - loc2[0]) ** 2 + (loc1[1] - loc2[1]) ** 2);
}

const distanceThreshold = 0.3; // in degrees

export default function Adventures() {
  const maptilerProvider = maptiler(apiKey, 'basic-v2');

  const [index, setIndex] = useState<number>(-1);
  const [showWantToGo, { toggle: toggleWantToGo }] = useDisclosure();

  const { slideData, thumbnailMetadata } = useFetchData(
    getImageMetadata,
    null
  ) ?? {
    slideData: [],
    thumbnailMetadata: [],
    metadata: [],
  };
  const [selectedLocation, setSelectedLocation] = useState<
    Adventure | WantToGo
  >();
  const selectedThumbnailMetadata = thumbnailMetadata.filter((img) =>
    img.location && selectedLocation
      ? getDistance(img.location, selectedLocation.coords) < distanceThreshold
      : false
  );
  const selectedSlideData = slideData.filter((img) =>
    img.location && selectedLocation
      ? getDistance(img.location, selectedLocation.coords) < distanceThreshold
      : false
  );
  const { width: screenWidth, height: screenHeight } = useViewportSize();
  return (
    <Container className="main" maw={700}>
      <p className="title">Adventures</p>
      <Flex className="page" mt={20} justify="center" direction="column">
        <Map
          provider={maptilerProvider}
          height={Math.min(400, screenHeight * 0.7)}
          defaultCenter={[30, 0]}
          defaultZoom={1.5}
          onBoundsChanged={({ zoom, center }) => {
            console.log(zoom, center);
          }}
          minZoom={1.5}
          limitBounds="edge"
        >
          <ZoomControl />
          {!showWantToGo &&
            adventures.map((place, index) => (
              <Marker
                width={30}
                anchor={place.coords}
                color="rgb(0, 89, 255)"
                key={index}
                payload={place}
                onClick={({ payload }) => {
                  setSelectedLocation(payload as Adventure);
                }}
              />
            ))}
          {showWantToGo &&
            wantToGo.map((place, index) => (
              <Marker
                width={30}
                anchor={place.coords}
                color="green"
                key={index}
                payload={place}
                onClick={({ payload }) => {
                  setSelectedLocation(payload as Adventure);
                }}
              />
            ))}
        </Map>
        <Anchor
          ta="right"
          onClick={() => {
            setSelectedLocation(undefined);
            toggleWantToGo();
          }}
        >
          Toggle dream desinations!
        </Anchor>

        <Box>
          <Title order={3}>
            {selectedLocation?.name ?? 'Click on a map marker!'}
          </Title>
          {selectedLocation?.description}
          {selectedLocation &&
            selectedThumbnailMetadata.length > 0 &&
            !showWantToGo && (
              <>
                <Title order={4}>Pictures</Title>
                <Carousel
                  withIndicators
                  height={200}
                  type="container"
                  emblaOptions={{ align: 'start', dragFree: true }}
                >
                  {selectedThumbnailMetadata.map((img, key) => (
                    <Image
                      src={img.src}
                      key={img.src}
                      style={{
                        objectFit: 'contain',
                        height: '200px',
                        marginRight: '20px',
                      }}
                      onClick={() => setIndex(key)}
                    />
                  ))}
                </Carousel>
              </>
            )}
          {selectedLocation &&
            selectedSlideData.length === 0 &&
            !showWantToGo && <Text>No pictures yet :(</Text>}
          {showWantToGo && selectedLocation && (
            <Anchor
              href={(selectedLocation as WantToGo).mapLink}
              target="_blank"
            >
              Google Map Link
            </Anchor>
          )}
        </Box>
      </Flex>
      <Lightbox
        video={{ autoPlay: true }}
        index={index}
        slides={selectedSlideData}
        open={index >= 0}
        close={() => setIndex(-1)}
        controller={{ closeOnBackdropClick: true }}
        carousel={{ padding: screenWidth > 700 ? '40px' : '0px' }}
      />
    </Container>
  );
}

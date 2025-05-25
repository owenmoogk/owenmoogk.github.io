import { Carousel } from '@mantine/carousel';
import { Card, Flex, Image, Title } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { Map, Marker } from 'pigeon-maps';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';

import type { Adventure } from './places';
import { adventures } from './places';
import { getImageMetadata } from '@api/memories';
import useFetchData from '@api/useGetData';

function getDistance(loc1: [number, number], loc2: [number, number]) {
  return Math.sqrt((loc1[0] - loc2[0]) ** 2 + (loc1[1] - loc2[1]) ** 2);
}

const distanceThreshold = 0.3; // in degrees

export default function Adventures() {
  const [index, setIndex] = useState<number>(-1);

  const { slideData, thumbnailMetadata } = useFetchData(
    getImageMetadata,
    null
  ) ?? {
    slideData: [],
    thumbnailMetadata: [],
    metadata: [],
  };
  const [selectedLocation, setSelectedLocation] = useState<Adventure>();
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
  const { width } = useViewportSize();

  return (
    <div className="main">
      <p className="title">Adventures</p>
      <Flex className="page" mt={20} justify={'center'} maw={1500}>
        <Card flex={2}>
          <Title mt={0} order={3}>
            Some places I've been!
          </Title>
          <Map
            height={400}
            defaultCenter={[50, 0]}
            defaultZoom={1.3}
            onBoundsChanged={({ zoom, center }) => {
              console.log(zoom, center);
            }}
            minZoom={1.3}
            limitBounds="edge"
          >
            {/* <ZoomControl /> */}
            {adventures.map((place, index) => (
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
          </Map>
        </Card>

        <Card w={width - 800} mx={20} flex={3}>
          <Title mt={0} order={3}>
            {selectedLocation?.name ?? 'Click on a map marker!'}
          </Title>
          {selectedLocation?.description}
          <Title order={4}>{selectedLocation && 'Pictures'}</Title>
          {selectedLocation && (
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
          )}
        </Card>
      </Flex>
      <Lightbox
        video={{ autoPlay: true }}
        index={index}
        slides={selectedSlideData}
        open={index >= 0}
        close={() => setIndex(-1)}
        controller={{ closeOnBackdropClick: true }}
        carousel={{ padding: width > 700 ? '40px' : '0px' }}
      />
    </div>
  );
}

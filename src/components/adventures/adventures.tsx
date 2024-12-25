import { Map, Marker } from 'pigeon-maps';
import React from 'react';

type Coordinate = [number, number];
type Place = {
  name: string;
  coords: Coordinate;
};

const places: Place[] = [
  {
    name: 'Augsburg',
    coords: [48.3705, 10.8978],
  },
  {
    name: 'Waterloo',
    coords: [43.4643, -80.5204],
  },
  {
    name: 'Toronto',
    coords: [43.6532, -79.3832],
  },
];

export default function Adventures() {
  return (
    <div className="main">
      <p className="title">Adventures</p>
      <p className="subtitle">Places I've been</p>
      <div className="page">
        <Map
          height={400}
          width={600}
          defaultCenter={[50, 0]}
          defaultZoom={1.3}
          onBoundsChanged={({ zoom, center }) => {
            console.log(zoom, center);
          }}
          minZoom={1.3}
          limitBounds="edge"
        >
          {/* <ZoomControl /> */}
          {places.map((place, index) => (
            <Marker
              width={40}
              anchor={place.coords}
              color="pink"
              key={index}
              payload={place.name}
              onClick={({ payload }) => {
                console.log(payload);
              }}
            />
          ))}
        </Map>
      </div>
    </div>
  );
}

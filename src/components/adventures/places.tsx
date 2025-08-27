import type { ReactNode } from 'react';

export type Coordinate = [number, number];

export type Adventure = {
  name: string;
  coords: Coordinate;
  description?: ReactNode;
};

export const adventures: Adventure[] = [
  {
    name: 'Augsburg, Germany',
    coords: [48.3705, 10.8978],
    description:
      'I stayed in Augsburg for 4 months while completing an internship at a company called RFA Space! I did lots of tourism around europe, but found lots to do in Augsburg too! Highlights include the town hall, Augsburger Plarrer (like Oktoberfest), and lots of fun with co-workers (pictures below!)',
  },
  {
    name: 'Toronto, Canada',
    coords: [43.6532, -79.3832],
  },
  {
    name: 'Lethbridge, Canada',
    coords: [49.6956, -112.8451],
    description:
      'Living in Lethbridge for 4 months, I fell in love! The nature was beautiful and the people were friendly.',
  },
  {
    name: 'Ingolstadt, Germany',
    coords: [48.7665, 11.4256],
  },
  {
    name: 'Munich, Germany',
    coords: [48.1351, 11.582],
  },
  {
    name: 'Zephyrhills, United States',
    coords: [28.2336, -82.1812],
  },
  {
    name: 'Cayo Santa Maria, Cuba',
    coords: [22.6567, -78.9507],
  },
  {
    name: 'Salzburg, Austria',
    coords: [47.8095, 13.055],
  },
  {
    name: 'Berlin, Germany',
    coords: [52.52, 13.405],
  },
  {
    name: 'Füssen, Germany',
    coords: [47.5706, 10.7004],
  },
  {
    name: 'Paris, France',
    coords: [48.8566, 2.3522],
  },
  {
    name: 'Venice, Italy',
    coords: [45.4408, 12.3155],
  },
  {
    name: 'Saint Martin',
    coords: [18.0708, -63.0501],
  },
  {
    name: 'Saint Thomas, US Virgin Islands',
    coords: [18.3381, -64.8941],
  },
  {
    name: 'Haifa, Israel',
    coords: [32.794, 34.9896],
  },
  {
    name: 'Tel Aviv, Israel',
    coords: [32.0853, 34.7818],
  },
  {
    name: 'Jerusalem, Israel',
    coords: [31.7767, 35.2345],
  },
  {
    name: 'Masada, Israel',
    coords: [31.3155, 35.3538],
  },
  {
    name: 'Boston, United States',
    coords: [42.3601, -71.0589],
  },
  {
    name: 'Jasper, Canada',
    coords: [52.8734, -118.0814],
  },
  {
    name: 'Quebec City, Canada',
    coords: [46.8139, -71.2082],
  },
  {
    name: 'Lake Louise, Canada',
    coords: [51.4254, -116.1773],
  },
  {
    name: 'Chicago, United States',
    coords: [41.8781, -87.6298],
  },
  {
    name: 'Bavaro, Dominican Republic',
    coords: [18.6707, -68.4144],
  },
  {
    name: 'Ljubljana, Slovenia',
    coords: [46.0569, 14.5058],
  },
  {
    name: 'Arras, France',
    coords: [50.291, 2.7775],
  },
  {
    name: 'Nürnberg, Germany',
    coords: [49.4521, 11.0767],
  },
  {
    name: 'Regensburg, Germany',
    coords: [49.0134, 12.1016],
  },
  {
    name: 'Kalia Beach, West Bank',
    coords: [31.749, 35.535],
    description: (
      <>
        Some highlights:
        <ul>
          <li>Mud Baths</li>
          <li>The dead sea!</li>
        </ul>
      </>
    ),
  },
];

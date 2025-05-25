import type { Photo } from 'react-photo-album/*';
import type { Slide } from 'yet-another-react-lightbox';

import { memoriesLink } from '@global/global';

export type ApiReturnType = {
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  name: string;
  date: string;
  location: [number, number] | null;
  width: number;
  height: number;
  city: string;
  province: string;
  country: string;
};

export async function getImageMetadata(): Promise<{
  metadata: ApiReturnType[];
  slideData: (Slide & { location: [number, number] | null })[];
  thumbnailMetadata: (Photo & { location: [number, number] | null })[];
}> {
  const response = await fetch(memoriesLink + 'image_metadata.json');
  const json = (await response.json()) as ApiReturnType[];

  json.reverse();

  // Convert the date string to a Date object
  const imageData: (Slide & { location: [number, number] | null })[] = json.map(
    (img) => ({
      ...img,
      type: img.type,
      date: new Date(img.date.replace(/^(\d{4}):(\d{2}):(\d{2})/, '$1-$2-$3')),
      src: memoriesLink + img.src,
      location: img.location,
      sources: [
        {
          src: memoriesLink + img.src,
          type: 'video/' + (img.name.split('.').pop() ?? ''),
        },
      ],
    })
  );

  const thumbnailImageData: (Photo & { location: [number, number] | null })[] =
    json.map((img) => ({
      ...img,
      date: new Date(img.date.replace(/^(\d{4}):(\d{2}):(\d{2})/, '$1-$2-$3')),
      src: memoriesLink + img.thumbnail,
      width: img.width,
      height: img.height,
      location: img.location,
    }));

  return {
    metadata: json,
    slideData: imageData,
    thumbnailMetadata: thumbnailImageData,
  };
}

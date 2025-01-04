import {
  memoriesLink,
  memoriesPhotosLink,
  memoriesThumbnailLink,
} from '@global/global';

export type MemoryImage = {
  name: string;
  src: string;
  date: Date;
  location: [number, number] | null;
  width: number;
  height: number;
};

export async function getImageMetadata(): Promise<
  [metadata: MemoryImage[], thumbnailMetadata: MemoryImage[]]
> {
  const response = await fetch(memoriesLink + 'image_metadata.json');
  const json = (await response.json()) as {
    [key: string]: unknown;
    name: string;
    date: string;
  }[];

  // Convert the date string to a Date object
  let imageData: MemoryImage[] = json.map(
    (img) =>
      ({
        ...img,
        date: new Date(
          img.date.replace(/^(\d{4}):(\d{2}):(\d{2})/, '$1-$2-$3')
        ),
        src: memoriesPhotosLink + img.name,
      }) as MemoryImage
  );

  let thumbnailImageData: MemoryImage[] = json.map(
    (img) =>
      ({
        ...img,
        date: new Date(
          img.date.replace(/^(\d{4}):(\d{2}):(\d{2})/, '$1-$2-$3')
        ),
        src: memoriesThumbnailLink + img.name,
      }) as MemoryImage
  );

  imageData = imageData.sort((a, b) => b.date.getTime() - a.date.getTime());
  thumbnailImageData = thumbnailImageData.sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
  return [imageData, thumbnailImageData];
}

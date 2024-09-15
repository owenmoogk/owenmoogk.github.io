import { memoriesLink, memoriesPhotosLink } from '@global/global';

export type MemoryImage = {
  name: string;
  src: string;
  date: Date;
  location: [number, number] | null;
  width: number;
  height: number;
};

export async function getImageMetadata() {
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
  imageData = imageData.sort((a, b) => b.date.getTime() - a.date.getTime());
  console.log('HERE', imageData);
  return imageData;
}

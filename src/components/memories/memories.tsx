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
  const { metadata, thumbnailMetadata } = useFetchData(
    getImageMetadata,
    null
  ) ?? {
    metadata: [],
    thumbnailMetadata: [],
  };

  return (
    <div className="main">
      <p className="title">Memories</p>
      <p className="subtitle">Basically a VSCO girl...</p>
      <br />
      <div className="memoryPage">
        <RowsPhotoAlbum
          photos={thumbnailMetadata}
          onClick={({ index }) => setIndex(index)}
          targetRowHeight={(width) =>
            width > 1200
              ? width / 5
              : width > 900
                ? width / 4
                : width > 600
                  ? width / 3
                  : width > 300
                    ? width / 2
                    : width
          }
        />
      </div>
      <Lightbox
        plugins={[Video]}
        video={{ autoPlay: true }}
        index={index}
        slides={metadata}
        open={index >= 0}
        close={() => setIndex(-1)}
        controller={{ closeOnBackdropClick: true }}
        carousel={{ padding: '40px' }}
      />
    </div>
  );
}

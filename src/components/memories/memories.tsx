import { useEffect, useState } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';
import { useNavigate } from 'react-router';
import { Lightbox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import type { MemoryImage } from '@api/memories';
import { getImageMetadata } from '@api/memories';

export default function Memories() {
  const [index, setIndex] = useState<number>(-1);

  const [metadata, setMetadata] = useState<MemoryImage[]>([]);
  const [thumbnailMetadata, setThumbnailMetadata] = useState<MemoryImage[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getImageMetadata()
      .then((response) => {
        const [metadata, thumbnailMetadata] = response;
        setMetadata(metadata);
        setThumbnailMetadata(thumbnailMetadata);
      })
      .catch((e) => console.log(e));
  }, [navigate]);

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

import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router';
import global from '../global/global.json';

export default function Assets() {

  type Asset = {
    name?: string;
    link?: string;
  };

  const [ data, setData ] = useState<Asset[]>();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('./publicAssets.json')
      .then(response => response.json() as unknown as Asset[])
      .then((json: Asset[]) => setData(json))
      .catch(() => console.log('error'));
  }, [ navigate ]);

  return (
    <div className="main" id="resourcePage">
      <Helmet>
        <title>{'Assets - Owen Moogk'}</title>
      </Helmet>
      <p className="title">Assets</p>
      <p className="subtitle">Extra bits, for storage.</p>
      {data ?
        <div className="assets">
          <ul>
            {data.map((asset, key) => {
              let link: string;
              if (!asset.name || !asset.link) {
                return <br key={key} />;
              }
              if (!asset.link.startsWith('http', 0)) {
                link = global.assets + asset.link;
              } else {
                link = asset.link;
              }
              return (
                <li key={key}><a href={link} target="_blank" rel="noreferrer">{asset.name}</a></li>
              );
            })}
          </ul>
        </div>
        : null
      }
    </div>
  );
}

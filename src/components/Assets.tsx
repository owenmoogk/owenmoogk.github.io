import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router';
import global from '../global/global.json';
import { type Asset, fetchAssets } from '@api/assets';

export default function Assets() {

  const [ data, setData ] = useState<Asset[]>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAssets()
      .then(response => setData(response))
      .catch(() => navigate('/404'));
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

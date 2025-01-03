import { Anchor } from '@mantine/core';
import { Helmet } from 'react-helmet-async';


import data from './publicAssets.json';
import { assetUrl } from '@global/global';

export type Asset = {
  name?: string;
  link?: string;
};

export default function Assets() {
  return (
    <div className="main" id="resourcePage">
      <Helmet>
        <title>{'Assets - Owen Moogk'}</title>
      </Helmet>
      <p className="title">Assets</p>
      <p className="subtitle">Extra bits, for storage.</p>
      {data && (
        <div className="assets">
          <ul>
            {data.map((asset, key) => {
              let link: string;
              if (!asset.name || !asset.link) {
                return <br key={key} />;
              }
              if (!asset.link.startsWith('http', 0)) {
                link = assetUrl + asset.link;
              } else {
                link = asset.link;
              }
              return (
                <li key={key}>
                  <Anchor href={link} target="_blank" rel="noreferrer">
                    {asset.name}
                  </Anchor>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

import { Box } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function FeaturedIcon(props: {
  data: {
    name: string;
    types: string[];
    title: string;
    date?: string;
    description?: string;
    link?: string;
  };
}) {
  const data = props.data;
  const types = data.types.map((x: string) => x.toLowerCase());
  return (
    <Link
      to={data.link ?? data.name}
      style={{ margin: '20px' }}
      className="featuredIconLink"
    >
      <div
        className="featuredIcon"
        style={{
          backgroundImage: 'url("/assets/projects/' + data.name + '/main.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="featuredLabel">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '0 20px',
            }}
          >
            <Box className="featuredText" mr={15}>
              <span className="contentTitle">{data.title}</span>
              {data.date && <span className="contentDate">{data.date}</span>}

              {/* these are here for sorting, we still want them to be searchable */}
              <span className="contentDesc" style={{ display: 'none' }}>
                {data.description}
              </span>
              <span className="type" style={{ display: 'none' }}>
                {data.types}
              </span>
            </Box>
            <span className="iconContainer">
              {types.map((type, key) => (
                <img
                  src={'/assets/icons/' + type.toLowerCase() + '.svg'}
                  className="iconImage"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                  key={key}
                  alt=""
                />
              ))}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

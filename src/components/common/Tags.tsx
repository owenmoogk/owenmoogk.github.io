import React from 'react';

export default function Tag(props: {
  type: string;
}) {
  const type = props.type;
  return (
    <span className="type" style={{ border: '2px solid var(--' + type.toLowerCase().replace(/[^a-z]/gi, '') + ',grey)' }}>
      <span className="circle" style={{ backgroundColor: 'var(--' + type.toLowerCase().replace(/[^a-z]/gi, '') + ',grey)' }} />
      {type}
    </span>
  );
}

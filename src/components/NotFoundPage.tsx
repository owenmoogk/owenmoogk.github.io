import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {

  return (
    <div className="main" id="notFoundPage">
      <h1 className="title">404!</h1>
      <p className="subtitle">Uh oh, looks like I lost you.</p>
      <p>
        If there should be a valid page here, please <Link to="/contact">let me know</Link>.
        <br /><br />
        Country roads... <Link to="/">take me home</Link>.
      </p>
    </div>
  );
}

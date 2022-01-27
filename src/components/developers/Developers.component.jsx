import React from 'react';
import { Link } from 'react-router-dom';

const Developers = () => {
  return (
    <div className='developers-container'>
      <h1>Developers</h1>
      <br />
      <div className="docs-banner">
        <h1>Start by looking at our docs</h1>
      </div>
      <div className="tutorials-banner">
        <h1>Start building with wheatgrass</h1>
        <a><Link to='/tutorials'>Take a look</Link></a>
      </div>
    </div>
  );
};

export default Developers;

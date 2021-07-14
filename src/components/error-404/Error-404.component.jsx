import React from 'react';
import { Link } from 'react-router-dom';
import './Error-404.styles.scss';

const Error404 = () => {
  return (
    <div className='error404Container'>
      <h1 className='error404Header'>404 - Page not found</h1>
      <p>The requested url is currently not available.</p>
      <Link to='/'>
        <button className='error404Button'>Go Back</button>
      </Link>
    </div>
  );
};

export default Error404;

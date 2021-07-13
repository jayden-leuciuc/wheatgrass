import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/componentExport';

import './404.styles.scss';

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className='error404Container'>
        <h1 className='error404Header'>404 - Page not found</h1>
        <p>The requested url is currently not available.</p>
        <Link to='/'>
          <button className='error404Button'>Go Back</button>
        </Link>
      </div>
    </>
  );
};
export default ErrorPage;

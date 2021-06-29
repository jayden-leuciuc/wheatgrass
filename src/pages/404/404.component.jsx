import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/componentExport';

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      404 error. The requested page is not found
      <Link to='/'>
        <button>Take me back home</button>
      </Link>
    </div>
  );
};
export default ErrorPage;

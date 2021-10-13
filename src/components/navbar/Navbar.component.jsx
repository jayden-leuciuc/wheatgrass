import React from 'react';
import { Link } from 'react-router-dom';

import wheatgrassLogo from '../../images/wheatgrassSingle.png';

import './Navbar.styles.scss';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <li className='link-li'>
        <Link to='/'>
          <img src={wheatgrassLogo} alt='LOGO' />
        </Link>
      </li>
      <li className='link-li'>
        <Link to='/get-started'>Get Started</Link>
      </li>

      <li className='link-li'>
        <Link to='/developers'>Developers</Link>
      </li>

      <li className='link-li'>
        <Link to='/faq'>FAQ</Link>
      </li>

      <li className='link-li download'>
        {' '}
        <Link to='download'>Download</Link>
      </li>
    </div>
  );
};

export default Navbar;

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
        <Link to='/get-started'>
          <p>Get Started</p>
        </Link>
      </li>

      <li className='link-li'>Developers</li>

      <li className='link-li'>
        <Link to='/faq'>FAQ</Link>
      </li>

      <li className='link-li'>Download</li>
    </div>
  );
};

export default Navbar;

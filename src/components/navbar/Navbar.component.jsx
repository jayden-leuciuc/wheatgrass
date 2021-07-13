import React from 'react';
import { Link } from 'react-router-dom';

import wheatgrassLogo from '../../images/wheatgrassSingle.png';

import './Navbar.styles.scss';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <Link to='/'>
        <img src={wheatgrassLogo} alt='LOGO' />
      </Link>
      <ul className='links-container'>
        <div className='link-li'>
          <Link to='/get-started'>
            <li>Get Started</li>
          </Link>
        </div>

        <div className='link-li'>
          <li>Developers</li>
        </div>

        <div className='link-li'>
          <Link to='/faq'>
            <li>FAQ</li>
          </Link>
        </div>
        <div className='link-li'>
          <span className='language'>
            <li>EN V</li>
          </span>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;

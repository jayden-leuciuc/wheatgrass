import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.styles.scss';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <Link to='/'>
        <img src='' alt='LOGO' />
      </Link>
      <ul className='links-container'>
        <div className='link-li'>
          <a href='#getStarted'>
            <li>Get Started</li>
          </a>
        </div>

        <div className='link-li'>
          <li>Developers</li>
        </div>

        <div className='link-li'>
          <Link to='/contact'>
            <li>FAQ</li>
          </Link>
        </div>
        <div className='link-li'>
          <li>EN V</li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
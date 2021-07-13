import React from 'react';

import './Footer.styles.scss';

import { GitHub, Twitter, Instagram } from 'react-feather';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='social-container'>
        <a href='https://github.com/' rel='noreferrer' className='social-link'>
          <GitHub />
        </a>
        <a href='https://twitter.com/' rel='noreferrer' className='social-link'>
          <Twitter />
        </a>
        <a
          href='https://www.instagram.com/'
          rel='noreferrer'
          className='social-link'
        >
          <Instagram />
        </a>
      </div>

      <div className='list-container'>
        <h3>Use Wheatgrass</h3>
        <ul>
          <li>FAQ</li>
          <li>Wallets</li>
          <li>Download</li>
        </ul>
      </div>

      <div className='list-container'>
        <h3>Developers</h3>
        <ul>
          <li>Documentation</li>
          <li>Tutorials</li>
          <li>Resources</li>
        </ul>
      </div>

      <div className='list-container'>
        <h3>About</h3>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

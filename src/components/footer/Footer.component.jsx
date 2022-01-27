import React from 'react';
import { Link } from 'react-router-dom';

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
        <h3>Use and Learn</h3>
        <ul>
          <li>
            <Link to='/faq'>FAQ</Link>
          </li>
          <li>
            <Link to='/whitepaper'>Whitepaper</Link>
          </li>
          <li>
            <Link to='/download'>Download</Link>
          </li>
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
          <li>
            <Link to='/about'>About</Link>
          </li>

          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

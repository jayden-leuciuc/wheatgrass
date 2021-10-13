import React from 'react';

import './Download.styles.scss';

import { AiOutlineApple, AiOutlineWindows } from 'react-icons/ai';
import { SiLinux } from 'react-icons/si';
const Download = () => (
  <div className='download-container'>
    <h1>Downloads</h1>
    <p>Note: only download official resources from the Wheatgrass website</p>
    <div className='download-row'>
      <a href='public/wheatgrass.txt' download='wheatgrass_0.8.2'>
        <AiOutlineWindows /> Windows x 64
      </a>
      <p>0.8.2 (Stable | LTS)</p>
    </div>
    <div className='download-row'>
      <a href='public/wheatgrass.txt' download='wheatgrass_0.9.7'>
        <AiOutlineWindows /> Windows x 64
      </a>
      <p>0.9.7 (Latest)</p>
    </div>
    <hr />
    <div className='download-row'>
      <a href='public/wheatgrass.txt' download='wheatgrass_0.8.2'>
        <AiOutlineApple /> MacOs
      </a>
      <p>0.8.2 (Stable | LTS)</p>
    </div>

    <div className='download-row'>
      <a href='public/wheatgrass.txt' download='wheatgrass_0.9.7'>
        <AiOutlineApple /> MacOs
      </a>
      <p>0.9.7 (Latest)</p>
    </div>
    <hr />
    <div className='download-row'>
      <a href='public/wheatgrass.txt' download='wheatgrass_0.8.2'>
        <SiLinux /> Linux
      </a>
      <p>0.8.2 (Stable | LTS)</p>
    </div>

    <div className='download-row'>
      <a href='public/wheatgrass.txt' download='wheatgrass_0.9.7'>
        <SiLinux /> Linux
      </a>
      <p>0.9.7 (Latest)</p>
    </div>
    <div>
      <a href='/contact'>Need help?</a>
    </div>
  </div>
);

export default Download;

import React from 'react';

import './Download.styles.scss';

import { AiOutlineApple, AiOutlineWindows } from 'react-icons/ai';
import { SiLinux } from 'react-icons/si';
const Download = () => (
  <div className='download-container'>
    <h1>Downloads</h1>
    <p>Note: only download official resources from the Wheatgrass website</p>
    <div className='download-row'>
      <a href='#'>
        <AiOutlineWindows /> Windows x 64
      </a>
      <p>0.8.2 (Stable | LTS)</p>
    </div>
    <div className='download-row'>
      <a href='#'>
        <AiOutlineWindows /> Windows x 64
      </a>
      <p>0.9.7 (Latest)</p>
    </div>
    <hr />
    <div className='download-row'>
      <a href='#'>
        <AiOutlineApple /> MacOs
      </a>
      <p>0.8.2 (Stable | LTS)</p>
    </div>

    <div className='download-row'>
      <a href='#'>
        <AiOutlineApple /> MacOs
      </a>
      <p>0.9.7 (Latest)</p>
    </div>
    <hr />
    <div className='download-row'>
      <a href='#'>
        <SiLinux /> Linux
      </a>
      <p>0.8.2 (Stable | LTS)</p>
    </div>

    <div className='download-row'>
      <a href='#'>
        <SiLinux /> Linux
      </a>
      <p>0.9.7 (Latest)</p>
    </div>
    <div>
      <a href='#'>Need help?</a>
    </div>
  </div>
);

export default Download;

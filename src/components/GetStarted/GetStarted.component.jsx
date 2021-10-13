import React from 'react';

import './GetStarted.styles.scss';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className='getstarted-container'>
      <div className='started-left-div'>
        <h1>Get Started</h1>
        <p>
          It is simple to use the powerful blockchain technology of wheatgrass.
          Follow the steps on the right to get started to further decentralize
          the wheatgrass network
        </p>
      </div>
      <div className='started-right-div'>
        <div className='started-section-button'>
          <div className='button-container'>
            <Link className='button-link' to='/faq'>
              Inform Yourself
            </Link>
          </div>
          <div className='button-container'>
            <Link className='button-link' to='/download'>
              Get wheatgrass
            </Link>
          </div>
          <div className='button-container'>
            <Link className='button-link'>Get your wallet</Link>
          </div>
          <div className='button-container'>
            <Link className='button-link'>Use it</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

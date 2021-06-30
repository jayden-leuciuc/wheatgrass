import React from 'react';

import './GetStarted.styles.scss';
import CustomButton from '../CustomButton/CustomButton.component';

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
            <button>Inform yourself</button>
          </div>
          <div className='button-container'>
            <button>Get your wallet</button>
          </div>
          <div className='button-container'>
            <button>Get wheatgrass</button>
          </div>
          <div className='button-container'>
            <button>Use it</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

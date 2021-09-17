import React from 'react';

import wheatGrassPng from '../../images/watercolorWheatgrass.png';
import CustomButton from '../CustomButton/CustomButton.component';

import './Hero.styles.scss';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='left-div-container'>
        <h1 className='hero-text'>
          Wheatgrass is an <br />
          <span className='hero-colored-text'>energy efficient</span> blockchain
          that is powered by you
        </h1>
        <CustomButton
          buttonText='Why use Wheatgrass?'
          link='/faq'
          outsideLink={false}
        />
      </div>
      <div className='right-div-container'>
        <img src={wheatGrassPng} alt='IMG' className='hero-img' />
      </div>
    </div>
  );
};

export default Hero;

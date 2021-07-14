import React from 'react';

import wheatGrassPng from '../../images/watercolorWheatgrass.png';
import CustomButton from '../customButton/CustomButton.component';

import './Hero.styles.scss';

const Hero = () => {
  return (
    <div className='hero-container'>
      <img src={wheatGrassPng} alt='IMG' className='hero-img' />
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
  );
};

export default Hero;

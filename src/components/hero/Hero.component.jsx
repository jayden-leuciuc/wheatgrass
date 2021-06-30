import React from 'react';

import wheatGrassPng from '../../images/bruh.png';
import CustomButton from '../CustomButton/CustomButton.component';

import './Hero.styles.scss';

const Hero = () => {
  return (
    <div className='hero-container'>
      <img src={wheatGrassPng} alt='IMG' className='hero-img' />
      <div>A new way to pay</div>
      <div>
        Wheatgrass is an{' '}
        <span className='hero-colored-text'>energy efficient</span> blockchain
        that is powered by you
      </div>
      <CustomButton
        buttonText='Why use Wheatgrass?'
        link='/faq'
        outsideLink={false}
      />
    </div>
  );
};

export default Hero;

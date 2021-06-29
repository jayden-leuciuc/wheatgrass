import React from 'react';

import wheatGrassPng from '../../images/bruh.png';

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
      <button className='hero-button'>Learn More</button>
    </div>
  );
};

export default Hero;

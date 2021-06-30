import React from 'react';

import './Overview.styles.scss';
import wheatGrassImage from '../../images/bruh.png';
import CustomButton from '../CustomButton/CustomButton.component';

const Overview = () => (
  <div className='overview-container'>
    <h1>What is wheatgrass?</h1>
    <div className='overview-flex'>
      <div className='overview-text-div'>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta sequi
          accusamus aspernatur temporibus molestiae consequuntur enim,
          accusantium quia. Ad aliquid aut obcaecati odit quisquam consectetur
          facilis, earum quia dolores a.
          <br />
          <CustomButton buttonText='Get Started' link={'/get-started'} />
        </p>
      </div>
      <div className='overview-svg-div'>
        <img src={wheatGrassImage} alt='' />
      </div>
    </div>
  </div>
);

export default Overview;

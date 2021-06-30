import React from 'react';

import './Statistics.styles.scss';

const Statistics = () => (
  <div className='statistics-container'>
    <div className='statistic-block'>
      <h1>Current Price (USD)</h1>
      <h2>$44.01</h2>
      <p>Note that all of the statistics on this page are fictional.</p>
    </div>

    <div className='statistic-block'>
      <h1>Total Nodes</h1>
      <h2>2,103</h2>
      <p>The United States currently is leading with a total of 1,563 nodes.</p>
    </div>
  </div>
);
export default Statistics;

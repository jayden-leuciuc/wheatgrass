import React from 'react';

import './Statistics.styles.scss';

const Statistics = () => (
  <div className='statistics-container'>
    <div className='statistic-block'>
      <h1>Current Price (USD)</h1>
      <h2>$xx.xx</h2>
      <p>Latest news article</p>
    </div>

    <div className='statistic-block'>
      <h1>Total Nodes</h1>
      <h2>x,xxx</h2>
      <p>The United States currently is leading with a total of x,xxx nodes.</p>
    </div>
  </div>
);
export default Statistics;

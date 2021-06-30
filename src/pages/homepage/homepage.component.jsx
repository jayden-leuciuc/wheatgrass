import React from 'react';

import {
  Hero,
  Navbar,
  Statistics,
  Overview,
} from '../../components/componentExport';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Statistics />
    </>
  );
};
export default HomePage;

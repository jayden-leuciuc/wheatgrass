import React from 'react';

import {
  Hero,
  Navbar,
  Statistics,
  Overview,
  Footer,
} from '../../components/componentExport';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Overview />
      <Statistics />
    </>
  );
};
export default HomePage;

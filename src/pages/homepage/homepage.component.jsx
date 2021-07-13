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
      <Navbar />
      <Hero />
      <Overview />
      <Statistics />
      <Footer />
    </>
  );
};
export default HomePage;

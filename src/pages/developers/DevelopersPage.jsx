import React from 'react';

import { Navbar, Footer } from '../../components/componentExport';
const DevelopersPage = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Navbar />
      <Footer style='margin-top:auto' />
    </div>
  );
};

export default DevelopersPage;

import React from 'react';
import { Navbar, Footer, About } from '../../components/componentExport';

const CareersPage = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Navbar />
      <div>Careers</div>
      <Footer style='margin-top:auto' />
    </div>
  );
};
export default CareersPage;

import React from 'react';

import { GetStarted, Navbar, Footer } from '../../components/componentExport';

const GetStartedPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Navbar />
    <GetStarted />
    <Footer style='margin-top:auto' />
  </div>
);

export default GetStartedPage;

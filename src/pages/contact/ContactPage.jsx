import React from 'react';

import { Footer, Navbar } from '../../components/componentExport';

const ContactPage = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Navbar />
      <div>contact</div>
      <Footer style='margin-top:auto' />
    </div>
  );
};
export default ContactPage;

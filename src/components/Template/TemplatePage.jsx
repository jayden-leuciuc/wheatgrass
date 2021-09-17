import React from 'react';
import { Navbar, Footer } from '../componentExport';
import './TemplatePage.styles.scss';

const TemplatePage = ({ componentProp }) => {
  return (
    <div className='templatePage-container'>
      <Navbar />
      {componentProp}
      <Footer className='tmpFooter' />
    </div>
  );
};

export default TemplatePage;

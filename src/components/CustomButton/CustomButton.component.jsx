import React from 'react';

import { Link } from 'react-router-dom';

import './CustomButton.styles.scss';

const CustomButton = ({ buttonText, link, outsideLink }) => {
  if (!outsideLink) {
    return (
      <Link to={link}>
        <button>{buttonText}</button>
      </Link>
    );
  } else {
    return (
      <a href={link}>
        <button>{buttonText}</button>
      </a>
    );
  }
};
export default CustomButton;

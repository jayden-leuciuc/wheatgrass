import React from 'react';

import './TutorialCard.styles.scss';

const TutorialCard = ({ title, description, difficulty }) => {
  return (
    <div className='tutorial'>
      <a href=''>{title}</a>
      <p>{description}</p>
      <p>{difficulty}</p>
    </div>
  );
};
export default TutorialCard;

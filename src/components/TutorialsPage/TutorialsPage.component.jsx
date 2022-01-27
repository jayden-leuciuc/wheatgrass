import React from 'react';

import TutorialCard from '../TutorialCard/TutorialCard.component';

import './TutorialsPage.styles.scss';

const TutorialsPage = () => {
  return (
    <div className='tutorials-container'>
      <h1>Tutorials</h1>
      <div className='search-container'>
        <form>
          <input type='text' placeholder='Search...' name='search' />
          <a href='#'>Search</a>
        </form>
      </div>

      <div className='tutorial-container'>
        <TutorialCard
          title={'Tutorial #1'}
          description={'Description'}
          difficulty={'easy'}
        />

        <TutorialCard
          title={'Tutorial #1'}
          description={'Description'}
          difficulty={'easy'}
        />
        <TutorialCard
          title={'Tutorial #1'}
          description={'Description'}
          difficulty={'Intermediate'}
        />
        <TutorialCard
          title={'Tutorial #1'}
          description={'Description'}
          difficulty={'Advanced'}
        />
      </div>
    </div>
  );
};
export default TutorialsPage;

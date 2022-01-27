import React from 'react';

import { faqData } from './FaqData';
import './Faq.styles.scss';

const Faq = () => {
  const array = faqData;
  console.log(array[0].title);
  return (
    <div className='faq-container'>
      <div className='side-navbar-container'>
        <ul>
          <h3>Overview</h3>
          {array.map(({ id, title }) => {
            return (
              <>
                <li key={id}>
                  <a href={`#${id}`}>{title}</a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <div className='questions-container'>
        <h1>Common Questions</h1>

        {array.map(({ id, title, answer }) => {
          return (
            <div className='faq-question'>
              <h1 key={id} id={id}>
                {title}
              </h1>
              <p>{answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Faq;

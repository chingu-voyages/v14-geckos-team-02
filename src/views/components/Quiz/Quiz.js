import React from 'react';
import './Quiz.scss';

import Question from '../Question/Question';
import MultipleChoice from '../MultipleChoice/MultipleChoice';
import ProgressBar from '../ProgressBar/ProgressBar';
import Timer from '../Timer/Timer';

const Quiz = ({
  questions,
  count,
  handleCheck,
  handleClickNext,
  seconds,
  toggle,
  isPaused,
  location
}) => {
  console.log(location);
  return (
    <div className='container'>
      <Timer seconds={seconds} toggle={toggle} isPaused={isPaused} />
      <h1>Quiz Board</h1>

      <div>
        <Question question={questions[count].question} />

        <MultipleChoice
          choices={questions[count].multipleChoices}
          answer={questions[count].answer}
          handleCheck={handleCheck}
        />
        <ProgressBar questionLevel={count + 1} />
        <div className='button-container'>
          <button className='next-button' onClick={handleClickNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

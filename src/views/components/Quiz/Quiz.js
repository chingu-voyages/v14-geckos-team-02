import React,{ useState } from 'react'
import './Quiz.scss';

import Question from '../Question/Question';
import MultipleChoice from '../MultipleChoice/MultipleChoice';
import Results from '../Results/Results';
import ProgressBar from '../ProgressBar/ProgressBar';

import QUIZ_DATA from '../../../quiz-data';

const Quiz = ({questions, count, score, handleCheck,handleClickNext}) => {
    return ( 
     <div className="container">
        <h1>Quiz Board</h1>
        <span style={{color:"red"}}>(Your current score is: {score})</span>  {/* Test only */}
        <div>
          <Question question={questions[count].question} />
          <MultipleChoice
              choices={questions[count].multipleChoices}
              answer={questions[count].answer}
              handleCheck={handleCheck}
              id={questions[count].questionId}
          />
          <div className="button-container">
            <button className="next-button" onClick={handleClickNext}>Next</button>
          </div>
        </div>
      </div>
    );
  };

  export default Quiz;
  

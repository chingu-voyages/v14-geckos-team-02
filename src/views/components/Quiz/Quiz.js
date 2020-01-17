import React from 'react'
import Question from '../Question/Question';
import MultipleChoice from '../MultipleChoice/MultipleChoice';

import './Quiz.scss';
 

const Quiz = ({questions, count, handleCheck,handleClickNext}) => {
    return ( 
     <div className="container">
        <h1>Quiz Board</h1>
        <div>
          <Question question={questions[count].question} />
          <MultipleChoice
              choices={questions[count].multipleChoices}
              answer={questions[count].answer}
              handleCheck={handleCheck}
          />
          <div className="button-container">
            <button className="next-button" onClick={handleClickNext}>Next</button>
          </div>
        </div>
      </div>
    );
  };

  export default Quiz;
  
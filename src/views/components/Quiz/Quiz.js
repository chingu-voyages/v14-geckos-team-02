import React from 'react'
import Question from '../Question/Question';
import MultipleChoice from '../MultipleChoice/MultipleChoice';

import './Quiz.scss';
 

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
          <button onClick={handleClickNext}>Next</button>
        </div>
      </div>
    );
  };

  export default Quiz;
  
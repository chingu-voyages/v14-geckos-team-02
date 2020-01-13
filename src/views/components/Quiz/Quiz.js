import React,{ useState } from 'react'
import './Quiz.scss';

import Question from '../Question/Question';
import MultipleChoice from '../MultipleChoice/MultipleChoice';
import Results from '../Results/Results'

import QUIZ_DATA from '../../../quiz-data';

const Quiz = () => {
    const [questions] = useState(QUIZ_DATA[1].questions);
    let [score, setScore] = useState(0); // counting score
    let [value, setValue] = useState(); // value that user select
    let [count, setCount] = useState(0); // track on the number of questions
    
    const clearActiveItem = () => {
      if (document.querySelector('.active-item')) {
        document.querySelector('.active-item .checkmark').innerHTML = '<i class="far fa-circle">';
        document.querySelector('.active-item').classList.remove('active-item');
      } 
    }

    const handleCheck = (event) => {
      setValue(event.target.dataset.value); // set value equal to user's selected value
      
      clearActiveItem();
  
      event.target.classList.add('active-item');
      event.target.querySelector('.checkmark').innerHTML = '<i class="fas fa-check-circle"></i>';
      document.querySelector('.next-button').disabled = false;
    };
  
    const handleClickNext = () => {
      if (document.querySelector('.active-item')) {
        if (questions[count].answer === value) {
          setScore((score += 1));
        }
        alert(`Your current score is ${score}`);
        let newCount = count < questions.length ? count + 1 : count;
  
        clearActiveItem();
        
        setCount(newCount);
      }
      
    };
    console.log(count, "---", questions.length)
    
    return (
      <div  >
      {(count===questions.length)?
      <Results score={score} numOfQuestions={questions.length}/>:
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
      }
      </div>
    );
  };

  export default Quiz;
  
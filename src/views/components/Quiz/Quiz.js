import React,{ useState } from 'react'
import './Quiz.scss';

import Question from '../Question/Question';
import MultipleChoice from '../MultipleChoice/MultipleChoice';
import Results from '../Results/Results';
import ProgressBar from '../ProgressBar/ProgressBar';

import QUIZ_DATA from '../../../quiz-data';

const Quiz = () => {
    const [questions] = useState(QUIZ_DATA[1].questions);
    let [score, setScore] = useState(0); // counting score
    let [value, setValue] = useState(); // value that user select
    let [count, setCount] = useState(0); // track on the number of questions


    const handleCheck = (value) => {
      setValue(value); // set value equal to user's selected value
    };

    const handleClickNext = () => {
      if (questions[count].answer === value) {
        setScore((score += 1));
      }
      alert(`Your current score is ${score}`);
      let newCount = count < questions.length ? count + 1 : count;

      setCount(newCount);
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
          <ProgressBar />
          <MultipleChoice
              choices={questions[count].multipleChoices}
              answer={questions[count].answer}
              handleCheck={handleCheck}
              id={questions[count].questionId}
          />
          <button onClick={() => handleClickNext()}>Next</button>
        </div>
      </div>
       }

      </div>
    );
  };

  export default Quiz;

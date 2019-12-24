import React,{useState} from 'react'
import MultipleChoice from '../MultipleChoice/MultipleChoice';
import {qBank} from '../../questionBank'



export default () => {
    const [questions, setQuestions] = useState([...qBank]);
    let [score, setScore] = useState(0); // countering score
    let [value, setValue] = useState(); // value that user select
    let [count, setCount] = useState(0); // track on the number of questions
  
    const handleChecked = (value, count) => {
      const newQuestions = [...questions];
      newQuestions[count].checkedOption = value;
      setQuestions([...newQuestions]);
      setValue(value); // set value equal to user's selected value
    };
  
    const handleClicked = () => {
      if (questions[count].correct === value) {
        setScore((score += 1));
      }
      alert(`Your current score is ${score}`);
      const newCount = count < questions.length ? count + 1 : count;
      setCount(newCount);
    };
    // console.log(score)
    return (
      <div className="container">
        <h1>Quiz Board</h1>
        <div>
          <MultipleChoice
            question={questions[count].question}
            choices={questions[count].answers}
            answer={questions[count].correct}
            checkedOption={questions[count].checkedOption}
            handleChecked={handleChecked}
            id={questions[count].questionId}
            count={count}
          />
        </div>
  
        <button>Previous</button>
        <button onClick={() => handleClicked()}>Next</button>
      </div>
    );
  };
  
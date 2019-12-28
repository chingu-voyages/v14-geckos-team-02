import React,{useState} from 'react'
import MultipleChoice from '../MultipleChoice/MultipleChoice';


var qBank=require('../../quiz.json')

export default () => {
    const [questions, setQuestions] = useState([...qBank]);
    let [score, setScore] = useState(0); // counting score
    let [value, setValue] = useState(); // value that user select
    let [count, setCount] = useState(0); // track on the number of questions
    let [currentQuestion]=useState([...questions])

    const handleCheck = (value, count) => {
      currentQuestion[count].checkedOption=value;
      setQuestions([...currentQuestion]);
      setValue(value); // set value equal to user's selected value
    };
  
    const handleClickNext = () => {
      if (questions[count].correct === value) {
        setScore((score += 1));
      }
      alert(`Your current score is ${score}`);
      const newCount = count < questions.length ? count + 1 : count;
      setCount(newCount);
    };
   

    return (
      <div className="container">
        <h1>Quiz Board</h1>
        <span style={{color:"red"}}>(You current score is: {score})</span>  {/* Test only */}
        <div>
          <MultipleChoice
            question={questions[count].question}
            choices={questions[count].answers}
            answer={questions[count].correct}
            handleCheck={handleCheck}
            id={questions[count].questionId}
            count={count}
          />
        </div>
  
        <button onClick={() => handleClickNext()}>Next</button>
      </div>
    );
  };
  
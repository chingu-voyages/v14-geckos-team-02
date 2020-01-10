import React,{useState} from 'react'
 
import Results from '../Results/Results'
import Quiz from '../Quiz/Quiz'
import QUIZ_DATA from '../../../quiz-data';

export default ()=>{
    const [questions] = useState(QUIZ_DATA[1].questions);
    let [score, setScore] = useState(0); // counting score
    let [value, setValue] = useState(); // value that user select
    let [count, setCount] = useState(0); // track on the number of questions
    

    const handleCheck = (value) => {
      setValue(value); // set value equal to user's selected value
    };
  
    const handleClickNext = () => {
      if (questions[count].answer === value) setScore((score += 1));
      let newCount = count < questions.length ? count + 1 : count;
      setCount(newCount);
    };
   
    return(
        <div>
        {(count===questions.length)?
            <Results score={score} numOfQuestions={questions.length}/>:
            <Quiz
                questions={questions}
                count={count}
                score={score}
                handleCheck={handleCheck} 
                handleClickNext={handleClickNext} 
            />}
        </div>
    )
}
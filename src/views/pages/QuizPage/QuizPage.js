import React,{useState, useEffect} from 'react'
 
import Results from '../../components/Results/Results'
import Quiz from '../../components/Quiz/Quiz'

import QUIZ_DATA from '../../../quiz-data';

export default props => {
  const [questions] = useState(QUIZ_DATA[props.match.params.id].questions);
  let [score, setScore] = useState(0); // counting score
  let [value, setValue] = useState(); // value that user select
  let [count, setCount] = useState(0); // track on the number of questions
  let [seconds, setSeconds]=useState(0);
  let [isPaused, setIsPaused]=useState(false);

  const clearActiveItem = () => {
    if (document.querySelector('.active-item')) {
      document.querySelector('.active-item .checkmark').innerHTML =
        '<i class="far fa-circle">';
      document.querySelector('.active-item').classList.remove('active-item');
    }
  };

  const handleCheck = event => {
    setValue(event.target.dataset.value); // set value equal to user's selected value

    clearActiveItem();

    event.target.classList.add('active-item');
    event.target.querySelector('.checkmark').innerHTML =
      '<i class="fas fa-check-circle"></i>';
    document.querySelector('.next-button').disabled = false;
  };

  const handleClickNext = () => {
    if (document.querySelector('.active-item')) {
      if (questions[count].answer === value) {
        setScore((score += 1));
      }
      let newCount = count < questions.length ? count + 1 : count;

      clearActiveItem();

      setCount(newCount);
    }
  };

  const toggle=()=>{
    setIsPaused(!isPaused);
  }


  useEffect(()=>{
    let interval=null;
    if(isPaused){
      interval=setInterval(() => {
        setSeconds(seconds=>seconds+1);
      }, 1000);
    }else if(!isPaused&&seconds!==0){
      clearInterval(interval);
    }
    return ()=>clearInterval(interval);
  },[isPaused,seconds])
  
  return(
        <div>
        {(count===questions.length)?
            <Results score={score} numOfQuestions={questions.length}/>:
            <Quiz
                questions={questions}
                count={count}
                handleCheck={handleCheck} 
                handleClickNext={handleClickNext} 
                seconds={seconds}
                toggle={toggle}
                isPaused={isPaused}
            />}
        </div>
    )
};

import React,{ useState } from 'react'

import Question from '../Question/Question';
import MultipleChoice from '../MultipleChoice/MultipleChoice';

import QUIZ_DATA from './quiz-data';

const Quiz = () =>{
    /**
     * State should inclue the following properties:
     * questions
     * currentQuestion
     * answer
     * correctAnswers
     */
    let [questions] = useState(QUIZ_DATA);
    let [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    let [correctAnswers, setCorrectAnswers] = useState(0); // num of correct answers
    let [answer, setAnswer] = useState(); // Answer that user select

    const handleCheck = (answer) => { 
        setAnswer(answer) // set Answer equal to user's selected Answer
    }

    const handleClick = () => { // by clicking Next btn, answer gets va 
        if (!answer) {
            alert('Please make a slection')
        } else {
            if (currentQuestion.answer === answer) { 
                setCorrectAnswers(correctAnswers += 1);
                alert('Correct answer');
            } else {
                alert('Wrong answer');
            }

            // Check if questions array has any questions left
            if (questions) {
                questions.shift();
                setCurrentQuestion(questions[0]);
            }
        }
    }

    return (
        <div className="container">
            <h1>Quiz Board</h1> 
            {
                currentQuestion ?
                <div>
                    <Question question={currentQuestion.question} />
                    <MultipleChoice 
                    // question={currentQuestion.question} 
                        choices={currentQuestion.multipleChoices} 
                    // answer={currentQuestion.answer} 
                        checkedOption={currentQuestion.checkedOption} 
                        handleCheck={handleCheck}
                        id={currentQuestion.id}  />
                    <button onClick={handleClick}>Submit Answer</button>
                </div>
                : <div>End</div>
            }
        </div>
    )
};

export default Quiz;
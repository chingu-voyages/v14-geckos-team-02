import React from 'react'
import PercentageCircle from '../PercentageCircle/PercentageCircle'
import { Link } from 'react-router-dom';
import "./Results.scss"



export default ({score, numOfQuestions})=>{
    return(
        <div className="resultContainer">
          <div className="result">
            <h3 className="result__title" >Results</h3>
            <h2 className="result__score">Your score is: 
                <br/> 
                <center className="result__num">{score} <span className="result__qn">/ {numOfQuestions}</span></center>
            </h2>
            <p className="result__accuracy">Your accuracy is:</p>
            <PercentageCircle score={score} numOfQuestions={numOfQuestions} /> 
          </div>
          <button className="back-btn"><Link to="/quiz-collections">Next</Link></button>
        </div>
    )
}
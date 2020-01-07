import React from 'react'
import PercentageCircle from './PercentageCircle'
import { Link } from 'react-router-dom';
import "./Results.scss"



export default ({score, numOfQuestions})=>{
    return(
        <div className="resultContainer">
          <div className="result">
            <h3 className="result__title" >Results</h3>
            <h2 className="result__score">Your score is <span className="result__num">{score}</span></h2>
            <p className="result__accuracy">Your accuracy is:</p>
            <PercentageCircle score={score} numOfQuestions={numOfQuestions} /> 
          </div>
          <button className="back-btn"><Link to="/">Back</Link></button>
        </div>
    )
}
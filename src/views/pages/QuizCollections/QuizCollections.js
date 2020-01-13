import React from 'react'
import { Link } from 'react-router-dom';

import './QuizCollections.scss';
import quizSubjects from './subject-data'

export default () => {
    return(
        <div className="collections" >
          {quizSubjects.map(quizSubject=>(
            <div className="card" key={quizSubject.title} >
                <div className="card-header">
                    <img className="card-image" src={`${quizSubject.image}`} alt="" />
                </div>
                <div className="card-body">
                    <h2>{quizSubject.title}</h2>
                    <p className="body-content">{quizSubject.text}</p>
                </div>
                <div className="btn-display">
                    <button className="button-primary">
                        <Link to={`/quiz/${quizSubject.id}`}>Take Quiz</Link> 
                    </button>
                </div>  
            </div>
            ))}
        </div>
    )
}
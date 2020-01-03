import React from 'react'
import { Link } from 'react-router-dom';
import './QuizCollections.scss';
import sujectData from './subject-data'

export default ()=>{
    return(
        <div className="colections" >
          {sujectData.map(s=>(
            <div className="card" key={s.title} >
                <header style={{backgroundImage:`url(${s.image})`}} className="card-header" />
                <div className="card-body">
                    <h2>{s.title}</h2>
                    <p className="body-content">{s.text}</p>
                </div>
                <div className="btn-display">
                    <button className="button-primary">
                        <Link to={s.link}>Take Quiz</Link> 
                    </button>
                </div>  
            </div>
            ))}
        </div>
      
    )
}
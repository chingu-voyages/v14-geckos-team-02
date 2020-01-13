import React from "react";
import './MultipleChoice.scss';

export default ({
  question,
  choices,
  handleCheck,
  id,
  answer,// Test only
}) => {
       return (
        <div className="multiple-choice-list">
          <h2>{question}</h2> 
          <span style={{color:'green'}}>(Answer: {answer})</span> {/* Test only */}
          {choices.map((choice,i) => {
              return (
                <li key={i} className="multiple-choice-item" onClick={e=>handleCheck(e)} data-value={choice}>
                  <span className="checkmark"><i className="far fa-circle"></i></span>{choice}
                </li>
              )}
            )}
        </div>
       );
     };
     
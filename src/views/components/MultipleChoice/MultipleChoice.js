import React from "react";
import './MultipleChoice.scss';

export default ({
  question,
  choices,
  handleCheck,
}) => {
       return (
        <div className="multiple-choice-list">
          <h2>{question}</h2> 
          {choices.map((choice,i) => {
              return (
                <li key={i} className="multiple-choice-item" onClick={handleCheck} data-value={choice}>
                  <span className="checkmark"><i className="far fa-circle"></i></span>{choice}
                </li>
              )}
            )}
        </div>
       );
     };
     
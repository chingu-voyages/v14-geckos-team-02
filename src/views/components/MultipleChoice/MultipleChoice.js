import React from "react";

export default ({
  question,
  choices,
  handleCheck,
  id,
  answer,// Test only
}) => {
       return (
         <div key={id}>
           <h2>{question}</h2> 
           <span style={{color:'green'}}>(Answer: {answer})</span> {/* Test only */}
                {choices.map((choice,i) => (
                  <div key={i}>
                    <label>
                      <input type="button" name={id} value={choice} onClick={e=>handleCheck(e.target.value)} />
                    </label>
                  </div>
                ))}
         </div>
       );
     };
     
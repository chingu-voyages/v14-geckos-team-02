import React from "react";

export default ({
  question,
  choices,
  handleCheck,
  id,
  answer,// Test only
}) => {
       return (
         <div>
           <h2>{question}</h2> 
           <span style={{color:'green'}}>(Answer: {answer})</span> {/* Test only */}
                {choices.map(choice => (
                  <div>
                    <label key={id}>
                      <input type="button" name={id} value={choice} onClick={e=>handleCheck(e.target.value)} />
                    </label>
                  </div>
                ))}
         </div>
       );
     };
     
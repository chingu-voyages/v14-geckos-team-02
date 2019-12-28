import React from "react";

export default ({
  question,
  choices,
  handleCheck,
  id,
  answer,// Test only
  count
}) => {
       return (
         <div>
           <h2>{question}</h2> 
           <span style={{color:'green'}}>(Answer: {answer})</span> {/* Test only */}
           {choices.map(c=>(
                <div >
                    <label key={id}>
                        <input
                        name={id}
                        type="radio"
                        onChange={e => handleCheck(e.target.value, count)}
                        value={c}
                    />{""}
                    {c}
                </label>
                </div>
                ))}
         </div>
       );
     };
     
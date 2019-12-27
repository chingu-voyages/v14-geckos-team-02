import React from "react";

export default ({
  question,
  choices,
  checkedOption,
  handleChecked,
  id,
  answer,// Test only
  count
}) => {
    const myChoices=choices.map(c=>{
        return <div >
            <label key={id}>
                <input
              type="radio"
              checked={checkedOption === `${c}`}
                  onChange={e => handleChecked(e.target.value, count)}
                value={c}
             />{""}
            {c}
         </label>
         </div>
       })
       
       return (
         <div>
           <h2>{question}</h2> 
           <span style={{color:'green'}}>(Answer: {answer})</span> {/* Test only */}
           {myChoices}
         </div>
       );
     };
     
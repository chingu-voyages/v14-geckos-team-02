import React from 'react';

export default ({choices, checkedOption, handleCheck, id}) => {
    const myChoices = () => {
        return (
            <div key={id}>
                <label><input type="radio" name="answer" onChange={(e)=>handleCheck(e.target.value)} value={choices[0]}/> {choices[0]}</label>
                <label><input type="radio" name="answer" onChange={(e)=>handleCheck(e.target.value)} value={choices[1]}/> {choices[1]}</label>
                <label><input type="radio" name="answer" onChange={(e)=>handleCheck(e.target.value)} value={choices[2]}/> {choices[2]}</label>
                <label><input type="radio" name="answer" onChange={(e)=>handleCheck(e.target.value)} value={choices[3]}/> {choices[3]}</label>
            </div>
       
        )
    }
    return(
        <div>
            {myChoices()}
        </div>
    )
};



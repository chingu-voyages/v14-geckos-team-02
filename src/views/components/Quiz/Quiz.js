import React,{useState} from 'react'
import MultipleChoice from '../MultipleChoice/MultipleChoice';



export default ()=>{
    const [QuestionDemo, setQuestionDemo]=useState({
        question:"What is the best use of hash tables?",
        choices:["find max/min","sorting","search or lookup","traverse"],
        answer:"search or lookup", 
        checkedOption:'',
        id:"123"})
    let [score,setScore]=useState(0) // countering score
    let [value, setValue]=useState() // value that user select

    const handleChecked=(value)=>{ 
        setQuestionDemo({...QuestionDemo,checkedOption:value}) //enable radio btn respond to user's selection
        setValue(value) // set value equal to user's selected value
    }

    const handleClicked=()=>{ // by clicking Next btn, answer gets va 
        if(QuestionDemo.answer===value){ 
            setScore(score+=1)
       }
        alert(`Your current score is ${score}`)
    }
    console.log(score)
    return(
    

        <div className="container">
            <h1>Quiz Board</h1> 
            <div>
                <MultipleChoice 
                question={QuestionDemo.question} 
                choices={QuestionDemo.choices} 
                answer={QuestionDemo.answer} 
                checkedOption={QuestionDemo.checkedOption} 
                handleChecked={handleChecked}
                id={QuestionDemo.id}  />
            </div>
            <button   >Previous</button>
            <button onClick={()=>handleClicked()} >Next</button>
            
        </div>
    )
}
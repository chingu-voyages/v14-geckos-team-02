import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './QuizCollections.scss';

export default ()=>{
   const [state]=useState([
     {title:'Binary Search Tree',
      link:'/big-o',   // needs to be updated with the correct url
      image:'https://upload.wikimedia.org/wikipedia/commons/9/9b/Binary_search_tree_example.gif',
      text:'In computer science, binary search trees, sometimes called ordered or sorted binary trees, are a particular type of container: a data structure that stores "items" in memory.'
    },
     {title:'Big O Notation',
      link:'/big-o',
      image:'http://cse.csusb.edu/dick/cs202/bigO.gif',
     text:'Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity.'
    },
     {title:'Sorting (Coming soon)',
     link:'/big-o', // needs to be updated with the correct url
     image:'https://miro.medium.com/max/500/0*khkSk6LZGgtqnjev.jpg',
     text:'A Sorting Algorithm is used to rearrange a given array or list elements according to a comparison operator on the elements.'}
   ])
   
    
    return(
        <div style={{display:"flex"}}>
          {state.map(s=>(
            <div className="card" key={s.title} >
                <header style={{backgroundImage:`url(${s.image})`,backgroundSize: "cover",backgroundRepeat:"no-repeat"}} className="card-header" />
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
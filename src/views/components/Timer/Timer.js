import React from 'react'
import './Timer.scss'

export default({seconds,toggle,isPaused})=>{

    return (
        <div className='timer' >
         <span >{seconds}s</span>
         <img 
            src="https://cdn1.iconfinder.com/data/icons/smashicons-interactions-webby-vol-1/60/3_-_Loading_Clock_interaction_communication_interface-512.png" 
            alt='timer'
            onClick={toggle}/> 
         <div>{isPaused?"Pause Timer":"Continue Timer"}</div>
        </div>
    )
}
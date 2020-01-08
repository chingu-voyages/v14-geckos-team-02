import React from 'react'
import "./PercentageCircle.scss"


export default ({ score, numOfQuestions }) => { 
    return (
      <div >
        <div className='single-chart'>
          <svg viewBox='0 0 36 36' className='circular-chart orange'>
            <path
              className='circle-bg'
              d='M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831'
            />
            <path
              className='circle'
              stroke-dasharray={`${(score/numOfQuestions).toFixed(2)*100},100`}
              d='M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831'
            />
            <text x='18' y='20.35' className='percentage'>
              {`${(score/numOfQuestions).toFixed(2)*100}%`}
            </text>
          </svg>
        </div>
      </div>
    )
  }
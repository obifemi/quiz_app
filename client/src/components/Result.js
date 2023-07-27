import React from 'react'
import '../styles/Result.css'
import {Link} from 'react-router-dom'

export default function Result() {
  const onRestart = function(){
    console.log('onRestart')
  }
  return (
    <div className="container">
      <h1 className="title text-light">
        Total Quiz Point
      </h1>
      <div className="result flex-center">
        <div className="flex">
      <span>Username:</span>
      <span className="bold">Mert</span>
      </div>
        <div className="flex">
      <span>Total Questions:</span>
      <span className="bold">50</span>
      </div>
        <div className="flex">
      <span>Total Attempts:</span>
      <span className="bold">5</span>
      </div>
        <div className="flex">
      <span>Total Earn Points:</span>
      <span className="bold">5</span>
      </div>
        <div className="flex">
      <span>Quiz Result:</span>
      <span className="bold">5</span>
      </div>
      </div>
      <div className="start">
      <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
      </div>
    </div>
  )
}

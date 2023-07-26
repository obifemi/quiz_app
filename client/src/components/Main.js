import React, {useRef} from 'react'
import { Link } from 'react-router-dom';

export default function Main() {
    const inputRef = useRef(null);
  return (
    <div className="container">
        <h1 className='title text-light'>Quiz App</h1>
        <ol>
            <li >You will be asked 10 questions one after another.</li>
            <li >Each question will have 3 options and you can choose only one of them.</li>
            <li >You will get 10 points for each correct answer.</li>
            <li>You can go back and change your answers.</li>
            <li >You can skip a question and come back to it later.</li>
            <li >You can see your score at the end of the quiz.</li>
        </ol>

        <form id="form">
            <input ref={inputRef} type="text" placeholder='Username' />
        </form>
        <div className="start">
            <Link className='btn' to={'quiz'}>Start Quiz</Link>
        </div>
    </div>
   
  )
}

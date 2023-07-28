import React, {useState, useEffect} from 'react'
import data from '../Database/data'

export default function Questions() {

  const question = data[0]

    const [checked,setChecked] = useState(undefined)

    function onSelect(e){
       console.log('radio')
    }

    // useEffect(()=>{console.log(data)},[])

  return (
    
    <div className='questions'>
        <h2 className='text-light'>{question.question}</h2>
        <ul key={question.id}>

        {
            question.options.map((op,index)=>(
              <li key={index}>
              <input type="radio" name="options" value={false} id={`q${index}`} onChange={onSelect()}/>
              <label className='text-primary' htmlFor={`q${index}`}>{op}</label>
              <div className="check "></div>

          </li>
            ))
           }
       
        </ul>
    </div>
  )
}

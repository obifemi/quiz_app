import React, {useState, useEffect} from 'react'
import data from '../Database/data'

export default function Questions() {

    const [radio,setRadio] = useState(undefined)

    function onSelect(e){
       console.log('radio')
    }

    useEffect(()=>{console.log(data)},[])

  return (
    
    <div className='questions'>
        <h2 className='text-light'>Question 1</h2>
        {data.map((e)=>(<li>{e.answer}
        </li>)
            
        )}

        <ul>
            <li>
                <input type="radio" name="options" value={false} id="q1-option" onChange={onSelect()}/>
                <label className='text-primary' htmlFor='q1-option'>Option 1</label>
                <div className="check "></div>

            </li>
        </ul>
    </div>
  )
}

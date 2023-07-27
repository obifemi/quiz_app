import React, {useState} from 'react'


export default function Questions() {

    const [radio,setRadio] = useState(undefined)

    function onSelect(e){
       console.log('radio')
    }

  return (
    <div className='questions'>
        <h2 className='text-light'>Question 1</h2>
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

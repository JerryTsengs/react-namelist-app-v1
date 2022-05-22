import React, {useState, useEffect, useRef} from 'react'

function NameForm(props) {
//when editing, this will show the original value, and easier for only add-on
const [input, setInput] = useState(props.edit ? props.edit.value : '');

//focus on text box for both ,add and update 
const inputRef = useRef(null)
useEffect (() => {
    inputRef.current.focus()
})

const handleChange = e => {
    setInput(e.target.value);
}

//preventWebpageReflash function prevent reflash the webpage after user click Add name buttom
const preventWebpageReflash = e => {
    e.preventDefault();


    props.onSubmit({
        //create a id after click Add name button
        id: Math.floor(Math.random() * 10000),
        text: input
    })

    setInput('');
}

  return (
    <form className='name-form' onSubmit={preventWebpageReflash}>

        {props.edit ? (
        <>
        <input 
            type='text' 
            placeholder='Update name' 
            value={input} 
            name='text' 
            className='name-input edit' 
            onChange={handleChange}
            ref={inputRef}
        />  
        <button className='name-button edit'>Update</button>
        </>
        ) :
        ( 
        <>
        <input 
            type='text' 
            placeholder='Add a name' 
            value={input} 
            name='text' 
            className='name-input' 
            onChange={handleChange}
            ref={inputRef}
        />  
        <button className='name-button'> Add name</button> 
        </>
        )
        }
        
    </form>

  )
}

export default NameForm
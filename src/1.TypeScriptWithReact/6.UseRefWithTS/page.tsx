// 2 usuage of useRef -- 
// 1. when we refresh our page,our application is focus on a specific input, even if you don't click there
// 2. on second we will create onClick version of useRef.

import React, { useEffect, useRef } from 'react'

const UseRefExample = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const userNameInputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        inputRef.current?.focus() // this question mark is set automatically by typescript because we have set null at the begining.
    },[]);

    const handleClick = () => {
        console.log('username is :' + userNameInputRef.current?.value);
        // why we are using useRef -- beacuse in useState when we update result value that means each time we type a word, we are re-rendering the component
    }
  return (
    <div>
        <input ref = {inputRef} type="text" placeholder='focus here' />
        <input ref = {userNameInputRef} type="text" placeholder='username'/>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default UseRefExample
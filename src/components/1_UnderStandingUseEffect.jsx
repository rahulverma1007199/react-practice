// The topics covered are :
// When and how it runs (useEffect)
// How dependencies work
// primitive and non-primitives dependencies
// when to run a clean-up function

// React strict mode is the reason why every component render 2 times initially and for now commnet strict mode
// on first render useEffect runs irrespective of dependencies
// as the state change the component gets re-render and after re-rendering the use-effect runs
import React, { useEffect, useState } from 'react'

const UnderStandingUseEffect = () => {
    const [number,setNumber] = useState(0);
    const [name,setName] = useState('');

    useEffect(()=>{
        console.log("Use Effect Runs");
    });
    // if there will no dependency then useeffect runs everytime after component get render
    // if blank dependcy then it runs at the intial render
    // if depency then it will run only if it changes
    console.log('component render');
  return (
    <div>
        <span>You clicked {number} times!</span>
        <button onClick={()=> setNumber((prev)=>prev +1)}>Increase</button>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}

export default UnderStandingUseEffect
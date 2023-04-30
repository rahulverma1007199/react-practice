import React, { useEffect, useState } from 'react'
// a clean function is basically cancles the function that we done in the previous render,
//basically after every render it first clean that function up and then run the useEffect
//  in the intial render it does not clean up function or it doesnt go inside the cleanup function
// it also prevents memory leaking
const CleanUpFunction = () => {
    const [number, setNumber] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setNumber(prev => prev+ 1);
        },1000);

        return ( )=>{ //a clean up function
            clearInterval(interval);
        }
    },[]);
  return (
    <div>{number}adasasddsa</div> 
  )
}

export default CleanUpFunction
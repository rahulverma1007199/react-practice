import React, { useState } from 'react'

const UseState = () => {
    //basically if we click first button 2 and then second and then just first. you will see a glitch. as in both set method number state is used the reference 
    // to avoid above always update state with function approach , by this we are not reacting the numver but updating the numver currnet state

    const [number,setNumber] = useState(0);
    // const increase = () => {
    //     setNumber(number + 1);
    //   }
    //   const increaseAsync = () => {
    //     setTimeout(()=>{
    //         setNumber(number + 1);
    //     },2000)
    //   }

     const increase = () => {
        setNumber((prev)=>prev + 1);
      }
      const increaseAsync = () => {
        setTimeout(()=>{
            setNumber((prev)=>prev + 1);
        },2000)
      }
  return (
    <div>
        <h1>{number}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={increaseAsync}>IncreaseAsync</button>
    </div>
  )
}

export default UseState
import React, { useEffect, useState } from 'react'

const IncorrectlyUpdateStateInUseEffect = () => {
    const [number, setNumber] = useState(0);

    // useEffect(()=>{
        // console.log('effect'); // see and you will know that it's a glitch aka infinite loop,
        // it's happending because every second the number is changin and since the number is our dependency, it runs this function again an agian, so instead of updating state using state varibale use the previous function , no it's not prefect solutiion because it leads us to another problem and that is to use -- clean up function
    //     setInterval(()=>{
    //         setNumber(number + 1);
    //     },1000)
    // },[number]);

    useEffect(()=>{
        setInterval(()=>{
            setNumber(prev => prev+ 1);
        },1000)
    },[]);

  return (
    <div>{number}adasdsa</div> // if you add any text after {number}asdadas -- then the above will become worst and it re-render without cleaning the function
  )
}

export default IncorrectlyUpdateStateInUseEffect
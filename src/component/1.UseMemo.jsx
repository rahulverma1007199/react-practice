import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [text,setText] = useState("");
    const [number,setNumber] = useState(0);
    const expensiveFunction = (number) => {
        let total = 0;
        for( let i = 1 ; i < number ; i ++){
            total +=1;
        }
        return total;
    }
    // const sum = expensiveFunction();
    // const sum = useMemo(()=>expensiveFunction(),[]);
    const sum = useMemo(()=>expensiveFunction(number),[number]);

    // if you right something in the text then you will notice a delay, reason when you change text in the input it re-render the component and this re-render the expensiveFunction causing the delay
    // So we know that the expensiveFunction will have the same output so we don't run this function at each render and that's where useMemo comes to play and it;s also like a useEffect hook, it takes a call back function and dependecy array
    // also useMemo store that in the memory
  return (
    <div>
        <input type="text" onChange={(e)=>setText(e.target.value)} placeholder='Enter a text'/>
        <input type="number" onChange={(e)=>setNumber(e.target.value)} />
        <span>Total : {sum}</span>
    </div>
  )
}

export default UseMemo
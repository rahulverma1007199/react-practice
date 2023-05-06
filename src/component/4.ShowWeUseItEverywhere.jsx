import React, { useState } from 'react'
import ExpensiveComponent from './3.ExpensiveComponent'
// as memo imporve the speed then should we use it everywhere , NO because it's not free, everytime we use it -- it goes to the memory and if we use more memoisation than actaully needed it might cause some problem and if the calculation is not that costly then you avoid to use them.

// There are other options instead of using expensive components and function
// always try the other alternative first and if it's not enough to solve your problems then use memo
const ShowWeUseItEverywhere = () => {

  return (
    <>
        {/* <Form/> 
        <ExpensiveComponent/> */}
        <BgProvider>
            <ExpensiveComponent/>
        </BgProvider>
    </>
  )
}
const Form = () => { //here we can set the text to the parent aka if we have to use the text state at the parent it will be invalid for that see BgProvider exmaple
    const [text,setText] =useState("");
    return(
        <>
            <input type="text" placeholder='enter a text' onChange={(e)=>setText(e.target.value)}/>
        </>
    )
}

const BgProvider = ({children})=>{ // when the background color changes this BgProvider re-renders and the children prop is the same, react doesn;t visit that componet again
    const [background,setBackground] =useState("");
    return(
        <div style={{background}}>
            <input type="text" placeholder='enter a background' onChange={(e)=>setBackground(e.target.value)}/>
            {children}
        </div>
    )
}
export default ShowWeUseItEverywhere
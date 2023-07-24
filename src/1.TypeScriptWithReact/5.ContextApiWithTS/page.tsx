// got to context folder at src/context
"use client"; // this means  we are using next js
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

const page = () => {

    const {state, dispatch } = useContext(ThemeContext);


  return (
    <div className='useContextExample'>
        <button onClick={()=>dispatch({type:"CHANGE_THEME"})}>Change Theme</button>
        <button onClick={()=>dispatch({type:"CHANGE_FONTSIZE" , payload:20})}>Change Font Size</button>
    </div>
  )
}

export default page
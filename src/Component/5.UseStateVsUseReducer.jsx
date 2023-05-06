import React, { useState } from 'react'

const UseStateVsUseReducer = () => {
    // when to use usestate and when to use useReducer
    // Though there is no right and wrong time as to when you useState and useReducer but sometimes useReducer has more advantages

    // if you have a more complex object that have different properties then it's better to use useReducer and when you update different properties then it will be really messy and the object is in different types and it will be not easy to update them in the one function as in the 4.ChangeAllInput. as spread operator will be not helpful in these situation
    // though he didn't teach here how to use useReducer

    // also if one state effect another one, just store its ID, instead of creating a new object inside
    const [product,setProduct] = useState({
        title:"",
        desc:"",
        price:0,
        category:"",
        tags:[],
        images:{
            sm:"",
            md:"",
            lg:"",
        },
        quantity : 0
    });
  return (
    <div>

    </div>
  )
}

export default UseStateVsUseReducer
import React, { useReducer, useState } from 'react'
import { INITIAL_STATE, formReducer } from './formReducer';

const UseInComplexFrom = () => {
    //here we want '1,2,3' to be 3 tags of [1,2,3]
    const [product,setProduct] = useState({
        title:'',
        desc:'',
        price:0,
        category:'',
        tags:[],
        images:{
            sm:'',
            md:'',
            lg:'',
        },
        quantity:0
    });
    //rather than using above state create a file reducerForm and set it in the initial_state
    const [state,dispatch] = useReducer(formReducer,INITIAL_STATE);
    const tagRef = useRef()
    // if we pass tagRef then we can access it's value
    // <textarea ref={tagRef}
    // button onClick={handleTags}

    const handleTags = () => {
        const tags = tagRef.current.value.split(",")
        tags.forEach(tag => {
            dispatch({type:'ADD_TAG', payload:tag})
        });
    }
    //for tag remote dispatch
    //state.tags.map((tag)=>(
//  <small key = {tag} onClick={()=>dispatch({type:"REMOVE_TAG", payload:tag})} >{tag}</small>
    // ))
    const handleChange = (e) => {
        dispatch({type:"CHANGE_INPUT",payload:{name:e.target.name,value:e.target.value}})
    }
  return (
    <div>UseInComplexFrom</div>
  )
}

export default UseInComplexFrom
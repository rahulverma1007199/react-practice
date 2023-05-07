import React, { useReducer } from 'react'
import { INITIAL_STATE, postReducer } from './postReducer'
import { ACTION } from './reducerAction';

const HowToUseIt = () => {
    // we initialise with passing the function and initial_state and it returns the current state and a dispatch function and dispatch is the one which allow us to pass the data to the reducer
    const [state,dispatch] = useReducer(postReducer,INITIAL_STATE);

    // dispatch({type:"anyt"})
    // dispatch({type:"abe",payload:"adadas"})
    // for advacnce create a file of typeAction and export it and use like below
    // dispatch({type:ACTION.FETCH_ERROR})
  return (
    <div>HowToUseIt</div>
  )
}

export default HowToUseIt
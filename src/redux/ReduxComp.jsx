import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { update, updateUserThunk } from './userSlice';
import { updateUser } from './apiCalls';

const reduxComp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(update({name,email}));
        //for api we do below
        updateUser({name,email},dispatch);
        //for thunk
        dispatch(updateUserThunk({name,email}));
    }
  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} />
        <input type="submit" value={"Submit"} onClick={handleSubmit}/>
    </div>
  )
}

export default reduxComp
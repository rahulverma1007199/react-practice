// how to update a specific update property
import React, { useState } from 'react'

const UpdateSpecificObject = () => {
    const [input,setInput] = useState("");
    const [user,setUser] = useState({
       name:'ravan',
       email:'ravan@lanka.com' 
    });

    const changeUser = () => {
        //we should not update the name with writing
        //user.name = input or setUser(user.name = input) , it's not work as it will change the whole user object to string, for more user console.log with this to check even with setUser(prev => prev.name=input) as it will only this value only.
        setUser((prev)=>({...prev,name:input})); // we are using spread operator
        // spread operator example
        // const a = {name:'abc',age:123};
        //  const b = {...a};
        // const b = {...a,city:'anything'}
        // const b = {...b,name:'def'} 

    }
  return (
    <div>
        <h2>User</h2>
        <input onChange={e=>setInput(e.target.value)} type="text" placeholder='change user name ...'/>
        <button onClick={changeUser}>Change Name</button>
        <span>Username is : {user.name}</span>
    </div>
  )
}

export default UpdateSpecificObject
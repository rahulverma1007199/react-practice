import React, { useState } from 'react'

const ChangeAllInputWithOneOnChange = () => {
    // biggest mistake would be to create each use state for each input than to create a single useState which include every property and change their value with only once function
    const [user,setUser] = useState({
        name:"",
        email:"",
        city:"",
        username:"",
        country:"",
        address:""
    });
    const handleChange = (e) => {
        // make sure to give name property same as useState object to the corresponding input
        setUser(prev=>({...prev,[e.target.name]:e.target.value}))
    }
  return (
    <div>
        <form>
            <input type="text" name='name' onChange={handleChange} placeholder='name'/>
            <input type="text" name='email' onChange={handleChange} placeholder='email'/>
            <input type="text" name='city' onChange={handleChange} placeholder='city'/>
            <input type="text" name='username' onChange={handleChange} placeholder='username'/>
            <input type="text" name='country' onChange={handleChange} placeholder='country'/>
            <input type="text" name='address' onChange={handleChange} placeholder='address'/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ChangeAllInputWithOneOnChange
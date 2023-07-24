import React, { useState } from 'react'

type UserType = {
    sessionId:number,
    name:string
}

const page = () => {
    const [username,setUsername] = useState("");
    const [user,setUser] = useState<UserType | null >(null);
    // if we don;t use generic the we get error in handleClick function becuase we define it to null.
    //also to avoid any error use either or the below two methid
    // 1. {user ? (`${user.name} logged in `) : (else part)}
    // 2. user?.name
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setUser({
            name:username,
            sessionId: Math.random()
        });
    }
  return (
    <div>
        <form>
            <input type="text" placeholder='username' onChange={handleChange}/>
            <button onClick={handleClick}>Login</button>
        </form>
    </div>
  )
}

export default page
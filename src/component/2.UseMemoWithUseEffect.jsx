import React, { useEffect, useMemo, useState } from 'react'

const UseMemoWithUseEffect = () => {
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [country,setCountry] = useState('');

    // const userType = useMemo(()=>({
    //     underAge : age < 18 ? true : false,
    //     citizen : country === 'INDIA' ? true :false,
    // }),[age,country]); 

    const userType ={
        underAge : age < 18 ? true : false,
        citizen : country === 'INDIA' ? true :false,
    }; 


    useEffect(()=>{
        console.log('User type changed');
    },[userType.underAge,userType.citizen]);

    // [userType] dependency is invalid as on each render it will create a new object and it will run at each render  as {a:"b"} === {a:"b"} is false in javascript. as there is nothing changes inside but the reference is changed
    // one solution is to rap it with the useMemo and use the dependcy [userType]
    // another is to change the useEffect dependency and write every single object property instead of the object [userType.underAge,userType.citizen]
  return (
    <div>UseMemoWithUseEffect</div>
  )
}

export default UseMemoWithUseEffect
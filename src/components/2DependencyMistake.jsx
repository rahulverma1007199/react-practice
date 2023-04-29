import React, { useEffect, useMemo, useState } from 'react'

const DependencyMistake = () => {

    const [name,setName] = useState('');
    const [state,setState] = useState({
        name:"",
        selected:false,
    });
    const user = useMemo(
        () => ({
            name:state.name,
            selected:state.selected,
        }),[state.name,state.selected]
    );
    const handleAdd = () => { //why we are change state like this -- go to branch 'junior developer mistake'
        setState((prev)=>({...prev,name}));
    }

    const handleSelect = () => {
        setState((prev)=>({...prev,selected:true}));
    }
    useEffect(()=>{
        console.log("The state has changes, so useEffect runs");
    },[state.name,state.selected]); // so we can use 'state' directly if it's only primitive but for one way is to use memo and use the 'user' in the depencies or instead of using memo -- just write the desired primities value like 'state.name,state.selected'
    // so if you change name then the above runs, also if you keep the same name and click add name it will run again this is becuase of primitive and non-primitive dependency

    //run it in clg --  const a= 'john', b = 'john' -- a === b -- its true
    //a === 'john' , 'john' === 'john' , and same for number, boolean
    // so number,string and boolean data types are primitives

    // objects, const x = {name : 'john'} , y = {name : 'john'} -- x === y  -- false
    // why -- even if they looks the same, the refers to different point in th memory
    // and if const z = y, and z === y then it's true

    // computer compare values of variables when they hold string,number, booleans, null or undefined but when it comes to objects or arrays they  compare their reference instead of their content.
  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <button onClick={handleAdd}>Add Name</button>
        <button onClick={handleSelect}>Select</button>
        {`{
            name:${state.name},
            selected:${state.selected}
        }`}
    </div>
  )
}

export default DependencyMistake
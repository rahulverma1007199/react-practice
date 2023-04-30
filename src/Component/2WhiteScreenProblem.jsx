import React, { useState } from 'react'

const WhiteScreenProblem = () => {
    const [user,setUser] = useState();
    // const [user,setUser] = useState({});
    // const [user,setUser] = useState({
    //     username:"",
    //     email:"",
    //     images:[]
    // });

    // if you expect the user to use to an object which has name field but if the value doesn't come then we get the white screen
    // to solve the error we have various ways
  return (
    <div>
        <h1>User</h1>
        {/*  error state =>  <span>Username is : {user.name}</span>  */}
        {/*  no error state => {user && <span>Username is : {user.name}</span>  }*/}
        {/*  no error state => <span>Username is : {user && user.name}</span>*/}
        {/*  no error state =>  <span>Username is : {user?.name}</span>*/}
        {/* last solution is to initialse your state to the expected type -- see the second state, like it its a string use "", it its array [], for object -- empty object {}  */}
        {/* but the second state fails for below conditon */}
        {/*  error state =>  <span>Username is : {user.images[1]}</span>  */}
        {/* for above use the 3rd state and it's the best approach */}


    </div>
  )
}

export default WhiteScreenProblem
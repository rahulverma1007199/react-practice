import React from 'react'
import { useSelector } from 'react-redux'

const testComp = () => {
    const name = useSelector((state)=> state.user.name); // user is the name of store and name is property
    const user = useSelector((state)=> state.user); // by this we get the whole user object
  return (
    <div>{name}</div>
  )
}

export default testComp
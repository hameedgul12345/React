import React, { useContext } from 'react'
import { UserContext } from '../App'
function ChildC() {
    const user=useContext(UserContext)
    console.log(user)
  return (
   <h1>{user.name}</h1>
  )
}

export default ChildC
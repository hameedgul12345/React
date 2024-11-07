import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './Components/ChildA'
//Step01: Create Context
const UserContext=createContext();
//Step02:Wrap all the child inside Provider
//Step03:Pass Value
//Step04:Consumer k andr jakey consume karlo
function App() {


  return (
    <>
    
    <UserContext.Provider value={{name:'hameed'}}>
    <ChildA/>
      
    </UserContext.Provider>
     
    </>
  )
}

export default App
export{UserContext}
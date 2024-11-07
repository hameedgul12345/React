//Case Study B
// import { useRef, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// //useRef return object
// // useRef didn't change state
// //useState change state
// function App() {
//   const [count, setCount] = useState(0)
//   let value=useRef(0)
//  function clickButtonn(){
//   setCount(count+1)
//   console.log(value.current+1)
//   console.log(value)
//   console.log(count)
//  }
//   return (
//     <>

//       <h1>Value:{count}</h1>
//       <button onClick={clickButtonn}>Click</button>
//     </>
//   )
// }

// export default App

import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//Case Study B
function App() {
  const [time, setTime] = useState(0);
  let timeRef = useRef(null);
  function startTimer() {
    timeRef.current = setInterval(() => {
      setTime((time)=>time + 1);
     
    }, 1000);
    console.log(time)
  }
  function stopTimer() {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }
  function resetTimer() {
    stopTimer();
    setTime(0);
  }
  return (
    <>
      <h1>Stop:{time} second</h1>
      <button onClick={startTimer}>startTimer</button>
      <button onClick={stopTimer}>stopTimer</button>
      <button onClick={resetTimer}>resetTimer</button>
    </>
  );
}

export default App;

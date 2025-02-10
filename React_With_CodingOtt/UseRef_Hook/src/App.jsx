import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const heading = useRef();
  const input=useRef()
  const changeColor = () => {
    heading.current.style.color = "red";
  };
  const inputValue=()=>{
    console.log(input.current.value)
  }
  return (
    <>
      <h1 ref={heading}>Color Change with Use Ref</h1>
      <button onClick={changeColor}>Click Here</button>
      <input ref={input} type="text" onChange={inputValue} />
    </>
  );
}

export default App;

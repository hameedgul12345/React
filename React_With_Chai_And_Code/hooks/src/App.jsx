import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const clickMe = () => {
    setCount(count >= 20 ? count : count + 1);
  };
  const remove = () => {
    setCount(count <= 0 ? count : count - 1);
  };
  return (
    <>
      <h1>Counter Apllication in React</h1>
      <h1>{count}</h1>
      <button onClick={clickMe}>Increase</button>
      <button onClick={remove}>Decrease</button>
    </>
  );
}

export default App;

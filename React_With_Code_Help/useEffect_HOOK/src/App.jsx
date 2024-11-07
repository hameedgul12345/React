import { useState } from "react";

import "./App.css";
import { useEffect } from "react";

function App() {
  //First->Side Effect:function
  //Second->Clean up:function
  //Third->Dependency:Array

  //Variation:01
  //Runs on Every Render
  //const [count, setCount] = useState(0);
  // useEffect(() => {
  //   alert("I will run on each render");
  // });

  //   //Variation:02
  //  // Runs on first Render
  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     alert("I will run on first render");
  //   },[]);

  //Variation:03
  // Runs on when count is updated Render
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   alert("I will run on when count is updated ");
  // }, [count]);

  //Variation:04
  // Runs multiple dependency
  // const [count, setCount] = useState(0);
  // const [update, setUpdate] = useState(0);

  // useEffect(() => {
  //   alert("I will run on when count or update is change ");
  // }, [count, update]);

  // Variation:05
  // Add Clean up Function
  const [count, setCount] = useState(0);
  const [update, setUpdate] = useState(0);
  useEffect(() => {
    alert("Count is Updated");
    return ()=>{
      alert("Count is unmounted from UI");
    }
  }, [count]);

  const clickedCount = () => {
    setCount(count + 1);
  };

  const clickedUpdate = () => {
    setUpdate(update + 1);
  };

  return (
    <>
      <h1>Vite + React {count}</h1>
      <h1>Vite + React {update}</h1>

      <button onClick={clickedCount}>Click to Count</button>
      <button onClick={clickedUpdate}>Click to Update</button>
    </>
  );
}

export default App;

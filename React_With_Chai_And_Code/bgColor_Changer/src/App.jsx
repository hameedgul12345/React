import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [color, setColor] = useState("crimson");
  const bgChanger=()=>{
   
  }
  return (
    <>
      <div class='w-full h-screen'style={{backgroundColor:color}} >
        <div onClick={(color)=>{
          color="red"
          setColor(color)
        }} class="fixed bottom-0 left-0 right-0 flex justify-between py-4 px-8 bg-white rounded-full">
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Red Button
          </button>
          <button onClick={()=>{
            color='blue'
            setColor(color)
            console.log(color)

          }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Blue Button
          </button>
          <button onClick={()=>setColor('green')} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Green Button
          </button>
          <button onClick={()=>setColor('yellow')} class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Yellow Button
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

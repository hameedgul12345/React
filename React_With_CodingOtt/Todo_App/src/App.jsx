import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const addItem = () => {
    setList([...list, value]);
    setValue("")
  };
  const deleteList=(index)=>{
    const copyList=[...list]
    console.log(copyList)
    setList(copyList.splice(index,0))
  }
  return (
    <>
      <div
        style={{
          width: "500px",
          height: "70vh",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ textAlign: "center", paddingTop: "10px" }}>
          Todo Application
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <input
            type="text"
            name={value}
            placeholder="Enter Item List"
            style={{
              padding: "10px 16px",
              border: "1px solid grey",
              borderRadius: "5px",
            }}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            style={{
              padding: "10px 16px",
              border: "1px solid grey",
              borderRadius: "5px",
              background: "orange",
              color: "white",
            }}
            onClick={()=>(addItem())}
          >
            Add List
          </button>
        </div>
        {list.map((item, index) => (
          <li style={{ marginLeft: "100px" }} key={index}>
            {item}
            <button   style={{
              padding: "10px 16px",
              border: "1px solid grey",
              borderRadius: "5px",
              background: "red",
              color: "white",
            }} onClick={()=>{deleteList(index)}}>
              Delete
            </button>
          </li>
        ))}
      </div>
    </>
  );
}

export default App;

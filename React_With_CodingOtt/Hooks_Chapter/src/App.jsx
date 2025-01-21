// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [show, setShow] = useState(false);
//   const showFun = () => {
//     setShow(!show);
//   };
//   return (
//     <>
//       {show && <p>Show</p>}
//       <button onClick={showFun}>{show ?'Hide':'Show'}</button>
//     </>
//   );
// }

// export default App;
import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ddd",
      }}
    >
      <div
        style={{
          background: "white",
          width: "50%",
          padding: 48,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>State Management React App</h1>
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 1.95px  2.95px ",
              paddingLeft: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>Show & Hide Project</h2>
            {show && <img src="logo.png" alt="" />}
            <button
              onClick={() => {
                setShow(!show);
              }}
            >
              {show === true ? "Hide" : "Show"}
            </button>
          </div>{" "}
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 1.95px  2.95px ",
              paddingLeft: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>Color Selector</h2>
           <div className="w-[100px] h-[100px] bg-"></div>
            <button
              onClick={() => {
                setShow(!show);
              }}
            >
              {show === true ? "Hide" : "Show"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import "animate.css";
function App() {
  const [drawer, setDrawer] = useState(-500);
  const controlDrawer = () => {
    setDrawer(0);
  };

  return (
    <>
      <div style={{ width: "100%", background: "grey", minHeight: "100vh" }}>
        <div
          style={{
            background: "white",
            width: "40%",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <h1 style={{ textAlign: "center" }}>CRUD APP</h1>
          <button
            onClick={controlDrawer}
            style={{
              padding: "12px 14px",
              background: "#7B00F7",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            <i className="ri-user-2-fill"></i>
            New Student
          </button>
        </div>
        <aside
          style={{
            position: "fixed",
            top: 0,
            right: drawer,
            padding: "20px",
            minHeight: "100vh",
            width: "450px",
            background: "white",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            transition: "0.75s ease-in",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h3>My Drawer</h3>
            <button onClick={() => setDrawer(-500)}>
              {" "}
              <i
                style={{
                  fontSize: 30,
                }}
                className="ri-close-circle-line"
              ></i>
            </button>
          </div>
          <>
            <div className="mbsc-row">
              <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                <input
                  label="Email"
                  inputstyle="box"
                  labelstyle="floating"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                <input
                  label="Password"
                  inputstyle="box"
                  labelstyle="floating"
                  placeholder="Set a password"
                  passwordtoggle="true"
                />
              </div>
              <div className="mbsc-col-12 mbsc-col-lg-6">
                <input
                  label="Address"
                  inputstyle="box"
                  labelstyle="floating"
                  placeholder="What is your address?"
                />
              </div>
            </div>
            <div className="mbsc-row">
              <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                <input
                  label="Town"
                  inputstyle="box"
                  labelstyle="floating"
                  placeholder="Enter your town"
                />
              </div>
              <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                <input
                  label="State"
                  inputstyle="box"
                  labelstyle="floating"
                  placeholder="Select your state"
                />
              </div>
              <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                <input
                  label="Zip"
                  inputstyle="box"
                  labelstyle="floating"
                  placeholder="What is your zip code"
                />
              </div>
              <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                <input
                  label="Country"
                  inputstyle="box"
                  labelstyle="floating"
                  placeholder="Select your country"
                />
              </div>
            </div>
            <div className="mbsc-row">
              <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3">
                <div className="mbsc-button-group-block">
                  <button color="success">Create account</button>
                </div>
              </div>
            </div>
          </>
        </aside>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "remixicon/fonts/remixicon.css";
// import "animate.css";
function App() {
  const [drawer, setDrawer] = useState(-500);
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    age: "",
    subject: "",
    marks: "",
    dob: "",
  });
  const controlDrawer = () => {
    setDrawer(0);
  };
  const handleInput = (e) => {
    const input = e.target;
    const value = input.value;
    const key = input.name;
    setForm({
      ...form,
      [key]: value,
    });
    
  };
  const createStudent = (e) => {
    e.preventDefault();
    setStudents([...students, form]);
    setDrawer(-500)
  };
  return (
    <>
      <div style={{ width: "100%", background: "grey", minHeight: "100vh" }}>
        <div
          style={{
            background: "white",
            display: "flex",
            flexDirection: "column",

            width: "60%",
            margin: "0 auto",
            padding: "20px",
            gap: "20px",
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
              width: "20%",
            }}
          >
            <i className="ri-user-2-fill"></i>
            New Student
          </button>
          <table style={{ width: "100%" }}>
            <thead>
              <tr style={{ background: "orange", color: "white", padding: 60 }}>
                <th style={{ padding: 15 }}>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Subject</th>
                <th>Marks</th>
                <th>D.O.B</th>
                <th>Action</th>
              </tr>
            </thead>
            {students.map((student, index) => (
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>{index}</td>
                  <td style={{ textAlign: "center" }}>{form.fullName}</td>
                  <td style={{ textAlign: "center" }}>{form.email}</td>
                  <td style={{ textAlign: "center" }}>{form.age}</td>
                  <td style={{ textAlign: "center" }}>{form.subject}</td>
                  <td style={{ textAlign: "center" }}>{form.marks}</td>
                  <td style={{ textAlign: "center" }}>{form.dob}</td>
                  <td style={{ textAlign: "center" }}>
                    <i className="ri-delete-bin-6-line"></i>
                    <i className="ri-image-edit-fill"></i>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
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
            <h1>New Student</h1>
            <button onClick={() => setDrawer(-500)}>
              {/* {" "} */}
              {/* <i
                style={{
                  fontSize: 30,
                }}
                className="ri-close-circle-line"
              ></i> */}
              <i
                class="ri-close-line"
                style={{
                  fontSize: 30,
                }}
              ></i>
            </button>
          </div>
          <form onSubmit={createStudent}>
            <div
              className="row"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              <div className="col">
                <input
                 
                  onChange={handleInput}
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="Your Name*"
                  style={{
                    padding: "10px 15px",
                    border: "1px solid #9CA3AF",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="col">
                <input
                 
                  type="email"
                  onChange={handleInput}
                  name="email"
                  className="form-control"
                  placeholder="Your Email*"
                  style={{
                    padding: "10px 15px",
                    border: "1px solid #9CA3AF",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                />
              </div>

              <div className="col">
                <input
                  type="number"
                 
                  name="age"
                  onChange={handleInput}
                  className="form-control"
                  placeholder="Your Age*"
                  style={{
                    padding: "10px 15px",
                    border: "1px solid #9CA3AF",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                 
                  name="subject"
                  onChange={handleInput}
                  className="form-control"
                  placeholder="Your Subject*"
                  style={{
                    padding: "10px 15px",
                    border: "1px solid #9CA3AF",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  name="marks"
                
                  onChange={handleInput}
                  className="form-control"
                  placeholder="Your Marks*"
                  style={{
                    padding: "10px 15px",
                    border: "1px solid #9CA3AF",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="col">
                <input
                 
                  type="date"
                  name="dob"
                  onChange={handleInput}
                  className="form-control"
                  placeholder="Your Date of Birth*"
                  style={{
                    padding: "10px 15px",
                    border: "1px solid #9CA3AF",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <button
                style={{
                  padding: "12px 14px",
                  background: "#7B00F7",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  width: "33%",
                }}
              >
                Submit Record
              </button>
            </div>
          </form>
        </aside>
      </div>
    </>
  );
}

export default App;

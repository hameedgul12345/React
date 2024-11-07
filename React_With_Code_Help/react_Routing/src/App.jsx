import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import DashBoard from "./Components/DashBoard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
        <Navbar />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <About />
        <Navbar />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <DashBoard />
        <Navbar />
      </div>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

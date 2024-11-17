import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HollyDays from "./components/HollyDays";
import Contactus from "./components/Contactus";
import Teachers from "./components/Teachers";
import About from "./components/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/hollyDays' element={<HollyDays />} />
          <Route path='/contact-us' element={<Contactus />} />
        </Routes>
      </BrowserRouter>
     
      <Footer />
    </>
  );
}

export default App;

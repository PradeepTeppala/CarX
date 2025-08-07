import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Cars from "./Components/Cars";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import Sedan from "./Components/Sedan";
import SUV from "./Components/SUV";
import Supercars from "./Components/Supercars";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route path="/cars/sedan" element={<Sedan />} />
          <Route path="/cars/supercars" element={<Supercars />} />
          <Route path="/cars/suv" element={<SUV />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

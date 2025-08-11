import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/AboutUs";
import Cars from "./Components/Cars";
import Contact from "./Components/ContactUs";
import SUV from "./Components/SUV";
import Sedan from "./Components/Sedan";
import Supercars from "./Components/Supercars";
import Login from "./Components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        {!isLoggedIn ? (
          <Route path="*" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        ) : (
          <>
            <Route path="/" element={<Home handleLogout={handleLogout} />} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/cars/suv" element={<SUV />} />
            <Route path="/cars/sedan" element={<Sedan />} />
            <Route path="/cars/supercars" element={<Supercars />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;

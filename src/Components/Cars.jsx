import React from "react";
import { Link } from "react-router-dom";

function Cars() {
  return (
    <div className="car-container">
      <nav className="navbar">
        <Link to="/">
          <img src="/Assets/HomePage/CarX-Logo.jpg" alt="" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/cars">Cars</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Login / Sign up</Link>
          </li>
        </ul>
      </nav>

      <h2>Explore Our Collection of Cars</h2>

      <div className="car-categories">
        <Link to="/cars/sedan" className="car-card">
          <img src="/Assets/SedanCars/1.jpg" alt="Sedan" />
        <h3>
          <span style={{ color: "#ff004f" }}>Sedan</span>
        </h3>
        </Link>

        <Link to="/cars/supercars" className="car-card">
          <img src="/Assets/SuperCars/1.jpg" alt="Supercar" />
        <h3>
          <span style={{ color: "#ff004f" }}>Supercar</span>
        </h3>
        </Link>

        <Link to="/cars/suv" className="car-card">
          <img src="/Assets/SuvCars/1.jpg" alt="SUV" />
        <h3>
          <span style={{ color: "#ff004f" }}>SUV</span>
        </h3>
        </Link>
      </div>
    </div>
  );
}

export default Cars;

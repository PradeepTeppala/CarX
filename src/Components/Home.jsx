import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
        <nav className="navbar">
        <Link to="/">
        <img src="/Assets/HomePage/CarX-Logo.jpg" alt="" />
        </Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/cars">Cars</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/">Login / Sign up</Link></li>
        </ul>
      </nav>

      <div className="home-container">
        <h1>Car<span style={{color:"#ff004f"}}>X</span></h1>
        <p>Your one-stop destination for all things cars!</p>
        <button><Link to="/cars" className="btn">Explore More</Link></button>
      </div>
    
      
    </>
  );
}

export default Home;

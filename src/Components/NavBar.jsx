import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
    <nav className="navbar">
              <Link to="/">
              <img src="/Assets/HomePage/CarX-Logo.jpg" alt="" />
              {/* <h1>Car<span style={{color:"#ff004f"}}>X</span></h1> */}
              </Link>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/cars">Cars</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/">Login / Sign up</Link></li>
              </ul>
            </nav>
    </>
  );
}

export default NavBar;

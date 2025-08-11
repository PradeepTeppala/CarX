import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

function Home({ handleLogout }) {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <>
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
          <li style={{ position: "relative" }}>
            <VscAccount
              className="icon-style"
              onClick={() => setShowLogout(!showLogout)}
              style={{ cursor: "pointer" }}
            />
            {showLogout && (
              <div className="logout-dropdown" onClick={handleLogout}>
                Logout
              </div>
            )}
          </li>
        </ul>
      </nav>

      <div className="home-container">
        <h1>
          Car<span style={{ color: "#ff004f" }}>X</span>
        </h1>
        <p>Your one-stop destination for all things cars!</p>

        <Link to="/cars" className="btn">
          <button>Explore More</button>
        </Link>
      </div>
    </>
  );
}

export default Home;

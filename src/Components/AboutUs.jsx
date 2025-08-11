import React from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faHandshake,
  faShippingFast,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

function AboutUs() {
  return (
    <div className="about-container">
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
            <Link to="/">
              <VscAccount className="icon-style" />
            </Link>
          </li>
        </ul>
      </nav>

      <section className="about-section">
        <h2>
          About Car<span style={{ color: "#ff004f" }}>X</span>
        </h2>
        <p>
          At CarX, we redefine luxury car buying by offering an exceptional
          selection of premium vehicles, seamless online experience, and
          unmatched customer support.
        </p>

        <div className="about-features">
          <div className="feature">
            <FontAwesomeIcon icon={faGem} size="2x" />
            <h3>Premium Collection</h3>
            <p>
              Only the finest selection of luxury cars, handpicked for quality
              and prestige.
            </p>
          </div>

          <div className="feature">
            <FontAwesomeIcon icon={faHandshake} size="2x" />
            <h3>Trusted Service</h3>
            <p>
              Transparency, reliability, and personalized care you can trust.
            </p>
          </div>

          <div className="feature">
            <FontAwesomeIcon icon={faShippingFast} size="2x" />
            <h3>Nationwide Delivery</h3>
            <p>
              Get your dream car delivered to your doorstep anywhere in India.
            </p>
          </div>

          <div className="feature">
            <FontAwesomeIcon icon={faHeadset} size="2x" />
            <h3>24/7 Support</h3>
            <p>
              Our team is here around the clock to assist you with every query.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;

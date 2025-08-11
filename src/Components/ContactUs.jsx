import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";

function ContactUs() {
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
          <li>
            <Link to="/"><VscAccount className="icon-style"/></Link>
          </li>
        </ul>
      </nav>

      <div className="contact-page">
        <div className="contact-header">
          <h1>
            Contact Car<span style={{ color: "#ff004f" }}>X</span>
          </h1>
          <p>
            We'd love to hear from you. Reach out with any questions or
            inquiries!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              <FaMapMarkerAlt className="icon" /> CarX HQ, MG Road, Hyderabad,
              India
            </p>
            <p>
              <FaPhoneAlt className="icon" /> +91 98765 43210
            </p>
            <p>
              <FaEnvelope className="icon" /> support@carx.com
            </p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="6" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;

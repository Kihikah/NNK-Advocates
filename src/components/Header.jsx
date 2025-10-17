// src/components/Header.jsx
import React, { useState} from "react";
import "../styles/Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  return (
    <header className="header">
      <div className="logo">
        <img src="/NNK Logo.png" alt="NNK Advocates Logo" />
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#practice">Our Practice Areas</a></li>
          <li><a href="#team">Our Team</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    // Close the about dropdown when menu is closed
    if (menuOpen) setAboutDropdownOpen(false);
  };

  const toggleAboutDropdown = (e) => {
    e.stopPropagation();
    setAboutDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

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

          {/* About Us Dropdown */}
          <li
            className={`dropdown ${aboutDropdownOpen ? "open" : ""}`}
            ref={dropdownRef}
          >
            <span className="dropdown-toggle" onClick={toggleAboutDropdown}>
              About Us
            </span>
            <ul className={`dropdown-menu ${aboutDropdownOpen ? "show" : ""}`}>
              <li><a href="/about/why-work-with-us">Why Work With Us</a></li>
              <li><a href="/about/background">Our Background</a></li>
              <li><a href="/about/business-policies">Business Policies</a></li>
            </ul>
          </li>

          <li><a href="#practice">Our Practice Areas</a></li>
          <li><a href="#team">Our Team</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

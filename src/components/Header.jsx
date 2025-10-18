import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";  // ✅ import Link
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
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
        <Link to="/">
          <img src="/NNK Logo.png" alt="NNK Advocates Logo" />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          {/* ✅ HOME */}
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>

          {/* ✅ About Us Dropdown */}
          <li
            className={`dropdown ${aboutDropdownOpen ? "open" : ""}`}
            ref={dropdownRef}
          >
            <span className="dropdown-toggle" onClick={toggleAboutDropdown}>
              About Us
            </span>
            <ul className={`dropdown-menu ${aboutDropdownOpen ? "show" : ""}`}>
              <li>
                <Link to="/about/why-work-with-us" onClick={() => setMenuOpen(false)}>
                  Why Work With Us
                </Link>
              </li>
              <li>
                <Link to="/about/background" onClick={() => setMenuOpen(false)}>
                  Our Background
                </Link>
              </li>
              <li>
                <Link to="/about/business-policies" onClick={() => setMenuOpen(false)}>
                  Business Policies
                </Link>
              </li>
            </ul>
          </li>

          {/* ✅ Scrollable Section Links (optional later for smooth scroll) */}
          <li>
            <a href="#practice">Our Practice Areas</a>
          </li>
          <li>
            <a href="#team">Our Team</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

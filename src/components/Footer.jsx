import React from 'react'
import "../styles/Footer.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            {/* Quick Links */}
            <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#practice">Practice Areas</a></li>
                    <li><a href="#team">Our Team</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            {/* Contact Info */}
            <div className="footer-section">
                <h3>Contact Info</h3>
                <p>📞 +254 722 348 064</p>
                <p>✉️ info@nnklaw.co.ke</p>
                <p>🏢 Nairobi, Kenya</p>
            </div>
            {/* Social Media */}
            <div className="footer-section">
                <h3>Follow Us</h3>
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                </div>
            </div>
        </div>

        {/* Back to Top Button */}
      <div className="back-to-top" onClick={scrollToTop} title="Back to top">
        <FaArrowUp />
      </div>

        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} NNK Law Firm. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
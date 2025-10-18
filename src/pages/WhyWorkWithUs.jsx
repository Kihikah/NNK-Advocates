import React from "react";
import "../styles/WhyWorkWithUs.css";
import { FaBalanceScale, FaLightbulb, FaHandshake, FaCheckCircle, FaLock, FaClipboardCheck } from "react-icons/fa";

const WhyWorkWithUs = () => {
  return (
    <div className="why-container">
      {/* Hero Section */}
      <section className="why-hero">
        <div className="hero-overlay">
          <h1>Why Work With Us</h1>
          <p>Building trust through excellence, integrity and professionalism.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide reliable, ethical and affordable legal services that uphold justice, 
            protect our clients’ rights, and promote the rule of law in Kenya. We are committed to 
            delivering results-driven legal representation across all our practice areas, guided by 
            professionalism and integrity.
          </p>
        </div>
        <div className="vision-card">
          <h2>Our Vision</h2>
          <p>
            To be the leading law firm in Kenya, recognized for excellence, integrity, innovation and 
            customer-centric services.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="underline"></div>
        <div className="values-grid">
          <div className="value-item">
            <FaBalanceScale className="value-icon" />
            <h3>Professionalism</h3>
            <p>We maintain excellence, diligence and respect in all engagements with clients and court representation.</p>
          </div>

          <div className="value-item">
            <FaClipboardCheck className="value-icon" />
            <h3>Integrity</h3>
            <p>We conduct ourselves with utmost honesty, fairness, and ethical standards in all aspects of our work.</p>
          </div>

          <div className="value-item">
            <FaHandshake className="value-icon" />
            <h3>Honesty</h3>
            <p>We are committed to transparency in engagements with our clients, colleagues, and partners.</p>
          </div>

          <div className="value-item">
            <FaLightbulb className="value-icon" />
            <h3>Excellence</h3>
            <p>We strive for superior performance, delivering accurate, timely, and high-quality legal services.</p>
          </div>

          <div className="value-item">
            <FaLock className="value-icon" />
            <h3>Confidentiality</h3>
            <p>We treat all client matters with utmost discretion, maintaining trust and respect.</p>
          </div>

          <div className="value-item">
            <FaCheckCircle className="value-icon" />
            <h3>Accountability</h3>
            <p>We take responsibility for our actions ensuring transparency, reliability, and consistency in our services.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyWorkWithUs;

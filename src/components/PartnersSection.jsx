import React from "react";
import "../styles/PartnersSection.css";

const partners = Array.from({ length: 21 }, (_, i) => ({
  img: new URL(`../assets/Pn${i + 1}.png`, import.meta.url).href,
  name: `Partner ${i + 1}`,
}));

const PartnersSection = () => {
  return (
    <section className="partners-section" id="partners">
      <h2 className="partners-title">Our Partners</h2>
      <div className="underline"></div>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div className="partner-logo" key={index}>
            <img src={partner.img} alt={partner.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;

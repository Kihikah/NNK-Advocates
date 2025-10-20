import React from "react";
import { useParams, Link } from "react-router-dom";
import { practiceAreas } from "../data/practiceAreas";
import "../styles/PracticeDetails.css";

const PracticeDetails = () => {
  const { slug } = useParams(); // 👈 Get slug from URL
  const practice = practiceAreas.find((item) => item.slug === slug);

  if (!practice) {
    return (
      <div className="practice-details not-found">
        <h2>Practice Area Not Found</h2>
        <Link to="/practice-areas" className="back-btn">← Back to All Practice Areas</Link>
      </div>
    );
  }

  return (
    <div className="practice-details">
      <div className="practice-hero" style={{ backgroundImage: `url(${practice.image})` }}>
        <div className="overlay">
          <h1>{practice.title}</h1>
        </div>
      </div>

      <div className="practice-content">
        <p>{practice.description}</p>

        <h3>Why Choose NNK Advocates</h3>
        <ul>
          {practice.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>

        <Link to="/practice-areas" className="back-btn">← Back to All Practice Areas</Link>
      </div>
    </div>
  );
};

export default PracticeDetails;

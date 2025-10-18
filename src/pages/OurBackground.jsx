import React from "react";
import "../styles/OurBackground.css";
import { FaBalanceScale, FaUsers, FaGavel, FaBuilding } from "react-icons/fa";

const OurBackground = () => {
  return (
    <div className="our-background-page">
      {/* Hero Section */}
      <section className="background-hero">
        <div className="back-hero-overlay">
          <h1>Our Background</h1>
          <div className="underline"></div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="history-container">
          <div className="history-item">
            <FaGavel className="history-icon" />
            <p>
              <strong>NNK Advocates</strong>, previously known as Nancy W. Njoroge &amp; Company Advocates,
              was founded in the year 2000 by Ms. Nancy Wanjiku Njoroge. Since then, the firm has
              grown exponentially from a sole proprietorship into a partnership with the addition of
              Charles Kairu Kihara in 2011 and Pascoline Wanjiru Wachira in 2017.
            </p>
          </div>

          <div className="history-item">
            <FaUsers className="history-icon" />
            <p>
              This expansion marked the beginning of a bold, modern, and dynamic era. The infusion of
              diversity and talent has enabled better delivery of legal solutions and services with
              sharper focus and expertise.
            </p>
          </div>

          <div className="history-item">
            <FaBalanceScale className="history-icon" />
            <p>
              The firm now boasts expanded capacities and an ever-growing client portfolio. It has
              increased its staff complement to match its growth, ensuring personalized and
              efficient legal service delivery.
            </p>
          </div>

          <div className="history-item">
            <FaBuilding className="history-icon" />
            <p>
              The firm’s head office is strategically situated at Plutos Building, 2nd Floor, Room No. 6,
              Kenyatta Avenue within the Central Business District of Nakuru Town. To serve clients more
              efficiently, the firm has also opened a satellite branch at Vicmark Plaza, 3rd Floor, Suite C13,
              near Nakuru Law Courts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBackground;

import React from "react";
import "../styles/StatsSection.css";
import { FaBriefcase, FaUsers, FaChartLine, FaGavel } from "react-icons/fa";

const stats = [
  {
    icon: <FaGavel />,
    number: "25+",
    label: "Years of Establishment",
  },
  {
    icon: <FaBriefcase />,
    number: "30+",
    label: "Partners",
  },
  {
    icon: <FaChartLine />,
    number: "99%",
    label: "Proven Success",
  },
  {
    icon: <FaUsers />,
    number: "150+",
    label: "Clients Served",
  },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="overlay"></div>
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{item.icon}</div>
            <h3 className="stat-number">{item.number}</h3>
            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

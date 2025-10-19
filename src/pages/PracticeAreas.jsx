import React, { useState } from "react";
import "../styles/PracticeAreas.css";
import {
  FaGavel,
  FaLeaf,
  FaUsers,
  FaLandmark,
  FaVoteYea,
  FaHandshake,
  FaBuilding,
  FaShieldAlt,
  FaBook,
  FaHouseUser,
  FaMoneyBill,
  FaFileContract,
  FaUserTie,
  FaPeace,
  FaBalanceScale,
  FaBriefcase,
  FaCopyright,
  FaChild
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const practiceAreas = [
  { title: "Civil and Criminal Law Litigation", icon: <FaGavel /> },
  { title: "Environment and Land Matters", icon: <FaLeaf /> },
  { title: "Family and Succession Disputes", icon: <FaUsers /> },
  { title: "Constitutional and Judicial Review", icon: <FaLandmark /> },
  { title: "Election Petitions", icon: <FaVoteYea /> },
  { title: "Arbitration and Alternative Dispute Resolutions", icon: <FaHandshake /> },
  { title: "Commercial Law Litigation", icon: <FaBuilding /> },
  { title: "Insurance Law Litigation", icon: <FaShieldAlt /> },
  { title: "Defamation Law", icon: <FaBook /> },
  { title: "Property Law", icon: <FaHouseUser /> },
  { title: "Debt Collection and Litigation", icon: <FaMoneyBill /> },
  { title: "Conveyancing and Security Documentation", icon: <FaFileContract /> },
  { title: "Corporate Law", icon: <FaUserTie /> },
  { title: "Mergers and Acquisitions", icon: <FaPeace /> },
  { title: "Administration and Trusts", icon: <FaBalanceScale /> },
  { title: "Employment and Labour Disputes", icon: <FaBriefcase /> },
  { title: "Intellectual Property Law", icon: <FaCopyright /> },
  { title: "Children and Adoption Matters", icon: <FaChild /> },
];

const PracticeAreas = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = 6;
  const totalPages = Math.ceil(practiceAreas.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = practiceAreas.slice(startIndex, startIndex + itemsPerPage);

  const handleReadMore = (area) => {
    const slug = area.title.replace(/\s+/g, "-").toLowerCase();
    navigate(`/practice/${slug}`);
  };

  return (
    <div className="practice-container">
      {/* Hero Section */}
      <section className="practice-hero">
        <div className="hero-overlay">
          <h1>Our Practice Areas</h1>
          <p>Expert legal solutions designed to protect your rights and advance your interests.</p>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="practice-intro">
        <div className="intro-wrapper">
          <p>
            NNK Advocates provides a broad spectrum of legal services designed to protect your rights, 
            advance your interests, and promote justice. Our dedicated team combines legal expertise 
            with integrity and excellence to deliver effective client-focused solutions. 
            We are highly skilled in the following practice areas:
          </p>
        </div>
      </section>

      {/* Practice Area Cards */}
      <section className="practice-grid-section">
        <div className="practice-grid">
          {currentItems.map((item, index) => (
            <div className="practice-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <button onClick={() => handleReadMore(item)}>Read More</button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            className="page-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            className="page-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;

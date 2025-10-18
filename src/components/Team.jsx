import React, { useState } from "react";
import "../styles/Team.css";

import NancyImg from "../assets/Nancy.png";
import KairukiImg from "../assets/Kairu.png";
import WanjiruImg from "../assets/Wanjiru.png";
import AnthonyImg from "../assets/Antony.png";

const teamMembers = [
  {
    name: "Nancy Wanjiku Njoroge",
    role: "Managing Partner",
    phone: "+254 722 348 064",
    email: "nancy@nnklaw.co.ke",
    image: NancyImg,
    bio: `Nancy is the Managing Partner, Founding Partner and Senior Partner at the Firm.
She was admitted to the Roll of Advocates on 20th December 1990. She holds a Bachelor of Laws degree from the University of Nairobi and a Post graduate Diploma from the Kenya School of Law.
Nancy began her legal practice in 1991 with the Judiciary where she rose to the rank of Senior Resident Magistrate before starting her own practice.`,
    areas: [
      "Arbitration and Alternative Dispute Resolutions",
      "Civil and Criminal Law litigation",
      "Environment and Land Matters",
      "Family and Succession disputes",
      "Constitutional and Judicial Review",
      "Election Petitions",
    ],
  },
  {
    name: "Kairu Kihara",
    role: "Partner",
    phone: "+254 711 788 882",
    email: "kairu@nnklaw.co.ke",
    image: KairukiImg,
    bio: `Kairu has been a Partner in the Firm since August 2011.
He was admitted to the Roll of Advocates on 26th August 2011.
He holds a Bachelor of Laws degree from Catholic University of Eastern Africa and a Post Graduate Diploma from the Kenya School of Law.`,
    areas: [
      "Commercial Law litigation",
      "Criminal Law litigation",
      "Civil Law litigation",
      "Insurance Law litigation",
      "Debt Collection and litigation",
      "Defamation law",
      "Children and Adoption matters",
    ],
  },
  {
    name: "Wanjiru Kairu",
    role: "Partner",
    phone: "+254 721 944 503",
    email: "wanjirukairu@nnklaw.co.ke",
    image: WanjiruImg,
    bio: `Wanjiru has been a Partner at the Firm since May 2017.
She was admitted to the Roll of Advocates in December 2011. She holds a Bachelor of Laws Degree from the University of Nairobi and a Post Graduate Diploma from the Kenya School of Law.`,
    areas: [
      "Property law, conveyancing and security documentation",
      "Corporate law",
      "Mergers and Acquisitions",
      "Administration and Trusts",
      "Employment and Labour Disputes",
      "Intellectual Property Law",
      "Children and Adoption matters",
    ],
  },
  {
    name: "Anthony Maina",
    role: "Associate",
    image: AnthonyImg,
    bio: `Anthony is an Associate in the Firm. He was admitted to the Roll of Advocates on 6th June 2023.
He is currently attached to the Litigation Department where he assists in preparation of pleadings, legal research and attending Court sessions.`,
    areas: ["Litigation support", "Legal research", "Court representation assistance"],
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="team-section" id="team">
      <div className="section-header">
        <h2>Meet Our Team</h2>
        <div className="underline"></div>
      </div>

      {/* 📝 New paragraph section here */}
      <p className="team-description">
        The Firm is supported by highly skilled administrative staff dedicated to
        providing excellent services to our clients. Our administrative staff complement
        is made up of two Secretaries, two Court Clerks, one Conveyancing Clerk,
        Court Process Server, an Accountant, a PR and Branding Consultant,
        an IT Manager, Personal Assistants, and an Office Messenger.
      </p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <button onClick={() => setSelectedMember(member)}>Read More</button>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedMember(null)}>
              ✖
            </button>
            <img src={selectedMember.image} alt={selectedMember.name} />
            <h3>{selectedMember.name}</h3>
            <p className="role">{selectedMember.role}</p>
            {selectedMember.phone && <p>📞 {selectedMember.phone}</p>}
            {selectedMember.email && <p>✉️ {selectedMember.email}</p>}
            <p className="bio">{selectedMember.bio}</p>
            <h4>Areas of Practice</h4>
            <ul>
              {selectedMember.areas.map((area, i) => (
                <li key={i}>• {area}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;

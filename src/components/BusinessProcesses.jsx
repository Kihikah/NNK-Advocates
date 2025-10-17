import React from 'react'
import "../styles/BusinessProcesses.css"
import TechnologyImg from "../assets/Technology.jpeg"
import BillingImg from "../assets/Billing.jpeg"
import IndemnityImg from "../assets/Indemnity.jpeg"



const processes = [
  {
    title: "INFORMATION AND TECHNOLOGY",
    img: TechnologyImg,
    content: `In addition to our operations which are run on the newest Microsoft Software, 
the Firm has also invested in internet and email connectivity which increases our efficiency in offering legal solutions to our clients. 
Our server is cloud based and where need be, collaborative which boosts integrity and safety of client data. 
We are in the process of complying with the Data Protection Act, 2019.`
  },
  {
    title: "BILLING POLICY",
    img: BillingImg,
    content: `We have adopted a transparent, flexible and friendly billing policy guided by the Advocates (Remuneration) (Order, 2014). 
We are able to offer a range of billing models including lump sum fee model, hourly rate fee model and blended rate fee model.`
  },
  {
    title: "PROFESSIONAL INDEMNITY",
    img: IndemnityImg,
    content: `We are presently covered by the Heritage Insurance Company Kenya for liability to the extent of 
Kenya Shillings One Hundred Million only (KES), which we adjust from time to time to suit our clients' requirements.`
  }
];

const BusinessProcesses = () => {
  return (
    <section className="process-section" id="process">
        <div className="section-header">
            <h2>Our Business Processes & Policies</h2>
            <div className="underline"></div>
        </div>
        <div className="process-grid">
            {processes.map((item, index) => (
                <div className="process-card" key={index}>
                    <img src={item.img} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default BusinessProcesses
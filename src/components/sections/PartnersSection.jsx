import React from "react";
import { placeholders } from "../../assets/images/placeholder";

const PartnersSection = () => {
  const partners = [
    { image: placeholders.partner1, name: "Partner 1" },
    { image: placeholders.partner2, name: "Partner 2" },
    { image: placeholders.partner3, name: "Partner 3" },
    { image: placeholders.partner4, name: "Partner 4" },
    { image: placeholders.partner5, name: "Partner 5" },
  ];

  return (
    <section className="mp-section" id="partners">
      <div className="container">
        <div className="section-header text-center">
          <h2>
            Our <span className="highlight">Partners</span>
          </h2>
          <div className="mp-divider"></div>
          <p className="section-subtitle">Supporting MP Art Propel's mission</p>
        </div>
        <div className="partners-container mt-5">
          {partners.map((partner, index) => (
            <div className="partner-logo" key={index}>
              <img
                src={partner.image}
                alt={partner.name}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

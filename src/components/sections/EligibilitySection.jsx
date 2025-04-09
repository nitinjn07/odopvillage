import React from "react";

const EligibilitySection = () => {
  const eligibilityCriteria = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      description:
        "Must be based in Madhya Pradesh, with preference given to rural artisans",
    },
    {
      icon: "fas fa-paint-brush",
      title: "Craft Type",
      description:
        "Traditional handicrafts, textiles, paintings, pottery, or other indigenous art forms",
    },
    {
      icon: "fas fa-business-time",
      title: "Business Status",
      description:
        "Individual artisans, family businesses, women-led enterprises, or small cooperatives",
    },
    {
      icon: "fas fa-globe-asia",
      title: "Export Readiness",
      description:
        "Willingness to scale and adapt products for international markets",
    },
  ];

  return (
    <section className="mp-section mp-section-alt" id="eligibility">
      <div className="mp-art-pattern-top"></div>
      <div className="container">
        <div className="section-header text-center">
          <h2>
            Eligibility <span className="highlight">Criteria</span>
          </h2>
          <div className="mp-divider"></div>
          <p className="section-subtitle">Who can apply for MP Art Propel</p>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div className="eligibility-container">
              {eligibilityCriteria.map((criteria, index) => (
                <div className="eligibility-item" key={index}>
                  <div className="eligibility-icon">
                    <i className={criteria.icon}></i>
                  </div>
                  <h3>{criteria.title}</h3>
                  <p>{criteria.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mp-art-pattern-bottom"></div>
    </section>
  );
};

export default EligibilitySection;

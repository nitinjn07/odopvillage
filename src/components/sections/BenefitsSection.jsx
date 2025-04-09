import React from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "fas fa-chalkboard-teacher",
      title: "Personalized Mentorship",
      description:
        "One-on-one guidance from e-commerce and export experts who understand rural artisan businesses",
    },
    {
      icon: "fas fa-laptop-code",
      title: "Digital Skills Training",
      description:
        "Learn to create compelling product listings, manage inventory, and understand international e-commerce",
    },
    {
      icon: "fas fa-money-bill-wave",
      title: "Financial Support",
      description:
        "Access to grants, subsidies and special incentives for rural artisans and traditional craftspeople",
    },
    {
      icon: "fas fa-language",
      title: "Language Support",
      description:
        "Overcome language barriers with multilingual support for creating product descriptions and customer service",
    },
    {
      icon: "fas fa-shipping-fast",
      title: "Logistics Assistance",
      description:
        "Simplified international shipping and customs processes designed for rural businesses",
    },
    {
      icon: "fas fa-users",
      title: "Community Network",
      description:
        "Connect with fellow artisans and businesses to share experiences and collaborative opportunities",
    },
  ];

  return (
    <section className="mp-section mp-section-alt" id="benefits">
      <div className="mp-art-pattern-top"></div>
      <div className="container">
        <div className="section-header text-center">
          <h2>
            Program <span className="highlight">Benefits</span>
          </h2>
          <div className="mp-divider"></div>
          <p className="section-subtitle">
            What you gain by joining MP Art Propel
          </p>
        </div>
        <div className="row mt-5 g-4">
          {benefits.map((benefit, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className={benefit.icon}></i>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mp-art-pattern-bottom"></div>
    </section>
  );
};

export default BenefitsSection;

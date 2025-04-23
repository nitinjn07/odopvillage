import React from "react";
import { Navigate } from "react-router-dom";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "🌟",
      title: "One-on-One Expert Mentorship",
      description:
        "Get personalized guidance from industry leaders who understand both local craftsmanship and global markets. Your dedicated mentor will help navigate your unique journey from district workshop to international success.",
    },
    {
      icon: "💰",
      title: "ODOP Excellence Awards",
      description:
        "Stand out performers receive direct funding to fuel their growth! Selected participants gain access to special financial support to take their products to the next level.",
    },
    {
      icon: "🌎",
      title: "Direct Access to Global Buyers",
      description:
        "Skip the middlemen! We connect you directly with serious buyers from national retail chains and international markets looking specifically for authentic MP products.",
    },
    {
      icon: "🚀",
      title: "Skill-Building Masterclasses",
      description:
        "Learn exactly what you need to succeed globally: modern production techniques, quality standards, digital marketing, export compliance, and more—all tailored to your product category.",
    },
    {
      icon: "💼",
      title: "Powerful Partner Perks",
      description:
        "Our partners offer exclusive advantages to program participants",
      isList: true,
      listItems: [],
    },
    {
      icon: "🛠️",
      title: "End-to-End Support System",
      description:
        "From product refinement to export documentation—we've got you covered at every step of your global journey.",
    },
  ];

  return (
    <section className="mp-section mp-section-alt" id="benefits">
      <div className="mp-art-pattern-top"></div>
      <div className="container">
        <div className="section-header text-center">
          <h2>
            Why Join <span className="highlight">ODOP Village Accelerator</span>
            ?
          </h2>
          <div className="mp-divider"></div>
          <p className="section-subtitle">
            Transform Your Business with These Exclusive Benefits
          </p>
        </div>
        <div className="row mt-5 g-4">
          {benefits.map((benefit, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <span className="emoji-icon">{benefit.icon}</span>
                </div>
                <h3>{benefit.title}</h3>
                {benefit.isList ? (
                  <>
                    <p>{benefit.description.split(":")[0] + ":"}</p>
                    <ul className="partner-perks-list">
                      {benefit.listItems.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p>{benefit.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="apply-now-container text-center mt-5">
          <div className="apply-banner">
            <h3>Limited spots available</h3>
            <p>
              Apply now to secure your place in this first-of-its-kind
              accelerator program by the Government of Madhya Pradesh.
            </p>
            <a href="#apply" className="btn btn-primary btn-apply">
              Apply Now
            </a>
          </div>
        </div>
      </div>
      <div className="mp-art-pattern-bottom"></div>
    </section>
  );
};

export default BenefitsSection;

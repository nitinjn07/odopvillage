import React from "react";
import heroImage from "../../assets/images/access.png"; // You'll need to add this image

const HeroSection = () => {
  return (
    <section className="mp-hero" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="hero-title">
              ODOP <span className="highlight">VILLAGE</span> Accelerator
            </h1>
            <p className="hero-subtitle">
              A mentorship program designed to help Madhya Pradesh artisans and
              small businesses build global brands through e-commerce
            </p>
            <div className="hero-buttons">
              <a href="#apply" className="btn mp-btn-primary">
                Apply Now
              </a>
              <a href="#about" className="btn mp-btn-secondary">
                Learn More
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image-container">
              <div className="mp-art-border">
                <img
                  src={heroImage}
                  alt="MP Artisans Going Global"
                  className="img-fluid hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mp-art-pattern-bottom"></div>
    </section>
  );
};

export default HeroSection;

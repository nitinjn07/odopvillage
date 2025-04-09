import React from "react";
import { placeholders } from "../../assets/images/placeholder";

const AboutSection = () => {
  return (
    <section className="mp-section" id="about">
      <div className="container">
        <div className="section-header text-center">
          <h2>
            About <span className="highlight">MP Art Propel</span>
          </h2>
          <div className="mp-divider"></div>
          <p className="section-subtitle">
            Showcasing Madhya Pradesh's rich artistic heritage to the world
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="about-image-container">
              <div className="mp-art-border">
                <img
                  src={placeholders.about}
                  alt="MP Craft Heritage"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-content">
              <h3>Preserving Heritage, Creating Opportunities</h3>
              <p>
                MP Art Propel is a specialized acceleration program designed to
                help artisans, craftspeople, and small businesses from Madhya
                Pradesh take their unique products to global markets.
              </p>
              <p>
                Through mentorship, training, and support, we help traditional
                art forms find new audiences while creating sustainable
                livelihoods for our talented artisans.
              </p>
              <div className="key-highlights">
                <div className="highlight-item">
                  <i className="fas fa-globe icon-highlight"></i>
                  <div>
                    <h4>Global Reach</h4>
                    <p>Access to international marketplaces</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-hands-helping icon-highlight"></i>
                  <div>
                    <h4>Expert Mentorship</h4>
                    <p>Guidance from e-commerce experts</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-leaf icon-highlight"></i>
                  <div>
                    <h4>Sustainable Growth</h4>
                    <p>Building eco-friendly craft businesses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

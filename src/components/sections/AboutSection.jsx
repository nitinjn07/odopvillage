import React from "react";
import mplogo from "../../assets/images/mplogo.png";

const AboutSection = () => {
  return (
    <section className="mp-section" id="about">
      <div className="container">
        <div className="section-header text-center">
          <h2>From Local Hands to Global Lands</h2>
          <div className="mp-divider"></div>
        </div>

        <div className="row mt-5 align-items-center">
          <div className="col-lg-6 pb-5">
            <div className="about-image-container">
              <div className="image-frame">
                <div className="mp-art-border">
                  <img
                    src={mplogo}
                    alt="MP Craft Heritage"
                    className="img-fluid"
                  />
                </div>
                <div className="frame-decoration frame-decoration-1"></div>
                <div className="frame-decoration frame-decoration-2"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content">
              <div className="intro-text">
                <p>
                  Ready to showcase your unique Madhya Pradesh product to the
                  world? Your global journey begins here.
                </p>
              </div>

              <p className="about-description">
                The ODOP Village Accelerator isn't just another program—it's
                your launchpad to international success. We're the
                first-of-its-kind initiative by the ODOP Cell, Madhya Pradesh
                Industrial Development Corporation, Government of Madhya
                Pradesh. We're dedicated to transforming MP's finest district
                products from local treasures into global success stories.
              </p>

              <div className="join-section">
                <h4 className="section-subheading">
                  <span className="icon-circle">?</span>
                  Why Join Our Program?
                </h4>
                <p>
                  Imagine your traditional crafts and products flying off
                  shelves in Tokyo, trending in New York, and captivating
                  markets in London. We're making this happen right now for
                  artisans and entrepreneurs of Madhya Pradesh just like you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="features-section">
              <h4 className="section-subheading">
                <span className="icon-circle">
                  <i className="fas fa-star"></i>
                </span>
                What Sets Us Apart
              </h4>

              <div className="feature-items">
                <div className="feature-item">
                  <div className="feature-icon">🚀</div>
                  <div className="feature-content">
                    <h5>Zero to Global:</h5>
                    <p>
                      We don't just guide you—we propel you from local workshops
                      to international marketplaces in record time.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">💡</div>
                  <div className="feature-content">
                    <h5>Innovation Meets Tradition:</h5>
                    <p>
                      Keep your authentic roots while we help you revolutionize
                      how the world discovers, experiences, and falls in love
                      with your products.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">💰</div>
                  <div className="feature-content">
                    <h5>Access to Big Opportunities:</h5>
                    <p>
                      Connect directly with serious investors, major retailers,
                      and e-commerce giants hungry for authentic, unique
                      products with stories that sell.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🔄</div>
                  <div className="feature-content">
                    <h5>Complete Transformation:</h5>
                    <p>
                      Walk in with a product; walk out with a brand that's ready
                      to conquer global markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="cta-section">
              <div className="cta-pattern"></div>
              <div className="cta-content">
                <h4>Are You Ready?</h4>
                <p>
                  Join the elite community of MP artisans and entrepreneurs who
                  are already watching their district products capture hearts
                  worldwide.
                </p>
                <button className="register-btn">Register Today</button>
                <p className="cta-footnote">
                  Start your journey from village workshops to global
                  marketplaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

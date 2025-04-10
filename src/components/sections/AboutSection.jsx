import React from "react";
import mplogo from "../../assets/images/mplogo.png";

const AboutSection = () => {
  return (
    <section className="mp-section" id="about">
      <div className="container">
        <div className="section-header text-center">
          <h2>
            About <span className="highlight">ODOP Village Accelerator</span>
          </h2>
          <div className="mp-divider"></div>
          <p className="section-subtitle">From Local Hands to Global Lands</p>
        </div>

        <div className="row mt-5 align-items-center">
          <div className="col-md-12 pb-5">
            <div className="about-image-container">
              <div
                className="mp-art-border"
                style={{
                  background: "#FFFF",
                  borderRadius: "8px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  padding: "10px",
                  border: "2px dashed #FF8C00",
                }}
              >
                <img
                  src={mplogo}
                  alt="MP Craft Heritage"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="about-content">
              <div className="main-heading-container">
                <h3
                  className="main-heading"
                  style={{
                    color: "#FF8C00",
                    fontWeight: "700",
                    marginBottom: "20px",
                    fontSize: "28px",
                    borderBottom: "2px solid #FF8C00",
                    paddingBottom: "10px",
                  }}
                >
                  ODOP Village Accelerator: From Local Hands to Global Lands
                </h3>
              </div>

              <div
                className="intro-text"
                style={{
                  backgroundColor: "#FFF8EE",
                  padding: "15px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                  borderLeft: "4px solid #FF8C00",
                }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "17px",
                    marginBottom: "0",
                  }}
                >
                  Ready to showcase your unique Madhya Pradesh product to the
                  world? Your global journey begins here.
                </p>
              </div>

              <p style={{ lineHeight: "1.7", fontSize: "16px" }}>
                The ODOP Village Accelerator isn't just another program—it's
                your launchpad to international success. We're the
                first-of-its-kind initiative by the ODOP Cell, Madhya Pradesh
                Industrial Development Corporation, Government of Madhya
                Pradesh. We're dedicated to transforming MP's finest district
                products from local treasures into global success stories.
              </p>

              <div
                className="join-section mt-4"
                style={{
                  backgroundColor: "#F5F9FF",
                  padding: "20px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                }}
              >
                <h4
                  className="section-subheading"
                  style={{
                    color: "#0066CC",
                    fontWeight: "700",
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "#0066CC",
                      color: "white",
                      width: "30px",
                      height: "30px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      marginRight: "10px",
                      fontSize: "14px",
                    }}
                  >
                    ?
                  </span>
                  Why Join Our Program?
                </h4>
                <p style={{ lineHeight: "1.7", fontSize: "16px" }}>
                  Imagine your traditional crafts and products flying off
                  shelves in Tokyo, trending in New York, and captivating
                  markets in London. We're making this happen right now for
                  artisans and entrepreneurs of Madhya Pradesh just like you.
                </p>
              </div>

              <div className="features-section mt-4">
                <h4
                  className="section-subheading"
                  style={{
                    color: "#FF8C00",
                    fontWeight: "700",
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "#FF8C00",
                      color: "white",
                      width: "30px",
                      height: "30px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      marginRight: "10px",
                      fontSize: "14px",
                    }}
                  >
                    <i className="fas fa-star"></i>
                  </span>
                  What Sets Us Apart
                </h4>

                <div className="feature-items">
                  <div
                    className="feature-item"
                    style={{
                      display: "flex",
                      marginBottom: "15px",
                      backgroundColor: "#FAFAFA",
                      padding: "15px",
                      borderRadius: "8px",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="feature-icon"
                      style={{
                        fontSize: "24px",
                        color: "#FF4757",
                        marginRight: "15px",
                      }}
                    >
                      🚀
                    </div>
                    <div className="feature-content">
                      <h5 style={{ fontWeight: "600", marginBottom: "5px" }}>
                        Zero to Global:
                      </h5>
                      <p style={{ margin: "0", lineHeight: "1.6" }}>
                        We don't just guide you—we propel you from local
                        workshops to international marketplaces in record time.
                      </p>
                    </div>
                  </div>

                  <div
                    className="feature-item"
                    style={{
                      display: "flex",
                      marginBottom: "15px",
                      backgroundColor: "#FAFAFA",
                      padding: "15px",
                      borderRadius: "8px",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="feature-icon"
                      style={{
                        fontSize: "24px",
                        color: "#FFC107",
                        marginRight: "15px",
                      }}
                    >
                      💡
                    </div>
                    <div className="feature-content">
                      <h5 style={{ fontWeight: "600", marginBottom: "5px" }}>
                        Innovation Meets Tradition:
                      </h5>
                      <p style={{ margin: "0", lineHeight: "1.6" }}>
                        Keep your authentic roots while we help you
                        revolutionize how the world discovers, experiences, and
                        falls in love with your products.
                      </p>
                    </div>
                  </div>

                  <div
                    className="feature-item"
                    style={{
                      display: "flex",
                      marginBottom: "15px",
                      backgroundColor: "#FAFAFA",
                      padding: "15px",
                      borderRadius: "8px",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="feature-icon"
                      style={{
                        fontSize: "24px",
                        color: "#2ED573",
                        marginRight: "15px",
                      }}
                    >
                      💰
                    </div>
                    <div className="feature-content">
                      <h5 style={{ fontWeight: "600", marginBottom: "5px" }}>
                        Access to Big Opportunities:
                      </h5>
                      <p style={{ margin: "0", lineHeight: "1.6" }}>
                        Connect directly with serious investors, major
                        retailers, and e-commerce giants hungry for authentic,
                        unique products with stories that sell.
                      </p>
                    </div>
                  </div>

                  <div
                    className="feature-item"
                    style={{
                      display: "flex",
                      marginBottom: "15px",
                      backgroundColor: "#FAFAFA",
                      padding: "15px",
                      borderRadius: "8px",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="feature-icon"
                      style={{
                        fontSize: "24px",
                        color: "#5352ED",
                        marginRight: "15px",
                      }}
                    >
                      🔄
                    </div>
                    <div className="feature-content">
                      <h5 style={{ fontWeight: "600", marginBottom: "5px" }}>
                        Complete Transformation:
                      </h5>
                      <p style={{ margin: "0", lineHeight: "1.6" }}>
                        Walk in with a product; walk out with a brand that's
                        ready to conquer global markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="cta-section mt-4"
                style={{
                  backgroundColor: "#FFF2E5",
                  padding: "25px",
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: "0 8px 20px rgba(255, 140, 0, 0.1)",
                  border: "1px solid #FFD8B0",
                }}
              >
                <h4
                  className="section-subheading"
                  style={{
                    color: "#FF8C00",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  Are You Ready?
                </h4>
                <p
                  style={{
                    marginBottom: "15px",
                    fontSize: "16px",
                    lineHeight: "1.7",
                  }}
                >
                  Join the elite community of MP artisans and entrepreneurs who
                  are already watching their district products capture hearts
                  worldwide.
                </p>
                <button
                  className="register-btn"
                  style={{
                    backgroundColor: "#FF8C00",
                    color: "white",
                    border: "none",
                    padding: "12px 30px",
                    borderRadius: "50px",
                    fontWeight: "700",
                    fontSize: "16px",
                    cursor: "pointer",
                    boxShadow: "0 4px 15px rgba(255, 140, 0, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                >
                  Register Today
                </button>
                <p
                  style={{ fontSize: "14px", marginTop: "15px", color: "#666" }}
                >
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

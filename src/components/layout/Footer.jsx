import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email.trim())) {
      // Success - reset form and show message
      setEmail("");
      setSuccessMessage("Thank you for subscribing!");

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    }
  };

  return (
    <footer className="mp-footer">
      <div className="mp-art-pattern-top"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-about">
              <h3 className="footer-logo">ODOP Village Accelerator</h3>
              <p>
                A flagship initiative by the Department of Industrial Policy and
                Investment Promotion (DIPIP), Government of Madhya Pradesh.
                Supporting grassroots enterprises, emerging businesses, and
                production-linked value chains through mentorship, market
                linkages, capacity building, and more.
              </p>
              <div className="footer-social">
                <a
                  href="https://www.facebook.com/MPIndustrialDevelopmentCorporation/"
                  className="social-icon"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://x.com/MPIDC?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  className="social-icon"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/mpidc_gomp?igsh=MXUyNWp6NDdmd3hoaw=="
                  className="social-icon"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/mpidc/"
                  className="social-icon"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.youtube.com/@mpidc2167"
                  className="social-icon"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#benefits">Benefits</a>
                </li>
                <li>
                  <a href="#program">Program</a>
                </li>
                <li>
                  <a href="#eligibility">Eligibility</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-links">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt mr-2"></i> MPIDC Bhawan,
                  Arera Hills, Bhopal
                </li>
                <li>
                  <i className="fas fa-envelope mr-2"></i>{" "}
                  exportcell@mpidc.co.in
                </li>
                <li>
                  <i className="fas fa-phone mr-2"></i> 0755-2577145
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-newsletter">
              <h3>Newsletter</h3>
              <p>
                Subscribe to get updates on new opportunities and success
                stories
              </p>
              <form
                className="newsletter-form"
                onSubmit={handleNewsletterSubmit}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn mp-btn-primary">
                  Subscribe
                </button>
              </form>
              {successMessage && (
                <div
                  className="alert alert-success mt-3"
                  style={{ fontSize: "0.9rem" }}
                >
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-12">
              <p
                className="copyright text-center"
                style={{
                  fontSize: "0.85rem",
                  lineHeight: "1.6",
                  color: "#777",
                }}
              >
                © 2025 ODOP Village Accelerator. All rights reserved. ODOP
                Village Accelerator and its logo are trademarks under the M.P.
                Industrial Development Corporation (MPIDC). All rights are
                reserved. The content, tools, and application framework on this
                website are provided and managed by Incubation Masters. While
                MPIDC owns and oversees the platform, all operational content
                and services are the sole responsibility of Incubation Masters.
                Any queries, issues, or clarifications related to the site's
                content or services should be directed to them. This platform is
                developed by MPIDC and powered by Incubation Masters. Best
                viewed on modern browsers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

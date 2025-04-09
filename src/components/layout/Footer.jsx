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
              <h3 className="footer-logo">MP Art Propel</h3>
              <p>
                Empowering artisans from Madhya Pradesh to share their craft
                with the world through e-commerce acceleration and mentorship.
              </p>
              <div className="footer-social">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
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
                  <a href="#success-stories">Success Stories</a>
                </li>
                <li>
                  <a href="#apply">Apply Now</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-links">
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="#">E-commerce Guide</a>
                </li>
                <li>
                  <a href="#">Export Documentation</a>
                </li>
                <li>
                  <a href="#">Product Photography Tips</a>
                </li>
                <li>
                  <a href="#">Pricing Calculator</a>
                </li>
                <li>
                  <a href="#">Artisan Community</a>
                </li>
                <li>
                  <a href="#">Success Stories</a>
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
            <div className="col-md-6">
              <p className="copyright">
                &copy; {new Date().getFullYear()} MP Art Propel. All Rights
                Reserved.
              </p>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

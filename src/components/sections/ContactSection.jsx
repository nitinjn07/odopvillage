import React, { useState } from "react";

const ContactSection = () => {
  const [contactForm, setContactForm] = useState({
    subject: "",
    message: "",
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value,
    });

    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: "",
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (!value.trim()) {
      setValidationErrors({
        ...validationErrors,
        [name]: "This field is required",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation check
    let isValid = true;
    let errors = {};

    Object.keys(contactForm).forEach((key) => {
      if (!contactForm[key].trim()) {
        isValid = false;
        errors[key] = "This field is required";
      }
    });

    setValidationErrors(errors);

    if (isValid) {
      // Show success message and reset form
      setContactForm({
        subject: "",
        message: "",
      });

      setSuccessMessage(
        "Thank you for your message! We will get back to you soon."
      );

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    }
  };

  return (
    <section className="mp-section" id="contact">
      <div className="container">
        <div className="section-header text-center">
          <h2>
            Contact <span className="highlight">Us</span>
          </h2>
          <div className="mp-divider"></div>
          <p className="section-subtitle">
            We're here to answer your questions
          </p>
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-md-6">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Address</h3>
                  <p>
                    MP Art Propel Office, Hamidia Road, Bhopal, Madhya Pradesh
                    462001
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <h3>Phone</h3>
                  <p>Toll-Free: 1800-XXX-XXXX</p>
                  <p>Helpline: +91-XXX-XXX-XXXX</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p>info@mpartpropel.org</p>
                  <p>support@mpartpropel.org</p>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="contactSubject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      validationErrors.subject ? "is-invalid" : ""
                    }`}
                    id="contactSubject"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                  />
                  {validationErrors.subject && (
                    <div className="invalid-feedback">
                      {validationErrors.subject}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="contactMessage" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className={`form-control ${
                      validationErrors.message ? "is-invalid" : ""
                    }`}
                    id="contactMessage"
                    name="message"
                    rows="4"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                  ></textarea>
                  {validationErrors.message && (
                    <div className="invalid-feedback">
                      {validationErrors.message}
                    </div>
                  )}
                </div>
                <button type="submit" className="btn mp-btn-primary">
                  Send Message
                </button>
              </form>
              {successMessage && (
                <div className="alert alert-success mt-3" role="alert">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

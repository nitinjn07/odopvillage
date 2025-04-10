import React, { useState } from "react";

const ApplySection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    district: "",
    craftType: "",
    experience: "",
    businessGoals: "",
    termsCheck: false,
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: "",
      });
    }
  };

  const validateField = (name, value) => {
    if (!value && name !== "termsCheck") {
      return "This field is required";
    }

    if (name === "mobile" && value) {
      const mobilePattern = /^[0-9]{10}$/;
      if (!mobilePattern.test(value.trim())) {
        return "Please enter a valid 10-digit mobile number";
      }
    }

    if (name === "email" && value) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value.trim())) {
        return "Please enter a valid email address";
      }
    }

    if (name === "termsCheck" && !value) {
      return "You must agree to the terms and conditions";
    }

    return "";
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    const error = validateField(name, fieldValue);
    setValidationErrors({
      ...validationErrors,
      [name]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    let errors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        errors[key] = error;
        isValid = false;
      }
    });

    setValidationErrors(errors);

    if (isValid) {
      // Form is valid, reset form and show success message
      setFormData({
        fullName: "",
        mobile: "",
        email: "",
        district: "",
        craftType: "",
        experience: "",
        businessGoals: "",
        termsCheck: false,
      });

      setSuccessMessage(
        "Your application has been submitted successfully. We will contact you soon."
      );
      setFormSubmitted(true);

      // Clear success message after 8 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 8000);

      // Scroll to success message
      const successAlert = document.querySelector(".apply-success-alert");
      if (successAlert) {
        successAlert.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <section className="apply-section" id="apply">
      <div className="apply-decoration-dot apply-decoration-dot-1"></div>
      <div className="apply-decoration-dot apply-decoration-dot-2"></div>
      <div className="apply-decoration-line"></div>

      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow">Join Us</span>
          <h2>
            Apply for{" "}
            <span className="highlight">ODOP Village Accelerator</span>
          </h2>
          <div className="apply-divider"></div>
          <p className="section-subtitle">
            Take the first step towards transforming your craft into a global
            business
          </p>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div className="apply-card">
              <div className="apply-card-inner">
                <div className="apply-header">
                  <div className="apply-icon">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <h3>Program Application</h3>
                  <p>
                    Next cohort starts: <span>June 15, 2025</span>
                  </p>
                </div>

                {!formSubmitted ? (
                  <form className="apply-form" onSubmit={handleSubmit}>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="fullName" className="form-label">
                            Full Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              validationErrors.fullName ? "is-invalid" : ""
                            }`}
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            placeholder="Your full name"
                            required
                          />
                          {validationErrors.fullName && (
                            <div className="invalid-feedback">
                              {validationErrors.fullName}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="mobile" className="form-label">
                            Mobile Number <span className="required">*</span>
                          </label>
                          <input
                            type="tel"
                            className={`form-control ${
                              validationErrors.mobile ? "is-invalid" : ""
                            }`}
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            placeholder="10-digit mobile number"
                            required
                          />
                          {validationErrors.mobile && (
                            <div className="invalid-feedback">
                              {validationErrors.mobile}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email" className="form-label">
                            Email Address <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            className={`form-control ${
                              validationErrors.email ? "is-invalid" : ""
                            }`}
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            placeholder="youremail@example.com"
                            required
                          />
                          {validationErrors.email && (
                            <div className="invalid-feedback">
                              {validationErrors.email}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="district" className="form-label">
                            District <span className="required">*</span>
                          </label>
                          <select
                            className={`form-select ${
                              validationErrors.district ? "is-invalid" : ""
                            }`}
                            id="district"
                            name="district"
                            value={formData.district}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            required
                          >
                            <option value="" disabled>
                              Select your district
                            </option>
                            <option value="Bhopal">Bhopal</option>
                            <option value="Indore">Indore</option>
                            <option value="Gwalior">Gwalior</option>
                            <option value="Jabalpur">Jabalpur</option>
                            <option value="Ujjain">Ujjain</option>
                            <option value="Other">Other</option>
                          </select>
                          {validationErrors.district && (
                            <div className="invalid-feedback">
                              {validationErrors.district}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="craftType" className="form-label">
                            Type of Craft/Business{" "}
                            <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              validationErrors.craftType ? "is-invalid" : ""
                            }`}
                            id="craftType"
                            name="craftType"
                            value={formData.craftType}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            placeholder="E.g., Handloom, Pottery, Food Products"
                            required
                          />
                          {validationErrors.craftType && (
                            <div className="invalid-feedback">
                              {validationErrors.craftType}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="experience" className="form-label">
                            Years of Experience{" "}
                            <span className="required">*</span>
                          </label>
                          <select
                            className={`form-select ${
                              validationErrors.experience ? "is-invalid" : ""
                            }`}
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            required
                          >
                            <option value="" disabled>
                              Select your experience
                            </option>
                            <option value="0-2 years">0-2 years</option>
                            <option value="3-5 years">3-5 years</option>
                            <option value="6-10 years">6-10 years</option>
                            <option value="10+ years">10+ years</option>
                          </select>
                          {validationErrors.experience && (
                            <div className="invalid-feedback">
                              {validationErrors.experience}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="businessGoals" className="form-label">
                            Tell us about your business and goals{" "}
                            <span className="required">*</span>
                          </label>
                          <textarea
                            className={`form-control ${
                              validationErrors.businessGoals ? "is-invalid" : ""
                            }`}
                            id="businessGoals"
                            name="businessGoals"
                            rows="4"
                            value={formData.businessGoals}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            placeholder="Describe your craft/business and what you hope to achieve through this program..."
                            required
                          ></textarea>
                          {validationErrors.businessGoals && (
                            <div className="invalid-feedback">
                              {validationErrors.businessGoals}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group terms-check-group">
                          <div className="form-check">
                            <input
                              className={`form-check-input ${
                                validationErrors.termsCheck ? "is-invalid" : ""
                              }`}
                              type="checkbox"
                              id="termsCheck"
                              name="termsCheck"
                              checked={formData.termsCheck}
                              onChange={handleInputChange}
                              onBlur={handleBlur}
                              required
                            />
                            <label
                              className="form-check-label"
                              htmlFor="termsCheck"
                            >
                              I agree to the{" "}
                              <a href="#terms">terms and conditions</a> and
                              consent to the processing of my personal data
                            </label>
                            {validationErrors.termsCheck && (
                              <div className="invalid-feedback">
                                {validationErrors.termsCheck}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="col-12 text-center">
                        <button type="submit" className="btn apply-btn">
                          <span>Submit Application</span>
                        </button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="apply-success-alert" role="alert">
                    <div className="success-icon">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <h4>Application Submitted!</h4>
                    <p>{successMessage}</p>
                    <button
                      className="btn reset-btn"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Submit Another Application
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-10 mx-auto">
            <div className="apply-info-cards">
              <div className="apply-info-card">
                <div className="info-icon">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <h4>Application Deadline</h4>
                <p>May 30, 2025</p>
              </div>

              <div className="apply-info-card">
                <div className="info-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Cohort Size</h4>
                <p>30-50 Entrepreneurs</p>
              </div>

              <div className="apply-info-card">
                <div className="info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h4>Program Duration</h4>
                <p>3 Months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplySection;

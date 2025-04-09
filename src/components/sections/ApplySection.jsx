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
        "Success! Your application has been submitted. We will contact you soon."
      );

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);

      // Scroll to success message
      const successAlert = document.querySelector(".apply-success-alert");
      if (successAlert) {
        successAlert.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <section className="mp-section" id="apply">
      <div className="container">
        <div className="section-header text-center">
          <h2>
            Apply for <span className="highlight">MP Art Propel</span>
          </h2>
          <div className="mp-divider"></div>
          <p className="section-subtitle">
            Take the first step towards global expansion
          </p>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="apply-card">
              <div className="apply-header">
                <h3>Program Application</h3>
                <p>Next cohort starts: August 1, 2023</p>
              </div>
              <form className="apply-form" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="fullName" className="form-label">
                      Full Name
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
                      required
                    />
                    {validationErrors.fullName && (
                      <div className="invalid-feedback">
                        {validationErrors.fullName}
                      </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="mobile" className="form-label">
                      Mobile Number
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
                      required
                    />
                    {validationErrors.mobile && (
                      <div className="invalid-feedback">
                        {validationErrors.mobile}
                      </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email Address
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
                      required
                    />
                    {validationErrors.email && (
                      <div className="invalid-feedback">
                        {validationErrors.email}
                      </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="district" className="form-label">
                      District
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
                  <div className="col-12">
                    <label htmlFor="craftType" className="form-label">
                      Type of Craft/Business
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
                      required
                    />
                    {validationErrors.craftType && (
                      <div className="invalid-feedback">
                        {validationErrors.craftType}
                      </div>
                    )}
                  </div>
                  <div className="col-12">
                    <label htmlFor="experience" className="form-label">
                      Years of Experience
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
                  <div className="col-12">
                    <label htmlFor="businessGoals" className="form-label">
                      Tell us about your business and goals
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
                      required
                    ></textarea>
                    {validationErrors.businessGoals && (
                      <div className="invalid-feedback">
                        {validationErrors.businessGoals}
                      </div>
                    )}
                  </div>
                  <div className="col-12">
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
                      <label className="form-check-label" htmlFor="termsCheck">
                        I agree to the terms and conditions
                      </label>
                      {validationErrors.termsCheck && (
                        <div className="invalid-feedback">
                          {validationErrors.termsCheck}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn mp-btn-primary btn-lg">
                      Submit Application
                    </button>
                  </div>
                </div>
              </form>
              {successMessage && (
                <div
                  className="alert alert-success mt-3 apply-success-alert"
                  role="alert"
                >
                  <strong>Success!</strong> {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplySection;

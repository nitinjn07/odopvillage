import React, { useState } from "react";

const ApplySection = () => {
  const [formData, setFormData] = useState({
    // Personal & Contact Information
    fullName: "",
    mobile: "",
    email: "",
    districtVillage: "",

    // Product & Business Information
    odopProduct: "",
    businessName: "",
    yearStarted: "",

    // Entity & Ownership
    entityType: "",
    partOfSHG: "",
    partOfSHGSpecify: "",
    gstRegistered: "",
    ownershipType: "",
    productionStatus: "",

    // Market & Sales Information
    sellLocations: {
      localMarkets: false,
      withinDistrict: false,
      withinMP: false,
      outsideMP: false,
      online: false,
    },
    soldOutsideIndia: "",

    // Operations & Product Details
    teamSize: "",
    monthlyProduction: "",
    packaging: "",
    monthlyRevenue: "",
    website: "",
    describeProduct: "",

    // Materials, Certifications & Challenges
    localRawMaterials: "",
    certifications: {
      gi: false,
      fssai: false,
    },
    challenges: "",

    // Support & Goals
    supportRequired: [],
    supportRequiredExtra: [],
    oneYearGoal: "",

    // Terms
    termsCheck: false,
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState(1);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes(".")) {
      // Handle nested objects like sellLocations.localMarkets
      const [parent, child] = name.split(".");
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: type === "checkbox" ? checked : value,
        },
      });
    } else if (type === "checkbox" && Array.isArray(formData[name])) {
      // Handle array values for checkboxes like supportRequired
      const newArray = checked
        ? [...formData[name], value]
        : formData[name].filter((item) => item !== value);

      setFormData({
        ...formData,
        [name]: newArray,
      });
    } else {
      // Handle simple fields
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }

    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: "",
      });
    }
  };

  const validateField = (name, value) => {
    // Required fields
    const requiredFields = [
      "fullName",
      "mobile",
      "email",
      "districtVillage",
      "odopProduct",
    ];

    if (requiredFields.includes(name) && !value) {
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

    // Validate all required fields
    let errors = {};
    let isValid = true;

    // Only validate fields that are required
    const requiredFields = [
      "fullName",
      "mobile",
      "email",
      "districtVillage",
      "odopProduct",
      "termsCheck",
    ];

    requiredFields.forEach((key) => {
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
        // Reset to initial state
        fullName: "",
        mobile: "",
        email: "",
        districtVillage: "",
        odopProduct: "",
        businessName: "",
        yearStarted: "",
        entityType: "",
        partOfSHG: "",
        partOfSHGSpecify: "",
        gstRegistered: "",
        ownershipType: "",
        productionStatus: "",
        sellLocations: {
          localMarkets: false,
          withinDistrict: false,
          withinMP: false,
          outsideMP: false,
          online: false,
        },
        soldOutsideIndia: "",
        teamSize: "",
        monthlyProduction: "",
        packaging: "",
        monthlyRevenue: "",
        website: "",
        describeProduct: "",
        localRawMaterials: "",
        certifications: {
          gi: false,
          fssai: false,
        },
        challenges: "",
        supportRequired: [],
        supportRequiredExtra: [],
        oneYearGoal: "",
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

  const handleNextSection = () => {
    if (activeSection < 6) {
      setActiveSection(activeSection + 1);

      // Scroll to top of form
      const formTop = document.querySelector(".apply-card");
      if (formTop) {
        formTop.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handlePrevSection = () => {
    if (activeSection > 1) {
      setActiveSection(activeSection - 1);

      // Scroll to top of form
      const formTop = document.querySelector(".apply-card");
      if (formTop) {
        formTop.scrollIntoView({ behavior: "smooth", block: "start" });
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
                    {/* Progress indicator */}
                    <div className="form-progress">
                      <div className="form-progress-steps">
                        {[
                          "Personal Info",
                          "Business Info",
                          "Entity & Ownership",
                          "Market & Sales",
                          "Operations",
                          "Support & Goals",
                        ].map((step, index) => (
                          <div
                            key={index}
                            className={`progress-step ${
                              activeSection === index + 1 ? "active" : ""
                            } ${activeSection > index + 1 ? "completed" : ""}`}
                            onClick={() => setActiveSection(index + 1)}
                          >
                            <span className="step-number">{index + 1}</span>
                            <span className="step-label">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Section 1: Personal & Contact Information */}
                    {activeSection === 1 && (
                      <div className="form-section active">
                        <h4 className="section-title">
                          Personal & Contact Information
                        </h4>

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
                                Mobile Number{" "}
                                <span className="required">*</span>
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
                                Email Address{" "}
                                <span className="required">*</span>
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
                              <label
                                htmlFor="districtVillage"
                                className="form-label"
                              >
                                District & Village{" "}
                                <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                className={`form-control ${
                                  validationErrors.districtVillage
                                    ? "is-invalid"
                                    : ""
                                }`}
                                id="districtVillage"
                                name="districtVillage"
                                value={formData.districtVillage}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                placeholder="Enter your district and village"
                                required
                              />
                              {validationErrors.districtVillage && (
                                <div className="invalid-feedback">
                                  {validationErrors.districtVillage}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="form-navigation">
                          <button
                            type="button"
                            className="btn next-btn"
                            onClick={handleNextSection}
                          >
                            Next <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Section 2: Product & Business Information */}
                    {activeSection === 2 && (
                      <div className="form-section active">
                        <h4 className="section-title">
                          Product & Business Information
                        </h4>

                        <div className="row g-4">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                htmlFor="odopProduct"
                                className="form-label"
                              >
                                ODOP Product <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                className={`form-control ${
                                  validationErrors.odopProduct
                                    ? "is-invalid"
                                    : ""
                                }`}
                                id="odopProduct"
                                name="odopProduct"
                                value={formData.odopProduct}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                placeholder="Enter your ODOP product"
                                required
                              />
                              {validationErrors.odopProduct && (
                                <div className="invalid-feedback">
                                  {validationErrors.odopProduct}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                htmlFor="businessName"
                                className="form-label"
                              >
                                Business Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="businessName"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleInputChange}
                                placeholder="Enter your business name"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                htmlFor="yearStarted"
                                className="form-label"
                              >
                                Year Started
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="yearStarted"
                                name="yearStarted"
                                value={formData.yearStarted}
                                onChange={handleInputChange}
                                placeholder="Enter the year you started"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-navigation">
                          <button
                            type="button"
                            className="btn prev-btn"
                            onClick={handlePrevSection}
                          >
                            <i className="fas fa-arrow-left"></i> Previous
                          </button>
                          <button
                            type="button"
                            className="btn next-btn"
                            onClick={handleNextSection}
                          >
                            Next <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Section 3: Entity & Ownership */}
                    {activeSection === 3 && (
                      <div className="form-section active">
                        <h4 className="section-title">Entity & Ownership</h4>

                        <div className="row g-4">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Entity Type</label>
                              <div className="radio-group">
                                {["Prop", "LLP", "Pvt Ltd", "SHG"].map(
                                  (type) => (
                                    <div className="form-radio" key={type}>
                                      <input
                                        type="radio"
                                        id={`entityType-${type}`}
                                        name="entityType"
                                        value={type}
                                        checked={formData.entityType === type}
                                        onChange={handleInputChange}
                                      />
                                      <label htmlFor={`entityType-${type}`}>
                                        {type}
                                      </label>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Part of SHG/FPO/Startup?
                              </label>
                              <div className="radio-group">
                                {["Yes", "No"].map((option) => (
                                  <div className="form-radio" key={option}>
                                    <input
                                      type="radio"
                                      id={`partOfSHG-${option}`}
                                      name="partOfSHG"
                                      value={option}
                                      checked={formData.partOfSHG === option}
                                      onChange={handleInputChange}
                                    />
                                    <label htmlFor={`partOfSHG-${option}`}>
                                      {option}
                                    </label>
                                  </div>
                                ))}
                              </div>
                              {formData.partOfSHG === "Yes" && (
                                <input
                                  type="text"
                                  className="form-control mt-2"
                                  name="partOfSHGSpecify"
                                  value={formData.partOfSHGSpecify}
                                  onChange={handleInputChange}
                                  placeholder="Please specify"
                                />
                              )}
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                GST Registered
                              </label>
                              <div className="radio-group">
                                {["Yes", "No"].map((option) => (
                                  <div className="form-radio" key={option}>
                                    <input
                                      type="radio"
                                      id={`gstRegistered-${option}`}
                                      name="gstRegistered"
                                      value={option}
                                      checked={
                                        formData.gstRegistered === option
                                      }
                                      onChange={handleInputChange}
                                    />
                                    <label htmlFor={`gstRegistered-${option}`}>
                                      {option}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Product Ownership Type
                              </label>
                              <div className="radio-group">
                                {[
                                  "Individual",
                                  "Company",
                                  "SHG/Cooperative",
                                  "Group",
                                  "Others",
                                ].map((type) => (
                                  <div className="form-radio" key={type}>
                                    <input
                                      type="radio"
                                      id={`ownershipType-${type}`}
                                      name="ownershipType"
                                      value={type}
                                      checked={formData.ownershipType === type}
                                      onChange={handleInputChange}
                                    />
                                    <label htmlFor={`ownershipType-${type}`}>
                                      {type}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Production Status
                              </label>
                              <div className="radio-group">
                                {["Active", "Seasonal"].map((status) => (
                                  <div className="form-radio" key={status}>
                                    <input
                                      type="radio"
                                      id={`productionStatus-${status}`}
                                      name="productionStatus"
                                      value={status}
                                      checked={
                                        formData.productionStatus === status
                                      }
                                      onChange={handleInputChange}
                                    />
                                    <label
                                      htmlFor={`productionStatus-${status}`}
                                    >
                                      {status}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-navigation">
                          <button
                            type="button"
                            className="btn prev-btn"
                            onClick={handlePrevSection}
                          >
                            <i className="fas fa-arrow-left"></i> Previous
                          </button>
                          <button
                            type="button"
                            className="btn next-btn"
                            onClick={handleNextSection}
                          >
                            Next <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Section 4: Market & Sales Information */}
                    {activeSection === 4 && (
                      <div className="form-section active">
                        <h4 className="section-title">
                          Market & Sales Information
                        </h4>

                        <div className="row g-4">
                          <div className="col-12">
                            <div className="form-group">
                              <label className="form-label">
                                Where do you currently sell your products?
                              </label>
                              <div className="checkbox-group">
                                {[
                                  {
                                    id: "localMarkets",
                                    label: "Local markets only",
                                  },
                                  {
                                    id: "withinDistrict",
                                    label: "Within district",
                                  },
                                  {
                                    id: "withinMP",
                                    label: "Within Madhya Pradesh",
                                  },
                                  {
                                    id: "outsideMP",
                                    label: "Outside Madhya Pradesh",
                                  },
                                  { id: "online", label: "Online" },
                                ].map((option) => (
                                  <div className="form-check" key={option.id}>
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id={`sellLocations.${option.id}`}
                                      name={`sellLocations.${option.id}`}
                                      checked={
                                        formData.sellLocations[option.id]
                                      }
                                      onChange={handleInputChange}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={`sellLocations.${option.id}`}
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group">
                              <label className="form-label">
                                Have you ever sold your products outside India?
                              </label>
                              <div className="radio-group">
                                {["Yes", "No"].map((option) => (
                                  <div className="form-radio" key={option}>
                                    <input
                                      type="radio"
                                      id={`soldOutsideIndia-${option}`}
                                      name="soldOutsideIndia"
                                      value={option}
                                      checked={
                                        formData.soldOutsideIndia === option
                                      }
                                      onChange={handleInputChange}
                                    />
                                    <label
                                      htmlFor={`soldOutsideIndia-${option}`}
                                    >
                                      {option}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-navigation">
                          <button
                            type="button"
                            className="btn prev-btn"
                            onClick={handlePrevSection}
                          >
                            <i className="fas fa-arrow-left"></i> Previous
                          </button>
                          <button
                            type="button"
                            className="btn next-btn"
                            onClick={handleNextSection}
                          >
                            Next <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Section 5: Operations & Product Details */}
                    {activeSection === 5 && (
                      <div className="form-section active">
                        <h4 className="section-title">
                          Operations & Product Details
                        </h4>

                        <div className="row g-4">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="teamSize" className="form-label">
                                Team Size
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="teamSize"
                                name="teamSize"
                                value={formData.teamSize}
                                onChange={handleInputChange}
                                placeholder="Enter your team size"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                htmlFor="monthlyProduction"
                                className="form-label"
                              >
                                Monthly Production
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="monthlyProduction"
                                name="monthlyProduction"
                                value={formData.monthlyProduction}
                                onChange={handleInputChange}
                                placeholder="Enter monthly production"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">Packaging</label>
                              <div className="radio-group">
                                {["Self", "Outsourced"].map((option) => (
                                  <div className="form-radio" key={option}>
                                    <input
                                      type="radio"
                                      id={`packaging-${option}`}
                                      name="packaging"
                                      value={option}
                                      checked={formData.packaging === option}
                                      onChange={handleInputChange}
                                    />
                                    <label htmlFor={`packaging-${option}`}>
                                      {option}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                htmlFor="monthlyRevenue"
                                className="form-label"
                              >
                                Monthly Revenue
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="monthlyRevenue"
                                name="monthlyRevenue"
                                value={formData.monthlyRevenue}
                                onChange={handleInputChange}
                                placeholder="Enter monthly revenue"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="website" className="form-label">
                                Website / Social
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="website"
                                name="website"
                                value={formData.website}
                                onChange={handleInputChange}
                                placeholder="Enter website or social media link"
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group">
                              <label
                                htmlFor="describeProduct"
                                className="form-label"
                              >
                                Describe Product
                              </label>
                              <textarea
                                className="form-control"
                                id="describeProduct"
                                name="describeProduct"
                                rows="3"
                                value={formData.describeProduct}
                                onChange={handleInputChange}
                                placeholder="Describe your product"
                              ></textarea>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Local Raw Materials?
                              </label>
                              <div className="radio-group">
                                {["Yes", "No"].map((option) => (
                                  <div className="form-radio" key={option}>
                                    <input
                                      type="radio"
                                      id={`localRawMaterials-${option}`}
                                      name="localRawMaterials"
                                      value={option}
                                      checked={
                                        formData.localRawMaterials === option
                                      }
                                      onChange={handleInputChange}
                                    />
                                    <label
                                      htmlFor={`localRawMaterials-${option}`}
                                    >
                                      {option}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Certifications
                              </label>
                              <div className="checkbox-group">
                                {[
                                  { id: "gi", label: "GI" },
                                  { id: "fssai", label: "FSSAI" },
                                ].map((cert) => (
                                  <div className="form-check" key={cert.id}>
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id={`certifications.${cert.id}`}
                                      name={`certifications.${cert.id}`}
                                      checked={formData.certifications[cert.id]}
                                      onChange={handleInputChange}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={`certifications.${cert.id}`}
                                    >
                                      {cert.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group">
                              <label
                                htmlFor="challenges"
                                className="form-label"
                              >
                                Challenges
                              </label>
                              <textarea
                                className="form-control"
                                id="challenges"
                                name="challenges"
                                rows="3"
                                value={formData.challenges}
                                onChange={handleInputChange}
                                placeholder="Describe the challenges you face"
                              ></textarea>
                            </div>
                          </div>
                        </div>

                        <div className="form-navigation">
                          <button
                            type="button"
                            className="btn prev-btn"
                            onClick={handlePrevSection}
                          >
                            <i className="fas fa-arrow-left"></i> Previous
                          </button>
                          <button
                            type="button"
                            className="btn next-btn"
                            onClick={handleNextSection}
                          >
                            Next <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Section 6: Support & Goals */}
                    {activeSection === 6 && (
                      <div className="form-section active">
                        <h4 className="section-title">Support & Goals</h4>

                        <div className="row g-4">
                          <div className="col-12">
                            <div className="form-group">
                              <label className="form-label">
                                Support Required
                              </label>
                              <div className="checkbox-group">
                                {[
                                  "Finance / Funding",
                                  "Product Innovation",
                                  "Branding & Packaging",
                                  "Market Linkages",
                                  "Digital Transformation",
                                  "Certificate Support",
                                  "Others",
                                ].map((support) => (
                                  <div className="form-check" key={support}>
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id={`supportRequired-${support.replace(
                                        /\s+/g,
                                        ""
                                      )}`}
                                      name="supportRequired"
                                      value={support}
                                      checked={formData.supportRequired.includes(
                                        support
                                      )}
                                      onChange={handleInputChange}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={`supportRequired-${support.replace(
                                        /\s+/g,
                                        ""
                                      )}`}
                                    >
                                      {support}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group">
                              <label
                                htmlFor="oneYearGoal"
                                className="form-label"
                              >
                                1-Year Goal
                              </label>
                              <textarea
                                className="form-control"
                                id="oneYearGoal"
                                name="oneYearGoal"
                                rows="3"
                                value={formData.oneYearGoal}
                                onChange={handleInputChange}
                                placeholder="Describe your 1-Year Goal"
                              ></textarea>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group terms-check-group">
                              <div className="form-check">
                                <input
                                  className={`form-check-input ${
                                    validationErrors.termsCheck
                                      ? "is-invalid"
                                      : ""
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

                          <div className="col-12">
                            <div className="form-navigation final-buttons">
                              <button
                                type="button"
                                className="btn prev-btn"
                                onClick={handlePrevSection}
                              >
                                <i className="fas fa-arrow-left"></i> Previous
                              </button>
                              <button type="submit" className="btn apply-btn">
                                <span>Submit Application</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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

      {/* Add CSS for the new form sections */}
      <style jsx>{`
        .form-progress {
          margin-bottom: 2rem;
          overflow-x: auto;
        }

        .form-progress-steps {
          display: flex;
          width: 100%;
          min-width: 600px;
        }

        .progress-step {
          flex: 1;
          text-align: center;
          position: relative;
          cursor: pointer;
          padding: 0.5rem 0;
        }

        .progress-step::after {
          content: "";
          position: absolute;
          top: 1.5rem;
          left: 50%;
          width: 100%;
          height: 2px;
          background-color: #ddd;
          z-index: 1;
        }

        .progress-step:last-child::after {
          display: none;
        }

        .progress-step.active .step-number,
        .progress-step.completed .step-number {
          background-color: #007bff;
          color: white;
        }

        .progress-step.completed::after {
          background-color: #007bff;
        }

        .step-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background-color: #f1f1f1;
          color: #555;
          font-weight: bold;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 2;
        }

        .step-label {
          display: block;
          font-size: 0.85rem;
          color: #555;
        }

        .progress-step.active .step-label {
          font-weight: bold;
          color: #333;
        }

        .form-section {
          display: none;
        }

        .form-section.active {
          display: block;
          animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .section-title {
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #eee;
          color: #333;
        }

        .form-navigation {
          display: flex;
          justify-content: space-between;
          margin-top: 2rem;
        }

        .form-navigation.final-buttons {
          justify-content: flex-end;
        }

        .prev-btn,
        .next-btn {
          padding: 0.5rem 1.5rem;
          border-radius: 30px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .prev-btn {
          background-color: #f1f1f1;
          color: #333;
        }

        .prev-btn:hover {
          background-color: #e1e1e1;
        }

        .next-btn {
          background-color: #4a90e2;
          color: white;
        }

        .next-btn:hover {
          background-color: #3a7bd5;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          font-weight: 500;
          margin-bottom: 0.5rem;
          display: block;
        }

        .required {
          color: #dc3545;
        }

        .form-control {
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: 1px solid #ced4da;
          transition: border-color 0.3s ease;
        }

        .form-control:focus {
          border-color: #4a90e2;
          box-shadow: 0 0 0 0.2rem rgba(74, 144, 226, 0.25);
        }

        .radio-group,
        .checkbox-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .form-radio,
        .form-check {
          display: flex;
          align-items: center;
          margin-right: 1rem;
          margin-bottom: 0.5rem;
        }

        .form-radio input[type="radio"],
        .form-check input[type="checkbox"] {
          margin-right: 0.5rem;
        }

        .is-invalid {
          border-color: #dc3545;
        }

        .invalid-feedback {
          display: block;
          width: 100%;
          margin-top: 0.25rem;
          font-size: 0.875rem;
          color: #dc3545;
        }

        .apply-btn {
          padding: 0.75rem 2rem;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .apply-btn:hover {
          background-color: #218838;
          transform: translateY(-2px);
        }

        .apply-success-alert {
          text-align: center;
          padding: 2rem;
          background-color: #d4edda;
          border-radius: 8px;
          animation: fadeIn 0.5s ease;
        }

        .success-icon {
          font-size: 3rem;
          color: #28a745;
          margin-bottom: 1rem;
        }

        .reset-btn {
          margin-top: 1.5rem;
          padding: 0.5rem 1.5rem;
          background-color: #6c757d;
          color: white;
          border: none;
          border-radius: 30px;
          transition: all 0.3s ease;
        }

        .reset-btn:hover {
          background-color: #5a6268;
        }
      `}</style>
    </section>
  );
};

export default ApplySection;

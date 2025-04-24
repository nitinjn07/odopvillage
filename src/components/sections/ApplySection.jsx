import React, { useState } from "react";
import axios from "axios";

const ApplySection = () => {
  // Initial state matching the mongoose model structure
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: "",
      mobileNo: "",
      email: "",
      districtVillage: "",
    },
    businessInfo: {
      odopProduct: "",
      businessName: "",
      yearStarted: "",
    },
    entityOwnership: {
      entityType: "",
      partOfSHGOrFPO: "",
      partOfSHGOrFPOSpecify: "",
      gstRegistration: "",
      productOwnershipType: "",
      productStatus: "",
    },
    marketSales: {
      sellLocations: {
        localMarkets: false,
        withinDistrict: false,
        outsideDistrictWithinState: false,
        outsideState: false,
        online: false,
      },
      salesOutsideIndia: "",
    },
    operationsProduct: {
      teamSize: "",
      monthlyProduction: "",
      productionType: "",
      monthlyRevenue: "",
      websiteSocialMedia: "",
      productDescription: "",
    },
    materialCertifications: {
      localRawMaterial: "",
      certifications: [],
      challenges: "",
    },
    supportGoals: {
      supportAreas: [],
      supportAreasOther: "",
      oneYearGoal: "",
    },
    termsAccepted: false,
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Parse the field path (e.g., "personalInfo.fullName" or "marketSales.sellLocations.localMarkets")
    const fieldPath = name.split(".");

    if (fieldPath.length === 1) {
      // Simple field like termsAccepted
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    } else if (fieldPath.length === 2) {
      // Two-level nested field like personalInfo.fullName
      const [section, field] = fieldPath;

      // Special handling for checkbox arrays
      if (type === "checkbox" && Array.isArray(formData[section][field])) {
        const newArray = checked
          ? [...formData[section][field], value]
          : formData[section][field].filter((item) => item !== value);

        setFormData({
          ...formData,
          [section]: {
            ...formData[section],
            [field]: newArray,
          },
        });
      } else {
        // Regular field update
        setFormData({
          ...formData,
          [section]: {
            ...formData[section],
            [field]: type === "checkbox" ? checked : value,
          },
        });
      }
    } else if (fieldPath.length === 3) {
      // Three-level nested field like marketSales.sellLocations.localMarkets
      const [section, subsection, field] = fieldPath;

      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [subsection]: {
            ...formData[section][subsection],
            [field]: type === "checkbox" ? checked : value,
          },
        },
      });
    }

    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: "",
      });
    }
  };

  // Validate a single field
  const validateField = (name, value) => {
    // Required fields based on the model's required: true properties
    const requiredFields = [
      "personalInfo.fullName",
      "personalInfo.mobileNo",
      "personalInfo.email",
      "personalInfo.districtVillage",
      "businessInfo.odopProduct",
      "entityOwnership.entityType",
      "entityOwnership.partOfSHGOrFPO",
      "entityOwnership.gstRegistration",
      "entityOwnership.productOwnershipType",
      "entityOwnership.productStatus",
      "marketSales.salesOutsideIndia",
      "operationsProduct.teamSize",
      "operationsProduct.monthlyProduction",
      "operationsProduct.productionType",
      "operationsProduct.monthlyRevenue",
      "operationsProduct.productDescription",
      "materialCertifications.localRawMaterial",
      "supportGoals.oneYearGoal",
      "termsAccepted",
    ];

    if (
      requiredFields.includes(name) &&
      (!value || (Array.isArray(value) && value.length === 0))
    ) {
      return "This field is required";
    }

    // Field-specific validations
    if (name === "personalInfo.mobileNo" && value) {
      const mobilePattern = /^[0-9]{10}$/;
      if (!mobilePattern.test(value.trim())) {
        return "Please enter a valid 10-digit mobile number";
      }
    }

    if (name === "personalInfo.email" && value) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value.trim())) {
        return "Please enter a valid email address";
      }
    }

    if (
      (name === "businessInfo.yearStarted" ||
        name === "operationsProduct.teamSize" ||
        name === "operationsProduct.monthlyProduction" ||
        name === "operationsProduct.monthlyRevenue") &&
      value
    ) {
      const numberPattern = /^\d+$/;
      if (!numberPattern.test(value.trim())) {
        return "Please enter a valid number";
      }
    }

    if (name === "termsAccepted" && !value) {
      return "You must agree to the terms and conditions";
    }

    return "";
  };

  // Handle field blur for validation
  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    const error = validateField(name, fieldValue);
    setValidationErrors({
      ...validationErrors,
      [name]: error,
    });
  };

  // Validate all fields in a section
  const validateSection = (sectionNumber) => {
    let errors = {};
    let isValid = true;

    // Define which fields to validate for each section
    const sectionFields = {
      1: [
        "personalInfo.fullName",
        "personalInfo.mobileNo",
        "personalInfo.email",
        "personalInfo.districtVillage",
      ],
      2: [
        "businessInfo.odopProduct",
        "businessInfo.businessName",
        "businessInfo.yearStarted",
      ],
      3: [
        "entityOwnership.entityType",
        "entityOwnership.partOfSHGOrFPO",
        "entityOwnership.gstRegistration",
        "entityOwnership.productOwnershipType",
        "entityOwnership.productStatus",
      ],
      4: ["marketSales.salesOutsideIndia"],
      5: [
        "operationsProduct.teamSize",
        "operationsProduct.monthlyProduction",
        "operationsProduct.productionType",
        "operationsProduct.monthlyRevenue",
        "operationsProduct.productDescription",
      ],
      6: [
        "materialCertifications.localRawMaterial",
        "supportGoals.oneYearGoal",
        "termsAccepted",
      ],
    };

    // Get fields for current section
    const fieldsToValidate = sectionFields[sectionNumber] || [];

    // Validate each field
    fieldsToValidate.forEach((fieldPath) => {
      // Parse the field path to get the value
      const pathParts = fieldPath.split(".");
      let fieldValue;

      if (pathParts.length === 1) {
        fieldValue = formData[pathParts[0]];
      } else if (pathParts.length === 2) {
        fieldValue = formData[pathParts[0]][pathParts[1]];
      } else if (pathParts.length === 3) {
        fieldValue = formData[pathParts[0]][pathParts[1]][pathParts[2]];
      }

      const error = validateField(fieldPath, fieldValue);
      if (error) {
        errors[fieldPath] = error;
        isValid = false;
      }
    });

    setValidationErrors({
      ...validationErrors,
      ...errors,
    });

    return isValid;
  };

  // Handle next section button click
  const handleNextSection = () => {
    // Validate current section before proceeding
    if (validateSection(activeSection)) {
      setActiveSection(activeSection + 1);

      // Scroll to top of form
      const formTop = document.querySelector(".apply-card");
      if (formTop) {
        formTop.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Handle previous section button click
  const handlePrevSection = () => {
    setActiveSection(activeSection - 1);

    // Scroll to top of form
    const formTop = document.querySelector(".apply-card");
    if (formTop) {
      formTop.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all sections
    let allValid = true;
    for (let i = 1; i <= 6; i++) {
      if (!validateSection(i)) {
        allValid = false;
        setActiveSection(i); // Move to the first invalid section
        break;
      }
    }

    if (allValid) {
      setIsSubmitting(true);

      try {
        // Prepare data for submission according to the model schema
        const submitData = {
          personalInfo: formData.personalInfo,
          businessInfo: {
            ...formData.businessInfo,
            yearStarted: Number(formData.businessInfo.yearStarted),
          },
          entityOwnership: formData.entityOwnership,
          marketSales: {
            localMarkets: formData.marketSales.sellLocations.localMarkets
              ? "Yes"
              : "No",
            withinDistrict: formData.marketSales.sellLocations.withinDistrict
              ? "Yes"
              : "No",
            outsideDistrictWithinState: formData.marketSales.sellLocations
              .outsideDistrictWithinState
              ? "Yes"
              : "No",
            outsideState: formData.marketSales.sellLocations.outsideState
              ? "Yes"
              : "No",
            online: formData.marketSales.sellLocations.online ? "Yes" : "No",
            salesOutsideIndia: formData.marketSales.salesOutsideIndia,
          },
          operationsProduct: {
            ...formData.operationsProduct,
            teamSize: Number(formData.operationsProduct.teamSize),
            monthlyProduction: Number(
              formData.operationsProduct.monthlyProduction
            ),
            monthlyRevenue: Number(formData.operationsProduct.monthlyRevenue),
          },
          materialCertifications: formData.materialCertifications,
          supportGoals: formData.supportGoals,
        };

        // Submit to API
        const response = await axios.post(
          "http://localhost:5000/api/applications/submit",
          submitData
        );
        if (response.data.success) {
          // Handle success
          setFormSubmitted(true);
          setSuccessMessage(
            "Your application has been submitted successfully. We will contact you soon."
          );
        } else {
          setFormSubmitted(false);
          setSuccessMessage("Something Went Wrong");
        }
        // Reset form
        setFormData({
          personalInfo: {
            fullName: "",
            mobileNo: "",
            email: "",
            districtVillage: "",
          },
          businessInfo: {
            odopProduct: "",
            businessName: "",
            yearStarted: "",
          },
          entityOwnership: {
            entityType: "",
            partOfSHGOrFPO: "",
            partOfSHGOrFPOSpecify: "",
            gstRegistration: "",
            productOwnershipType: "",
            productStatus: "",
          },
          marketSales: {
            sellLocations: {
              localMarkets: false,
              withinDistrict: false,
              outsideDistrictWithinState: false,
              outsideState: false,
              online: false,
            },
            salesOutsideIndia: "",
          },
          operationsProduct: {
            teamSize: "",
            monthlyProduction: "",
            productionType: "",
            monthlyRevenue: "",
            websiteSocialMedia: "",
            productDescription: "",
          },
          materialCertifications: {
            localRawMaterial: "",
            certifications: [],
            challenges: "",
          },
          supportGoals: {
            supportAreas: [],
            supportAreasOther: "",
            oneYearGoal: "",
          },
          termsAccepted: false,
        });

        // Clear success message after 8 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 8000);
      } catch (error) {
        console.error("Error submitting form:", error);
        setValidationErrors({
          form: "There was an error submitting your application. Please try again later.",
        });
      } finally {
        setIsSubmitting(false);
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

                {/* Form validation error message */}
                {validationErrors.form && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {validationErrors.form}
                  </div>
                )}

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

                    {/* Section 1: Personal Info */}
                    {activeSection === 1 && (
                      <div className="form-section active">
                        <h4 className="section-title">
                          Personal & Contact Information
                        </h4>

                        <div className="row g-4">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                htmlFor="personalInfo.fullName"
                                className="form-label"
                              >
                                Full Name <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                className={`form-control ${
                                  validationErrors["personalInfo.fullName"]
                                    ? "is-invalid"
                                    : ""
                                }`}
                                id="personalInfo.fullName"
                                name="personalInfo.fullName"
                                value={formData.personalInfo.fullName}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                placeholder="Your full name"
                              />
                              {validationErrors["personalInfo.fullName"] && (
                                <div className="invalid-feedback">
                                  {validationErrors["personalInfo.fullName"]}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                htmlFor="personalInfo.mobileNo"
                                className="form-label"
                              >
                                Mobile Number{" "}
                                <span className="required">*</span>
                              </label>
                              <input
                                type="tel"
                                className={`form-control ${
                                  validationErrors["personalInfo.mobileNo"]
                                    ? "is-invalid"
                                    : ""
                                }`}
                                id="personalInfo.mobileNo"
                                name="personalInfo.mobileNo"
                                value={formData.personalInfo.mobileNo}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                placeholder="10-digit mobile number"
                              />
                              {validationErrors["personalInfo.mobileNo"] && (
                                <div className="invalid-feedback">
                                  {validationErrors["personalInfo.mobileNo"]}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                htmlFor="personalInfo.email"
                                className="form-label"
                              >
                                Email Address{" "}
                                <span className="required">*</span>
                              </label>
                              <input
                                type="email"
                                className={`form-control ${
                                  validationErrors["personalInfo.email"]
                                    ? "is-invalid"
                                    : ""
                                }`}
                                id="personalInfo.email"
                                name="personalInfo.email"
                                value={formData.personalInfo.email}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                placeholder="youremail@example.com"
                              />
                              {validationErrors["personalInfo.email"] && (
                                <div className="invalid-feedback">
                                  {validationErrors["personalInfo.email"]}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                htmlFor="personalInfo.districtVillage"
                                className="form-label"
                              >
                                District & Village{" "}
                                <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                className={`form-control ${
                                  validationErrors[
                                    "personalInfo.districtVillage"
                                  ]
                                    ? "is-invalid"
                                    : ""
                                }`}
                                id="personalInfo.districtVillage"
                                name="personalInfo.districtVillage"
                                value={formData.personalInfo.districtVillage}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                placeholder="Enter your district and village"
                              />
                              {validationErrors[
                                "personalInfo.districtVillage"
                              ] && (
                                <div className="invalid-feedback">
                                  {
                                    validationErrors[
                                      "personalInfo.districtVillage"
                                    ]
                                  }
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

                    {/* Section 2: Business Info */}
                    {activeSection === 2 && (
                      <div className="form-section active">
                        <h4 className="section-title">
                          Product & Business Information
                        </h4>

                        <div className="row g-4">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                htmlFor="businessInfo.odopProduct"
                                className="form-label"
                              >
                                ODOP Product <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                className={`form-control ${
                                  validationErrors["businessInfo.odopProduct"]
                                    ? "is-invalid"
                                    : ""
                                }`}
                                id="businessInfo.odopProduct"
                                name="businessInfo.odopProduct"
                                value={formData.businessInfo.odopProduct}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                placeholder="Enter your ODOP product"
                              />
                              {validationErrors["businessInfo.odopProduct"] && (
                                <div className="invalid-feedback">
                                  {validationErrors["businessInfo.odopProduct"]}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                htmlFor="businessInfo.businessName"
                                className="form-label"
                              >
                                Business Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="businessInfo.businessName"
                                name="businessInfo.businessName"
                                value={formData.businessInfo.businessName}
                                onChange={handleInputChange}
                                placeholder="Enter your business name"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                htmlFor="businessInfo.yearStarted"
                                className="form-label"
                              >
                                Year Started
                              </label>
                              <input
                                type="text"
                                className={`form-control ${
                                  validationErrors["businessInfo.yearStarted"]
                                    ? "is-invalid"
                                    : ""
                                }`}
                                id="businessInfo.yearStarted"
                                name="businessInfo.yearStarted"
                                value={formData.businessInfo.yearStarted}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                placeholder="YYYY"
                              />
                              {validationErrors["businessInfo.yearStarted"] && (
                                <div className="invalid-feedback">
                                  {validationErrors["businessInfo.yearStarted"]}
                                </div>
                              )}
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
                              <label className="form-label">
                                Entity Type <span className="required">*</span>
                              </label>
                              <div className="radio-group">
                                {[
                                  "Proprietary",
                                  "Partnership",
                                  "LLP",
                                  "Ltd",
                                  "SHG/FPO/Federation",
                                ].map((type) => (
                                  <div className="form-radio" key={type}>
                                    <input
                                      type="radio"
                                      id={`entityOwnership.entityType-${type}`}
                                      name="entityOwnership.entityType"
                                      value={type}
                                      checked={
                                        formData.entityOwnership.entityType ===
                                        type
                                      }
                                      onChange={handleInputChange}
                                      onBlur={handleBlur}
                                    />
                                    <label
                                      htmlFor={`entityOwnership.entityType-${type}`}
                                    >
                                      {type}
                                    </label>
                                  </div>
                                ))}
                              </div>
                              {validationErrors[
                                "entityOwnership.entityType"
                              ] && (
                                <div className="text-danger mt-1">
                                  {
                                    validationErrors[
                                      "entityOwnership.entityType"
                                    ]
                                  }
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Part of SHG/FPO?{" "}
                                <span className="required">*</span>
                              </label>
                              <div className="radio-group">
                                {["Yes", "No"].map((option) => (
                                  <div className="form-radio" key={option}>
                                    <input
                                      type="radio"
                                      id={`entityOwnership.partOfSHGOrFPO-${option}`}
                                      name="entityOwnership.partOfSHGOrFPO"
                                      value={option}
                                      checked={
                                        formData.entityOwnership
                                          .partOfSHGOrFPO === option
                                      }
                                      onChange={handleInputChange}
                                      onBlur={handleBlur}
                                    />
                                    <label
                                      htmlFor={`entityOwnership.partOfSHGOrFPO-${option}`}
                                    >
                                      {option}
                                    </label>
                                  </div>
                                ))}
                              </div>
                              {validationErrors[
                                "entityOwnership.partOfSHGOrFPO"
                              ] && (
                                <div className="text-danger mt-1">
                                  {
                                    validationErrors[
                                      "entityOwnership.partOfSHGOrFPO"
                                    ]
                                  }
                                </div>
                              )}
                              {formData.entityOwnership.partOfSHGOrFPO ===
                                "Yes" && (
                                <input
                                  type="text"
                                  className="form-control mt-2"
                                  id="entityOwnership.partOfSHGOrFPOSpecify"
                                  name="entityOwnership.partOfSHGOrFPOSpecify"
                                  value={
                                    formData.entityOwnership
                                      .partOfSHGOrFPOSpecify
                                  }
                                  onChange={handleInputChange}
                                  placeholder="Please specify"
                                />
                              )}
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                GST Registered{" "}
                                <span className="required">*</span>
                              </label>
                              <div className="radio-group">
                                {["Yes", "No"].map((option) => (
                                  <div className="form-radio" key={option}>
                                    <input
                                      type="radio"
                                      id={`entityOwnership.gstRegistration-${option}`}
                                      name="entityOwnership.gstRegistration"
                                      value={option}
                                      checked={
                                        formData.entityOwnership
                                          .gstRegistration === option
                                      }
                                      onChange={handleInputChange}
                                      onBlur={handleBlur}
                                    />
                                    <label
                                      htmlFor={`entityOwnership.gstRegistration-${option}`}
                                    >
                                      {option}
                                    </label>
                                  </div>
                                ))}
                              </div>
                              {validationErrors[
                                "entityOwnership.gstRegistration"
                              ] && (
                                <div className="text-danger mt-1">
                                  {
                                    validationErrors[
                                      "entityOwnership.gstRegistration"
                                    ]
                                  }
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Product Ownership Type{" "}
                                <span className="required">*</span>
                              </label>
                              <div className="radio-group">
                                {[
                                  "Individual",
                                  "Family",
                                  "SHG/Collective",
                                  "Company",
                                  "Others",
                                ].map((type) => (
                                  <div className="form-radio" key={type}>
                                    <input
                                      type="radio"
                                      id={`entityOwnership.productOwnershipType-${type}`}
                                      name="entityOwnership.productOwnershipType"
                                      value={type}
                                      checked={
                                        formData.entityOwnership
                                          .productOwnershipType === type
                                      }
                                      onChange={handleInputChange}
                                      onBlur={handleBlur}
                                    />
                                    <label
                                      htmlFor={`entityOwnership.productOwnershipType-${type}`}
                                    >
                                      {type}
                                    </label>
                                  </div>
                                ))}
                              </div>
                              {validationErrors[
                                "entityOwnership.productOwnershipType"
                              ] && (
                                <div className="text-danger mt-1">
                                  {
                                    validationErrors[
                                      "entityOwnership.productOwnershipType"
                                    ]
                                  }
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Production Status{" "}
                                <span className="required">*</span>
                              </label>
                              <div className="radio-group">
                                {["Active", "Seasonal"].map((status) => (
                                  <div className="form-radio" key={status}>
                                    <input
                                      type="radio"
                                      id={`entityOwnership.productStatus-${status}`}
                                      name="entityOwnership.productStatus"
                                      value={status}
                                      checked={
                                        formData.entityOwnership
                                          .productStatus === status
                                      }
                                      onChange={handleInputChange}
                                      onBlur={handleBlur}
                                    />
                                    <label
                                      htmlFor={`entityOwnership.productStatus-${status}`}
                                    >
                                      {status}
                                    </label>
                                  </div>
                                ))}
                              </div>
                              {validationErrors[
                                "entityOwnership.productStatus"
                              ] && (
                                <div className="text-danger mt-1">
                                  {
                                    validationErrors[
                                      "entityOwnership.productStatus"
                                    ]
                                  }
                                </div>
                              )}
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
                                    id: "outsideDistrictWithinState",
                                    label: "Within Madhya Pradesh",
                                  },
                                  {
                                    id: "outsideState",
                                    label: "Outside Madhya Pradesh",
                                  },
                                  {
                                    id: "online",
                                    label: "Online",
                                  },
                                ].map((option) => (
                                  <div className="form-check" key={option.id}>
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id={`marketSales.sellLocations.${option.id}`}
                                      name={`marketSales.sellLocations.${option.id}`}
                                      checked={
                                        formData.marketSales.sellLocations[
                                          option.id
                                        ]
                                      }
                                      onChange={handleInputChange}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={`marketSales.sellLocations.${option.id}`}
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
                                Have you ever sold your products outside India?{" "}
                                <span className="required">*</span>
                              </label>
                              <div className="radio-group">
                                {["Yes", "No"].map((option) => (
                                  <div className="form-radio" key={option}>
                                    <input
                                      type="radio"
                                      id={`marketSales.salesOutsideIndia-${option}`}
                                      name="marketSales.salesOutsideIndia"
                                      value={option}
                                      checked={
                                        formData.marketSales
                                          .salesOutsideIndia === option
                                      }
                                      onChange={handleInputChange}
                                      onBlur={handleBlur}
                                    />
                                    <label
                                      htmlFor={`marketSales.salesOutsideIndia-${option}`}
                                    >
                                      {option}
                                    </label>
                                  </div>
                                ))}
                              </div>
                              {validationErrors[
                                "marketSales.salesOutsideIndia"
                              ] && (
                                <div className="text-danger mt-1">
                                  {
                                    validationErrors[
                                      "marketSales.salesOutsideIndia"
                                    ]
                                  }
                                </div>
                              )}
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
                              <label
                                htmlFor="operationsProduct.teamSize"
                                className="form-label"
                              >
                                Team Size <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                className={`form-control ${
                                  validationErrors["operationsProduct.teamSize"]
                                    ? "is-invalid"
                                    : ""
                                }`}
                                id="operationsProduct.teamSize"
                                name="operationsProduct.teamSize"
                                value={formData.operationsProduct.teamSize}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                placeholder="Enter your team size"
                              />
                              {validationErrors[
                                "operationsProduct.teamSize"
                              ] && (
                                <div className="invalid-feedback">
                                  {
                                    validationErrors[
                                      "operationsProduct.teamSize"
                                    ]
                                  }
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                htmlFor="operationsProduct.monthlyProduction"
                                className="form-label"
                              >
                                Monthly Production{" "}
                                <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                className={`form-control ${
                                  validationErrors[
                                    "operationsProduct.monthlyProduction"
                                  ]
                                    ? "is-invalid"
                                    : ""
                                }`}
                                id="operationsProduct.monthlyProduction"
                                name="operationsProduct.monthlyProduction"
                                value={
                                  formData.operationsProduct.monthlyProduction
                                }
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                placeholder="Enter monthly production quantity"
                              />
                              {validationErrors[
                                "operationsProduct.monthlyProduction"
                              ] && (
                                <div className="invalid-feedback">
                                  {
                                    validationErrors[
                                      "operationsProduct.monthlyProduction"
                                    ]
                                  }
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Production Type{" "}
                                <span className="required">*</span>
                              </label>
                              <div className="radio-group">
                                {["Self", "Outsourced"].map((type) => (
                                  <div className="form-radio" key={type}>
                                    <input
                                      type="radio"
                                      id={`operationsProduct.productionType-${type}`}
                                      name="operationsProduct.productionType"
                                      value={type}
                                      checked={
                                        formData.operationsProduct
                                          .productionType === type
                                      }
                                      onChange={handleInputChange}
                                      onBlur={handleBlur}
                                    />
                                    <label
                                      htmlFor={`operationsProduct.productionType-${type}`}
                                    >
                                      {type}
                                    </label>
                                  </div>
                                ))}
                              </div>
                              {validationErrors[
                                "operationsProduct.productionType"
                              ] && (
                                <div className="text-danger mt-1">
                                  {
                                    validationErrors[
                                      "operationsProduct.productionType"
                                    ]
                                  }
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                htmlFor="operationsProduct.monthlyRevenue"
                                className="form-label"
                              >
                                Monthly Revenue{" "}
                                <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                className={`form-control ${
                                  validationErrors[
                                    "operationsProduct.monthlyRevenue"
                                  ]
                                    ? "is-invalid"
                                    : ""
                                }`}
                                id="operationsProduct.monthlyRevenue"
                                name="operationsProduct.monthlyRevenue"
                                value={
                                  formData.operationsProduct.monthlyRevenue
                                }
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                placeholder="Enter monthly revenue (in ₹)"
                              />
                              {validationErrors[
                                "operationsProduct.monthlyRevenue"
                              ] && (
                                <div className="invalid-feedback">
                                  {
                                    validationErrors[
                                      "operationsProduct.monthlyRevenue"
                                    ]
                                  }
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                htmlFor="operationsProduct.websiteSocialMedia"
                                className="form-label"
                              >
                                Website / Social Media
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="operationsProduct.websiteSocialMedia"
                                name="operationsProduct.websiteSocialMedia"
                                value={
                                  formData.operationsProduct.websiteSocialMedia
                                }
                                onChange={handleInputChange}
                                placeholder="Enter website or social media link"
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group">
                              <label
                                htmlFor="operationsProduct.productDescription"
                                className="form-label"
                              >
                                Product Description{" "}
                                <span className="required">*</span>
                              </label>
                              <textarea
                                className={`form-control ${
                                  validationErrors[
                                    "operationsProduct.productDescription"
                                  ]
                                    ? "is-invalid"
                                    : ""
                                }`}
                                id="operationsProduct.productDescription"
                                name="operationsProduct.productDescription"
                                rows="3"
                                value={
                                  formData.operationsProduct.productDescription
                                }
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                placeholder="Describe your product in detail"
                              ></textarea>
                              {validationErrors[
                                "operationsProduct.productDescription"
                              ] && (
                                <div className="invalid-feedback">
                                  {
                                    validationErrors[
                                      "operationsProduct.productDescription"
                                    ]
                                  }
                                </div>
                              )}
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

                    {/* Section 6: Materials, Certifications & Support Goals */}
                    {activeSection === 6 && (
                      <div className="form-section active">
                        <h4 className="section-title">
                          Materials, Certifications & Support Goals
                        </h4>

                        <div className="row g-4">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Do you use local raw materials?{" "}
                                <span className="required">*</span>
                              </label>
                              <div className="radio-group">
                                {["Yes", "No"].map((option) => (
                                  <div className="form-radio" key={option}>
                                    <input
                                      type="radio"
                                      id={`materialCertifications.localRawMaterial-${option}`}
                                      name="materialCertifications.localRawMaterial"
                                      value={option}
                                      checked={
                                        formData.materialCertifications
                                          .localRawMaterial === option
                                      }
                                      onChange={handleInputChange}
                                      onBlur={handleBlur}
                                    />
                                    <label
                                      htmlFor={`materialCertifications.localRawMaterial-${option}`}
                                    >
                                      {option}
                                    </label>
                                  </div>
                                ))}
                              </div>
                              {validationErrors[
                                "materialCertifications.localRawMaterial"
                              ] && (
                                <div className="text-danger mt-1">
                                  {
                                    validationErrors[
                                      "materialCertifications.localRawMaterial"
                                    ]
                                  }
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                Certifications
                              </label>
                              <div className="checkbox-group">
                                {[
                                  { value: "FSSAI", label: "FSSAI" },
                                  { value: "Others", label: "Others" },
                                ].map((cert) => (
                                  <div className="form-check" key={cert.value}>
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id={`materialCertifications.certifications-${cert.value}`}
                                      name="materialCertifications.certifications"
                                      value={cert.value}
                                      checked={formData.materialCertifications.certifications.includes(
                                        cert.value
                                      )}
                                      onChange={handleInputChange}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={`materialCertifications.certifications-${cert.value}`}
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
                                htmlFor="materialCertifications.challenges"
                                className="form-label"
                              >
                                Challenges Faced
                              </label>
                              <textarea
                                className="form-control"
                                id="materialCertifications.challenges"
                                name="materialCertifications.challenges"
                                rows="3"
                                value={
                                  formData.materialCertifications.challenges
                                }
                                onChange={handleInputChange}
                                placeholder="Describe any challenges you face in your business"
                              ></textarea>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group">
                              <label className="form-label">
                                Areas where you need support
                              </label>
                              <div className="checkbox-group">
                                {[
                                  {
                                    value: "Finance & Funding",
                                    label: "Finance & Funding",
                                  },
                                  {
                                    value: "Product Innovation",
                                    label: "Product Innovation",
                                  },
                                  {
                                    value: "Branding & Packaging",
                                    label: "Branding & Packaging",
                                  },
                                  {
                                    value: "Market Linkages",
                                    label: "Market Linkages",
                                  },
                                  {
                                    value: "Digital Transformation",
                                    label: "Digital Transformation",
                                  },
                                  {
                                    value: "Certification",
                                    label: "Certification",
                                  },
                                  { value: "Others", label: "Others" },
                                ].map((support) => (
                                  <div
                                    className="form-check"
                                    key={support.value}
                                  >
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id={`supportGoals.supportAreas-${support.value.replace(
                                        /\s+/g,
                                        ""
                                      )}`}
                                      name="supportGoals.supportAreas"
                                      value={support.value}
                                      checked={formData.supportGoals.supportAreas.includes(
                                        support.value
                                      )}
                                      onChange={handleInputChange}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={`supportGoals.supportAreas-${support.value.replace(
                                        /\s+/g,
                                        ""
                                      )}`}
                                    >
                                      {support.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                              {formData.supportGoals.supportAreas.includes(
                                "Others"
                              ) && (
                                <input
                                  type="text"
                                  className="form-control mt-2"
                                  id="supportGoals.supportAreasOther"
                                  name="supportGoals.supportAreasOther"
                                  value={
                                    formData.supportGoals.supportAreasOther
                                  }
                                  onChange={handleInputChange}
                                  placeholder="Please specify other support areas"
                                />
                              )}
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group">
                              <label
                                htmlFor="supportGoals.oneYearGoal"
                                className="form-label"
                              >
                                1-Year Goal <span className="required">*</span>
                              </label>
                              <textarea
                                className={`form-control ${
                                  validationErrors["supportGoals.oneYearGoal"]
                                    ? "is-invalid"
                                    : ""
                                }`}
                                id="supportGoals.oneYearGoal"
                                name="supportGoals.oneYearGoal"
                                rows="3"
                                value={formData.supportGoals.oneYearGoal}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                placeholder="Describe your business goals for the next year"
                              ></textarea>
                              {validationErrors["supportGoals.oneYearGoal"] && (
                                <div className="invalid-feedback">
                                  {validationErrors["supportGoals.oneYearGoal"]}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group terms-check-group">
                              <div className="form-check">
                                <input
                                  className={`form-check-input ${
                                    validationErrors["termsAccepted"]
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="checkbox"
                                  id="termsAccepted"
                                  name="termsAccepted"
                                  checked={formData.termsAccepted}
                                  onChange={handleInputChange}
                                  onBlur={handleBlur}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="termsAccepted"
                                >
                                  I agree to the{" "}
                                  <a href="#terms">terms and conditions</a> and
                                  consent to the processing of my personal data{" "}
                                  <span className="required">*</span>
                                </label>
                                {validationErrors["termsAccepted"] && (
                                  <div className="invalid-feedback d-block">
                                    {validationErrors["termsAccepted"]}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-navigation final-buttons">
                          <button
                            type="button"
                            className="btn prev-btn"
                            onClick={handlePrevSection}
                          >
                            <i className="fas fa-arrow-left"></i> Previous
                          </button>
                          <button
                            type="submit"
                            className="btn apply-btn"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <span
                                  className="spinner-border spinner-border-sm me-2"
                                  role="status"
                                  aria-hidden="true"
                                ></span>
                                Submitting...
                              </>
                            ) : (
                              <span>Submit Application</span>
                            )}
                          </button>
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
                      onClick={() => {
                        setFormSubmitted(false);
                        setActiveSection(1);
                      }}
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

      {/* CSS for the form styling */}
      <style jsx>{`
        /* Form progress indicator */
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
          background-color: #4a90e2;
          color: white;
        }

        .progress-step.completed::after {
          background-color: #4a90e2;
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

        /* Form sections */
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

        /* Navigation buttons */
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

        /* Form controls */
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

        /* Radio and checkbox groups */
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

        /* Validation styling */
        .is-invalid {
          border-color: #dc3545;
        }

        .invalid-feedback,
        .text-danger {
          display: block;
          width: 100%;
          margin-top: 0.25rem;
          font-size: 0.875rem;
          color: #dc3545;
        }

        /* Submit button */
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

        .apply-btn:disabled {
          background-color: #6c757d;
          transform: none;
          cursor: not-allowed;
        }

        /* Success message */
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

        /* Info cards */
        .apply-info-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
          margin-top: 2rem;
        }

        .apply-info-card {
          flex: 1;
          min-width: 200px;
          max-width: 300px;
          background-color: #f8f9fa;
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .apply-info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        }

        .info-icon {
          font-size: 2rem;
          color: #4a90e2;
          margin-bottom: 1rem;
        }

        .apply-info-card h4 {
          margin-bottom: 0.5rem;
          color: #333;
        }

        .apply-info-card p {
          color: #666;
          font-weight: 500;
        }

        /* Decorative elements */
        .apply-decoration-dot {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(74, 144, 226, 0.1);
          z-index: -1;
        }

        .apply-decoration-dot-1 {
          width: 200px;
          height: 200px;
          top: 5%;
          left: 5%;
        }

        .apply-decoration-dot-2 {
          width: 300px;
          height: 300px;
          bottom: 10%;
          right: 5%;
        }

        .apply-decoration-line {
          position: absolute;
          width: 100%;
          height: 3px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(74, 144, 226, 0.2),
            transparent
          );
          top: 30%;
          z-index: -1;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .radio-group,
          .checkbox-group {
            flex-direction: column;
            gap: 0.5rem;
          }

          .form-navigation {
            flex-direction: column;
            gap: 1rem;
          }

          .prev-btn,
          .next-btn,
          .apply-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ApplySection;

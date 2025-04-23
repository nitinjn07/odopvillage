const Joi = require("joi");
const Application = require("../models/applicationModel"); // Import the MongoDB model from the previous schema

// Joi validation schema for the application form
const applicationValidationSchema = Joi.object({
  personalInfo: Joi.object({
    fullName: Joi.string().min(3).max(100).required().messages({
      "string.base": "Full name must be a string",
      "string.min": "Full name must be at least 3 characters long",
      "string.max": "Full name cannot exceed 100 characters",
      "any.required": "Full name is required",
    }),
    mobileNo: Joi.string()
      .pattern(/^[0-9]{10}$/)
      .required()
      .messages({
        "string.pattern.base": "Mobile number must be a 10-digit number",
        "any.required": "Mobile number is required",
      }),
    email: Joi.string().email().required().messages({
      "string.email": "Please provide a valid email address",
      "any.required": "Email is required",
    }),
    districtVillage: Joi.string().min(3).max(100).required().messages({
      "string.min": "District & Village must be at least 3 characters long",
      "string.max": "District & Village cannot exceed 100 characters",
      "any.required": "District & Village is required",
    }),
  }).required(),

  businessInfo: Joi.object({
    odopProduct: Joi.string().min(3).max(100).required().messages({
      "string.min": "ODOP product must be at least 3 characters long",
      "string.max": "ODOP product cannot exceed 100 characters",
      "any.required": "ODOP product is required",
    }),
    businessName: Joi.string().min(3).max(100).required().messages({
      "string.min": "Business name must be at least 3 characters long",
      "string.max": "Business name cannot exceed 100 characters",
      "any.required": "Business name is required",
    }),
    yearStarted: Joi.number()
      .integer()
      .min(1900)
      .max(new Date().getFullYear())
      .required()
      .messages({
        "number.base": "Year started must be a number",
        "number.min": "Year started cannot be before 1900",
        "number.max": `Year started cannot be after ${new Date().getFullYear()}`,
        "any.required": "Year started is required",
      }),
  }).required(),

  entityOwnership: Joi.object({
    entityType: Joi.string()
      .valid("Proprietary", "Partnership", "LLP", "Ltd", "SHG/FPO/Federation")
      .required()
      .messages({
        "any.only":
          "Entity type must be one of Proprietary, Partnership, LLP, Ltd, SHG/FPO/Federation",
        "any.required": "Entity type is required",
      }),
    partOfSHGOrFPO: Joi.string().valid("Yes", "No").required().messages({
      "any.only": "Part of SHG/FPO must be Yes or No",
      "any.required": "Part of SHG/FPO is required",
    }),
    gstRegistration: Joi.string().valid("Yes", "No").required().messages({
      "any.only": "GST registration must be Yes or No",
      "any.required": "GST registration is required",
    }),
    productOwnershipType: Joi.string()
      .valid("Individual", "Family", "SHG/Collective", "Company", "Others")
      .required()
      .messages({
        "any.only":
          "Product ownership type must be one of Individual, Family, SHG/Collective, Company, Others",
        "any.required": "Product ownership type is required",
      }),
    productStatus: Joi.string()
      .valid("Active", "Seasonal")
      .required()
      .messages({
        "any.only": "Product status must be Active or Seasonal",
        "any.required": "Product status is required",
      }),
  }).required(),

  marketSales: Joi.object({
    localMarkets: Joi.string().allow("").optional(),
    withinDistrict: Joi.string().allow("").optional(),
    outsideDistrictWithinState: Joi.string().allow("").optional(),
    outsideState: Joi.string().allow("").optional(),
    online: Joi.string().allow("").optional(),
    salesOutsideIndia: Joi.string().valid("Yes", "No").required().messages({
      "any.only": "Sales outside India must be Yes or No",
      "any.required": "Sales outside India is required",
    }),
  }).required(),

  operationsProduct: Joi.object({
    teamSize: Joi.number().integer().min(1).required().messages({
      "number.base": "Team size must be a number",
      "number.min": "Team size must be at least 1",
      "any.required": "Team size is required",
    }),
    monthlyProduction: Joi.number().integer().min(0).required().messages({
      "number.base": "Monthly production must be a number",
      "number.min": "Monthly production cannot be negative",
      "any.required": "Monthly production is required",
    }),
    productionType: Joi.string()
      .valid("Self", "Outsourced")
      .required()
      .messages({
        "any.only": "Production type must be Self or Outsourced",
        "any.required": "Production type is required",
      }),
    monthlyRevenue: Joi.number().integer().min(0).required().messages({
      "number.base": "Monthly revenue must be a number",
      "number.min": "Monthly revenue cannot be negative",
      "any.required": "Monthly revenue is required",
    }),
    websiteSocialMedia: Joi.string().allow("").optional(),
    productDescription: Joi.string().min(10).max(500).required().messages({
      "string.min": "Product description must be at least 10 characters long",
      "string.max": "Product description cannot exceed 500 characters",
      "any.required": "Product description is required",
    }),
  }).required(),

  materialCertifications: Joi.object({
    localRawMaterial: Joi.string().valid("Yes", "No").required().messages({
      "any.only": "Local raw material must be Yes or No",
      "any.required": "Local raw material is required",
    }),
    certifications: Joi.array()
      .items(Joi.string().valid("FSSAI", "Others"))
      .default([])
      .optional(),
    challenges: Joi.string().allow("").optional(),
  }).required(),

  supportGoals: Joi.object({
    supportAreas: Joi.array()
      .items(
        Joi.string().valid(
          "Finance & Funding",
          "Product Innovation",
          "Branding & Packaging",
          "Market Linkages",
          "Digital Transformation",
          "Certification",
          "Others"
        )
      )
      .default([])
      .optional(),
    oneYearGoal: Joi.string().min(10).max(500).required().messages({
      "string.min": "One-year goal must be at least 10 characters long",
      "string.max": "One-year goal cannot exceed 500 characters",
      "any.required": "One-year goal is required",
    }),
  }).required(),
});

// Controller to handle form submission with validation
const submitApplication = async (req, res) => {
  try {
    // Validate the request body using Joi
    const { error, value } = applicationValidationSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      // Format validation errors for response
      const errors = error.details.map((err) => ({
        field: err.context.label,
        message: err.message,
      }));
      return res.status(400).json({ success: false, errors });
    }

    // Create a new application document
    const application = new Application(value);

    // Save to MongoDB
    await application.save();

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (err) {
    console.error("Error submitting application:", err);
    return res.status(500).json({
      success: false,
      message: "Server error while submitting application",
    });
  }
};

// Export the controller
module.exports = { submitApplication };

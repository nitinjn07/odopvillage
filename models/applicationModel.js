const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  // Personal & Contact Information
  personalInfo: {
    fullName: { type: String, required: true },
    mobileNo: { type: String, required: true },
    email: { type: String, required: true },
    districtVillage: { type: String, required: true },
  },

  // Product & Business Information
  businessInfo: {
    odopProduct: { type: String, required: true },
    businessName: { type: String, required: true },
    yearStarted: { type: Number, required: true },
  },

  // Entity & Ownership
  entityOwnership: {
    entityType: {
      type: String,
      enum: ["Proprietary", "Partnership", "LLP", "Ltd", "SHG/FPO/Federation"],
      required: true,
    },
    partOfSHGOrFPO: {
      type: String,
      enum: ["Yes", "No"],
      required: true,
    },
    gstRegistration: {
      type: String,
      enum: ["Yes", "No"],
      required: true,
    },
    productOwnershipType: {
      type: String,
      enum: ["Individual", "Family", "SHG/Collective", "Company", "Others"],
      required: true,
    },
    productStatus: {
      type: String,
      enum: ["Active", "Seasonal"],
      required: true,
    },
  },

  // Market & Sales Information
  marketSales: {
    localMarkets: { type: String },
    withinDistrict: { type: String },
    outsideDistrictWithinState: { type: String },
    outsideState: { type: String },
    online: { type: String },
    salesOutsideIndia: {
      type: String,
      enum: ["Yes", "No"],
      required: true,
    },
  },

  // Operations & Product Details
  operationsProduct: {
    teamSize: { type: Number, required: true },
    monthlyProduction: { type: Number, required: true },
    productionType: {
      type: String,
      enum: ["Self", "Outsourced"],
      required: true,
    },
    monthlyRevenue: { type: Number, required: true },
    websiteSocialMedia: { type: String },
    productDescription: { type: String, required: true },
  },

  // Material, Certifications & Challenges
  materialCertifications: {
    localRawMaterial: {
      type: String,
      enum: ["Yes", "No"],
      required: true,
    },
    certifications: {
      type: [String],
      enum: ["FSSAI", "Others"],
      default: [],
    },
    challenges: { type: String },
  },

  // Support & Goals
  supportGoals: {
    supportAreas: {
      type: [String],
      enum: [
        "Finance & Funding",
        "Product Innovation",
        "Branding & Packaging",
        "Market Linkages",
        "Digital Transformation",
        "Certification",
        "Others",
      ],
      default: [],
    },
    oneYearGoal: { type: String, required: true },
  },

  // Metadata
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Pre-save hook to update the updatedAt field
applicationSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Application = mongoose.model("ApplicationFrom", applicationSchema);

module.exports = Application;

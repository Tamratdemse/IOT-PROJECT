const mongoose = require("mongoose");

// Define the schema for the field
const fieldSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Ensure the field is required
    },
    crop: {
      type: String,
      required: true, // Ensure the field is required
    },
    area: {
      type: String,
      required: true, // Ensure the field is required
    },
    status: {
      type: String,
      required: true, // Ensure the field is required
    },
    location: {
      type: String,
      required: true, // Ensure the field is required (path to the photo)
    },
    photo: {
      type: String,
      required: true, // Ensure the field is required (path to the photo)
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create a model using the schema
const Field = mongoose.model("Field", fieldSchema);

module.exports = Field;

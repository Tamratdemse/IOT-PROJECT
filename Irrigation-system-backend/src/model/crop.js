const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  temperature: { type: String, required: true },
  waterLevel: { type: String, required: true },
  soilPH: { type: String, required: true },
  light: { type: String, required: true },
  fieldIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Field" }], // Relation to fields
});

module.exports = mongoose.model("Crop", cropSchema);

const express = require("express");
const mongoose = require("mongoose");
const Crop = require("../model/crop");

const router = express.Router();

// Route to fetch crop details by field ID
router.get("/:id", async (req, res) => {
  try {
    console.log("Fetching crop details using field ID");

    const fieldId = req.params.id;

    // Validate if the fieldId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(fieldId)) {
      return res.status(400).json({ message: "Invalid Field ID" });
    }

    // Fetch crop details based on the fieldId in fieldIds array using aggregation
    const cropDetails = await Crop.aggregate([
      {
        $match: { fieldIds: new mongoose.Types.ObjectId(fieldId) }, // Match any crop with the given fieldId in the fieldIds array
      },
      {
        $lookup: {
          from: "fields", // Related collection
          localField: "fieldIds", // Field in the Crop schema (array of field IDs)
          foreignField: "_id", // Field in the Field schema
          as: "fields", // Resulting array of fields
        },
      },
    ]);

    // Check if cropDetails are found
    if (!cropDetails.length) {
      return res
        .status(404)
        .json({ message: "Crop not found for the given field ID" });
    }

    // Respond with the crop details along with the related fields
    res.json(cropDetails[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

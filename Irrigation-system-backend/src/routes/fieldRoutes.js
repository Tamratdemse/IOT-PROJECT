const multer = require("multer");
const express = require("express");
const path = require("path");
const Field = require("../model/Field"); // Mongoose model for Field
const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Create a new field
const createField = async (fieldData) => {
  try {
    const field = new Field(fieldData);
    await field.save();
    console.log("Field successfully saved:", field);
    return field;
  } catch (error) {
    console.error("Error saving field to the database:", error.message);
    throw error;
  }
};

// POST /api/fields - Create a field
router.post("/", upload.single("photo"), async (req, res) => {
  try {
    console.log("Incoming data:", req.body);
    console.log("Uploaded file:", req.file);

    const fieldData = {
      name: req.body.name,
      crop: req.body.crop,
      area: req.body.area,
      location: req.body.location,
      status: req.body.status,
      photo: req.file ? `/uploads/${req.file.filename}` : null,
    };

    // Validate required fields
    if (
      !fieldData.name ||
      !fieldData.crop ||
      !fieldData.area ||
      !fieldData.status ||
      !fieldData.photo
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const field = await createField(fieldData);
    res.status(201).json(field);
  } catch (err) {
    console.error("Error creating field:", err.message);
    res.status(500).json({ error: "Failed to create field" });
  }
});

// GET /api/fields - Get all fields
router.get("/", async (req, res) => {
  try {
    const fields = await Field.find();
    res.status(200).json(fields);
  } catch (err) {
    console.error("Error fetching fields:", err.message);
    res.status(500).json({ error: "Failed to fetch fields" });
  }
});

// GET /api/fields/:id - Get a field by ID
router.get("/:id", async (req, res) => {
  try {
    const field = await Field.findById(req.params.id);
    if (!field) return res.status(404).json({ error: "Field not found" });
    res.status(200).json(field);
  } catch (err) {
    console.error("Error fetching field:", err.message);
    res.status(500).json({ error: "Failed to fetch field" });
  }
});

// DELETE /api/fields/:id - Delete a field
router.delete("/:id", async (req, res) => {
  try {
    const deletedField = await Field.findByIdAndDelete(req.params.id);
    if (!deletedField)
      return res.status(404).json({ error: "Field not found" });
    res.status(200).json({ message: "Field deleted" });
  } catch (err) {
    console.error("Error deleting field:", err.message);
    res.status(500).json({ error: "Failed to delete field" });
  }
});

module.exports = router;

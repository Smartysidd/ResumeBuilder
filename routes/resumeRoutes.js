// backend/routes/resumeRoutes.js
const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

// Create a new resume
router.post('/create', async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    await newResume.save();
    res.status(201).json(newResume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all resumes (for testing)
router.get('/', async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

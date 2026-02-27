const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

// Get all resumes
router.get('/', async (req, res) => {
    try {
        const resumes = await Resume.find();
        res.json(resumes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

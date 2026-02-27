const express = require('express');
const router = express.Router();

// Mock route for resume data
router.get('/', (req, res) => {
    res.json({ message: 'Resume routes coming soon!' });
});

module.exports = router;

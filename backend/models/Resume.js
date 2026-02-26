const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    content: {
        type: Object,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Resume', resumeSchema);

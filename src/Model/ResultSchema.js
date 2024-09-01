

const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    title: {
        type: String,  
        required: true,
    },
    ObtainScore: {
        type: Number,  // Using Number for score values
        required: true,
    },
    TotalScore: {
        type: Number,  // Using Number for score values
        required: true,
    },

    studentId: {
        type: String, // Assuming studentId is a MongoDB ObjectId
        required: true,
     
    }
});

const StudentResult = mongoose.model('Result', StudentSchema);

module.exports = StudentResult;

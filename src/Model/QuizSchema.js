const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  answer: {
    type: String,  
    required: true
  },
  CardId:{   
    type: String,
    required: true
  }
});

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports= Quiz
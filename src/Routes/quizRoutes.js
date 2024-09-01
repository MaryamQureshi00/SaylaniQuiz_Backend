const express = require('express');
const router = express.Router();
const { GetStudentResult,StduentResults } = require('../Control/quizController');

// Define the POST route for student results
router.post('/studentResult', GetStudentResult);
router.get('/studentShowresult', StduentResults);



module.exports = router;

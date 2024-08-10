const express = require('express');
var cors = require('cors')      // yah install and connect kia hay 
const mongoose = require('mongoose');

const app = express();
const port = 8000;
app.use(cors())       
const getRoutes = require('./src/Routes/routes');  

let connectToDatabase = require('./dbConnect');
// const User = require('./src/Routes/MyRoute');

app.use(express.json()); 

app.use('/',getRoutes);  
// app.use('/Work/',User)

// Import routes
const quizRoutes = require('./src/Routes/quizRoutes');

// Use routes
app.use('/api/quiz', quizRoutes);


// Import routes
const announcementRoutes = require('./src/Routes/MyRoute');

// Use routes
app.use('/api/announcement', announcementRoutes);


mongoose.set("strictQuery", false); 
connectToDatabase()   
app.listen(port, () => { 
    console.log(`App listening on port ${port}`);
});

module.exports = app;
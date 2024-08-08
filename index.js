const express = require('express');
var cors = require('cors')      // yah install and connect kia hay 
const mongoose = require('mongoose');

const app = express();
const port = 8000;
app.use(cors())       
const getRoutes = require('./src/Routes/routes');  

let connectToDatabase = require('./dbConnect');
const User = require('./src/Routes/routes');

app.use(express.json()); 

app.use('/',getRoutes);  


mongoose.set("strictQuery", false); 
connectToDatabase()   
app.listen(port, () => { 
    console.log(`App listening on port ${port}`);
});

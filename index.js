const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const routes = require('./routes/routes');
const mongoString = process.env.DATABASE_URL

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3001,() =>{
    console.log(`server started ${3001}`);
})

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error',(error) =>{
    console.log(`it is giving error${error}`);
    
})
database.once('connected',() =>{
    console.log(`database connected`);
    
})
app.use('/api',routes)
app.use('/',(req,res) =>{
    res.send("API is working")
})
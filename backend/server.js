//express ka use connectivity krane k liy krte hain
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

require('dotenv').config();
const app = express();

//import routes

//connect mongodb for database connectivity
mongoose.connect("mongodb://localhost:27017/merntracker",{
    useNewUrlParser : true,
    useUnifiedTopology : true
    
})
.then(()=>{
    console.log('MongoDB database establised successfully...');
})
.catch((err) => console.log(err));


app.use(cors());//in this module use for data sharing
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cookieParser());
//is method ka use hm backend s data ko frontend pr lane k liy krte hain
app.use(express.json());

//my routes

//create port
const port = process.env.PORT || 5000
app.listen(port,()=>console.log(`Server is running on port ${port}`));

const express=require('express');
// const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const rateLimit = require('express-rate-limit');
const dotenv=require('dotenv').config();

connectDb();
const app=express();

//Rate Limiting
const limiter=rateLimit({
    windowMs:10*60*1000, //10 Minutes
    max:50 // 50 requests in 10 minutes
});
app.use(limiter);
app.set('trust proxy',1);


app.use(express.json());
app.use('/api/contacts',require('./routes/contactRoutes'));
app.use('/api/users',require('./routes/userRoutes'));
// app.use(errorHandler);

const port=process.env.PORT||3000
app.listen(port,()=>{
    console.log(`Listening Server on port ${port}`);
});
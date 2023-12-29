const express=require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv=require('dotenv').config();

connectDb();
const app=express();

app.use(express.json());
app.use('/api/contacts',require('./routes/contactRoutes'));
app.use('/api/user',require('./routes/userRoutes'));
app.use(errorHandler);

const port=process.env.PORT||3000
app.listen(port,()=>{
    console.log(`Listening Server on port ${port}`);
});
import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import userRouter from './routes/User.route.js';
import doctorRouter from './routes/Doctor.route.js';
dotenv.config();
const app= express();
const PORT=process.env.PORT||3000;

// Api call
app.use('/api/doctors',doctorRouter);
app.use('/api/users',userRouter);
// Db connection
connectDb();
app.listen(PORT,()=>{
    console.log("server is running ",PORT)
})

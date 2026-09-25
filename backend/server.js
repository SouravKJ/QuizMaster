const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


dotenv.config();
console.log(
    "JWT Secret Loaded",
    process.env.JWT_SECRET ? "Yes":"No"

);

const connectDB = require("./config/db");
const authRoutes=require("./routes/authRoutes");
const questionRoutes=require("./routes/questionRoutes");
const performanceRoutes=require("./routes/performanceRoutes")

const port = process.env.PORT || 5000;

const app=express();

app.use(cors());
app.use(express.json());


connectDB();

app.use('/api/auth',authRoutes);
app.use('/api/questions',questionRoutes);
app.use('/api/performance',performanceRoutes);

app.get('/',(req,res)=>{
    res.json({
        message:"Quiz Master backend running"
    });
    console.log(res.message);
});

app.listen(port,()=>{
    console.log("App is listening...."+port);
})

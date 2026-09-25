const mongoose= require("mongoose");

const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully!!");
    }catch(err){
        console.log("MongoDB connection Failed:"+err.message);
        process.exit();
    }
};

module.exports=connectDB;
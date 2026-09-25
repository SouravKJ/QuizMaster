const express=require("express");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const User=require("../models/User");

const router=express.Router();

router.post("/register",async(req,res)=>{
    try{
        const {name,email,password}=req.body;
       
        if(!name || !email || !password){
            return res.status(400).json({
                message:"please provide name,email and password",
            });
        }
        const existingUser=await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                message:"user already exist",
            });
        }

        const hashedPassword=await bcrypt.hash(password,10);

        const user=await User.create({
            name,
            email,
            password:hashedPassword
        });
        res.status(201).json({
            message:"User registered succesfully.",
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        });
    }catch(err){
        res.status(500).json({
            message:"Registration failed ",
            error:err.message,
        });
    }
});

router.post("/login",(async (req,res) => {
    try{
        const {email,password}=req.body;

        if(!email|| !password){
            return res.status(400).json({
                message:"please provide email and password."
            });
        }

        const user=await User.findOne({email});
        
        if(!user){
            return res.status(401).json({
                message:"invalid email or password"
            });
        }

        const isPasswordCorrect=await bcrypt.compare(
            password,
            user.password
        );

        if(!isPasswordCorrect){
            return res.status(401).json({
                message:"invalid email or password"
            });
        }

        const token=jwt.sign({
            userid:user._id,
        },
        process.env.JWT_SECRET
        );
        res.status(200).json({
            message:"login sucessfully...",
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            },
        });
    }catch(err){
        res.status(500).json({
            message:"login failed",
            error:err.message
        });
    }
}));

module.exports=router;
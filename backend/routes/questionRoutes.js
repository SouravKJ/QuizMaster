const express=require('express');
const Question=require("../models/Question")
const QuizAttempt=require("../models/QuizAttempt")

const router=express.Router();

router.get("/full",async(req,res)=>{
    try{
        const questions=await Question.aggregate([
            {$sample:{size:10}}
        ]);

        res.status(200).json({
            success:true,
            count:questions.length,
            requestTime:new Date(),
            questions,
        });
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Failed to get Questions",
            error:err.message
        });
    }
});

router.get("/topic/:topicName",async(req,res)=>{
    try{
        const {topicName}=req.params;
        
        const questions=await Question.aggregate([
            {$match:{topic:topicName}},
            {$sample:{size:10}}
        ]);

        if(questions.length===0){
            return res.status(404).json({
                success:false,
                message:"No questions found for this topic"
            });
        }

        res.status(200).json({
            success:true,
            topic:topicName,
            count:questions.length,
            requestTime:new Date(),
            questions,
        });
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Failed to get topic questions",
            error:err.message
        });
    }
});

router.get("/topics",async(req,res)=>{
    try{
        const topics=await Question.distinct("topic");
        
        res.status(200).json({
            success:true,
            topics,
        });
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Failed to get topics",
            error:err.message
        });
    }
});

router.post("/attempt",async(req,res)=>{
    try{
        const {
            userId,
            quizType,
            questions,
            score,
            totalQuestions,
            percentage,
        }=req.body;
        if(!userId || !questions || score===undefined){
            return res.status(400).json({
                success:false,
                message:"Missing required quiz data",
            });
        }

        const attempt=await QuizAttempt.create({
            user:userId,
            quizType:quizType || "full",
            questions,
            score,
            totalQuestions:totalQuestions|| questions.length,
            percentage
        });

        res.status(201).json({
            success:true,
            message:"Quiz attempt saved successfully.",
            attemptId:attempt._id,
        });

    }catch(err){
            console.error("Save attempt error:",err);
            res.status(500).json({
                success:false,
                message:"failed to save Quiz attempt",
                error:err.message
            });
    }
});

module.exports=router;
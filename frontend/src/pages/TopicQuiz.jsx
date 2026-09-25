import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TopicQuiz = () => {
    const [questions,setQuestions]=useState([])
    const [currentQuestion,setCurrentQuestion]=useState(0)
    const [selectedAnswer,setSelectedAnswer]=useState("")
    const [answer,setAnswer]=useState({})
    const [loading,setLoading]=useState(true)
    const [topic,setTopic]=useState("")
    const navigate=useNavigate();
    const location=useLocation();
    
    useEffect(()=>{
        const selectedTopic=location.state?.topic;
        if(selectedTopic){
            setTopic(selectedTopic);
            fetch(`http://localhost:8080/api/questions/topic/${selectedTopic}`)
            .then((response)=>response.json())
            .then((data)=>{
                if(data.success){
                    setQuestions(data.questions);
                    setLoading(false);
                }else{
                    console.error("Error:",data.message);
                    setLoading(false);
                }
            }).catch((err)=>{
                console.error("Error:",err);
                setLoading(false);
            });
        }else{
            navigate("/topic-selection");
        }
    },[location.state]);

    if(loading){
        return (
            <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#f8fafc" }}>
                <Navbar />
                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h2>Loading quiz....</h2>
                </div>
                <Footer />
            </div>
        )
    }

    if(questions.length===0){
        return (
            <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#f8fafc" }}>
                <Navbar />
                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
                    <div style={{ textAlign: "center" }}>
                        <h2 style={{ color: "#1e293b", marginBottom: "1rem" }}>No questions found for this topic.</h2>
                        <button 
                            onClick={()=>navigate("/topic-selection")}
                            style={{
                                padding: "1rem 2rem",
                                backgroundColor: "#6366f1",
                                color: "white",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontSize: "1rem",
                                fontWeight: "bold"
                            }}
                        >
                            Back to Topics
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    const question=questions[currentQuestion];
    
    const handleNext= async ()=>{
        if(!selectedAnswer){
            alert("please select an answer.");
            return;
        }
        const updatedAnswer={
            ...answer,
            [question._id]:selectedAnswer,
        };

        setAnswer(updatedAnswer);
        setSelectedAnswer("");

        if(currentQuestion<questions.length-1){
            setCurrentQuestion(currentQuestion+1);
        }else{
            let score=0;
           const attemptQuestions=questions.map((q)=>{
            const selectedAnswer=updatedAnswer[q._id];
            const isCorrect=selectedAnswer===q.correctAnswer;
                if(isCorrect){
                    score++;
                }
            
            return {
                question:q._id,
                selected:selectedAnswer,
                correctAnswer:q.correctAnswer,
                isCorrect:isCorrect,
            };
        });

        const percentage=Math.round((score/questions.length)*100);

        const saveUser=localStorage.getItem("user");

        if(!saveUser){
            alert("User not found. please login again.");
            return;
        }

        const user=JSON.parse(saveUser);

        try{
            const response=await fetch("http://localhost:8080/api/questions/attempt",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    userId:user.id,
                    quizType:"topic",
                    questions:attemptQuestions,
                    score:score,
                    totalQuestions:questions.length,
                    percentage:percentage,
                }),
            });

            const data=await response.json();

            console.log("attempt save response.",data);

            if(!response.ok){
                alert("Quiz completed, but result could not be saved..");
            }

            navigate("/result",{
                state:{
                    score:score,
                    total:questions.length,
                    attemptId:data.attemptId,
                    quizType:"topic"
                }
            });
        }catch(err){
            console.error("save attempt error:",err.message);
            alert("Quiz completed, but server colud not save the result.")
        }

            
        }
    };
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#f8fafc" }}>
      <Navbar />
      
      <div style={{
        flex: 1,
        padding: "3rem 2rem",
        maxWidth: "800px",
        margin: "0 auto",
        width: "100%"
      }}>
        <div style={{ marginBottom: "2rem" }}>
          <h1 style={{ color: "#1e293b", marginBottom: "0.5rem" }}>{topic} Quiz</h1>
          <h3 style={{ color: "#64748b" }}>Question: {currentQuestion+1}/{questions.length}</h3>
        </div>

        <div style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          marginBottom: "2rem"
        }}>
          <h2 style={{ color: "#1e293b", marginBottom: "1.5rem" }}>{question.questionText}</h2>

          <div>
            {question.options.map((option,index)=>(
                <button 
                    key={index} 
                    onClick={()=>setSelectedAnswer(option)}
                    style={
                        {
                            display:"block",
                            width: "100%",
                            margin:"10px 0",
                            padding:"15px",
                            background:selectedAnswer===option ? "#6366f1":"white",
                            color:selectedAnswer===option ? "white":"#1e293b",
                            border: selectedAnswer===option ? "2px solid #6366f1" : "2px solid #e2e8f0",
                            borderRadius: "8px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            textAlign: "left",
                            fontSize: "1rem"
                        }
                    }
                    onMouseEnter={(e) => {
                        if(selectedAnswer !== option) {
                            e.target.style.backgroundColor = "#f8fafc";
                            e.target.style.borderColor = "#6366f1";
                        }
                    }}
                    onMouseLeave={(e) => {
                        if(selectedAnswer !== option) {
                            e.target.style.backgroundColor = "white";
                            e.target.style.borderColor = "#e2e8f0";
                        }
                    }}
                >{option}</button>
            ))}
          </div>
        </div>

        <button 
            onClick={handleNext}
            style={{
                padding: "1rem 2rem",
                backgroundColor: "#6366f1",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#4f46e5";
            }}
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#6366f1";
            }}
        >
            {currentQuestion===questions.length-1 ? "Submit Quiz":"Next"}
        </button>
      </div>
      
      <Footer />
    </div>
  )
}

export default TopicQuiz
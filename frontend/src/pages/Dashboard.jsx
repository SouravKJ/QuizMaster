import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
    const [user,setUser]=useState(null);
    const navigate=useNavigate();
    useEffect(()=>{
        const savedUser=localStorage.getItem("user");

        if(savedUser){
            setUser(JSON.parse(savedUser));
        }
    },[]);

    const logOut=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate('/login');
    };

    const getButtonStyle = () => ({
        padding: "1rem 2rem",
        backgroundColor: "#6366f1",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.3s ease",
        minWidth: "200px"
    });

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#f8fafc" }}>
      <Navbar />
      
      <div style={{
        flex: 1,
        padding: "3rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%"
      }}>
        <div style={{ marginBottom: "2rem" }}>
          <h1 style={{ color: "#1e293b", marginBottom: "0.5rem" }}>
            Quiz Master Dashboard
          </h1>
          {user && (
            <h2 style={{ color: "#64748b", fontWeight: "normal" }}>
              Welcome, {user.name} 👋
            </h2>
          )}
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2rem"
        }}>
          <div 
            onClick={()=>navigate("/full-quiz")}
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "12px",
              border: "2px solid #6366f1",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textAlign: "center"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(99, 102, 241, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📝</div>
            <h3 style={{ color: "#1e293b", marginBottom: "0.5rem" }}>Full Quiz</h3>
            <p style={{ color: "#64748b", fontSize: "0.875rem" }}>
              Test your knowledge across all topics
            </p>
          </div>

          <div 
            onClick={()=>navigate("/topic-selection")}
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "12px",
              border: "2px solid #10b981",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textAlign: "center"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(16, 185, 129, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎯</div>
            <h3 style={{ color: "#1e293b", marginBottom: "0.5rem" }}>Topic-wise Quiz</h3>
            <p style={{ color: "#64748b", fontSize: "0.875rem" }}>
              Focus on specific topics
            </p>
          </div>
        </div>

        <div style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "12px",
          border: "1px solid #e2e8f0"
        }}>
          <h2 style={{ color: "#1e293b", marginBottom: "1rem" }}>
            📚 Recommended for You
          </h2>
          <p style={{ color: "#64748b", lineHeight: "1.6" }}>
            Complete a quiz to see your performance and get personalized recommendations based on your weak areas.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Dashboard

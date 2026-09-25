import { useLocation, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, total, attemptId, quizType } = location.state || {};

  if (score === undefined || total === undefined) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#f8fafc" }}>
        <Navbar />
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "#1e293b", marginBottom: "1rem" }}>No result found.</h2>
            <button 
              onClick={() => navigate("/dashboard")}
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
              Back to Dashboard
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const percentage = Math.round((score / total) * 100);

  const getScoreColor = () => {
    if (percentage >= 80) return "#10b981";
    if (percentage >= 50) return "#f59e0b";
    return "#ef4444";
  };

  const getScoreMessage = () => {
    if (percentage >= 80) return "Excellent! 🎉";
    if (percentage >= 50) return "Good job! 👍";
    return "Keep practicing! 💪";
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#f8fafc" }}>
      <Navbar />
      
      <div style={{
        flex: 1,
        padding: "3rem 2rem",
        maxWidth: "600px",
        margin: "0 auto",
        width: "100%"
      }}>
        <div style={{
          backgroundColor: "white",
          padding: "3rem",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          textAlign: "center"
        }}>
          <h1 style={{ color: "#1e293b", marginBottom: "2rem" }}>Quiz Result</h1>

          <div style={{
            backgroundColor: getScoreColor(),
            color: "white",
            padding: "2rem",
            borderRadius: "12px",
            marginBottom: "2rem"
          }}>
            <h2 style={{ fontSize: "3rem", margin: "0 0 0.5rem 0" }}>{percentage}%</h2>
            <p style={{ fontSize: "1.25rem", margin: "0" }}>{getScoreMessage()}</p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ color: "#1e293b", marginBottom: "1rem" }}>Your Score</h3>
            <p style={{ fontSize: "2rem", fontWeight: "bold", color: getScoreColor() }}>
              {score}/{total}
            </p>
          </div>

          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "1rem",
            alignItems: "center"
          }}>
            <button
              onClick={() =>
                navigate("/performance", {
                  state: {
                    attemptId: attemptId,
                    quizType: quizType || "full",
                  },
                })
              }
              style={{
                padding: "1rem 2rem",
                backgroundColor: "#6366f1",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "bold",
                width: "100%",
                maxWidth: "300px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#4f46e5";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#6366f1";
              }}
            >
              View Performance
            </button>

            <button
              onClick={() => navigate("/full-quiz")}
              style={{
                padding: "1rem 2rem",
                backgroundColor: "#10b981",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "bold",
                width: "100%",
                maxWidth: "300px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#059669";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#10b981";
              }}
            >
              Take Full Quiz Again
            </button>

            <button
              onClick={() => navigate("/topic-selection")}
              style={{
                padding: "1rem 2rem",
                backgroundColor: "#f59e0b",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "bold",
                width: "100%",
                maxWidth: "300px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#d97706";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#f59e0b";
              }}
            >
              Topic-wise Quiz
            </button>

            <button
              onClick={() => navigate("/dashboard")}
              style={{
                padding: "1rem 2rem",
                backgroundColor: "#64748b",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "bold",
                width: "100%",
                maxWidth: "300px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#475569";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#64748b";
              }}
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Result;
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Performance() {
  const [performance, setPerformance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubtopicAnalysis, setIsSubtopicAnalysis] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const attemptId = location.state?.attemptId;
  const quizType = location.state?.quizType;
   const API_URL=import.meta.env.VITE_API_URL;
  useEffect(() => {
    if (!attemptId) {
      setLoading(false);
      return;
    }

    // Use subtopic analysis for topic-wise quizzes
    const endpoint = quizType === "topic" 
      ? `${API_URL}/api/performance/subtopic/${attemptId}`
      : `${API_URL}/api/performance/attempt/${attemptId}`;

    setIsSubtopicAnalysis(quizType === "topic");

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log("Current attempt performance:", data);

        if (data.success) {
          setPerformance(data.performance);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("Performance error:", error);
        setLoading(false);
      });
  }, [attemptId, quizType]);

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#f8fafc" }}>
        <Navbar />
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <h2>Loading performance...</h2>
        </div>
        <Footer />
      </div>
    );
  }

  if (!attemptId) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#f8fafc" }}>
        <Navbar />
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "#1e293b", marginBottom: "1rem" }}>No quiz attempt selected.</h2>
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
              Dashboard
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const weakTopics = performance.filter(
    (item) => item.level === "Weak"
  );

  const moderateTopics = performance.filter(
    (item) => item.level === "Moderate"
  );

  const strongTopics = performance.filter(
    (item) => item.level === "Strong"
  );

  const getTopicStyle = (level) => {
    switch(level) {
      case "Weak":
        return {
          backgroundColor: "#fee2e2",
          border: "2px solid #ef4444",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "10px"
        };
      case "Moderate":
        return {
          backgroundColor: "#fef3c7",
          border: "2px solid #f59e0b",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "10px"
        };
      case "Strong":
        return {
          backgroundColor: "#d1fae5",
          border: "2px solid #10b981",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "10px"
        };
      default:
        return {
          border: "1px solid #ccc",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "10px"
        };
    }
  };

  const getLevelEmoji = (level) => {
    switch(level) {
      case "Weak": return "🔴";
      case "Moderate": return "🟡";
      case "Strong": return "🟢";
      default: return "⚪";
    }
  };

  const getItemName = (item) => {
    return isSubtopicAnalysis 
      ? `${item.topic} - ${item.subtopic}`
      : item.topic;
  };

  const getSectionTitle = () => {
    return isSubtopicAnalysis
      ? "Subtopics"
      : "Topics";
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
        <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#1e293b" }}>
          {isSubtopicAnalysis ? "Subtopic Performance 📊" : "My Performance 📊"}
        </h1>

      {/* Weak Topics Section - Most Prominent */}
      {weakTopics.length > 0 && (
        <div style={{ marginBottom: "30px" }}>
          <div style={{
            backgroundColor: "#fee2e2",
            border: "3px solid #ef4444",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
          }}>
            <h2 style={{ color: "#dc2626", marginBottom: "15px" }}>
              ⚠️ Areas for Improvement - Weak {getSectionTitle()}
            </h2>
            <p style={{ marginBottom: "15px", color: "#7f1d1d" }}>
              Focus on these {getSectionTitle().toLowerCase()} to improve your overall performance:
            </p>
            
            {weakTopics.map((item) => (
              <div key={item.topic + (item.subtopic || "")} style={getTopicStyle("Weak")}>
                <h3 style={{ color: "#dc2626", margin: "0 0 10px 0" }}>
                  {getLevelEmoji("Weak")} {getItemName(item)}
                </h3>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span>Accuracy:</span>
                  <strong style={{ color: "#dc2626" }}>{item.accuracy}%</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span>Questions Attempted:</span>
                  <span>{item.attempted}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                  <span>Correct Answers:</span>
                  <span>{item.correct}</span>
                </div>
                <div style={{ marginTop: "10px", fontSize: "14px", color: "#7f1d1d" }}>
                  💡 Recommendation: Practice more {getItemName(item)} questions
                </div>
                {!isSubtopicAnalysis && (
                  <button
                    onClick={() => navigate("/topic-quiz", { state: { topic: item.topic } })}
                    style={{
                      marginTop: "15px",
                      padding: "10px 20px",
                      backgroundColor: "#dc2626",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "bold"
                    }}
                  >
                    Practice {item.topic} Quiz 🎯
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Moderate Topics Section */}
      {moderateTopics.length > 0 && (
        <div style={{ marginBottom: "30px" }}>
          <div style={{
            backgroundColor: "#fef3c7",
            border: "2px solid #f59e0b",
            padding: "20px",
            borderRadius: "12px"
          }}>
            <h2 style={{ color: "#d97706", marginBottom: "15px" }}>
              🟡 Moderate Performance
            </h2>
            
            {moderateTopics.map((item) => (
              <div key={item.topic + (item.subtopic || "")} style={getTopicStyle("Moderate")}>
                <h3 style={{ color: "#d97706", margin: "0 0 10px 0" }}>
                  {getLevelEmoji("Moderate")} {getItemName(item)}
                </h3>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span>Accuracy:</span>
                  <strong style={{ color: "#d97706" }}>{item.accuracy}%</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span>Questions Attempted:</span>
                  <span>{item.attempted}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                  <span>Correct Answers:</span>
                  <span>{item.correct}</span>
                </div>
                {!isSubtopicAnalysis && (
                  <button
                    onClick={() => navigate("/topic-quiz", { state: { topic: item.topic } })}
                    style={{
                      marginTop: "15px",
                      padding: "10px 20px",
                      backgroundColor: "#d97706",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "bold"
                    }}
                  >
                    Practice {item.topic} Quiz 🎯
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Strong Topics Section */}
      {strongTopics.length > 0 && (
        <div style={{ marginBottom: "30px" }}>
          <div style={{
            backgroundColor: "#d1fae5",
            border: "2px solid #10b981",
            padding: "20px",
            borderRadius: "12px"
          }}>
            <h2 style={{ color: "#059669", marginBottom: "15px" }}>
              🟢 Strong {getSectionTitle()}
            </h2>
            
            {strongTopics.map((item) => (
              <div key={item.topic + (item.subtopic || "")} style={getTopicStyle("Strong")}>
                <h3 style={{ color: "#059669", margin: "0 0 10px 0" }}>
                  {getLevelEmoji("Strong")} {getItemName(item)}
                </h3>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span>Accuracy:</span>
                  <strong style={{ color: "#059669" }}>{item.accuracy}%</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span>Questions Attempted:</span>
                  <span>{item.attempted}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Correct Answers:</span>
                  <span>{item.correct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {performance.length === 0 && (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <p style={{ color: "#64748b" }}>No performance data found for this test.</p>
        </div>
      )}

      {/* Action Buttons */}
      <div style={{ 
        display: "flex", 
        gap: "15px", 
        justifyContent: "center",
        marginTop: "30px",
        flexWrap: "wrap"
      }}>
        <button 
          onClick={() => navigate("/dashboard")}
          style={{
            padding: "12px 24px",
            backgroundColor: "#6366f1",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#4f46e5";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#6366f1";
          }}
        >
          Dashboard
        </button>
        
        {weakTopics.length > 0 && (
          <button 
            onClick={() => navigate("/full-quiz")}
            style={{
              padding: "12px 24px",
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#dc2626";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#ef4444";
            }}
          >
            Retry Quiz to Improve
          </button>
        )}
      </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Performance;
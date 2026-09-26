import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function TopicSelection() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
   const API_URL=import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch(`${API_URL}/api/questions/topics`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setTopics(data.topics);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
        setLoading(false);
      });
  }, []);

  const handleTopicSelect = (topic) => {
    navigate("/topic-quiz", { state: { topic } });
  };

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#f8fafc" }}>
        <Navbar />
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <h2>Loading topics...</h2>
        </div>
        <Footer />
      </div>
    );
  }

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
        <h1 style={{ textAlign: "center", marginBottom: "2rem", color: "#1e293b" }}>
          Select a Topic for Quiz
        </h1>

        {topics.length === 0 ? (
          <p style={{ textAlign: "center", color: "#64748b" }}>No topics available.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {topics.map((topic) => (
              <div
                key={topic}
                onClick={() => handleTopicSelect(topic)}
                style={{
                  border: "2px solid #6366f1",
                  borderRadius: "12px",
                  padding: "2rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backgroundColor: "white",
                  textAlign: "center",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#e0e7ff";
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(99, 102, 241, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
                }}
              >
                <h3 style={{ color: "#4f46e5", margin: "0 0 0.5rem 0", fontSize: "1.25rem" }}>{topic}</h3>
                <p style={{ color: "#6b7280", margin: "0", fontSize: "0.875rem" }}>
                  10 Questions
                </p>
              </div>
            ))}
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
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
            Back to Dashboard
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default TopicSelection;
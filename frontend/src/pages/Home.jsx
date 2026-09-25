import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column",
      backgroundColor: "#f8fafc"
    }}>
      <Navbar />
      {/* Hero Section */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 2rem",
        textAlign: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white"
      }}>
        <h1 style={{ 
          fontSize: "3rem", 
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>
          🧠 Welcome to QuizMaster
        </h1>
        <p style={{ 
          fontSize: "1.25rem", 
          marginBottom: "2rem",
          maxWidth: "600px",
          lineHeight: "1.6"
        }}>
          Test your knowledge, track your progress, and master new skills with our interactive quiz platform. Perfect for students, professionals, and lifelong learners.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={() => navigate("/register")}
            style={{
              backgroundColor: "white",
              color: "#667eea",
              border: "none",
              padding: "1rem 2rem",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            Get Started Free
          </button>
          <button
            onClick={() => navigate("/login")}
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "2px solid white",
              padding: "1rem 2rem",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
            }}
          >
            Login
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ 
        padding: "4rem 2rem",
        backgroundColor: "white"
      }}>
        <h2 style={{ 
          textAlign: "center", 
          marginBottom: "3rem",
          color: "#1e293b",
          fontSize: "2rem"
        }}>
          Why Choose QuizMaster?
        </h2>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <div style={{
            padding: "2rem",
            borderRadius: "12px",
            backgroundColor: "#f8fafc",
            border: "1px solid #e2e8f0",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>📚</div>
            <h3 style={{ color: "#1e293b", marginBottom: "0.5rem" }}>Topic-wise Quizzes</h3>
            <p style={{ color: "#64748b", lineHeight: "1.6" }}>
              Focus on specific topics like JavaScript, MongoDB, Express, and more to strengthen your weak areas.
            </p>
          </div>

          <div style={{
            padding: "2rem",
            borderRadius: "12px",
            backgroundColor: "#f8fafc",
            border: "1px solid #e2e8f0",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>📊</div>
            <h3 style={{ color: "#1e293b", marginBottom: "0.5rem" }}>Performance Analytics</h3>
            <p style={{ color: "#64748b", lineHeight: "1.6" }}>
              Get detailed insights into your performance with topic and subtopic-level analysis.
            </p>
          </div>

          <div style={{
            padding: "2rem",
            borderRadius: "12px",
            backgroundColor: "#f8fafc",
            border: "1px solid #e2e8f0",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🎯</div>
            <h3 style={{ color: "#1e293b", marginBottom: "0.5rem" }}>Personalized Learning</h3>
            <p style={{ color: "#64748b", lineHeight: "1.6" }}>
              Receive recommendations based on your performance and directly practice weak topics.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        padding: "4rem 2rem",
        textAlign: "center",
        backgroundColor: "#f8fafc"
      }}>
        <h2 style={{ 
          color: "#1e293b", 
          marginBottom: "1rem",
          fontSize: "2rem"
        }}>
          Ready to Test Your Knowledge?
        </h2>
        <p style={{ 
          color: "#64748b", 
          marginBottom: "2rem",
          fontSize: "1.1rem"
        }}>
          Join thousands of learners improving their skills every day.
        </p>
        <button
          onClick={() => navigate("/register")}
          style={{
            backgroundColor: "#6366f1",
            color: "white",
            border: "none",
            padding: "1rem 2.5rem",
            borderRadius: "8px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#4f46e5";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#6366f1";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Start Learning Now
        </button>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
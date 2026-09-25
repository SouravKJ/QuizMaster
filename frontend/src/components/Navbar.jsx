import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const isHomePage = location.pathname === "/";

  return (
    <nav style={{
      backgroundColor: "#1e293b",
      color: "white",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      <div 
        onClick={() => navigate(isLoggedIn ? "/dashboard" : "/")}
        style={{ 
          cursor: "pointer",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#6366f1"
        }}
      >
        🧠 QuizMaster
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {isLoggedIn ? (
          <>
            <button
              onClick={() => navigate("/dashboard")}
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "1px solid #6366f1",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#6366f1";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
              }}
            >
              Dashboard
            </button>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "#ef4444",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#dc2626";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#ef4444";
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "1px solid #6366f1",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#6366f1";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
              }}
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              style={{
                backgroundColor: "#6366f1",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
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
              Register
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
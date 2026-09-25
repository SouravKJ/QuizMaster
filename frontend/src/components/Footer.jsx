function Footer() {
  return (
    <footer style={{
      backgroundColor: "#1e293b",
      color: "white",
      padding: "2rem",
      textAlign: "center",
      marginTop: "auto"
    }}>
      <div style={{ marginBottom: "1rem" }}>
        <h3 style={{ margin: "0 0 0.5rem 0", color: "#6366f1" }}>QuizMaster</h3>
        <p style={{ margin: "0", color: "#94a3b8" }}>
          Master your skills with interactive quizzes
        </p>
      </div>
      
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "2rem",
        marginBottom: "1rem",
        flexWrap: "wrap"
      }}>
        <a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>About</a>
        <a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>Features</a>
        <a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>Contact</a>
        <a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>Privacy Policy</a>
      </div>
      
      <div style={{ 
        borderTop: "1px solid #334155",
        paddingTop: "1rem",
        color: "#64748b",
        fontSize: "0.875rem"
      }}>
        © 2024 QuizMaster. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
     const API_URL=import.meta.env.VITE_API_URL;
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                }),
            });

            const data = await response.json();

            console.log(data);

            if (response.ok) {
                setMessage("Registration successful! Please login.");
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            } else {
                setMessage(data.message || "Registration failed");
            }
        } catch (err) {
            console.log(err.message);
            setMessage("Something went wrong");
        }
    };

    return (
        <div style={{ 
            minHeight: "100vh", 
            display: "flex", 
            flexDirection: "column",
            backgroundColor: "#f8fafc"
        }}>
            <Navbar />
            <div style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem"
            }}>
                <div style={{
                    backgroundColor: "white",
                    padding: "2.5rem",
                    borderRadius: "12px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    width: "100%",
                    maxWidth: "400px"
                }}>
                    <h1 style={{ 
                        textAlign: "center", 
                        marginBottom: "2rem",
                        color: "#1e293b"
                    }}>
                        Create Account
                    </h1>

                    <form onSubmit={handleRegister}>
                        <div style={{ marginBottom: "1.5rem" }}>
                            <label style={{ 
                                display: "block", 
                                marginBottom: "0.5rem",
                                color: "#475569",
                                fontWeight: "500"
                            }}>
                                Name
                            </label>
                            <input
                                type='text'
                                placeholder='Enter your name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                style={{
                                    width: "100%",
                                    padding: "0.75rem",
                                    border: "1px solid #cbd5e1",
                                    borderRadius: "6px",
                                    fontSize: "1rem",
                                    boxSizing: "border-box"
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: "1.5rem" }}>
                            <label style={{ 
                                display: "block", 
                                marginBottom: "0.5rem",
                                color: "#475569",
                                fontWeight: "500"
                            }}>
                                Email
                            </label>
                            <input
                                type='email'
                                placeholder='Enter your email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{
                                    width: "100%",
                                    padding: "0.75rem",
                                    border: "1px solid #cbd5e1",
                                    borderRadius: "6px",
                                    fontSize: "1rem",
                                    boxSizing: "border-box"
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: "1.5rem" }}>
                            <label style={{ 
                                display: "block", 
                                marginBottom: "0.5rem",
                                color: "#475569",
                                fontWeight: "500"
                            }}>
                                Password
                            </label>
                            <input
                                type='password'
                                placeholder='Enter your password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{
                                    width: "100%",
                                    padding: "0.75rem",
                                    border: "1px solid #cbd5e1",
                                    borderRadius: "6px",
                                    fontSize: "1rem",
                                    boxSizing: "border-box"
                                }}
                            />
                        </div>

                        <button
                            type='submit'
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                backgroundColor: "#6366f1",
                                color: "white",
                                border: "none",
                                borderRadius: "6px",
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
                            Register
                        </button>
                    </form>

                    {message && (
                        <div style={{
                            marginTop: "1rem",
                            padding: "0.75rem",
                            backgroundColor: message.includes("successful") ? "#d1fae5" : "#fee2e2",
                            color: message.includes("successful") ? "#065f46" : "#991b1b",
                            borderRadius: "6px",
                            textAlign: "center",
                            fontSize: "0.875rem"
                        }}>
                            {message}
                        </div>
                    )}

                    <div style={{ 
                        marginTop: "1.5rem", 
                        textAlign: "center",
                        color: "#64748b"
                    }}>
                        Already have an account?{" "}
                        <button
                            onClick={() => navigate("/login")}
                            style={{
                                backgroundColor: "transparent",
                                color: "#6366f1",
                                border: "none",
                                cursor: "pointer",
                                fontWeight: "bold",
                                textDecoration: "underline"
                            }}
                        >
                            Login here
                        </button>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default Register;
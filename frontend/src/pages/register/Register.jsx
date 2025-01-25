import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import img from "./img.png";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare user data
        const userData = {
            username: username,
            email: email,
            password: password,
        };

        try {
            // Make POST request to the backend API
            const response = await fetch("http://localhost:7000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                // Registration success, navigate to login page
                navigate("/login");
            } else {
                // Handle error from backend (e.g. user already exists)
                alert(data.message || "Registration failed");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <>
            <img src={img} alt="Register" className="rImg" />
            <div className="registerContainer">
                <h2 className="registerTitle">Create Your Account</h2>
                <form className="registerForm" onSubmit={handleSubmit}>
                    <div className="registerInputContainer">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="registerInputContainer">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="registerInputContainer">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter a password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="registerBtn">
                        Register
                    </button>
                </form>
            </div>
        </>
    );
};

export default Register;

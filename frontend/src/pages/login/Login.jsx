import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/context/AuthContext.jsx";
import "./Login.css";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const { loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });

        try {
            const res = await axios.post(
                "http://localhost:7000/api/auth/login",
                credentials,
                { withCredentials: true }
            );

            console.log("API Response:", res.data);

            const userData = res.data.details || res.data;
            localStorage.setItem("user", JSON.stringify(userData));

            dispatch({ type: "LOGIN_SUCCESS", payload: userData });

            navigate("/");
            window.location.reload(); // Ensure AuthContext updates in Navbar
        } catch (err) {
            const errorMessage = err.response?.data?.message || "Something went wrong!";
            console.error("Login Error:", errorMessage);
            dispatch({ type: "LOGIN_FAILURE", payload: errorMessage });
        }
    };


    return (
        <div className="login">
            <div className="lContainer">
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    value={credentials.username}
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={credentials.password}
                    onChange={handleChange}
                    className="lInput"
                />
                <button disabled={loading} onClick={handleClick} className="lButton">
                    {loading ? "Logging in..." : "Login"}
                </button>
                {error && <span className="error">{error}</span>}
            </div>
        </div>
    );
};

export default Login;

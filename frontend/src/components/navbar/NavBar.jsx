import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";  ory
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    // Logout handler function
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
    };

    return (
        <div className="navbarItem">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="TLogo">
            <span className="FirstLetter">Chan</span>
            <span className="logoSpan">Yong</span>
            <span className="LogoEnd">Booking</span>
          </span>
                </Link>

                {user ? (
                    <div className="navItems">
            <span style={{ color: '#8338ec', marginRight: '10px' }}>
              {user.username}
            </span>
                        <button className="navButton" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="navItems">
                        <button className="navButton">Register</button>
                        <Link to="/login">
                            <button className="navButton">Login</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;

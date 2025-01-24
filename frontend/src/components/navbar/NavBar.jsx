import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../context/AuthContext.jsx";
const Navbar = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="navbarItem">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo">ChanYongBooking</span>
                </Link>
                {user ? user.username : (
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
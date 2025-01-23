import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarItem">
      <div className="navContainer">
          <Link to="/">
              <span className="logo">ChanYongBooking</span>
          </Link>
          <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

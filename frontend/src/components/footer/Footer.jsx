import "tailwindcss";
import "./footer.css";

const Footer = () => {
  return (
      <div className="footer">
        <div className="fLists">
          <ul className="fList">
            <span className="TLogo">
              <span className="FirstLetter">Chan</span>
              <span className="logoSpan">Yong</span>
              <span className="LogoEnd">Booking</span>
            </span>
          </ul>
          <ul className="fList">
            <li className="fListItem">Hotels</li>
            <li className="fListItem">Apartments</li>
            <li className="fListItem">Guest Houses</li>
            <li className="fListItem">Resorts</li>
            <li className="fListItem">Bed & Breakfasts</li>
          </ul>
          <ul className="fList">
            <li className="fListItem">Popular Destinations</li>
            <li className="fListItem">Customer Reviews</li>
            <li className="fListItem">Travel Guides</li>
            <li className="fListItem">Travel Blog</li>
            <li className="fListItem">Deals & Discounts</li>
          </ul>
          <ul className="fList">
            <li className="fListItem">Airport Transfers</li>
            <li className="fListItem">Car Rentals</li>
            <li className="fListItem">Tour Packages</li>
            <li className="fListItem">Local Experiences</li>
          </ul>
          <ul className="fList">
            <li className="fListItem">Help & Support</li>
            <li className="fListItem">Partner Services</li>
            <li className="fListItem">Careers</li>
            <li className="fListItem">Privacy Policy</li>
            <li className="fListItem">Terms & Conditions</li>
            <li className="fListItem">FAQs</li>
          </ul>
        </div>
        <hr/>
        <div className="fText">Copyright © 2025 ChanYongBooking. All Rights Reserved.</div>
      </div>
  );
};

export default Footer;

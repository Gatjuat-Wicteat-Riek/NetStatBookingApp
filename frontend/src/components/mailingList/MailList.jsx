import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./MailList.css";

const MailList = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="mail" data-aos="fade-up">
            <h1 className="mailTitle" data-aos="fade-down">
                Book Smart, Save More – Get the Best Deals!
            </h1>
            <span className="mailDesc" data-aos="fade-up">
        Sign up now and get access to exclusive deals, special discounts, and the
        best travel offers—delivered straight to your inbox.
      </span>
            <div className="mailInputContainer" data-aos="zoom-in">
                <input type="text" placeholder="Your Email" />
                <button data-aos="fade-left">Subscribe</button>
            </div>
        </div>
    );
};

export default MailList;


import {useEffect} from "react";
import "./Home.css";
import Featured from "../../components/featured/Featured";
import FeaturedProp from "../../components/featuredProperties/featuredProp";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailingList/MailList";
import Navbar from "../../components/navbar/NavBar";
import PropertyList from "../../components/propList/ProperyList";
import AOS from "aos";
import "aos/dist/aos.css";


const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle" data-aos="fade-up">Discover Property by Type</h1>
        <PropertyList />
        <h1 className="homeTitle" data-aos="fade-up">Homes Our Guests Love</h1>
        <FeaturedProp />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

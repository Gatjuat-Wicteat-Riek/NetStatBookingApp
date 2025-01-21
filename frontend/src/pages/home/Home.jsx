import "./Home.css";
import Featured from "../../components/featured/Featured";
import FeaturedProp from "../../components/featuredProperties/featuredProp";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailingList/MailList";
import Navbar from "../../components/navbar/NavBar";
import PropertyList from "../../components/propList/ProperyList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProp />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

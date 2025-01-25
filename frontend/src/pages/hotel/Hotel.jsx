import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../components/context/SearchContext.jsx";
import { AuthContext } from "../../components/context/AuthContext.jsx";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailingList/MailList.jsx";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Reserve from "../../components/reserve/Reserve";
import useFetch from "../../hooks/useFetch";
import "./hotel.css";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  const { user } = useContext(AuthContext);
  const { dates, options } = useContext(SearchContext);
  const navigate = useNavigate();

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  // Safe day difference calculation with conditional check for `dates`
  const days =
      dates?.length > 0 && dates[0].endDate && dates[0].startDate
          ? dayDifference(new Date(dates[0].endDate), new Date(dates[0].startDate))
          : 0;

  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
      <div>
        <Navbar />
        <Header type="list" />
        {loading ? (
            "loading"
        ) : (
            <div className="hotelContainer">
              {open && (
                  <div className="slider">
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        className="close"
                        onClick={() => setOpen(false)}
                    />
                    <FontAwesomeIcon
                        icon={faCircleArrowLeft}
                        className="arrow"
                        onClick={() => handleMove("l")}
                    />
                    <div className="sliderWrapper">
                      <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon
                        icon={faCircleArrowRight}
                        className="arrow"
                        onClick={() => handleMove("r")}
                    />
                  </div>
              )}
              <div className="hotelWrapper">
                <button className="bookNow">
                  Reserve or Book Now and enjoy the best service
                </button>
                <h1 className="hotelTitle">{data.name}</h1>
                <div className="hotelAddress">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{data.address}</span>
                </div>
                <span className="hotelDistance">
              Prime location – Only {data.distance} meters from the city center!
            </span>
                <span className="hotelPriceHighlight">
              Book your stay for just ${data.cheapPrice} at this property and enjoy a
              complimentary airport taxi ride!
            </span>
                <div className="hotelImages">
                  {data.photos?.map((photo, i) => (
                      <div className="hotelImgWrapper" key={i}>
                        <img
                            onClick={() => handleOpen(i)}
                            src={photo}
                            alt=""
                            className="hotelImg"
                        />
                      </div>
                  ))}
                </div>
                <div className="hotelDetails">
                  <div className="hotelDetailsTexts">
                    <h1 className="hotelTitle">{data.title}</h1>
                    <p className="hotelDesc">{data.desc}</p>
                  </div>
                  <div className="hotelDetailsPrice">
                    <h1>Perfect for a {days}-night stay!</h1>
                    <span>
                  Located in the vibrant heart of East Africa's best cities, this property
                  boasts an outstanding location with an impressive score of 9.8
                </span>
                    <h2>
                      <b>${(days * parseFloat(data.cheapPrice) * parseInt(options.room, 10) || 0).toFixed(2)}</b> ({days} nights)
                    </h2>
                    <button onClick={handleClick}>Reserve or Book Now!</button>
                  </div>
                </div>
              </div>
              <MailList />
              <Footer />
            </div>
        )}
        {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
      </div>
  );
};

export default Hotel;

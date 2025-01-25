import  { useEffect } from "react";
import useFetch from "../../hooks/useFetch.js";
import "./featuredProp.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

const FeaturedProp = () => {
    const { data, loading, error } = useFetch("/hotels?featured=true");

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="fp">
            {loading ? (
                "Loading"
            ) : (
                <>
                    {data.map((item) => (
                        <div className="fpItem" key={item._id}>
                            <img
                                src={item.photos[0]}
                                alt=""
                                className="fpImg"
                                data-aos="fade-up" // Apply AOS animation
                            />
                            <span className="fpName">{item.name}</span>
                            <span className="fpCity">{item.city}</span>
                            <span className="fpPrice">
                Starting from $
                <span className="fPrice">{item.cheapPrice}</span>
              </span>
                            {item.rating && (
                                <div className="fpRating">
                                    <button>{item.rating}</button>
                                    <span>Excellent</span>
                                </div>
                            )}
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default FeaturedProp;

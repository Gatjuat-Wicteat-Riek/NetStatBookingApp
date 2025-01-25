import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import useFetch from "../../hooks/useFetch.js";
import "./featured.css";
import {useEffect} from "react";
import AOS from "aos"

const Featured = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    const { data, loading, error } = useFetch(
        "/hotels/countByCity?cities=berlin,madrid,london"
    );

    return (
        <>
            <div>
                <h2 className="fHead" data-aos="fade-up">Explore Hotels in Major East African Cities</h2>
            </div>
            <div className="featured">

                {loading ? (
                    "Loading please wait"
                ) : (
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation
                        pagination={{clickable: true}}
                        loop={true}
                    >
                        <SwiperSlide>
                            <div className="featuredItem">
                                <img
                                    src="https://i.pinimg.com/236x/7c/5d/77/7c5d77d12cfa016662d63a986ea61f44.jpg"
                                    alt="Juba"
                                    className="featuredImg"
                                />
                                <div className="featuredTitles">
                                    <h1 className="fHeadTitle">Juba</h1>
                                    <h2><span className="fSpan">{data[0]}</span> properties</h2>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="featuredItem">
                                <img
                                    src="https://i.pinimg.com/236x/43/6d/71/436d71f2753575bd817c500f33bd7f27.jpg"
                                    alt="Nairobi"
                                    className="featuredImg"
                                />
                                <div className="featuredTitles">
                                    <h1 className="fHeadTitle">Nairobi</h1>
                                    <h2><span className="fSpan">{data[1]}</span> properties</h2>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="featuredItem">
                                <img
                                    src="https://i.pinimg.com/236x/45/0c/c7/450cc70ea04f723c1a2838a2729983e1.jpg"
                                    alt="Dar es Salaam"
                                    className="featuredImg"
                                />
                                <div className="featuredTitles">
                                    <h1 className="fHeadTitle">Dar es Salaam</h1>
                                    <h2><span className="fSpan">{data[2]}</span> properties</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="featuredItem">
                                <img
                                    src="https://i.pinimg.com/236x/4d/ad/63/4dad63a88599067d68a81425a781a02f.jpg"
                                    alt="Kampala"
                                    className="featuredImg"
                                />
                                <div className="featuredTitles">
                                    <h1 className="fHeadTitle">Kampala</h1>
                                    <h2><span className="fSpan">{data[3]}</span>properties</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="featuredItem">
                                <img
                                    src="https://i.pinimg.com/236x/8c/0f/1e/8c0f1e192873c354bb5c8df9b45e5dd6.jpg"
                                    alt="Kigali"
                                    className="featuredImg"
                                />
                                <div className="featuredTitles">
                                    <h1 className="fHeadTitle">Kigali</h1>
                                    <h2><span className="fSpan">{data[4]}</span> properties</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="featuredItem">
                                <img
                                    src="https://i.pinimg.com/474x/82/35/89/823589a9bd80440565efa23478413c29.jpg"
                                    alt="Zanibar"
                                    className="featuredImg"
                                />
                                <div className="featuredTitles">
                                    <h1 className="fHeadTitle">Zanibar</h1>
                                    <h2><span className="fSpan">{data[4]}</span> properties</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="featuredItem">
                                <img
                                    src="https://i.pinimg.com/236x/24/57/a8/2457a8678afaf199799544657f30e746.jpg"
                                    alt="Mombasa"
                                    className="featuredImg"
                                />
                                <div className="featuredTitles">
                                    <h1 className="fHeadTitle">Mombasa</h1>
                                    <h2><span className="fSpan">{data[4]}</span> properties</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                )}
            </div>
        </>
    );
};

export default Featured;

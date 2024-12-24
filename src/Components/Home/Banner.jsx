
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Banner = ({ banner }) => {


    return (
        <div className="swiper mySwiper w-11/12 mx-auto mb-28">
            <Swiper
                modules={[Autoplay, Pagination]}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {banner.map((banner, index) => (
                    <SwiperSlide key={index}>

                        <div
                            className="w-full sm:w-[80%] lg:w-full h-[473px] relative overflow-hidden group cursor-pointer rounded-md">

                            {/*  image  */}
                            <img
                                src={banner?.serviceImage}
                                alt="animated_card"
                                className="w-full h-full object-cover rounded-lg group-hover:scale-[1.1] transition-all duration-700" />

                            {/*  text  */}
                            <div
                                className="absolute top-[55%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                                <Link to={`/service/${banner?._id}`}>
                                    <button className="px-3 py-2 rounded-full bg-color-accent dark:bg-color-accent-d font-medium text-white">
                                        View Details
                                    </button>
                                </Link>
                            </div>

                            {/*  bottom shadow  */}
                            <div
                                className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination"></div>
        </div>
    );
};

Banner.propTypes = {
    banner: PropTypes.array.isRequired
}

export default Banner;
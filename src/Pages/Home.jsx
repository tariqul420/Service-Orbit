import { useQuery } from "@tanstack/react-query";
import Aos from "aos";
import axios from "axios";
import { useEffect } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import LoadingSpinner from "../Components/Common/LoadingSpinner";
import ServiceCard from "../Components/Common/ServiceCard";
import Banner from "../Components/Home/Banner";
import BestProvider from "../Components/Home/BestProvider";
import PaymentCard from "../Components/Home/PaymentCard";
import ToldCustomers from "../Components/Home/ToldCustomers";
import FAQ from "../Components/Home/FAQ";
const Home = () => {

    useEffect(() => {
        document.title = 'Service Orbit'
    }, []);

    const { data, isLoading } = useQuery({
        queryKey: ['popularServices', 'bestProvider', 'banner', "toldCustomer"],
        queryFn: async () => {
            const [popularServices, bestProvider, banner, toldCustomer] = await Promise.all([
                axios.get(`${import.meta.env.VITE_API_URL}/popular-services`),
                axios.get(`./bestProvider.json`),
                axios.get(`${import.meta.env.VITE_API_URL}/banner`),
                axios.get(`./ToldCustomers.json`)
            ]);

            return {
                popularServices: popularServices.data,
                bestProvider: bestProvider.data,
                banner: banner.data,
                toldCustomer: toldCustomer.data
            };
        }
    });

    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
            once: false,
        });
    }, []);

    if (isLoading) return <LoadingSpinner />

    return (
        <section className="overflow-x-hidden">
            {/* Banner Slider */}
            <Banner banner={data?.banner} />

            {/* Popular Services */}
            <div className="mb-28">
                <h2
                    data-aos="fade-up"
                    className="text-5xl font-bold text-center max-sm:text-4xl">Popular Services</h2>
                {
                    data?.popularServices.length === 0 ? (
                        <div
                            className="p-6 sm:px-20 sm:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl dark:bg-color-dark-lite bg-white shadow-md mt-12">
                            <img src="https://i.ibb.co/cgfgxGH/Illustrations.png" alt="empty/image" className="w-full sm:w-[200px]" />

                            <h1 className="text-[3rem] mt-6 font-[500]">Result Not Found</h1>

                            <p className="text-[0.9rem] dark:text-gray-300 text-gray-600">Whoops ... this information is not available for a moment</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-20">
                            {
                                data?.popularServices.map(service => <ServiceCard key={service?._id} service={service} />)
                            }
                        </div>
                    )
                }

                <Link to='/services'>
                    <button className="border-2 px-10 py-1 rounded-full border-solid border-color-accent dark:border-color-accent-d font-semibold text-lg text-color-primary bg-color-accent dark:bg-color-accent-d mt-12 block mx-auto">
                        Show all
                    </button>
                </Link>
            </div>

            {/* Best Service Provider */}
            <div className="mb-28">
                <h2
                    data-aos="fade-up"
                    className="text-5xl font-bold text-center max-sm:text-4xl">Best Service Provider</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-12">
                    {
                        data?.bestProvider.map((service, index) => <BestProvider key={index} service={service} />)
                    }
                </div>
            </div>

            {/* Payment Card */}
            <div className="mb-28 w-11/12 mx-auto">
                <h2
                    data-aos="fade-up"
                    className="text-5xl font-bold text-center max-sm:text-4xl">Flexible Pricing</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    <PaymentCard type="Starter" price="29" />
                    <PaymentCard type="Professional" price="45" />
                    <PaymentCard type="Enterprise" price="99" />
                </div>
            </div>

            {/* Success */}
            <div
                data-aos="fade-up"
                className="bg-[url(https://i.ibb.co.com/59Yyn7H/background.png)] bg-cover bg-no-repeat rounded-3xl mb-28">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-20 gap-20 lg:gap-0 px-8">
                    <div
                        data-aos="fade-right"
                        className="flex items-center justify-center flex-col">
                        <p className="lg:text-[8vw] md:text-[20vw] text-[40vw] leading-none font-bold text-border font-mono" style={{ color: "transparent", WebkitTextStroke: "2px white" }}>
                            <CountUp
                                start={0}
                                end={52}
                                duration={2.5}
                            />K</p>
                        <p className="text-white font-bold text-5xl">Customers</p>
                    </div>

                    <div
                        data-aos="flip-left"
                        className="flex items-center justify-center flex-col">
                        <p className="lg:text-[8vw] md:text-[20vw] text-[40vw] leading-none font-bold text-border font-mono" style={{ color: "transparent", WebkitTextStroke: "2px white" }}>
                            <CountUp
                                start={0}
                                end={42}
                                duration={2.5}
                            />
                            K</p>
                        <p className="text-white font-bold text-5xl">Reviews</p>
                    </div>

                    <div
                        data-aos="flip-right"
                        className="flex items-center justify-center flex-col">
                        <p className="lg:text-[8vw] md:text-[20vw] text-[40vw] leading-none font-bold text-border font-mono" style={{ color: "transparent", WebkitTextStroke: "2px white" }}>
                            <CountUp
                                start={0}
                                end={2}
                                duration={2.5}
                            />
                            M</p>
                        <p className="text-white font-bold text-5xl">Task Done</p>
                    </div>

                    <div
                        data-aos="fade-left"
                        className="flex items-center justify-center flex-col">
                        <p className="lg:text-[8vw] md:text-[20vw] text-[40vw] leading-none font-bold text-border font-mono" style={{ color: "transparent", WebkitTextStroke: "2px white" }}>
                            <CountUp
                                start={0}
                                end={3}
                                duration={2.5}
                            />
                            K</p>
                        <p className="text-white font-bold text-5xl">Jobs</p>
                    </div>
                </div>
            </div>

            {/* FAQ section */}
            <div className="mb-28">
                <FAQ />
            </div>

            {/* Our Stories As Told By Customers */}
            <div className="mb-28">
                <h2
                    data-aos="fade-up"
                    className="text-5xl font-bold text-center max-sm:text-4xl">Our Stories As Told By <br className="max-sm:hidden" /> Customers</h2>

                <div className="mt-12 flex flex-col gap-8">
                    <Slider {...settings}>
                        {
                            data?.toldCustomer.map((review, index) => <ToldCustomers key={index} review={review} />)
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Home;
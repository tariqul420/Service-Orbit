import { useEffect } from "react";
import Banner from "../Components/Home/Banner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../Components/Common/LoadingSpinner";
import { Link } from "react-router-dom";
import ServiceCard from "../Components/Common/ServiceCard";
import BestProvider from "../Components/Home/BestProvider";
import ToldCustomers from "../Components/Home/ToldCustomers";
import Slider from "react-slick";

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
    }

    if (isLoading) return <LoadingSpinner />

    return (
        <section>
            {/* Banner Slider */}
            <Banner banner={data?.banner} />

            {/* Popular Services */}
            <div className="mb-28">
                <h2 className="text-6xl font-bold text-center">Popular Services</h2>

                {
                    data?.popularServices.length === 0 ? (
                        <div
                            className="p-6 sm:px-20 sm:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl dark:bg-gray-700 bg-white shadow-md mt-12">
                            <img src="https://i.ibb.co/cgfgxGH/Illustrations.png" alt="empty/image" className="w-full sm:w-[200px]" />

                            <h1 className="text-[3rem] mt-6 font-[500]">Result Not Found</h1>

                            <p className="text-[0.9rem] dark:text-gray-300 text-gray-600">Whoops ... this information is not available for a moment</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                            {
                                data?.popularServices.map(service => <ServiceCard key={service?._id} service={service} />)
                            }
                        </div>
                    )
                }

                <Link to='/services'>
                    <button className="border-2 px-10 py-2 rounded-full border-solid border-color-accent dark:border-color-accent-d font-semibold text-lg text-color-primary bg-color-accent dark:bg-color-accent-d mt-12 block mx-auto">
                        Show all
                    </button>
                </Link>
            </div>

            {/* Best Service Provider */}
            <div className="mb-28">
                <h2 className="text-6xl font-bold text-center">Best Service Provider</h2>

                <div className="grid grid-cols-3 gap-6 mt-12">
                    {
                        data?.bestProvider.map((service, index) => <BestProvider key={index} service={service} />)
                    }
                </div>
            </div>

            {/* Our Stories As Told By Customers */}
            <div className="mb-28">
                <h2 className="text-6xl font-bold text-center">Our Stories As Told By <br className="max-sm:hidden" /> Customers</h2>

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
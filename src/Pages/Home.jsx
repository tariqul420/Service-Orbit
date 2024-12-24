import { useEffect } from "react";
import Banner from "../Components/Home/Banner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../Components/Common/LoadingSpinner";
import { Link } from "react-router-dom";
import ServiceCard from "../Components/Common/ServiceCard";

const Home = () => {

    useEffect(() => {
        document.title = 'Service Orbit'
    }, []);

    const { data, isLoading } = useQuery({
        queryKey: ['popularServices', 'bestProvider', 'banner'],
        queryFn: async () => {
            const [popularServices, bestProvider, banner] = await Promise.all([
                axios.get(`${import.meta.env.VITE_API_URL}/popular-services`),
                axios.get(`./bestProvider.json`),
                axios.get(`${import.meta.env.VITE_API_URL}/banner`)
            ]);

            return {
                popularServices: popularServices.data,
                bestProvider: bestProvider.data,
                banner: banner.data
            };
        }
    });

    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };

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
            </div>
        </section>
    );
};

export default Home;
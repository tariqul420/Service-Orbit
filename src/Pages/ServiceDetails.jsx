import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../Components/Common/LoadingSpinner";
import { FaLocationCrosshairs, FaSackDollar } from "react-icons/fa6";
import BookModal from "../Components/ServiceDetails/BookModal";

const ServiceDetails = () => {
    const { id } = useParams();
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        document.title = 'Service Details || Service Orbit';
    }, []);

    const { data: serviceDetails, isLoading } = useQuery({
        queryKey: ['serviceDetails', id],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/service-details/${id}`);
            return data;
        },
    });

    if (isLoading) return <LoadingSpinner />;

    const { serviceImage, serviceName, serviceArea, servicePrice, serviceDescription, serviceProvider } = serviceDetails

    return (
        <>
            <section>
                <div className="dark:bg-gray-700 bg-white shadow-md p-8 rounded-xl my-12 flex flex-col gap-4 lg:flex-row">
                    <div className="lg:w-[40%]">
                        <img className="rounded-lg h-full w-full" src={serviceImage} alt={serviceName} />
                    </div>
                    <div className="border-2 border-solid border-color-accent dark:border-color-accent-d"></div>
                    <div className="flex-grow lg:w-[60%]">
                        <div
                            className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-[5px]">
                                <FaLocationCrosshairs className="text-[1.1rem]" />
                                <p className="text-[1rem] font-semibold capitalize">{serviceArea}</p>
                            </div>

                            <div className="flex items-center gap-[5px] text-color-accent dark:text-color-accent-d">
                                <FaSackDollar className="text-[1.1rem]" />
                                <p className="text-[1rem] font-semibold">${servicePrice}</p>
                            </div>
                        </div>

                        <h1 className="font-bold text-5xl mt-8 uppercase">{serviceName}</h1>
                        <p className="mt-4">{serviceDescription}</p>

                        <h3 className="text-2xl font-semibold mt-3">Service Provider:</h3>
                        <div className="flex items-center gap-4 mt-2">
                            <img
                                src={serviceProvider?.photoURL}
                                alt={serviceProvider?.name}
                                className="rounded-full h-[50px] w-[50px] border-2 border-solid border-color-accent dark:border-color-accent-d object-cover"
                            />
                            <div>
                                <h3 className="font-medium">{serviceProvider?.email}</h3>
                                <h3 className="font-medium uppercase">{serviceProvider?.name}</h3>
                            </div>
                        </div>

                        <button
                            onClick={() => setModalOpen(true)}
                            className="border-2 px-12 py-2 rounded-full border-solid border-color-accent dark:border-color-accent-d font-semibold text-lg bg-color-accent dark:bg-color-accent-d text-white mt-6">
                            Book Now
                        </button>
                    </div>
                </div>
            </section>


            <BookModal modalOpen={modalOpen} setModalOpen={setModalOpen} serviceDetails={serviceDetails} />
        </>
    );
};

export default ServiceDetails;

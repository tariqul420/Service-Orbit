import PropTypes from "prop-types";
import { TiLocation } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, serviceImage, serviceName, serviceArea, servicePrice, serviceDescription, serviceProvider } = service
    const location = useLocation()

    return (
        <div
            data-aos={location.pathname === '/' ? "zoom-in-down" : ""}
            className="p-3 rounded-2xl border border-solid border-color-accent dark:border-color-accent-d flex flex-col lg:flex-row gap-4 bg-white dark:bg-gray-700 shadow-lg overflow-hidden">
            <div className="lg:w-[45%]">
                <img className="rounded-lg w-full object-cover hover:scale-[1.1] h-full transition-all duration-700" src={serviceImage} alt="" />
            </div>

            <div className="lg:w-[55%] flex flex-col justify-between">
                <div className="mb-3">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold uppercase transition-all duration-300">{serviceName?.length > 10 ? serviceName.substring(0, 10) + '...' : serviceName}</h2>
                        <p className="font-bold text-color-accent dark:text-color-accent-d">${servicePrice}</p>
                    </div>

                    <p className="mt-1 flex gap-1 items-center capitalize">
                        <TiLocation />
                        <span>{serviceArea}</span>
                    </p>

                    <p className="mt-1">
                        {serviceDescription.substring(0, 100)}...
                    </p>

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
                </div>

                {/* Button positioned at the bottom */}
                <Link to={`/service/${_id}`}>
                    <button className="border-2 px-6 py-2 rounded-full border-solid border-color-accent dark:border-color-accent-d font-semibold text-lg text-color-primary bg-color-accent dark:bg-color-accent-d mt-auto">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired
};

export default ServiceCard;

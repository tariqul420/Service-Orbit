import PropTypes from "prop-types";
import { TiLocation } from "react-icons/ti";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, serviceImage, serviceName, serviceArea, servicePrice, serviceDescription, serviceProvider } = service
    return (
        <div className="p-3 rounded-2xl border border-solid border-color-accent dark:border-color-accent-d flex gap-4 bg-white dark:bg-gray-700 shadow-lg max-h-[345px]">
            <div className="w-[45%]">
                <img className="rounded-lg h-full w-full object-cover" src={serviceImage} alt="" />
            </div>

            <div className="w-[55%]">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-semibold hover:text-color-accent dark:hover:text-color-accent-d cursor-pointer uppercase transition-all duration-300">{serviceName.substring(0, 12)}...</h2>
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
                        className="rounded-full h-[50px] w-[50px] border-2 border-solid border-color-accent dark:border-color-accent-d"
                    />
                    <div>
                        <h3 className="font-medium">{serviceProvider?.email}</h3>
                        <h3 className="font-medium uppercase">{serviceProvider?.name}</h3>
                    </div>
                </div>

                <Link to={`/service/${_id}`}>
                    <button className="border-2  px-6 py-2 rounded-full border-solid border-color-accent dark:border-color-accent-d font-semibold text-lg text-color-primary bg-color-accent dark:bg-color-accent-d mt-6">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired
}

export default ServiceCard;
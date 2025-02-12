import PropTypes from "prop-types";
import { TiLocation } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, serviceImage, serviceName, serviceArea, servicePrice, serviceDescription } = service
    const location = useLocation()

    return (
        <Link to={`/service/${_id}`}>
            <div
                data-aos={location.pathname === '/' ? "zoom-in-down" : ""}
                className="p-2 rounded-xl border border-solid border-color-accent dark:border-color-accent-d flex flex-col gap-4 bg-white dark:bg-color-dark-lite shadow-lg overflow-hidden">
                <div>
                    <img className="rounded-lg w-full object-cover hover:scale-[1.1] h-[180px] transition-all duration-700" src={serviceImage} alt="" />
                </div>

                <div className="flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between">
                            <h2 className="text-[1.3rem] font-semibold uppercase transition-all duration-300">{serviceName?.length > 16 ? serviceName.substring(0, 14) + '...' : serviceName}</h2>
                            <p className="font-bold text-color-accent dark:text-color-accent-d">${servicePrice}</p>
                        </div>

                        <p className="mt-1 flex gap-1 items-center capitalize">
                            <TiLocation />
                            <span>{serviceArea}</span>
                        </p>

                        <p className="mt-1">
                            {serviceDescription.substring(0, 55)}...
                        </p>

                        <Link to={`/service/${_id}`}>
                            <button className="py-1 border-solid border-color-accent dark:border-color-accent-d font-semibold text-color-primary bg-color-accent dark:bg-color-accent-d mt-2 w-full rounded">
                                Show More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Link>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired
};

export default ServiceCard;

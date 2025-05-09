import PropTypes from "prop-types";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";

const BestProvider = ({ service }) => {
    const { image, name, price, rating, role } = service

    const handelBookNow = () => {
        window.open("https://meet.google.com/landing", "_blank");
    }

    const Stars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                i <= rating ? (
                    <AiFillStar size={16} key={i} className="text-yellow-500" />
                ) : (
                    <AiOutlineStar size={16} key={i} className="text-gray-400" />
                )
            );
        }
        return stars;
    };

    return (
        <div
            data-aos="zoom-in-up"
            className="shadow-lg border border-solid border-gray-300 p-3 rounded-xl dark:bg-color-dark-lite bg-white overflow-hidden"
        >
            <img
                src={image}
                alt={name}
                className="w-full rounded-md h-[180px] object-cover hover:scale-[1.1] transition-all duration-700"
            />
            <h3 className="font-medium mt-2 text-xl uppercase">{name}</h3>
            <p className="text-lg">{role}</p>

            <div className="flex items-center">
                {Stars()}
                <span>({price})</span>
            </div>

            <div className="flex items-center justify-between">

                <p>
                    <span className="text-xl font-medium">${price}</span>
                    <span className="text-xl"> /hr</span>
                </p>

                <div>
                    <button
                        onClick={handelBookNow}
                        className="flex gap-1 items-center font-semibold text-xl border-b dark:text-color-accent-d text-color-accent dark:border-color-accent-d border-color-accent">Book Now <GoArrowUpRight /></button>
                </div>
            </div>
        </div>
    );
};

BestProvider.propTypes = {
    service: PropTypes.object.isRequired
}

export default BestProvider;
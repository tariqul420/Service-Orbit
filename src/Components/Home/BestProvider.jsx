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
                    <AiFillStar size={22} key={i} className="text-yellow-500" />
                ) : (
                    <AiOutlineStar size={22} key={i} className="text-gray-400" />
                )
            );
        }
        return stars;
    };

    return (
        <div
            className="shadow-lg border border-solid border-gray-300 p-3 rounded-xl dark:bg-gray-700 bg-white"
        >
            <img
                src={image}
                alt={name}
                className="w-full rounded-md h-[250px]"
            />
            <div className="flex items-center justify-between mt-3">
                <div>
                    <h3 className="font-medium text-xl">{name}</h3>
                    <p className="text-lg">{role}</p>
                </div>
                <div>
                    <p>
                        <span className="text-3xl font-medium">${price}</span>
                        <span className="text-2xl"> /hr</span>
                    </p>
                </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <div className="flex mt-2 items-center">
                    {Stars()}
                    <span className="text-xl">({price})</span>
                </div>
                <div>
                    <button
                        onClick={handelBookNow}
                        className="flex gap-1 items-center font-semibold text-2xl border-b dark:text-color-accent-d text-color-accent dark:border-color-accent-d border-color-accent">Book Now <GoArrowUpRight /></button>
                </div>
            </div>
        </div>
    );
};

BestProvider.propTypes = {
    service: PropTypes.object.isRequired
}

export default BestProvider;
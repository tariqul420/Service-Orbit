import PropTypes from "prop-types";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ToldCustomers = ({ review: customerReview }) => {
    const { image, name, profession, rating, review } = customerReview

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
        <div data-aos="fade-right" className="flex border border-solid border-color-accent dark:border-white dark:bg-color-dark-lite p-4 rounded-lg shadow-md flex-col lg:flex-row items-center justify-center">
            <div className="lg:w-[20%]">
                <img className="w-[200px] h-[200px] rounded-full object-cover" src={image} alt="" />
            </div>
            <div className="lg:w-[75%]">
                <div className="flex mt-2 items-center justify-center lg:justify-start">
                    {Stars()}
                    <span className="text-xl">({rating})</span>
                </div>
                <p className="font-medium mt-2 text-center lg:text-start">
                    &quot; {review} &quot;
                </p>
                <p className="mt-6 text-center lg:text-start">
                    <span className="text-xl font-medium uppercase">{name},</span>
                    <span className="text-lg ml-2">{profession}</span></p>
            </div>
        </div>
    );
};

ToldCustomers.propTypes = {
    review: PropTypes.object.isRequired
}

export default ToldCustomers;
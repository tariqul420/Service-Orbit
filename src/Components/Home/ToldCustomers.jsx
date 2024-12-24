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
        <div className="flex border border-solid border-color-accent dark:border-color-accent-d p-4 rounded-lg">
            <div className="w-[25%]">
                <img className="w-[250px] h-[250px] rounded-full object-cover" src={image} alt="" />
            </div>
            <div className="w-[75%]">
                <div className="flex mt-2 items-center">
                    {Stars()}
                    <span className="text-xl">({rating})</span>
                </div>
                <p className="text-xl font-medium mt-2">
                    &quot; {review} &quot;
                </p>
                <p className="mt-6">
                    <span className="text-3xl font-medium">{name},</span>
                    <span className="text-xl ml-2">{profession}</span></p>
            </div>
        </div>
    );
};

ToldCustomers.propTypes = {
    review: PropTypes.object.isRequired
}

export default ToldCustomers;
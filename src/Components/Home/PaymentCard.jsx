import PropTypes from "prop-types";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

const PaymentCard = ({ type, price }) => {
    return (
        <div
            data-aos="flip-left"
            className="group mt-8">
            <div className="p-8 bg-[#F4FAFF] dark:bg-gray-700/50 rounded-t-3xl border-t border-x border-solid border-gray-300 group-hover:bg-[#052642] group-hover:text-white transition-all duration-300 ease-in-out">
                <button className="px-6 rounded-md py-1 bg-white text-xl text-[#F15A28]">{type}</button>
                <p className="text-lg mt-6">Get started with our Starter Sanitizing Package to ensure your space is clean and safe.</p>
                <p className="mt-4">
                    <span className="text-7xl font-bold">${price}</span>
                    <span className="text-2xl">/mon</span>
                </p>
            </div>

            <div className="space-y-2 p-8 bg-[#FFFFFF] dark:bg-gray-700/70 rounded-b-3xl border-b border-x border-solid border-gray-300 group-hover:bg-[#FDEEEE] dark:group-hover:bg-[#052c4e] transition-all duration-300 ease-in-out">
                <p className="flex gap-1 items-center text-lg"><IoCheckmarkCircleOutline /> Booking</p>
                <p className="flex gap-1 items-center text-lg"><IoCheckmarkCircleOutline /> Own Cover Image on Provider Page</p>
                <p className="flex gap-1 items-center text-lg"><IoCheckmarkCircleOutline /> 5 Project At least</p>
                <p className="flex gap-1 items-center text-lg"><IoCheckmarkCircleOutline /> More Locations (Branches)</p>
                <p className="flex gap-1 items-center text-lg"><IoCheckmarkCircleOutline /> Apply for Job</p>
                <p className="flex gap-1 items-center text-lg"><IoCheckmarkCircleOutline /> Contact Numbers</p>
                <p className="flex gap-1 items-center text-lg"><IoCheckmarkCircleOutline /> STAFF MEMBERS</p>
                <p className="flex gap-1 items-center text-lg"><IoCheckmarkCircleOutline /> 442 Free Templates</p>
                <p className="flex gap-1 items-center text-lg"><IoCheckmarkCircleOutline /> QR Code</p>
                <p className="flex gap-1 items-center text-lg"><IoCheckmarkCircleOutline /> Invoice</p>

                <button className="px-5 py-2 bg-color-accent dark:bg-color-accent-d flex items-center text-2xl font-semibold text-white rounded-md">
                    Get Started
                    <MdArrowOutward />
                </button>
            </div>
        </div>
    );
};

PaymentCard.propTypes = {
    type: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}

export default PaymentCard;
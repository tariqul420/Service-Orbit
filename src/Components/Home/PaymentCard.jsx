import PropTypes from "prop-types";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const PaymentCard = ({ type, price }) => {
    return (
        <div
            data-aos="flip-left"
            className="group mt-8">
            <div className="p-8 bg-[#F4FAFF] dark:bg-gray-700/50 rounded-t-3xl border-t border-x border-solid border-gray-300 group-hover:bg-[#052642] group-hover:text-white transition-all duration-300 ease-in-out">
                <button className="px-6 rounded-md py-0 bg-white text-xl text-[#F15A28]">{type}</button>
                <p className="text-lg mt-4 text-justify">Get started with our Starter Sanitizing Package to ensure your space is clean and safe.</p>
                <p className="mt-4">
                    <span className="text-7xl font-bold">${price}</span>
                    <span className="text-2xl">/mon</span>
                </p>
            </div>

            <div className="space-y-2 p-8 bg-[#FFFFFF] dark:bg-gray-700/70 rounded-b-3xl border-b border-x border-solid border-gray-300 group-hover:bg-[#FDEEEE] dark:group-hover:bg-[#052c4e] transition-all duration-300 ease-in-out">
                <p className="flex gap-1 items-center"><IoCheckmarkCircleOutline /> Booking</p>
                <p className="flex gap-1 items-center"><IoCheckmarkCircleOutline /> Own Cover Image on Provider</p>
                <p className="flex gap-1 items-center"><IoCheckmarkCircleOutline /> 5 Project At least</p>
                <p className="flex gap-1 items-center"><IoCheckmarkCircleOutline /> More Locations (Branches)</p>
                <p className="flex gap-1 items-center"><IoCheckmarkCircleOutline /> Apply for Job</p>
                <p className="flex gap-1 items-center"><IoCheckmarkCircleOutline /> Contact Numbers</p>
                <p className="flex gap-1 items-center"><IoCheckmarkCircleOutline /> STAFF MEMBERS</p>
                <p className="flex gap-1 items-center"><IoCheckmarkCircleOutline /> 442 Free Templates</p>
                <p className="flex gap-1 items-center"><IoCheckmarkCircleOutline /> QR Code</p>
                <p className="flex gap-1 items-center"><IoCheckmarkCircleOutline /> Invoice</p>
            </div>
        </div>
    );
};

PaymentCard.propTypes = {
    type: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}

export default PaymentCard;
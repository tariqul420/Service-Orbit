import PropTypes from 'prop-types';
import { RxCross1 } from 'react-icons/rx';

const BookModal = ({ modalOpen, setModalOpen, serviceDetails }) => {
    console.log(serviceDetails);

    return (
        <div
            className={`${modalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
                } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] flex items-center justify-center transition-all duration-300 `}>
            <div className="w-[90%] lg:w-[40%] bg-[#ffffff] rounded-lg p-4 ">
                <div className="w-full flex items-end justify-end">
                    <RxCross1
                        className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                        onClick={() => setModalOpen(false)}
                    />
                </div>

                <div className="w-full pl-3 lg:pl-8">
                    <h2 className="text-[1.7rem] font-[500] text-[#202020]">
                        Are you sure about it?
                    </h2>
                    <p className="text-[1rem] text-[#525252]">
                        you cant undo this action
                    </p>
                </div>
                <div className="flex items-center gap-3 lg:gap-5 w-full justify-end mt-6">
                    <button
                        className="px-4 py-2 border border-[#a8a8a8] rounded-lg text-[#585858]"
                        onClick={() => setModalOpen(false)}>
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-[#3B9DF8] rounded-lg text-[#ffffff]"
                        onClick={() => setModalOpen(false)}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

BookModal.propTypes = {
    modalOpen: PropTypes.bool.isRequired,
    setModalOpen: PropTypes.func.isRequired,
    serviceDetails: PropTypes.object.isRequired
}

export default BookModal;

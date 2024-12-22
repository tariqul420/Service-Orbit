import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hook/useAuth';
import { MdError } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import { useMutation } from '@tanstack/react-query';

const BookModal = ({ modalOpen, setModalOpen, serviceDetails }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { _id, serviceImage, serviceName, serviceArea, servicePrice, serviceProvider, serviceDescription } = serviceDetails

    const { isPending, mutateAsync } = useMutation({
        mutationFn: async (bookNowData) => {
            await axiosSecure.post('/add-purchase', bookNowData)
        },
        onSuccess: () => {
            toast.success('Data Added Successfully!!!')
            setModalOpen(false)
        }
    })

    const onSubmit = async (data) => {
        if (serviceProvider?.email === user?.email) return toast.error('Action not permitted!')

        const bookNowData = {
            serviceId: _id,
            serviceName,
            serviceImage,
            serviceProvider,
            serviceArea,
            servicePrice,
            serviceDescription,
            currentUser: {
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            },
            specialInstruction: data?.specialInstruction,
            serviceTakingDate: data?.serviceTakingDate,
        }

        try {
            await mutateAsync(bookNowData)
            reset()
        } catch (error) {
            toast.error(error.message)
        }
    };

    return (
        <div
            className={`${modalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
                } w-full h-screen fixed top-0 left-0 z-50 bg-[#000000c2] flex items-center justify-center transition-all duration-300 `}>
            <div className="w-[90%] lg:w-[50%] bg-[#ffffff] rounded-lg p-4 max-h-[80vh] overflow-y-auto">
                <div className="w-full flex items-end justify-end">
                    <RxCross1
                        className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                        onClick={() => setModalOpen(false)}
                    />
                </div>

                <h2 className='text-center font-bold text-5xl mb-4'>Book Service</h2>

                <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                    {/* Service ID */}
                    <div>
                        <label htmlFor="serviceID" className="text-[1.1rem] font-[500]">
                            Service ID <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="inputField cursor-not-allowed"
                            value={_id}
                            disabled
                        />
                    </div>

                    {/* Service Name */}
                    <div>
                        <label htmlFor="serviceName" className="text-[1.1rem] font-[500]">
                            Service Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="inputField cursor-not-allowed"
                            value={serviceName}
                            disabled
                        />
                    </div>

                    {/* Service Image */}
                    <div>
                        <label htmlFor="serviceImage" className="text-[1.1rem] font-[500]">
                            Service Image <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="inputField cursor-not-allowed"
                            value={serviceImage}
                            disabled
                        />
                    </div>

                    {/* Provider Name */}
                    <div>
                        <label htmlFor="providerName" className="text-[1.1rem] font-[500]">
                            provider Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="inputField cursor-not-allowed"
                            value={serviceProvider?.name}
                            disabled
                        />
                    </div>

                    {/* Provider Email */}
                    <div>
                        <label htmlFor="providerEmail" className="text-[1.1rem] font-[500]">
                            Provider Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="inputField cursor-not-allowed"
                            value={serviceProvider?.email}
                            disabled
                        />
                    </div>

                    {/* Current User Name */}
                    <div>
                        <label htmlFor="currentUserName" className="text-[1.1rem] font-[500]">
                            Current User Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="inputField cursor-not-allowed"
                            value={user?.displayName}
                            disabled
                        />
                    </div>

                    {/* Current User Email */}
                    <div>
                        <label htmlFor="currentUserEmail" className="text-[1.1rem] font-[500]">
                            Current User Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="inputField cursor-not-allowed"
                            value={user?.email}
                            disabled
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label htmlFor="price" className="text-[1.1rem] font-[500]">
                            Price <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            className="inputField cursor-not-allowed"
                            value={servicePrice}
                            disabled
                        />
                    </div>

                    {/* Service Area */}
                    <div>
                        <label htmlFor="serviceArea" className="text-[1.1rem] font-[500]">
                            Service Area <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="inputField cursor-not-allowed"
                            value={serviceArea}
                            disabled
                        />
                    </div>

                    {/* Service Taking Date */}
                    <div>
                        <label htmlFor="serviceTakingDate" className="text-[1.1rem] font-[500]">
                            Service Taking Date <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            defaultValue={new Date().toISOString().split('T')[0]}
                            className="inputField"
                            {...register("serviceTakingDate", { required: 'Talking Date is Required' })}
                        />
                        {errors.serviceTakingDate && <p className="flex text-red-500 gap-1 items-center"><MdError /> {errors.serviceTakingDate.message} </p>}
                    </div>

                    {/* Special instruction */}
                    <div>
                        <textarea
                            type="text"
                            rows={6}
                            placeholder="Special instruction"
                            className="inputField w-full"
                            {...register("specialInstruction", { required: 'Special instruction is required', minLength: { value: 10, message: 'Must have been 10 character' } })}
                        />
                        {errors.specialInstruction && <p className="flex text-red-500 gap-1 items-center"><MdError /> {errors.specialInstruction.message} </p>}
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <button
                            type="submit"
                            className="inputButton">
                            {
                                isPending ? 'Purchasing...' : 'Purchase'
                            }
                        </button>
                    </div>

                </form>
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

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
import { MdError } from "react-icons/md";
import { useEffect } from "react";
const UpdateProfile = () => {
    const { updateUserProfile, setUser } = useAuth();
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        document.title = 'Update Profile || Service Orbit'
    }, []);

    const onSubmit = ({ fullName, photoUrl }) => {
        updateUserProfile({ displayName: fullName, photoURL: photoUrl })
            .then(() => {
                setUser((prevUser) => ({
                    ...prevUser,
                    displayName: fullName,
                    photoURL: photoUrl,
                }));
                toast.success('Profile Updated Successfully')
                navigate('/')
            })
            .catch(() => {
                toast.error('Profile Update Failed')
            })
    };
    return (
        <section className="w-full h-auto flex items-center justify-center sm:py-12 p-6">
            <div className="w-full sm:w-[40%]  rounded-lg sm:py-6 sm:px-8 p-4 flex flex-col gap-5 shadow-md">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
                    <h3 className="text-[1.8rem] font-[700]  text-center">
                        Update Profile
                    </h3>

                    <div>
                        <input
                            className="inputField"
                            placeholder="Full Name"
                            {...register("fullName", { required: 'Name is required', minLength: { value: 5, message: 'Name must be at least 5 characters long.' } })} />
                        {errors.fullName && <p className="flex text-red-500 gap-1 items-center"><MdError /> {errors.fullName.message} </p>}
                    </div>

                    <div>
                        <input
                            className="inputField"
                            placeholder="Photo Url"
                            {...register("photoUrl", { required: 'Photo Url is required.', pattern: { value: new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i'), message: 'Invalid URL (png, jpg, jpeg, bmp, gif, webp).' } })} />
                        {errors.photoUrl && <p className="flex text-red-500 gap-1 items-center"><MdError /> {errors.photoUrl.message} </p>}
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <button
                            type="submit"
                            className="inputButton"
                        >
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default UpdateProfile;

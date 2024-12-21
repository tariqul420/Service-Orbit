import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { MdError } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import spaceRegister from '../../assets/Lottie/space_register.json'
import toast from "react-hot-toast";

const Register = () => {
    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const [isEyeOpenRe, setIsEyeOpenRe] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const { socialAuth, createUser, updateUserProfile } = useAuth()
    const navigate = useNavigate()

    const googleProvider = new GoogleAuthProvider();

    const onSubmit = (data) => {
        const { fullName, email, password, photoUrl } = data;
        console.table({ fullName, email, password, photoUrl });

        // Register with email and password
        createUser(email, password)
            .then(() => {
                updateUserProfile({ displayName: fullName, photoURL: photoUrl })
                    .then(() => {
                        navigate('/')
                        toast.success('Register Successfully.')
                    })
                    .catch(() => {
                        toast.error('Not update Your Profile.')
                    })
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    toast.error('User already exists!')
                    navigate('/login')
                }
            })

    }

    return (
        <>
            <section className="w-11/12 md:w-10/12 mx-auto h-auto flex flex-col-reverse lg:flex-row my-0 lg:my-12">
                {/* Register Form */}
                <div className="shadow-md backdrop-blur-3xl rounded-lg sm:py-6 sm:px-8 p-4 flex flex-col gap-5 flex-1">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
                        <h3 className="text-[1.8rem] font-[700] text-center">
                            Register
                        </h3>

                        <div>
                            {/* Full Name */}
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full  name"
                                className="py-3 font-medium px-4 border focus:outline-[#3B82F6] border-gray-300 rounded-lg w-full"
                                {...register("fullName", { required: 'Name is required', minLength: { value: 5, message: 'Name must be at least 5 characters long.' } })}
                            />
                            {errors.fullName && <p className="flex text-red-500 gap-1 items-center"><MdError /> {errors.fullName.message} </p>}
                        </div>

                        <div>
                            {/* Photo Url */}
                            <input
                                type="text"
                                name="photoUrl"
                                placeholder="Photo Url"
                                className="py-3 font-medium px-4 border focus:outline-[#3B82F6] border-gray-300 rounded-lg w-full"
                                {...register("photoUrl", { required: 'Photo Url is required.', pattern: { value: new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i'), message: 'Invalid URL (png, jpg, jpeg, bmp, gif, webp).' } })}
                            />
                            {errors.photoUrl && <p className="flex text-red-500 gap-1 items-center"><MdError /> {errors.photoUrl.message} </p>}
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="py-3 font-medium px-4 border focus:outline-[#3B82F6] border-gray-300 rounded-lg w-full"
                                {...register("email", { required: 'Email is required' })}
                            />
                            {errors.email && <p className="flex text-red-500 gap-1 items-center"><MdError /> {errors.email.message} </p>}
                        </div>

                        {/* Password */}
                        <div className="w-full relative">
                            <input
                                type={isEyeOpen ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="py-3 font-medium px-4 border focus:outline-[#3B82F6] border-gray-300 rounded-lg w-full"
                                {...register("password", {
                                    required: 'Password is required',
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                                        message: 'Password must be 6+ chars with uppercase, lowercase, and a number.'
                                    }
                                })}
                            />

                            {errors.password && <p className="flex text-red-500 gap-1 items-center"><MdError /> {errors.password.message} </p>}

                            {isEyeOpen ? (
                                <BsEyeSlash
                                    className="absolute top-4 right-4 text-[1.2rem] text-[#777777] cursor-pointer"
                                    onClick={() => setIsEyeOpen(false)}
                                />
                            ) : (
                                <BsEye
                                    className="absolute top-4 right-4 text-[1.2rem] text-[#777777] cursor-pointer"
                                    onClick={() => setIsEyeOpen(true)}
                                />
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div className="w-full relative">
                            <input
                                type={isEyeOpenRe ? "text" : "password"}
                                name="password"
                                placeholder="Confirm Password"
                                className="py-3 font-medium px-4 border focus:outline-[#3B82F6] border-gray-300 rounded-lg w-full"
                                {...register("confirmPassword", {
                                    required: 'Confirm Password is required',
                                    validate: value => value === watch('password') || 'Passwords do not match'
                                })}
                            />

                            {errors.confirmPassword && <p className="flex text-red-500 gap-1 items-center"><MdError /> {errors.confirmPassword.message} </p>}

                            {isEyeOpenRe ? (
                                <BsEyeSlash
                                    className="absolute top-4 right-4 text-[1.2rem] text-[#777777] cursor-pointer"
                                    onClick={() => setIsEyeOpenRe(false)}
                                />
                            ) : (
                                <BsEye
                                    className="absolute top-4 right-4 text-[1.2rem] text-[#777777] cursor-pointer"
                                    onClick={() => setIsEyeOpenRe(true)}
                                />
                            )}
                        </div>

                        <div className="w-full flex items-center justify-center">
                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-[#3B82F6] text-white border-none font-bold outline-none rounded-lg mt-3"
                            >
                                Register
                            </button>
                        </div>
                        <div className="flex items-center justify-center w-full gap-1">
                            <span className="text-[1rem] dark:text-gray-400 font-[500]">
                                Already have an account?{" "}
                            </span>
                            <span>
                                <Link to={"/login"} className="text-[1rem] font-[500]">
                                    Login
                                </Link>
                            </span>
                        </div>
                    </form>

                    <div className="w-full my-1 flex items-center justify-center gap-3">
                        <hr className="w-[45%] bg-gray-400 h-[2px]" />
                        <p>or</p>
                        <hr className="w-[45%] bg-gray-400 h-[2px]" />
                    </div>

                    <button
                        onClick={() => socialAuth(googleProvider)}
                        className="flex items-center justify-center py-2 px-4 gap-4 border border-gray-300 rounded-lg w-full text-[1rem] font-medium"
                    >
                        <FcGoogle className="text-[2rem]" />
                        Sign Up with Google
                    </button>
                </div>

                {/* Lottie image */}
                <div className="flex-1">
                    <Lottie animationData={spaceRegister} />
                </div>
            </section>
        </>
    );
};

export default Register;
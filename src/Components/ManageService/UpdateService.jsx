import { useForm } from "react-hook-form";
import { MdError } from "react-icons/md";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import axios from "axios";
import LoadingSpinner from "../Common/LoadingSpinner";

const UpdateService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { id } = useParams();
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const queryClient = useQueryClient();
    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'Update Service || Service Orbit'
    }, []);

    const { isPending, mutateAsync } = useMutation({
        mutationFn: async (serviceData) => {
            await axiosSecure.put(`/update-service/${id}`, serviceData)
        },
        onSuccess: () => {
            toast.success('Update Successfully!!!')
            queryClient.invalidateQueries(["serviceDetails"]);
            navigate('/manage-service')
        }
    })

    const { data: serviceDetails, isLoading } = useQuery({
        queryKey: ['serviceDetails', id],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/service-details/${id}`);
            return data;
        },
    });

    if (isLoading) return <LoadingSpinner />;

    const onSubmit = async (data) => {
        const { serviceImage, serviceName, serviceArea, servicePrice, serviceDescription } = data;

        const serviceData = {
            serviceImage,
            serviceName,
            serviceArea,
            servicePrice,
            serviceDescription,
            serviceProvider: {
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            }
        }

        try {
            await mutateAsync(serviceData)
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <section className="w-11/12 md:w-10/12 mx-auto h-auto flex flex-col-reverse lg:flex-row my-0 lg:my-12">
            {/* Update Service */}
            <div className="shadow-md backdrop-blur-3xl rounded-lg sm:py-6 sm:px-8 p-4 flex flex-col gap-5 flex-1">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
                    <h3 className="text-[3rem] font-[700] text-center">
                        Update Service
                    </h3>

                    {/* Service Image */}
                    <div>
                        <input
                            type="text"
                            placeholder="Services Image"
                            className="inputField w-full"
                            defaultValue={serviceDetails?.serviceImage}
                            {...register("serviceImage", { required: 'Photo Url is required.' })}
                        />
                        {errors.serviceImage && <p className="flex text-red-500 gap-1 items-center"><MdError /> {errors.serviceImage.message} </p>}
                    </div>

                    {/* Service Name */}
                    <div>
                        <input
                            type="text"
                            placeholder="Service Name"
                            className="inputField"
                            defaultValue={serviceDetails?.serviceName}
                            {...register("serviceName", { required: 'Services Name is required' })}
                        />
                        {errors.serviceName && <p className="flex text-red-500 gap-1 items-center"><MdError /> {errors.serviceName.message} </p>}
                    </div>

                    {/* Service Area */}
                    <div>
                        <input
                            type="text"
                            placeholder="Service Area"
                            className="inputField"
                            defaultValue={serviceDetails?.serviceArea}
                            {...register("serviceArea", { required: 'Services Area is required' })}
                        />
                        {errors.serviceArea && <p className="flex text-red-500 gap-1 items-center"><MdError /> {errors.serviceArea.message} </p>}
                    </div>

                    {/* Service Price */}
                    <div>
                        <input
                            type="number"
                            placeholder="Service Price"
                            className="inputField"
                            defaultValue={serviceDetails?.servicePrice}
                            {...register("servicePrice", { required: 'Service Price is required' })}
                        />
                        {errors.servicePrice && <p className="flex text-red-500 gap-1 items-center"><MdError /> {errors.servicePrice.message} </p>}
                    </div>

                    {/* Service Description */}
                    <div>
                        <textarea
                            type="text"
                            rows={6}
                            defaultValue={serviceDetails?.serviceDescription}
                            placeholder="Services Description"
                            className="inputField w-full"
                            {...register("serviceDescription", { required: 'Service Description is required' })}
                        />
                        {errors.serviceDescription && <p className="flex text-red-500 gap-1 items-center"><MdError /> {errors.serviceDescription.message} </p>}
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <button
                            type="submit"
                            className="inputButton">
                            {isPending ? 'Updating...' : 'Update Service'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default UpdateService;
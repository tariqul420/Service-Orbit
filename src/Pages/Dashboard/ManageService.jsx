import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import LoadingSpinner from "../../Components/Common/LoadingSpinner";
import { Link } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import toast from "react-hot-toast";

const ManageService = () => {
    const axiosSecure = useAxiosSecure()
    const queryClient = useQueryClient();
    const { user } = useAuth()

    useEffect(() => {
        document.title = 'Manage Service || Service Orbit'
    }, []);

    const { data: myService, isLoading } = useQuery({
        queryKey: ['manageService'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/manage-service?email=${user?.email}`)
            return data
        }
    })

    // Delete service
    const deleteMutation = useMutation({
        mutationFn: async (id) => {
            await axiosSecure.delete(`/manage-service/${id}?email=${user?.email}`);
        },
        onSuccess: () => {
            toast.success("Deleted successfully!");
            queryClient.invalidateQueries(["manageService"]);
        },
        onError: (error) => {
            toast.error(`Error: ${error.message}`);
        },
    });

    const handleDelete = (id) => {
        deleteMutation.mutate(id);
    };


    const modernDelete = id => {
        toast(t => (
            <div className='flex gap-3 items-center'>
                <div>
                    <p>
                        Are you <b>sure?</b>
                    </p>
                </div>
                <div className='gap-2 flex'>
                    <button
                        className='bg-red-400 text-white px-3 py-1 rounded-md'
                        onClick={() => {
                            toast.dismiss(t.id)
                            handleDelete(id)
                        }}
                    >
                        Yes
                    </button>
                    <button
                        className='bg-green-400 text-white px-3 py-1 rounded-md'
                        onClick={() => toast.dismiss(t.id)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        ))
    }


    if (isLoading) return <LoadingSpinner />

    return (
        <>
            {
                myService.length === 0 ? (
                    <div
                        className="p-6 sm:px-20 sm:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl dark:bg-gray-700 bg-white shadow-md my-12">
                        <img src="https://i.ibb.co/cgfgxGH/Illustrations.png" alt="empty/image" className="w-full sm:w-[200px]" />

                        <h1 className="text-[3rem] mt-6 font-[500] text-center">Your No Service Available</h1>

                        <p className="text-[0.9rem] dark:text-gray-300 text-gray-600">Whoops ... this information is not available for a moment</p>
                    </div>
                ) : (
                    <section className='container px-4 mx-auto my-12'>
                        <div className='flex items-center gap-x-3'>
                            <h2 className='text-lg font-medium'>My Services</h2>

                            <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                                {myService.length} Services
                            </span>
                        </div>

                        <div className='flex flex-col my-4 mb-8'>
                            <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                                <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                                    <div className='overflow-hidden border border-gray-200 dark:border-gray-600  md:rounded-lg'>
                                        <table className='min-w-full divide-y divide-gray-200 shadow-md'>
                                            <thead className='bg-gray-50 dark:bg-gray-700'>
                                                <tr>
                                                    <th
                                                        scope='col'
                                                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right '
                                                    >
                                                        <div className='flex items-center gap-x-3'>
                                                            <span>Service Title</span>
                                                        </div>
                                                    </th>

                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '
                                                    >
                                                        Image URL
                                                    </th>

                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '
                                                    >
                                                        Description
                                                    </th>

                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '
                                                    >
                                                        <span>Location</span>
                                                    </th>

                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '
                                                    >
                                                        <button className='flex items-center gap-x-2'>
                                                            <span>Price</span>
                                                        </button>
                                                    </th>

                                                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '>
                                                        Edit
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className='bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600'>
                                                {
                                                    myService.map(service => <tr key={service?._id}>
                                                        <td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                            {service?.serviceName}
                                                        </td>

                                                        <td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                            {service?.serviceImage.substring(0, 40)}...
                                                        </td>
                                                        <td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                            {service?.serviceDescription.substring(0, 40)}...
                                                        </td>

                                                        <td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                            {service?.serviceArea}
                                                        </td>

                                                        <td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                            $ {service?.servicePrice}
                                                        </td>

                                                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                            <div className='flex items-center gap-x-6'>
                                                                <button
                                                                    onClick={() => modernDelete(service?._id)} className=' transition-colors duration-200   hover:text-red-500 focus:outline-none'>
                                                                    <RiDeleteBin2Fill size={20} />
                                                                </button>

                                                                <Link
                                                                    to={`/update-service/${service?._id}`}
                                                                    className=' transition-colors duration-200   hover:text-yellow-500 focus:outline-none'
                                                                >
                                                                    <BiSolidEdit size={20} />
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>)
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }

        </>
    );
};

export default ManageService;
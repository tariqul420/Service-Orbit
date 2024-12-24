import { useEffect } from "react";
import { GrCompliance } from "react-icons/gr";
import { PiShareNetworkFill } from "react-icons/pi";
import useAxiosSecure from "../Hook/useAxiosSecure";
import useAuth from "../Hook/useAuth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import LoadingSpinner from "../Components/Common/LoadingSpinner";
import toast from "react-hot-toast";

const ServiceToDo = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const queryClient = useQueryClient();

    useEffect(() => {
        document.title = 'Service-To-Do || Service Orbit'
    }, []);

    const { mutateAsync } = useMutation({
        mutationFn: async (status) => {
            await axiosSecure.patch(`/service-todo-update-status/${status?.id}`, status)
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["service-todo"]);
            toast.success('Status Updated!')
        }
    })

    const { data: serviceToDo, isLoading } = useQuery({
        queryKey: ['service-todo'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/service-todo?email=${user?.email}`)
            return data
        }
    })

    const handelActionChange = async (id, currentStatus) => {
        try {
            await mutateAsync({ id, currentStatus })
        } catch (error) {
            toast.error(error.message)
        }
    };

    if (isLoading) return <LoadingSpinner />

    return (
        <>
            {
                serviceToDo.length === 0 ? (
                    <div
                        className="p-6 sm:px-20 sm:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl dark:bg-gray-700 bg-white shadow-md my-12">
                        <img src="https://i.ibb.co/cgfgxGH/Illustrations.png" alt="empty/image" className="w-full sm:w-[200px]" />

                        <h1 className="text-[3rem] mt-6 font-[500]">No Service Request Available</h1>

                        <p className="text-[0.9rem] dark:text-gray-300 text-gray-600">Whoops ... this information is not available for a moment</p>
                    </div>
                ) : (
                    <section className='container px-4 mx-auto my-12'>
                        <div className='flex items-center gap-x-3'>
                            <h2 className='text-lg font-medium'>Service To-Do:</h2 >

                            <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                                {serviceToDo.length} Requests
                            </span>
                        </div >

                        <div className='flex flex-col mt-6'>
                            <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                                <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                                    <div className='overflow-hidden border border-gray-200 dark:border-gray-600  md:rounded-lg mb-12'>
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
                                                        Customer Email
                                                    </th>

                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '
                                                    >
                                                        Customer Name
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
                                                        <span>Price</span>
                                                    </th>

                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '
                                                    >
                                                        <span>Talking Date</span>
                                                    </th>

                                                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '>
                                                        Status
                                                    </th>

                                                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '>
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className='bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600'>
                                                {
                                                    serviceToDo.map(service => <tr key={service?._id}>
                                                        <td className='px-4 py-4 text-sm  whitespace-nowrap capitalize'>
                                                            {service?.serviceName}
                                                        </td>
                                                        <td className='px-4 py-4 text-sm  whitespace-nowrap'>
                                                            {service?.currentUser?.email}
                                                        </td>

                                                        <td className='px-4 py-4 text-sm  whitespace-nowrap'>
                                                            {service?.currentUser?.name}
                                                        </td>

                                                        <td className='px-4 py-4 text-sm capitalize  whitespace-nowrap'>
                                                            {service?.serviceArea}
                                                        </td>
                                                        <td className='px-4 py-4 text-sm capitalize  whitespace-nowrap'>
                                                            $ {service?.servicePrice}
                                                        </td>
                                                        <td className='px-4 py-4 text-sm capitalize  whitespace-nowrap'>
                                                            {service?.serviceTakingDate}
                                                        </td>
                                                        <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                                            <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${service?.serviceStatus === 'Completed' && 'bg-green-100 text-green-500'} ${service?.serviceStatus === 'pending' && 'bg-amber-100 text-amber-500'} ${service?.serviceStatus === 'Working' && 'bg-blue-100 text-blue-500'}`}>
                                                                <span className={`h-1.5 w-1.5 rounded-full ${service?.serviceStatus === 'Completed' && 'bg-green-500'} ${service?.serviceStatus === 'pending' && 'bg-yellow-500'} ${service?.serviceStatus === 'Working' && 'bg-blue-500'}`}></span>
                                                                <h2 className='text-sm font-medium capitalize'>{service?.serviceStatus}</h2>
                                                            </div>
                                                        </td>
                                                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                            <div className='flex items-center gap-x-6'>
                                                                <button
                                                                    disabled={service?.serviceStatus === 'Completed' || service?.serviceStatus === 'Working'}
                                                                    onClick={() => handelActionChange(service?._id, 'Working')}
                                                                    className='disabled:cursor-not-allowed transition-colors duration-200   hover:text-red-500 focus:outline-none'>
                                                                    <PiShareNetworkFill size={22} />
                                                                </button>

                                                                <button
                                                                    disabled={service?.serviceStatus === 'pending' || service?.serviceStatus === 'Completed'}
                                                                    onClick={() => handelActionChange(service?._id, 'Completed')}
                                                                    className='disabled:cursor-not-allowed transition-colors duration-200   hover:text-green-500 focus:outline-none'>
                                                                    <GrCompliance size={20} />
                                                                </button>
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
                    </section >
                )
            }
        </>
    );
};

export default ServiceToDo;
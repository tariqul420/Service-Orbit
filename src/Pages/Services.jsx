import axios from "axios";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import LoadingSpinner from "../Components/Common/LoadingSpinner";
import ServiceCard from "../Components/Common/ServiceCard";
import ReactPaginate from "react-paginate";

const Services = () => {
    const [search, setSearch] = useState('')
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentItems, setCurrentItems] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const itemsPerPage = 8

    useEffect(() => {
        document.title = 'Services || Service Orbit'
    }, []);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/all-services?search=${search}`)
            .then(res => {
                setServices(res?.data)
                setLoading(false)
            })
    }, [search])

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage
        setCurrentItems(services.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(services.length / itemsPerPage))
    }, [itemOffset, services]);

    const handelPageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % services.length
        setItemOffset(newOffset)
    }

    if (loading) return <LoadingSpinner />

    return (
        <>
            <section className="my-12">
                <div className='w-full relative flex-1'>
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        type='text'
                        placeholder='Search movie'
                        className='border border-[#e5eaf2] py-3 pl-4 pr-[65px] outline-none w-full rounded-md dark:bg-gray-700 font-semibold shadow-lg' />

                    <span
                        className='bg-color-accent dark:bg-color-accent-d text-white absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer  group'><IoSearch
                            className='text-[1.3rem]  dark:group-hover:text-gray-200' /></span>
                </div>

                <h2
                    className="font-bold max-sm:text-5xl text-6xl text-center mt-12">All Services</h2>


                {
                    services.length === 0 ? (
                        <div
                            className="boxShadow p-6 sm:px-20 sm:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl dark:bg-gray-700 bg-white shadow-md mt-12">
                            <img src="https://i.ibb.co/cgfgxGH/Illustrations.png" alt="empty/image" className="w-full sm:w-[200px]" />

                            <h1 className="text-[3rem] mt-6 font-[500]">Result Not Found</h1>

                            <p className="text-[0.9rem] dark:text-gray-300 text-gray-600">Whoops ... this information is not available for a moment</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                            {
                                currentItems.map(service => <ServiceCard key={service._id} service={service} />)
                            }
                        </div>
                    )
                }
            </section>

            <ReactPaginate
                breakLabel="..."
                nextLabel="Next >"
                onPageChange={handelPageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< Previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
            />
        </>
    );
};

export default Services;
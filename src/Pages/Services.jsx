import axios from "axios";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import ReactPaginate from "react-paginate";
import LoadingSpinner from "../Components/Common/LoadingSpinner";
import ServiceCard from "../Components/Common/ServiceCard";

const Services = () => {
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentItems, setCurrentItems] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const itemsPerPage = 12

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

    useEffect(() => {

        let sortedServices = [...services]

        if (sort === 'asc') {
            sortedServices?.sort((a, b) => a.servicePrice - b.servicePrice)
        } else if (sort === 'dsc') {
            sortedServices?.sort((a, b) => b.servicePrice - a.servicePrice)
        }

        setServices(sortedServices)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort]);

    if (loading) return <LoadingSpinner />

    return (
        <>
            <section className="my-12">
                {/* search and sort data */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                    {/* Search Bar */}
                    <div className="relative flex-1 w-full md:w-1/2 lg:w-1/3">
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            placeholder="Search Services (Title)"
                            className="border border-gray-300 dark:border-gray-600 py-3 pl-4 pr-12 w-full rounded-md dark:bg-gray-800 dark:text-white font-semibold shadow-md focus:ring-2 focus:ring-color-accent dark:focus:ring-color-accent-d outline-none transition-all"
                        />
                        <span className="absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md bg-color-accent dark:bg-color-accent-d text-white cursor-pointer group">
                            <IoSearch className="text-xl dark:group-hover:text-gray-200" />
                        </span>
                    </div>

                    {/* Sorting Dropdown */}
                    <div className="w-full md:w-1/3 lg:w-1/4">
                        <select
                            onChange={(e) => setSort(e.target.value)}
                            name="sort"
                            id="sort"
                            className="w-full py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium shadow-md outline-none focus:ring-2 focus:ring-color-accent dark:focus:ring-color-accent-d transition-all"
                        >
                            <option value="">Sort By Price</option>
                            <option value="asc">Ascending Price</option>
                            <option value="dsc">Descending Price</option>
                        </select>
                    </div>
                </div>

                {
                    services.length === 0 ? (
                        <div
                            className="boxShadow p-6 sm:px-20 sm:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl dark:bg-color-dark-lite bg-white shadow-md mt-12">
                            <img src="https://i.ibb.co/cgfgxGH/Illustrations.png" alt="empty/image" className="w-full sm:w-[200px]" />

                            <h1 className="text-[3rem] mt-6 font-[500]">Result Not Found</h1>

                            <p className="text-[0.9rem] dark:text-gray-300 text-gray-600">Whoops ... this information is not available for a moment</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-20">
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
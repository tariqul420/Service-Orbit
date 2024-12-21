import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import AuthBtn from "./AuthBtn";
import useAuth from "../../../Hook/useAuth";
import Profile from "./Profile";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const { user } = useAuth();
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between relative boxShadow rounded-full px-[10px] w-11/12 mx-auto py-6">
            <div>
                <Link to='/'>
                    <h2 className="font-bold text-4xl font-Montserrat max-sm:hidden">ServiceOrbit</h2>
                    <h2 className="font-bold text-4xl font-Montserrat sm:hidden">S.Orbit</h2>
                </Link>
            </div>

            <div className="items-center gap-[15px] flex">
                <div className="border-r-2 pr-4 max-sm:hidden">
                    <ul className="items-center gap-[20px] text-[1rem] font-semibold lg:flex hidden">
                        <li className="navBarLink">
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li className="navBarLink">
                            <NavLink to='/services'>
                                Services
                            </NavLink>
                        </li>
                        <li className="navBarLink">
                            <NavLink to='/dashboard'>
                                Dashboard
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <ThemeToggle />

                {
                    user ? <Profile /> : <AuthBtn />
                }

                <CiMenuFries className="text-[1.8rem] mr-1 cursor-pointer lg:hidden flex"
                    onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} />
            </div>

            <aside
                className={` ${mobileSidebarOpen ? "translate-y-0 opacity-100 z-[2000]" : "translate-y-[-200px] opacity-0 z-[-1]"} lg:hidden bg-gray-200 dark:bg-gray-700 boxShadow p-4 text-center absolute top-[65px] right-0 w-full md:w-4/12 rounded-md transition-all duration-300`}>
                <div className="relative mb-5">
                </div>
                <ul className="items-center gap-[20px] text-[1rem] lg:flex">
                    <li className="navBarLink">
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li className="navBarLink">
                        <NavLink to='/services'>
                            Services
                        </NavLink>
                    </li>
                    <li className="navBarLink">
                        <NavLink to='/dashboard'>
                            Dashboard
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </nav>
    );
};

export default Navbar;
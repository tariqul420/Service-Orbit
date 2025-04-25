import { useEffect, useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { FaBookmark } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import { MdManageAccounts, MdMedicalServices } from 'react-icons/md';
import { RiUserAddFill } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import AuthBtn from './AuthBtn';
import Profile from './Profile';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { user } = useAuth();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <nav className={`w-full py-6 sticky top-0 z-[1000] bg-white dark:bg-[#121b27] transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <h2 className="font-bold text-3xl font-Montserrat max-sm:hidden">ServiceOrbit</h2>
            <img className="sm:hidden w-[3rem]" src="/service-logo.png" alt="Logo" />
          </Link>
        </div>

        <div className="items-center gap-[15px] flex">
          <div className="border-r-2 pr-4 max-sm:hidden">
            <ul className="items-center gap-[20px] text-[1rem] font-semibold lg:flex hidden">
              <li className="navBarLink">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="navBarLink">
                <NavLink to="/services">Services</NavLink>
              </li>
              <li className="navBarLink">
                <NavLink to="/contact-us">Contact Us</NavLink>
              </li>
              <li className="navBarLink">
                <NavLink to="/about-us">About Us</NavLink>
              </li>
              {user && (
                <li>
                  <div className="flex items-center gap-[10px] cursor-pointer relative" onClick={() => setDashboardOpen(!dashboardOpen)}>
                    <div className="relative navBarLink">
                      <p>Dashboard</p>
                    </div>

                    <div
                      className={`${
                        dashboardOpen ? 'translate-y-0 opacity-100 z-[1000]' : 'translate-y-[10px] opacity-0 z-[-1] hidden'
                      } bg-white w-max rounded-md shadow-md absolute top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px] dark:bg-color-dark-lite`}>
                      <NavLink to="/add-service" className="navBarLink">
                        <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] hover:bg-gray-50 dark:hover:bg-gray-600/30">
                          <RiUserAddFill />
                          Add Service
                        </p>
                      </NavLink>
                      <NavLink to="/manage-service" className="navBarLink">
                        <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] hover:bg-gray-50 dark:hover:bg-gray-600/30">
                          <MdManageAccounts />
                          Manage Service
                        </p>
                      </NavLink>
                      <NavLink to="/booked-service" className="navBarLink">
                        <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] hover:bg-gray-50 dark:hover:bg-gray-600/30">
                          <FaBookmark />
                          Booked-Services
                        </p>
                      </NavLink>
                      <NavLink to="/service-to-do" className="navBarLink">
                        <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] hover:bg-gray-50 dark:hover:bg-gray-600/30">
                          <MdMedicalServices />
                          Service-To-Do
                        </p>
                      </NavLink>
                    </div>

                    <IoIosArrowUp className={`${dashboardOpen ? 'rotate-0' : 'rotate-[180deg]'} transition-all duration-300 sm:block hidden`} />
                  </div>
                </li>
              )}
            </ul>
          </div>

          <ThemeToggle />

          {user ? <Profile /> : <AuthBtn />}

          <CiMenuFries className="text-[1.8rem] mr-1 cursor-pointer lg:hidden flex" onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} />
        </div>

        <aside
          className={`${
            mobileSidebarOpen ? 'translate-y-0 opacity-100 z-[2000]' : 'translate-y-[-200px] opacity-0 z-[-1]'
          } lg:hidden bg-gray-200 dark:bg-color-dark-lite boxShadow p-4 text-center absolute top-[65px] right-0 w-full md:w-4/12 rounded-md transition-all duration-300`}>
          <ul className="flex flex-col justify-center items-center gap-[20px] text-[1rem] lg:flex">
            <li className="navBarLink">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="navBarLink">
              <NavLink to="/services">Services</NavLink>
            </li>
            <li className="navBarLink">
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
            {user && (
              <li>
                <div className="flex items-center gap-[10px] cursor-pointer relative" onClick={() => setDashboardOpen(!dashboardOpen)}>
                  <div className="relative navBarLink">
                    <p>Dashboard</p>
                  </div>

                  <div
                    className={`${
                      dashboardOpen ? 'translate-y-0 opacity-100 z-[1000]' : 'translate-y-[10px] opacity-0 z-[-1]'
                    } bg-white w-max rounded-md shadow-md absolute top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px] dark:bg-color-dark-lite`}>
                    <NavLink to="/add-service" className="navBarLink">
                      <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] hover:bg-gray-50 dark:hover:bg-gray-600/30">
                        <RiUserAddFill />
                        Add Service
                      </p>
                    </NavLink>
                    <NavLink to="/manage-service" className="navBarLink">
                      <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] hover:bg-gray-50 dark:hover:bg-gray-600/30">
                        <MdManageAccounts />
                        Manage Service
                      </p>
                    </NavLink>
                    <NavLink to="/booked-service" className="navBarLink">
                      <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] hover:bg-gray-50 dark:hover:bg-gray-600/30">
                        <FaBookmark />
                        Booked-Services
                      </p>
                    </NavLink>
                    <NavLink to="/service-to-do" className="navBarLink">
                      <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] hover:bg-gray-50 dark:hover:bg-gray-600/30">
                        <MdMedicalServices />
                        Service-To-Do
                      </p>
                    </NavLink>
                  </div>

                  <IoIosArrowUp className={`${dashboardOpen ? 'rotate-0' : 'rotate-[180deg]'} transition-all duration-300 sm:block hidden`} />
                </div>
              </li>
            )}
          </ul>
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;

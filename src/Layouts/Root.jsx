import { Outlet } from 'react-router-dom';
import Footer from '../Components/Common/Footer';
import Navbar from '../Components/Common/Navbar/Navbar';

const Root = () => {
  return (
    <div className="font-Montserrat bg-color-primary text-color-text dark:bg-color-primary-d dark:text-color-text-d">
      <Navbar />
      <div className="min-h-[calc(100vh-403px)] w-11/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;

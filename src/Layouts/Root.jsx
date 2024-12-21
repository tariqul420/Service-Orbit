import { Outlet } from "react-router-dom";
import Navbar from "../Components/Common/Navbar/Navbar";
import Footer from "../Components/Common/Footer";

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-403px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
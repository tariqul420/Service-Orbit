import { createBrowserRouter } from "react-router-dom";
import UpdateService from "../Components/ManageService/UpdateService";
import Root from "../Layouts/Root";
import AboutUs from "../Pages/AboutUs";
import ForgotPassword from "../Pages/Authentication/ForgotPassword";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import UpdateProfile from "../Pages/Authentication/UpdateProfile";
import ContactUs from "../Pages/ContactUs";
import AddService from "../Pages/Dashboard/AddService";
import BookedServices from "../Pages/Dashboard/BookedServices";
import ManageService from "../Pages/Dashboard/ManageService";
import ServiceToDo from "../Pages/Dashboard/ServiceToDo";
import Error404 from "../Pages/Error404";
import Home from "../Pages/Home";
import ServiceDetails from "../Pages/ServiceDetails";
import Services from "../Pages/Services";
import PrivateRouter from "./PrivateRouter";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/login/forgot-password',
                element: <ForgotPassword />
            },
            {
                path: '/update-profile',
                element: <UpdateProfile />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/add-service',
                element:
                    <PrivateRouter>
                        <AddService />
                    </PrivateRouter>
            },
            {
                path: '/manage-service',
                element:
                    <PrivateRouter>
                        <ManageService />
                    </PrivateRouter>
            },
            {
                path: '/booked-service',
                element:
                    <PrivateRouter>
                        <BookedServices />
                    </PrivateRouter>
            },
            {
                path: '/service-to-do',
                element:
                    <PrivateRouter>
                        <ServiceToDo />
                    </PrivateRouter>
            },
            {
                path: '/service/:id',
                element: <ServiceDetails />
            },
            {
                path: '/update-service/:id',
                element: <UpdateService />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            }
        ]
    }
])

export default router
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import ForgotPassword from "../Pages/Authentication/ForgotPassword";
import Error404 from "../Pages/Error404";
import UpdateProfile from "../Pages/Authentication/UpdateProfile";
import Services from "../Pages/Services";
import AddService from "../Pages/AddService";
import ManageService from "../Pages/ManageService";
import BookedServices from "../Pages/BookedServices";
import PrivateRouter from "./PrivateRouter";
import ServiceToDo from "../Pages/ServiceToDo";
import ServiceDetails from "../Pages/ServiceDetails";

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
                element:
                    <PrivateRouter>
                        <ServiceDetails />
                    </PrivateRouter>
            }
        ]
    }
])

export default router
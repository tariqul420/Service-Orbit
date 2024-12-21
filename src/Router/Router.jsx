import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import ForgotPassword from "../Pages/Authentication/ForgotPassword";
import Error404 from "../Components/Common/Error404";
import UpdateProfile from "../Pages/Authentication/UpdateProfile";
import Services from "../Pages/Services";

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
        ]
    }
])

export default router
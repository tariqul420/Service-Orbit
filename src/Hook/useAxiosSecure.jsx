import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response
        }, error => {
            if (error.status === 401 || error.status === 403) {
                logOut()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            }

            return Promise.reject(error)
        })
    }, [logOut, navigate]);

    return axiosInstance
};

export default useAxiosSecure;
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.init";
import PropTypes from "prop-types";
import axios from "axios";
// import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState("")

    const socialAuth = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (updatedData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updatedData)
    }

    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser?.email) {
                const user = { email: currentUser?.email }
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user, { withCredentials: true })
                    .then(() => {
                        setUser(currentUser)
                        setLoading(false)
                    })
            } else {
                axios.post(`${import.meta.env.VITE_API_URL}/logout`, {}, { withCredentials: true })
                    .then(() => {
                        setUser(null)
                        setLoading(false)
                    })
            }
        })

        return () => {
            unsubscribe()
        }
    }, []);

    const authInfo = {
        socialAuth,
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        loginUser,
        logOutUser,
        updateUserProfile,
        resetPassword,
        email,
        setEmail
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );


};

AuthProvider.propTypes = {
    children: PropTypes.array.isRequired
}

export default AuthProvider;
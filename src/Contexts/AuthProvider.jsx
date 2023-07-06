import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { getLoginService, getSignupService } from "../Services/authServices";
import { useReducer } from "react";
import { authReducer } from "../Reducers/authReducers";
import { AUTH } from "../Common/reducerTypes";
import { darkToast, errorToast } from "../utils";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const initial_credentials = {
        user: {
            user_details: {},
            encoded_token: ""
        },
        logged: false
    }
    const [userData, authDispacth] = useReducer(authReducer, initial_credentials)

    const login = async (credential) => {
        try {
            const { data, status } = await getLoginService(credential)
            const { foundUser, encodedToken } = data
            if (status === 200) {
                authDispacth({ type: AUTH.LOGIN, payload: data })
                darkToast(`🦄 Welcome, ${data.foundUser.firstName}!`)
            }
        } catch (e) {
            console.error("error from auth provider", e)
            errorToast(`${e.status}, there's some error.`)
        }
    }

    const signup = async (credentials) => {
        try {
            const { data, status } = await getSignupService(credentials)
            if (status === 201)
                authDispacth({ type: AUTH.SIGNUP, payload: data })
            darkToast(`🦄 Welcome, ${data.createdUser.firstName}!`)
        } catch (e) {
            console.error("from signup", e)
            errorToast(`${e.status}, there's some error.`)
        }
    }
    return (
        <AuthContext.Provider value={{ login, signup, userData, authDispacth }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
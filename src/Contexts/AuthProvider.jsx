import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { getLoginService, getSignupService } from "../Services/authServices";
import { useReducer } from "react";
import { authReducer } from "../Reducers/authReducers";
import { AUTH } from "../Common/reducerTypes";

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
            }
        } catch (e) {
            console.error("error from auth provider", e)
        }
    }

    const signup = async (credentials) => {
        try {
            const { data, status } = await getSignupService(credentials)
            if (status === 201)
                authDispacth({ type: AUTH.SIGNUP, payload: data })
            // console.log("signup", res)
        } catch (e) {
            console.error("from signup", e)
        }
    }
    return (
        <AuthContext.Provider value={{ login, signup, userData, authDispacth }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
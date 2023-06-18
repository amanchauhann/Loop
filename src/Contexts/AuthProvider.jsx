import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { getLoginService } from "../Services/authServices";
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
    return (
        <AuthContext.Provider value={{ login, userData, authDispacth }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
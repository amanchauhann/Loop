import axios from "axios";

export const getLoginService = (credentials) => {
    return axios.post("/api/auth/login", credentials)
}

export const getSignupService = (credentials) => {
    return axios.post("/api/auth/signup", credentials)
}
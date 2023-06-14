import axios from "axios";

export const getUsersService = () => {
    return axios.get("/api/users");
}
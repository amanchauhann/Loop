import axios from "axios";

export const getPostsService = () => {
    return axios.get("/api/posts");
}
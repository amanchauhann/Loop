import axios from "axios";

export const getPostsService = () => {
    return axios.get("/api/posts");
}

export const getLikePostService = (post_id, encoded_token) => {
    return axios.post(
        `/api/posts/like/${post_id}`,
        {},
        {
            headers: {
                authorization: encoded_token
            },
        }
    )
}

export const getDislikePostService = (post_id, encoded_token) => {
    return axios.post(
        `/api/posts/dislike/${post_id}`,
        {},
        {
            headers: {
                authorization: encoded_token
            },
        }
    )
}
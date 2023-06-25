import axios from "axios";

export const getPostsService = () => {
    return axios.get("/api/posts");
}

export const getSpecificUserPostsService = (username) => {
    return axios.get(`/api/posts/user/${username}`)
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

export const getAddBookmarkService = (post_id, encoded_token) => {
    return axios.post(
        `/api/users/bookmark/${post_id}`,
        {},
        {
            headers: {
                authorization: encoded_token
            },
        }
    )
}

export const getRemoveBookmarkService = (post_id, encoded_token) => {
    return axios.post(
        `/api/users/remove-bookmark/${post_id}`,
        {},
        {
            headers: {
                authorization: encoded_token
            },
        }
    )
}

export const getBookmarkService = (encoded_token) => {
    return axios.get("/api/users/bookmark", {}, {
        headers: {
            authorization: encoded_token
        },
    })
}
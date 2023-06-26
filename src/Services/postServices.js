import axios from "axios";

export const getPostsService = () => {
    return axios.get("/api/posts");
}

export const getSpecificPost = (post_id) => {
    return axios.get(`/api/posts/${post_id}`)
}

export const getSpecificUserPostsService = (username) => {
    return axios.get(`/api/posts/user/${username}`)
}

export const getAddPostService = (post, encoded_token) => {
    return axios.post("/api/posts",
        {
            postData: {
                content: post
            }
        },
        {
            headers: {
                authorization: encoded_token
            },
        }
    )
}

export const getEditPostService = (edited_post, post_id, encoded_token) => {
    return axios.post(
        `/api/posts/edit/${post_id}`,
        {
            postData: {
                content: edited_post
            },
        },
        {
            headers: {
                authorization: encoded_token
            },
        }
    )
}

export const getDeletePostService = (post_id, encoded_token) => {
    return axios.delete(
        `/api/posts/${post_id}`,
        {
            headers: {
                authorization: encoded_token
            },
        }
    )
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
import axios from "axios";

export const getUsersService = () => {
    return axios.get("/api/users");
}

export const getSpecificUserService = (user_id) => {
    return axios.get(`/api/users/${user_id}`)
}

export const getUserEditService = (user_data, encoded_token) => {
    return axios.post("/api/users/edit",
        {
            userData: user_data
        },
        {
            headers: {
                authorization: encoded_token
            }
        })
}

export const getFollowService = (follow_user_id, encoded_token) => {
    return axios.post(
        `/api/users/follow/${follow_user_id}`,
        {},
        {
            headers: {
                authorization: encoded_token
            },
        }
    )
}

export const getUnfollowService = (follow_user_id, encoded_token) => {
    return axios.post(
        `/api/users/unfollow/${follow_user_id}`,
        {},
        {
            headers: {
                authorization: encoded_token
            },
        }
    )
}
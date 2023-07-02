import axios from "axios"

export const getCommentsOnPost = (post_id) => {
    return axios.get(`/api/comments/${post_id}`)
}

export const getAddCommentService = (post_id, comment_data, authorization) =>
    axios.post(
        `/api/comments/add/${post_id}`,
        { comment_data },
        { headers: { authorization } }
    );
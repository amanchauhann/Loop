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

// /api/comments/like/:postId/:commentId
export const likeCommentService = (postId, commentId, encoded_token) => {
    console.log("from service>", encoded_token)
    return axios.post(
        `/api/comments/upvote/${postId}/${commentId}`,
        {},
        {
            headers: {
                authorization: encoded_token,
            },
        }
    );
};

// /api/comments/dislike/:postId/:commentId
export const dislikeCommentService = (postId, commentId, encoded_token) => {
    return axios.post(
        `/api/comments/downvote/${postId}/${commentId}`,
        {},
        {
            headers: {
                authorization: encoded_token,
            },
        }
    );
};
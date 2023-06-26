import { POSTS } from "../Common/reducerTypes"

export const postsReducer = (state, { type, payload }) => {
    switch (type) {
        case (POSTS.INITIALISE):
            return {
                ...state,
                posts: payload
            }
        case (POSTS.FEED):
            return {
                ...state,
                feedPosts: payload
            }
        case (POSTS.SET_SORT):
            return {
                ...state,
                sort_by: payload,
                feedPosts: state.feedPosts.sort(function (a, b) {
                    if (payload === "trending") {
                        return b.likes.likeCount - a.likes.likeCount
                    } else if (payload === "latest") {
                        return new Date(b.createdAt) - new Date(a.createdAt)
                    }

                })
            }
    }
}
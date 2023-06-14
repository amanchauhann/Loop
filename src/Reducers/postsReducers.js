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
    }
}
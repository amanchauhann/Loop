import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { postsReducer } from "../Reducers/postsReducers";
import { useEffect } from "react";
import { getPostsService } from "../Services/postServices";
import { useAuth } from "./AuthProvider";

const PostsContext = createContext()

export const PostsProvider = ({ children }) => {
    const { userData: { user: { user_details } } } = useAuth()
    const initialPosts = {
        posts: [],
        feedPosts: []
    }
    const [allPosts, postsDispatch] = useReducer(postsReducer, initialPosts)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data, status } = await getPostsService()
                if (status === 200) {
                    postsDispatch({ type: "INITIALISE_POSTS", payload: data.posts })
                    // NEED TO CHANGE LATER TO AUTH USER RATHER THAN HARD CODED.
                    // postsDispatch({ type: "ADD_TO_FEED", payload: (data.posts).filter(eachPost => eachPost.username === user_details.username) })
                }
            } catch (e) {
                console.error("from PostsProvider", e)
            }
        }
        fetchPosts()
    }, [user_details])

    return (
        <PostsContext.Provider value={{ allPosts, postsDispatch }}>
            {children}
        </PostsContext.Provider>
    )
}
export const usePosts = () => useContext(PostsContext)
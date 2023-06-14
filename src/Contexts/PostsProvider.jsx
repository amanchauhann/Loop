import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { postsReducer } from "../Reducers/postsReducers";
import { useEffect } from "react";
import { getPostsService } from "../Services/postServices";

const PostsContext = createContext()

export const PostsProvider = ({ children }) => {
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
                    postsDispatch({ type: "ADD_TO_FEED", payload: (data.posts).filter(eachPost => eachPost.username === "putin") })
                }
            } catch (e) {
                console.error("from PostsProvider", e)
            }
        }
        fetchPosts()
    }, [])

    return (
        <PostsContext.Provider value={{ allPosts }}>
            {children}
        </PostsContext.Provider>
    )
}
export const usePosts = () => useContext(PostsContext)
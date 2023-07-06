import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { postsReducer } from "../Reducers/postsReducers";
import { useEffect } from "react";
import { getPostsService } from "../Services/postServices";
import { useAuth } from "./AuthProvider";
import { errorToast } from "../utils";

const PostsContext = createContext()

export const PostsProvider = ({ children }) => {
    const { userData: { user: { user_details } } } = useAuth()
    const initialPosts = {
        posts: [],
        feedPosts: [],
        sortedFeed: [],
        sort_by: ""
    }
    const [allPosts, postsDispatch] = useReducer(postsReducer, initialPosts)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data, status } = await getPostsService()
                if (status === 200) {
                    postsDispatch({ type: "INITIALISE_POSTS", payload: data.posts })
                }
            } catch (e) {
                console.error("from PostsProvider", e)
                errorToast(`${e.status} there is some error`)
            }
        }
        fetchPosts()
    }, [user_details])

    // useEffect(() => {
    //     console.log("inside render")
    //     postsDispatch({ type: "ADD_TO_FEED", payload: (allPosts.posts).filter(eachPost => eachPost.username === user_details.username) })
    // }, [allPosts.posts, user_details, allPosts.sort_by])

    // useEffect(() => {
    //     const sorted = allPosts.feedPosts.sort(function (a, b) {
    //         if (allPosts.sort_by === "trending") {
    //             return b.likes.likeCount - a.likes.likeCount
    //         } else if (allPosts.sort_by === "latest") {
    //             return new Date(b.createdAt) - new Date(a.createdAt)
    //         }
    //     })

    //     postsDispatch({ type: "ADD_TO_FEED", payload: sorted })
    // }, [allPosts.sort_by])

    return (
        <PostsContext.Provider value={{ allPosts, postsDispatch }}>
            {children}
        </PostsContext.Provider>
    )
}
export const usePosts = () => useContext(PostsContext)
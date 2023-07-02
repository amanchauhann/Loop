import { Flex, Text } from "@chakra-ui/layout"
import Nav from "../../Components/Nav"
import SideBar from "../../Components/SideBar"
import AddPost from "./Components/AddPost"
import Post from "./Components/Post"
import { usePosts } from "../../Contexts/PostsProvider"
import PostsLayout from "../../Layout/PostsLayout"
import { Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useAuth } from "../../Contexts/AuthProvider"
import SuggestionBar from "../../Components/SuggestionBar"
import { POSTS } from "../../Common/reducerTypes"
import Sort from "./Components/Sort"
import Layout from "../../Layout"

const PageFeed = () => {
    const { postsDispatch, allPosts: { posts, feedPosts, sort_by, sortFeed } } = usePosts()
    const { userData: { user: { user_details, encoded_token } } } = useAuth()
    const [selected_button, set_selected_button] = useState(sort_by);

    useEffect(() => {
        const posts_for_feed = posts?.filter(eachPost => eachPost.username === user_details.username || user_details.following.find(({ username }) => username === eachPost.username))
        postsDispatch({ type: "ADD_TO_FEED", payload: posts_for_feed.reverse() })

        // when user does any action like liking or bookmarking, this is to set the sort functionality again.
        postsDispatch({ type: POSTS.SET_SORT, payload: selected_button })
    }, [posts, user_details, selected_button])

    const handle_select = (e) => {
        postsDispatch({ type: POSTS.SET_SORT, payload: e.target.value })
        set_selected_button(e.target.value)
    }

    return (
        <>
            <Layout children={
                <Flex p={"10px"} maxW={"35rem"} direction={"column"} gap={"3rem"}>
                    <AddPost />
                    <Sort handle_select={handle_select} selected_button={selected_button} />
                    {feedPosts.length > 0 ?
                        <PostsLayout children={feedPosts.map(eachFeedPost => <Post key={eachFeedPost._id} {...eachFeedPost} />)} />
                        :
                        <Text>Start Following someone to see their posts</Text>
                    }
                </Flex>
            } />
        </>
    )
}

export default PageFeed
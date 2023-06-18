import { Flex } from "@chakra-ui/layout"
import Nav from "../../Components/Nav"
import SideBar from "../../Components/SideBar"
import AddPost from "./Components/AddPost"
import Post from "./Components/Post"
import { usePosts } from "../../Contexts/PostsProvider"
import PostsLayout from "../../Layout/PostsLayout"
import { Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useAuth } from "../../Contexts/AuthProvider"

const PageFeed = () => {
    const { postsDispatch, allPosts: { posts, feedPosts } } = usePosts()
    const { userData: { user: { user_details, encoded_token } } } = useAuth()
    const [selected_button, set_selected_button] = useState(null);

    useEffect(() => {
        postsDispatch({ type: "ADD_TO_FEED", payload: (posts).filter(eachPost => eachPost.username === user_details.username) })
    }, [posts])

    const handle_select = (e) => set_selected_button(e.target.value)
    return (
        <>
            <Nav />
            <Flex>
                <SideBar />
                <Flex p={"10px"} maxW={"35rem"} direction={"column"} gap={"3rem"}>
                    <AddPost />
                    <Flex>
                        <Button
                            flex={1}
                            bg={selected_button === "latest" ? "transparent" : "rgb(246, 226, 194)"}
                            color={selected_button === "latest" ? "currentcolor" : "black"}
                            border={selected_button === "latest" ? "1px solid currentcolor" : "none"}
                            _hover={{ color: 'currentcolor', bg: "transparent", border: "1px solid currentcolor" }}
                            _focus={{ outline: 'none' }}
                            transition={"0.7s"}
                            value={"latest"}
                            onClick={handle_select}
                        >
                            <i className="fa-solid fa-clock fa-lg"></i>
                            Latest
                        </Button>
                        <Button
                            flex={1}
                            bg={selected_button === "trending" ? "transparent" : "rgb(246, 226, 194)"}
                            color={selected_button === "trending" ? "currentcolor" : "black"}
                            border={selected_button === "trending" ? "1px solid currentcolor" : "none"}
                            _hover={{ color: 'currentcolor', bg: "transparent", border: "1px solid currentcolor" }}
                            _focus={{ outline: 'none' }}
                            value={"trending"}
                            onClick={handle_select}
                        >
                            <i className="fa-solid fa-fire fa-lg"></i>
                            Trending
                        </Button>
                    </Flex>
                    <PostsLayout children={feedPosts.map(eachFeedPost => <Post key={eachFeedPost._id} {...eachFeedPost} />)} />
                </Flex>
            </Flex>

        </>
    )
}

export default PageFeed
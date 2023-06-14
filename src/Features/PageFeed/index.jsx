import { Flex } from "@chakra-ui/layout"
import Nav from "../../Components/Nav"
import SideBar from "../../Components/SideBar"
import AddPost from "./Components/AddPost"
import Post from "./Components/Post"
import { usePosts } from "../../Contexts/PostsProvider"

const PageFeed = () => {
    const { allPosts: { feedPosts } } = usePosts()

    return (
        <>
            <Nav />
            <Flex>
                <SideBar />
                <Flex w={"25rem"} direction={"column"} gap={"3rem"}>
                    <AddPost />
                    {feedPosts.map(eachFeedPost => <Post key={eachFeedPost._id} {...eachFeedPost} />)}

                </Flex>
            </Flex>

        </>
    )
}

export default PageFeed
import { Flex } from "@chakra-ui/react";
import Nav from "../../Components/Nav";
import { usePosts } from "../../Contexts/PostsProvider";
import Post from "../PageFeed/Components/Post";
import SideBar from "../../Components/SideBar";
import AddPost from "../PageFeed/Components/AddPost";
import PostsLayout from "../../Layout/PostsLayout";

const Explore = () => {
    const { allPosts: { posts } } = usePosts()
    return (
        <>
            <Nav />
            <Flex>
                <SideBar />
                <Flex p={"10px"} maxW={"35rem"} direction={"column"} gap={"3rem"}>
                    <PostsLayout children={posts.map(eachPost => <Post key={eachPost._id} {...eachPost} />)} />
                </Flex>
            </Flex>
        </>
    )
}

export default Explore;
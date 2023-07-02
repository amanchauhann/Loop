import { Box, Flex } from "@chakra-ui/react";
import Nav from "../../Components/Nav";
import { usePosts } from "../../Contexts/PostsProvider";
import Post from "../PageFeed/Components/Post";
import SideBar from "../../Components/SideBar";
import AddPost from "../PageFeed/Components/AddPost";
import PostsLayout from "../../Layout/PostsLayout";
import Layout from "../../Layout";

const Explore = () => {
    const { allPosts: { posts } } = usePosts()
    return (
        <>
            <Layout children={
                <Box w={"35rem"}>
                    <PostsLayout children={posts.map(eachPost => <Post key={eachPost._id} {...eachPost} />)} />
                </Box>

            } />
        </>
    )
}

export default Explore;
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
    const reversedPosts = [...posts].reverse();
    return (
        <>
            <Layout children={
                <Box flex={1} w={"15rem"}>
                    <PostsLayout children={reversedPosts.map(eachPost => <Post key={eachPost._id} {...eachPost} />)} />
                </Box>

            } />
        </>
    )
}

export default Explore;
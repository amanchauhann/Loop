import { Flex } from "@chakra-ui/react";
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
            <Layout children={<PostsLayout children={posts.map(eachPost => <Post key={eachPost._id} {...eachPost} />)} />} />
        </>
    )
}

export default Explore;
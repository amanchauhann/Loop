import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getSpecificPost } from "../../Services/postServices"
import { useState } from "react"
import Post from "../PageFeed/Components/Post"
import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
import { divider_border } from "../../Styles/Global"
import Comment from "./Components/Comment"
import AddComment from "./Components/AddComment"
import { usePosts } from "../../Contexts/PostsProvider"
import Layout from "../../Layout"

const PostDetails = () => {
    const { post_id } = useParams()
    const { postsDispatch, allPosts: { posts, feedPosts } } = usePosts()
    const [user_post, set_user_post] = useState()
    const [is_loading, set_is_loading] = useState(true)

    useEffect(() => {
        const fetch_specific_post = async () => {
            try {
                const { data: { post }, status } = await getSpecificPost(post_id)
                if (status === 200) {
                    set_user_post(post)
                    set_is_loading(false)
                }
            } catch (e) {
                console.error("from PostDetails_fetchSpecific", e)
            }
        }
        fetch_specific_post()
    }, [posts])

    return (
        <Layout
            is_loading={is_loading}
            children={
                <Flex direction={"column"} gap={"3rem"} maxW={"35rem"} p={"10px"}>
                    <>
                        <Post {...user_post} />
                        <AddComment user_post={user_post} />
                        <Flex direction={"column"} gap={5}>
                            {user_post?.comments?.map(each_comment => <Comment key={each_comment._id} {...each_comment} />)}
                        </Flex>
                    </>
                </Flex>
            } />
    )
}

export default PostDetails
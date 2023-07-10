import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getSpecificPost } from "../../Services/postServices"
import { useState } from "react"
import Post from "../PageFeed/Components/Post"
import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react"
import { divider_border } from "../../Styles/Global"
import Comment from "./Components/Comment"
import AddComment from "./Components/AddComment"
import { usePosts } from "../../Contexts/PostsProvider"
import Layout from "../../Layout"
import { getCommentsOnPost } from "../../Services/commentServices"
import { errorToast } from "../../utils"

const PostDetails = () => {
    const { post_id } = useParams()
    const { postsDispatch, allPosts: { posts, feedPosts } } = usePosts()
    const [user_post, set_user_post] = useState({})
    const [is_loading, set_is_loading] = useState(true)
    const [post_comments, set_post_comments] = useState([])

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
                errorToast(`${e.response.status}: ${e.response.data.errors}`)
            }
        }
        fetch_specific_post()
    }, [posts])

    useEffect(() => {
        const fetching_comment = async () => {
            try {
                if (user_post._id) {
                    const { data: { comments }, status } = await getCommentsOnPost(user_post?._id)
                    if (status === 200) {
                        set_post_comments(comments)
                    }
                }
            } catch (e) {
                console.error("from postDetail_ fetchingComment", e)
                errorToast(`${e.response.status}: ${e.response.data.errors}`)
            }
        }
        fetching_comment()
    }, [user_post])

    return (
        <Layout
            is_loading={is_loading}
            children={
                <Flex w={"35rem"} direction={"column"} gap={"3rem"} p={"10px"}>
                    <>
                        <Post {...user_post} />
                        <AddComment _id={post_id} />
                        <Box>
                            <Text pb={2} fontSize={"2xl"} fontWeight={700}>{post_comments?.length ? "Comments:" : "No Comments"}</Text>
                            {post_comments.length > 0 && <Flex direction={"column"} gap={5}>
                                {post_comments?.map(each_comment => <Comment key={each_comment._id} {...each_comment} post_id={user_post?._id} set_post_comments={set_post_comments} />)}
                            </Flex>}
                        </Box>

                    </>
                </Flex>
            } />
    )
}

export default PostDetails
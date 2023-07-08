import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
import { divider_border } from "../../../../Styles/Global"
import { useEffect } from "react"
import { getSpecificUserService } from "../../../../Services/userServices"
import { useState } from "react"
import { useUsers } from "../../../../Contexts/UsersProvider"
import { usePosts } from "../../../../Contexts/PostsProvider"
import { Link } from "react-router-dom"
import { errorToast } from "../../../../utils"
import { dislikeCommentService, likeCommentService } from "../../../../Services/commentServices"
import { useAuth } from "../../../../Contexts/AuthProvider"

const Comment = ({ username, text, _id, votes: { upvotedBy }, post_id, set_post_comments }) => {
    const [specific_user_profile, set_specific_user_profile] = useState({})
    const { allUsers: { users } } = useUsers()
    const { postsDispatch, allPosts: { posts, feedPosts } } = usePosts()
    const { userData: { user: { user_details, encoded_token } } } = useAuth()

    useEffect(() => {
        const get_this_user = async () => {
            try {
                const { data: { user }, status } = await getSpecificUserService(username)
                if (status === 200) {
                    set_specific_user_profile(user)
                }
            } catch (e) {
                console.error("from posts_getUser", e)
                errorToast(`${e.response.status}: ${e.response.data.errors}`)
            }
        }
        get_this_user()
    }, [username])

    const comment_likes_handler = async (service_fn, post_id, comment_id, encoded_token) => {
        try {
            const { data: { comments }, status } = await service_fn(post_id, comment_id, encoded_token);
            if (status === 201) {
                set_post_comments(comments)
            }
        } catch (error) {
            console.error(error);
            errorToast(`${e.response.status}: ${e.response.data.errors}`)
        }
    };

    return (
        <Flex style={divider_border} direction={"column"} gap={4} p={"10px"}>
            <Link to={`/profile/${username}`}>
                <Flex gap={3}>
                    <Avatar
                        src={specific_user_profile?.displayImg}
                        name={`${specific_user_profile?.firstName} ${specific_user_profile?.lastName}`}
                    />
                    <Box>
                        <Text fontWeight={500} fontSize={"md"}>{specific_user_profile?.firstName} {specific_user_profile?.lastName}</Text>
                        <Text fontWeight={300} fontSize={"xs"}>@{username}</Text>
                    </Box>
                </Flex>
            </Link>

            <Text>{text}</Text>

            {upvotedBy.find(({ _id }) => _id === user_details._id) ?
                <div className="post_icon cursor_pointer" onClick={() => comment_likes_handler(dislikeCommentService, post_id, _id, encoded_token)}>
                    <i className="fa-solid fa-thumbs-up fa-lg"></i>

                </div>
                :
                <div className="post_icon cursor_pointer" onClick={() => comment_likes_handler(likeCommentService, post_id, _id, encoded_token)}>
                    <i className="fa-regular fa-thumbs-up fa-lg"><span className="sm-text"></span></i>
                </div>
            }

        </Flex>
    )
}

export default Comment
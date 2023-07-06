import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
import { divider_border } from "../../../../Styles/Global"
import { useEffect } from "react"
import { getSpecificUserService } from "../../../../Services/userServices"
import { useState } from "react"
import { useUsers } from "../../../../Contexts/UsersProvider"
import { usePosts } from "../../../../Contexts/PostsProvider"
import { Link } from "react-router-dom"
import { errorToast } from "../../../../utils"

const Comment = ({ username, text }) => {
    const [specific_user_profile, set_specific_user_profile] = useState({})
    const { allUsers: { users } } = useUsers()
    const { postsDispatch, allPosts: { posts, feedPosts } } = usePosts()
    useEffect(() => {
        const get_this_user = async () => {
            try {
                const { data: { user }, status } = await getSpecificUserService(username)
                if (status === 200) {
                    set_specific_user_profile(user)
                }
            } catch (e) {
                console.error("from posts_getUser", e)
                errorToast(`${e.status} there is some error`)
            }
        }
        get_this_user()
    }, [username])

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
        </Flex>
    )
}

export default Comment
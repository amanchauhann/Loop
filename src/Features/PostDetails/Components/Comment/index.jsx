import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
import { divider_border } from "../../../../Styles/Global"
import { useEffect } from "react"
import { getSpecificUserService } from "../../../../Services/userServices"
import { useState } from "react"
import { useUsers } from "../../../../Contexts/UsersProvider"
import { usePosts } from "../../../../Contexts/PostsProvider"
import { Link } from "react-router-dom"

const Comment = ({ username, text }) => {
    const [specific_user_profile, set_specific_user_profile] = useState({})
    const { allUsers: { users } } = useUsers()
    const { postsDispatch, allPosts: { posts, feedPosts } } = usePosts()
    useEffect(() => {
        set_specific_user_profile(users.find(each_user => each_user.username === username))
    }, [posts])

    return (
        <Flex style={divider_border} direction={"column"} gap={4} p={"10px"}>
            <Link to={`/profile/${username}`}>
                <Flex gap={3}>
                    <Avatar src={specific_user_profile.displayImg} />
                    <Box>
                        <Text fontWeight={500} fontSize={"md"}>{specific_user_profile.firstName} {specific_user_profile.lastName}</Text>
                        <Text fontWeight={300} fontSize={"xs"}>@{username}</Text>
                    </Box>
                </Flex>
            </Link>

            <Text>{text}</Text>
        </Flex>
    )
}

export default Comment
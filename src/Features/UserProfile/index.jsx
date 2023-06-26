import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFollowService, getSpecificUserService, getUnfollowService } from "../../Services/userServices"
import { useState } from "react"
import { Avatar, Box, Button, Flex, Link, Text, Tooltip, useDisclosure } from "@chakra-ui/react"
import { useAuth } from "../../Contexts/AuthProvider"
import { AUTH, USERS } from "../../Common/reducerTypes"
import { getSpecificUserPostsService } from "../../Services/postServices"
import Post from "../PageFeed/Components/Post"
import PostsLayout from "../../Layout/PostsLayout"
import { usePosts } from "../../Contexts/PostsProvider"
import { useUsers } from "../../Contexts/UsersProvider"
import EditProfileModal from "./EditProfileModal"

const UserProfile = () => {
    const { user_name } = useParams()
    const { userData: { user: { user_details, encoded_token } }, authDispacth } = useAuth()
    const { postsDispatch, allPosts: { posts, feedPosts } } = usePosts()
    const { allUsers: { users }, usersDispatch } = useUsers()
    const [user_profile, set_user_profile] = useState({})
    const [user_posts, set_user_posts] = useState([])
    const [is_logged_user, set_is_logged_user] = useState(false)
    const [is_loading, set_is_loading] = useState(true)

    useEffect(() => {
        const getSingleUser = async () => {
            try {
                const { data, status } = await getSpecificUserService(user_name)
                if (status === 200) {
                    set_user_profile(data.user)
                    set_is_loading(false)
                }
            } catch (e) {
                console.error("from userProfile_getSingleUser", e)
            }
        }
        set_is_logged_user(user_details.username === user_name ? true : false)
        getSingleUser()
    }, [user_name, user_details])

    const follow_unfollow_handler = (service, _id, encoded_token) => {
        const follow_user = async () => {
            try {
                const { data: { user, followUser }, status } = await service(_id, encoded_token)
                if (status === 200) {
                    authDispacth({ type: USERS.FOLLOW, payload: user })
                    usersDispatch({ type: USERS.FOLLOW, payload: followUser })
                }
            } catch (e) {
                console.error("from userProfile_followUnfollowHandler", e)
            }
        }
        follow_user()
    }
    const { _id, firstName, lastName, username, displayImg, bio, website, followers, following } = user_profile

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data: { posts }, status } = await getSpecificUserPostsService(username)
                if (status === 200) {
                    set_user_posts(posts)
                }
            } catch (e) {
                console.error("from userProfile_fetchPosts", e)
            }
        }
        fetchPosts()
    }, [user_profile, posts])

    const logout_handler = () => {
        authDispacth({ type: AUTH.LOGOUT })
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Flex p={"10px"} direction={"column"} gap={10} maxW={"30rem"}>
                <Flex p={"10px"} gap={3} border={'1px solid grey'}>
                    <Avatar name={`${firstName} ${lastName}`} src={displayImg} />
                    <Flex direction={"column"} gap={2}>
                        <Flex justify={"space-between"}>
                            <Box>
                                <Text fontSize='md'>{firstName} {lastName}</Text>
                                <Text fontSize={"xs"}>@{username}</Text>
                            </Box>
                            <Flex align={"center"} gap={5} direction={"column"}>
                                {is_logged_user ?
                                    <>
                                        <Button
                                            onClick={onOpen}
                                            bg={"transparent"}
                                            color={"rgb(246, 226, 194)"}
                                            border={"1px solid currentcolor"}
                                            _hover={{ color: 'currentcolor', bg: "rgba(246, 226, 194, 0.1)", border: "1px solid currentcolor" }}
                                        >
                                            Edit
                                        </Button>
                                        <Tooltip m={3} label="Logout">
                                            <i onClick={logout_handler} className="fa-solid fa-right-from-bracket fa-lg pointer_cursor"></i>
                                        </Tooltip>
                                    </>


                                    :
                                    user_details?.following?.find(each_following => each_following._id === _id) ?
                                        <Button
                                            bg={"transparent"}
                                            color={"rgb(246, 226, 194)"}
                                            border={"1px solid currentcolor"}
                                            _hover={{ color: 'currentcolor', bg: "rgba(246, 226, 194, 0.1)" }}
                                            _focus={{ outline: 'none' }}
                                            onClick={() => follow_unfollow_handler(getUnfollowService, _id, encoded_token)}
                                        >
                                            Unfollow</Button>
                                        :
                                        <Button
                                            bg={"rgb(246, 226, 194)"}
                                            color={"black"}
                                            border={"1px solid currentcolor"}
                                            _hover={{ color: 'currentcolor', bg: "transparent", border: "1px solid currentcolor" }}
                                            _focus={{ outline: 'none' }}
                                            transition={"0.7s"}
                                            onClick={() => follow_unfollow_handler(getFollowService, _id, encoded_token)}
                                        >
                                            Follow
                                        </Button>
                                }

                            </Flex>


                        </Flex>
                        <Text>{bio}</Text>
                        <Link href={website} fontSize={"sm"} isExternal>{website}</Link>
                        <Flex gap={4} justify={"space-between"}>
                            <Text>3 posts</Text>
                            <Text>{followers?.length} followers</Text>
                            <Text>{following?.length} following</Text>
                        </Flex>
                    </Flex>
                </Flex>
                {user_posts.length > 0 ?
                    <PostsLayout children={user_posts.map(each_post => <Post key={each_post._id} {...each_post} />)} />
                    :
                    <Text align={"center"} fontSize={"lg"}>No Posts.</Text>
                }

            </Flex >


            {!is_loading && <EditProfileModal isOpen={isOpen} onClose={onClose} {...user_profile} />}
        </>
    )
}

export default UserProfile
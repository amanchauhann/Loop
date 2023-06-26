import { Image } from "@chakra-ui/image"
import { Divider, Flex, Text } from "@chakra-ui/layout"
import "./main.css"
import { divider_border } from "../../../../Styles/Global"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"
import { useUsers } from "../../../../Contexts/UsersProvider"
import { useAuth } from "../../../../Contexts/AuthProvider"
import { getAddBookmarkService, getDeletePostService, getDislikePostService, getLikePostService, getRemoveBookmarkService } from "../../../../Services/postServices"
import { usePosts } from "../../../../Contexts/PostsProvider"
import { AUTH, POSTS } from "../../../../Common/reducerTypes"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { useDisclosure } from "@chakra-ui/react"
import EditModal from "./EditModal"
import { getSpecificUserService } from "../../../../Services/userServices"

const Post = ({ _id, username, content, likes, createdAt }) => {
    const { allUsers: { users } } = useUsers()
    const { authDispacth, userData: { user: { user_details, encoded_token } } } = useAuth()
    const { postsDispatch, allPosts: { posts } } = usePosts()
    // const { firstName, lastName, displayImg, _id: userID } = username === user_details.username ? user_details : users?.find(eachUser => eachUser.username === username)
    const [is_logged_user, set_is_logged_user] = useState(false)
    const [current_user, set_current_user] = useState({})

    useEffect(() => {
        const get_this_user = async () => {
            try {
                const { data: { user }, status } = await getSpecificUserService(username)
                if (status === 200) {
                    set_current_user(user)
                }
            } catch (e) {
                console.error("from posts_getUser", e)
            }
        }
        get_this_user()
    }, [])

    const delete_handler = (id, encodedToken) => {
        const delete_post = async () => {
            try {
                const { data, status } = await getDeletePostService(id, encodedToken)
                if (status === 201) {
                    postsDispatch({ type: "INITIALISE_POSTS", payload: data.posts })
                }
            } catch (e) {
                console.error("from post_deletehandler", e)
            }
        }
        delete_post()
    }

    const like_handler = async (service, post_id, encoded_token) => {
        try {
            const { data, request: { status } } = await service(post_id, encoded_token)
            if (status === 201) {
                postsDispatch({ type: "INITIALISE_POSTS", payload: data.posts })
            }

        } catch (e) {
            console.error("from like_Post", e)
        }
    }

    const bookmark_handler = async (service, post_id, encoded_token) => {
        try {
            const { data, status } = await service(post_id, encoded_token)
            if (status === 200) {
                authDispacth({ type: AUTH.SET_BOOKMARKS, payload: data.bookmarks })
            }
        } catch (e) {
            console.error("from bookmark_Post", e)
        }
    }

    useEffect(() => {
        set_is_logged_user(user_details._id === current_user?._id ? true : false)
    }, [users])

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
            <Flex style={divider_border} p={"1rem"} gap={"1rem"} direction={"column"} className="bg_sec">
                <Flex justify={"space-between"}>
                    <Link to={`/profile/${username}`}>
                        <Flex gap={"10px"}>
                            <Image
                                borderRadius='full'
                                boxSize='45px'
                                src={current_user?.displayImg}
                                alt={`portrait of ${current_user?.firstName} ${current_user?.lastName}`}
                            />
                            <Flex direction={"column"}>
                                <Text fontSize='md'>{`${current_user?.firstName} ${current_user?.lastName}`}</Text>
                                <Text fontSize="xs">{username}</Text>
                            </Flex>
                        </Flex>
                    </Link>

                    {/* ---Ellipsis--- */}
                    {is_logged_user && <Menu>
                        <MenuButton
                            _hover={{
                                border: "none",
                                outline: "none",
                            }}
                            _focus={{
                                outline: "none",
                                border: "none",
                            }}
                        >
                            <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
                        </MenuButton>
                        <MenuList bg={"rgb(46, 48, 52)"}>
                            <MenuItem
                                onClick={onOpen}
                                _focus={{
                                    outline: "none",
                                }}
                                _hover={{
                                    bg: "black",
                                }}
                                bg={"rgb(46, 48, 52)"} marginBottom={"10px"} border="none">
                                Edit
                            </MenuItem>
                            <MenuItem
                                onClick={() => delete_handler(_id, encoded_token)}
                                _focus={{
                                    outline: "none",
                                }}
                                _hover={{
                                    bg: "black",
                                    border: "none"
                                }}
                                bg={"rgb(46, 48, 52)"}
                                border="none">
                                Delete
                            </MenuItem>
                        </MenuList>
                    </Menu>}
                </Flex>
                {/* <Divider /> */}
                <Link to={`/post/${_id}`}>
                    <Text fontSize={"sm"}>
                        {content}
                    </Text>
                </Link>

                <Divider />
                <Flex>
                    {likes?.likedBy.find(({ _id }) => _id === user_details._id) ?
                        <div className="post_icon" onClick={() => like_handler(getDislikePostService, _id, encoded_token)}>
                            <i className="fa-solid fa-thumbs-up fa-xl"><span className="sm-text">{likes.likeCount}</span></i>
                        </div>
                        :
                        <div className="post_icon" onClick={() => like_handler(getLikePostService, _id, encoded_token)}>
                            <i className="fa-regular fa-thumbs-up fa-lg"><span className="sm-text">{likes.likeCount}</span></i>
                        </div>
                    }
                    <div className="post_icon">
                        <i className="fa-regular fa-message fa-lg"></i>
                    </div>
                    {user_details.bookmarks.find(each_bookmark_ID => each_bookmark_ID === _id) ?
                        <div className="post_icon" onClick={() => bookmark_handler(getRemoveBookmarkService, _id, encoded_token)}>
                            <i className="fa-sharp fa-solid fa-bookmark fa-lg"></i>
                        </div>
                        :
                        <div className="post_icon" onClick={() => bookmark_handler(getAddBookmarkService, _id, encoded_token)}>
                            <i className="fa-regular fa-bookmark fa-lg"></i>
                        </div>
                    }
                </Flex>
                <p>{createdAt.substring(0, 10).split('-').reverse().join('-')}</p>
            </Flex>
            <EditModal isOpen={isOpen} onClose={onClose} content={content} _id={_id} encoded_token={encoded_token} />
        </div>
    )
}

export default Post
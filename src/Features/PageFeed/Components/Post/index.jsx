import { Image } from "@chakra-ui/image"
import { Divider, Flex, Text } from "@chakra-ui/layout"
import "./main.css"
import { divider_border } from "../../../../Styles/Global"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"
import { useUsers } from "../../../../Contexts/UsersProvider"
import { useAuth } from "../../../../Contexts/AuthProvider"
import { getAddBookmarkService, getDislikePostService, getLikePostService, getRemoveBookmarkService } from "../../../../Services/postServices"
import { usePosts } from "../../../../Contexts/PostsProvider"
import { AUTH, POSTS } from "../../../../Common/reducerTypes"
import { Link } from "react-router-dom"

const Post = ({ _id, username, content, likes, updatedAt }) => {
    const { allUsers: { users } } = useUsers()
    const { authDispacth, userData: { user: { user_details, encoded_token } } } = useAuth()
    const { postsDispatch, allPosts: { posts } } = usePosts()
    const { firstName, lastName, displayImg, _id: user_id } = users?.find(eachUser => eachUser.username === username)

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
            // console.log("dataaa", data)
            if (status === 200) {
                authDispacth({ type: AUTH.SET_BOOKMARKS, payload: data.bookmarks })
            }
        } catch (e) {
            console.error("from bookmark_Post", e)
        }
    }
    // console.log("useer detailss,>>", user_details)
    return (
        <div>
            <Flex style={divider_border} p={"1rem"} gap={"1rem"} direction={"column"} className="bg_sec">
                <Flex justify={"space-between"}>
                    <Link to={`/profile/${user_id}`}>
                        <Flex gap={"10px"}>
                            <Image
                                borderRadius='full'
                                boxSize='45px'
                                src={displayImg}
                                alt={`portrait of ${firstName} ${lastName}`}
                            />
                            <Flex direction={"column"}>
                                <Text fontSize='md'>{`${firstName} ${lastName}`}</Text>
                                <Text fontSize="xs">{username}</Text>
                            </Flex>
                        </Flex>
                    </Link>

                    {/* ---Ellipsis--- */}
                    <Menu>
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
                    </Menu>
                </Flex>
                {/* <Divider /> */}
                <Text fontSize={"sm"}>
                    {content}
                </Text>
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
                <p>{updatedAt.substring(0, 10).split('-').reverse().join('-')}</p>
            </Flex>
        </div>
    )
}

export default Post
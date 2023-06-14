import { Image } from "@chakra-ui/image"
import { Divider, Flex, Text } from "@chakra-ui/layout"
import "./main.css"
import { divider_border } from "../../../../Styles/Global"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"
import { useUsers } from "../../../../Contexts/UsersProvider"

const Post = ({ username, content, likes }) => {
    const { allUsers: { users } } = useUsers()
    const { firstName, lastName, displayImg } = users?.find(eachUser => eachUser.username === username)
    return (
        <div>
            <Flex style={divider_border} p={"1rem"} gap={"1rem"} direction={"column"} className="bg_sec">
                <Flex justify={"space-between"}>
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
                    <div className="post_icon">
                        <i className="fa-regular fa-thumbs-up fa-lg"><span className="sm-text">{likes.likeCount}</span></i>
                    </div>
                    <div className="post_icon">
                        <i className="fa-regular fa-message fa-lg"></i>
                    </div>
                    <div className="post_icon">
                        <i className="fa-regular fa-bookmark fa-lg"></i>
                    </div>
                </Flex>
            </Flex>
        </div>
    )
}

export default Post
import { Image } from "@chakra-ui/image"
import { Divider, Flex, Text } from "@chakra-ui/layout"
import "./main.css"
import { divider_border } from "../../../../Styles/Global"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"

const Post = () => {
    return (
        <div>
            <Flex style={divider_border} p={"1rem"} gap={"1rem"} direction={"column"} className="bg_sec">
                <Flex justify={"space-between"}>
                    <Flex gap={"10px"}>
                        <Image
                            borderRadius='full'
                            boxSize='45px'
                            src='https://bit.ly/dan-abramov'
                            alt='Dan Abramov'
                        />
                        <Flex direction={"column"}>
                            <Text fontSize='md'>Aman Chauhan</Text>
                            <Text fontSize="xs">@iamanchauhan</Text>
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
                            <i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sint minus est repellendus similique nam asperiores facere veritatis nesciunt illo quibusdam eos cumque blanditiis voluptatem natus, facilis commodi corrupti labore.
                </Text>
                <Divider />
                <Flex>
                    <div className="post_icon">
                        <i class="fa-regular fa-thumbs-up fa-lg"></i>
                    </div>
                    <div className="post_icon">
                        <i class="fa-regular fa-message fa-lg"></i>
                    </div>
                    <div className="post_icon">
                        <i class="fa-regular fa-bookmark fa-lg"></i>
                    </div>
                </Flex>
            </Flex>
        </div>
    )
}

export default Post
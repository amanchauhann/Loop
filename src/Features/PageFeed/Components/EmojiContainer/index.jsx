import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverArrow,
    PopoverCloseButton,
    PopoverBody,
} from "@chakra-ui/popover";
import {
    useDisclosure,
    Button,
    useColorModeValue,
    Flex,
    Box,
} from "@chakra-ui/react";
//   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { emojis } from "../../../../utils";

function EmojiContainer({ set_content }) {
    const { onClose, isOpen, onOpen } = useDisclosure();

    return (
        <Box>
            <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                <PopoverTrigger>
                    {/* <Button
                        variant="iconButton"
                    // color={useColorModeValue("gray.800", "white.900")}
                    // paddingBottom="0"
                    // pt="0.8rem"
                    > */}
                    <i className="fa-solid fa-face-smile fa-lg"></i>
                    {/* </Button> */}
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton
                        bg="transparent"
                        color={useColorModeValue("gray.800", "white.900")}
                    />
                    <PopoverBody bg={useColorModeValue("white.900", "gray.800")}>
                        <Flex wrap="wrap" spacing="0">
                            {emojis.map((emoji, index) => (
                                <Button
                                    key={index}
                                    onClick={() => set_content((content) => content + emoji)}
                                >
                                    {emoji}
                                </Button>
                            ))}
                        </Flex>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
    );
}

export { EmojiContainer };
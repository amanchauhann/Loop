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
import { emojis } from "../../../../utils";

function EmojiContainer({ set_post_content }) {
    const { onClose, isOpen, onOpen } = useDisclosure();

    return (
        <Box>
            <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                <PopoverTrigger>
                    <i className="fa-solid fa-face-smile fa-lg"></i>
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
                                    onClick={() => set_post_content((prev) => ({ ...prev, content: prev.content + emoji }))}
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
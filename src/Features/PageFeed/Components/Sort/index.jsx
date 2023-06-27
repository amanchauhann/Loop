import { Button, Flex } from "@chakra-ui/react"

const Sort = ({ handle_select, selected_button }) => {
    return (
        <>
            <Flex>
                <Button
                    flex={1}
                    bg={selected_button === "latest" ? "transparent" : "rgb(246, 226, 194)"}
                    color={selected_button === "latest" ? "currentcolor" : "black"}
                    border={selected_button === "latest" ? "1px solid currentcolor" : "none"}
                    _hover={{ color: 'currentcolor', bg: "transparent", border: "1px solid currentcolor" }}
                    _focus={{ outline: 'none' }}
                    transition={"0.7s"}
                    value={"latest"}
                    onClick={handle_select}
                >
                    <i className="fa-solid fa-clock fa-lg"></i>
                    Latest
                </Button>
                <Button
                    flex={1}
                    bg={selected_button === "trending" ? "transparent" : "rgb(246, 226, 194)"}
                    color={selected_button === "trending" ? "currentcolor" : "black"}
                    border={selected_button === "trending" ? "1px solid currentcolor" : "none"}
                    _hover={{ color: 'currentcolor', bg: "transparent", border: "1px solid currentcolor" }}
                    _focus={{ outline: 'none' }}
                    value={"trending"}
                    onClick={handle_select}
                >
                    <i className="fa-solid fa-fire fa-lg"></i>
                    Trending
                </Button>
            </Flex>
        </>
    )
}

export default Sort
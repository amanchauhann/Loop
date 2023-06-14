import { Flex } from "@chakra-ui/react"

const PostsLayout = ({ children }) => {
    return (
        <Flex direction={"column"} gap={"2rem"}>
            {children}
        </Flex>
    )
}

export default PostsLayout
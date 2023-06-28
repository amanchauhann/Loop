import { Flex } from "@chakra-ui/react"

const PostsLayout = ({ children }) => {
    return (
        <Flex direction={"column"} gap={"2rem"} p={"10px"}>
            {children}
        </Flex>
    )
}

export default PostsLayout
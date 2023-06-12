import { Flex } from "@chakra-ui/layout"
import Nav from "../../Components/Nav"
import SideBar from "../../Components/SideBar"
import AddPost from "./Components/AddPost"
import Post from "./Components/Post"

const PageFeed = () => {
    return (
        <>
            <Nav />
            <Flex>
                <SideBar />
                <Flex w={"25rem"} direction={"column"} gap={"3rem"}>
                    <AddPost />
                    <Post />
                </Flex>
            </Flex>

        </>
    )
}

export default PageFeed
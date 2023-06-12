import { Flex } from "@chakra-ui/layout"
import Nav from "../../Components/Nav"
import SideBar from "../../Components/SideBar"
import AddPost from "./Components/AddPost"

const PageFeed = () => {
    return (
        <>
            <Nav />
            <Flex>
                <SideBar />
                <AddPost />
            </Flex>

        </>
    )
}

export default PageFeed
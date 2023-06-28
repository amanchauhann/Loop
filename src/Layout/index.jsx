import { Flex, Text } from "@chakra-ui/react"
import Nav from "../Components/Nav"
import SideBar from "../Components/SideBar"
import SuggestionBar from "../Components/SuggestionBar"

const Layout = ({ children, is_loading }) => {
    return (
        <>
            <Nav />
            <Flex justify={"space-between"}>
                <SideBar />
                {is_loading ? <Text>LOADING</Text> :
                    children
                }
                <SuggestionBar />
            </Flex>
        </>
    )
}

export default Layout
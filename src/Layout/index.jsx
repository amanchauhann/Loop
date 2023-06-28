import { Flex } from "@chakra-ui/react"
import Nav from "../Components/Nav"
import SideBar from "../Components/SideBar"
import SuggestionBar from "../Components/SuggestionBar"

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <Flex>
                <SideBar />
                {children}
                <SuggestionBar />
            </Flex>
        </>
    )
}

export default Layout
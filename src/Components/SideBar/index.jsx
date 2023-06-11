import { Flex } from "@chakra-ui/react";
import "./main.css"

const SideBar = () => {
    return (
        <div className="sidebar_container">
            <Flex direction={"column"} w={"5rem"}>
                <div className="sidebar_item" align="center"><i class="fa-solid fa-house fa-xl"></i></div>
                <div className="sidebar_item" align="center"><i class="fa-solid fa-compass fa-xl"></i></div>
                <div className="sidebar_item" align="center"><i class="fa-solid fa-bookmark fa-xl"></i></div>
                <div className="sidebar_item" align="center"><i class="fa-solid fa-heart fa-xl"></i></div>
            </Flex>

        </div>
    )
}

export default SideBar;
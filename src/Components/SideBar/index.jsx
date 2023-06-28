import { Flex } from "@chakra-ui/react";
import "./main.css"
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <Flex className="sidebar_container" direction={"column"} w={"5rem"} minH={"100vh"}>
            <div className="sidebar_item" align="center">
                <Link to="/">
                    <i className="fa-solid fa-house fa-xl"></i>
                </Link>
            </div>
            <div className="sidebar_item" align="center">
                <Link to="/explore">
                    <i className="fa-solid fa-compass fa-xl"></i>
                </Link>

            </div>
            <Link to="/bookmarks">
                <div className="sidebar_item" align="center"><i className="fa-solid fa-bookmark fa-xl"></i></div>
            </Link>

            <Link to={"/liked"}>
                <div className="sidebar_item" align="center"><i className="fa-solid fa-heart fa-xl"></i></div>
            </Link>

        </Flex>
    )
}

export default SideBar;
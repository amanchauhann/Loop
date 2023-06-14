import { Flex } from "@chakra-ui/react";
import "./main.css"
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="sidebar_container">
            <Flex direction={"column"} w={"5rem"}>
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
                <div className="sidebar_item" align="center"><i className="fa-solid fa-bookmark fa-xl"></i></div>
                <div className="sidebar_item" align="center"><i className="fa-solid fa-heart fa-xl"></i></div>
            </Flex>

        </div>
    )
}

export default SideBar;
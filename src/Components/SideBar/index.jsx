import { Flex } from "@chakra-ui/react";
import "./main.css"
import { NavLink } from "react-router-dom";

const SideBar = () => {
    const getActiveStyle = ({ isActive }) => ({
        background: isActive ? "rgba(29, 29, 30, 0.7)" : "none"
    })
    return (
        <Flex className="sidebar_container" direction={"column"} w={"5rem"} minH={"100vh"}>

            <NavLink to="/" style={getActiveStyle}>
                <div className="sidebar_item" align="center">
                    <i className="fa-solid fa-house fa-xl"></i>
                </div>
            </NavLink>

            <NavLink to="/explore" style={getActiveStyle}>
                <div className="sidebar_item" align="center">
                    <i className="fa-solid fa-compass fa-xl"></i>
                </div>
            </NavLink>

            <NavLink to="/bookmarks" style={getActiveStyle}>
                <div className="sidebar_item" align="center">
                    <i className="fa-solid fa-bookmark fa-xl"></i>
                </div>
            </NavLink>

            <NavLink to={"/liked"}>
                <div className="sidebar_item" align="center">
                    <i className="fa-solid fa-heart fa-xl"></i>
                </div>
            </NavLink>

        </Flex>
    )
}

export default SideBar;
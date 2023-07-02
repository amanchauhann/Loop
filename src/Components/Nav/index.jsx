import { useRef, useState } from "react";
import "./main.css"
import { Link } from "react-router-dom";
import { divider_border } from "../../Styles/Global";
import { getUsersService } from "../../Services/userServices";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useAuth } from "../../Contexts/AuthProvider";

const Nav = () => {
    const [search_value, set_search_value] = useState("");
    const [suggestions, set_suggestions] = useState([])

    const { userData: { user: { user_details, encoded_token } } } = useAuth()

    const fetch_users = async () => {
        try {
            const { data, status } = await getUsersService()
            if (status === 200) {
                return data
            }
        } catch (e) {
            console.error("from nav_fetch_users", e)
        }
    }


    const timeout_ref = useRef(null)
    const search_value_handler = (e) => {
        const { value } = e.target
        set_search_value(value);
        clearTimeout(timeout_ref.current)
        timeout_ref.current = setTimeout(async () => {
            const all_users = await fetch_users()
            set_suggestions(all_users.users.filter(({ firstName }) => firstName.toLowerCase().trim().includes(value.toLowerCase())))
        }, 500);
    }

    return (
        <nav className="navigation" style={{ ...divider_border, position: "sticky", top: 0, zIndex: 1 }}>
            <Link to={"/"} className="current_color">Loop</Link>
            <Box position={"relative"} className="search_container">
                <input
                    className="search_bar"
                    type="search"
                    placeholder="search here..."
                    onChange={search_value_handler}
                    value={search_value}
                />
                {search_value.length > 0 &&
                    <Box style={divider_border} bg={"rgb(23, 24, 34)"} color={"currentcolor"} position={"absolute"} w={'100%'} className={`suggestions`}>
                        {suggestions.length > 0 ? suggestions?.map(each_suggestion =>
                            <Link to={`/profile/${each_suggestion.username}`} className="current_color" key={each_suggestion._id}>
                                <Flex style={divider_border} p={2} gap={2}>

                                    <Avatar name={`${each_suggestion.firstName} ${each_suggestion.lastName}`} src={each_suggestion?.displayImg} size={"md"} />
                                    <Box>
                                        <Text fontSize={"sm"}>{each_suggestion?.firstName} {each_suggestion?.lastName}</Text>
                                        <Text fontSize={"sm"}>@{each_suggestion?.username}</Text>
                                    </Box>
                                </Flex>  </Link>) : <Text>No user found</Text>}
                    </Box>
                }
            </Box>
            <Link to={`/profile/${user_details.username}`}>
                <Avatar bg={"cyan"} name={`${user_details.firstName} ${user_details.lastName}`} src={user_details.displayImg} />
            </Link>

        </nav>
    )
}

export default Nav
import { Avatar, Box, Button, Card, CardHeader, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react"
import Chip from "./Chip"
import { useAuth } from "../../Contexts/AuthProvider"
import { useUsers } from "../../Contexts/UsersProvider"
import { useEffect, useState } from "react"

const SuggestionBar = () => {
    const [users_without_currentUser, Set_users_without_currentUser] = useState([])
    const { allUsers: { users } } = useUsers()
    const { userData: { user: { user_details } } } = useAuth()
    const shouldHide = useBreakpointValue({ base: true, md: false });

    useEffect(() => {
        Set_users_without_currentUser(users.filter(({ _id }) => _id !== user_details._id))
    }, [users])

    return (
        <Flex direction={"column"} gap={"1rem"} border={"1px solid currentcolor"} p={"1rem"} h={"fit-content"} display={shouldHide ? 'none' : 'flex'}>
            <Heading size={"sm"}>Suggestions for you</Heading>
            {users_without_currentUser.map(each_user => <Chip key={each_user._id} {...each_user} />)}

        </Flex>
    )
}

export default SuggestionBar
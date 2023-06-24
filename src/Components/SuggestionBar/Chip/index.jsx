import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react"
import { getFollowService, getUnfollowService } from "../../../Services/userServices"
import { useAuth } from "../../../Contexts/AuthProvider"
import { useUsers } from "../../../Contexts/UsersProvider"
import { USERS } from "../../../Common/reducerTypes"


const Chip = ({ _id, displayImg, firstName, lastName, username }) => {
    const { userData: { user: { user_details, encoded_token } }, authDispacth } = useAuth()
    const { allUsers: { users }, usersDispatch } = useUsers()
    const follow_unfollow_handler = (service, _id, encoded_token) => {
        const follow_user = async () => {
            try {
                const { data: { user, followUser }, status } = await service(_id, encoded_token)
                if (status === 200) {
                    authDispacth({ type: USERS.FOLLOW, payload: user })
                    // console.log("follow>>", a)
                }
            } catch (e) {
                console.error("from follow_chip", e)
            }
        }
        follow_user()
    }
    // console.log("find", user_details.following.find(each_following => each_following._id === _id))
    return (
        <>
            <Flex align={"center"} gap={3} justify={"space-between"}>
                <Flex gap={"1rem"}>
                    <Avatar name='Segun Adebayo' src={displayImg} />
                    <Box>
                        <Text fontSize='sm'>{firstName} {lastName}</Text>
                        <Text fontSize={"xs"}>{username}</Text>
                    </Box>
                </Flex>

                {user_details.following.find(each_following => each_following._id === _id) ?
                    <Button
                        bg={"transparent"}
                        color={"rgb(246, 226, 194)"}
                        border={"1px solid currentcolor"}
                        _hover={{ color: 'currentcolor', bg: "rgba(246, 226, 194, 0.1)" }}
                        _focus={{ outline: 'none' }}
                        onClick={() => follow_unfollow_handler(getUnfollowService, _id, encoded_token)}>Unfollow</Button>
                    :
                    <Button
                        bg={"rgb(246, 226, 194)"}
                        color={"black"}
                        border={"1px solid currentcolor"}
                        _hover={{ color: 'currentcolor', bg: "transparent", border: "1px solid currentcolor" }}
                        _focus={{ outline: 'none' }}
                        transition={"0.7s"}
                        onClick={() => follow_unfollow_handler(getFollowService, _id, encoded_token)}
                    >
                        Follow
                    </Button>
                }

            </Flex>
        </>
    )
}

export default Chip
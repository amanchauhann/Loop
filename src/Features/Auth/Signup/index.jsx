import { Box, Button, Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useAuth } from "../../../Contexts/AuthProvider"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const Signup = ({ set_show_login }) => {
    const [signup_form, set_signup_form] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: ""
    })
    const [password_type, set_password_type] = useState("password")
    const { signup, login, userData: { logged } } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()

    const creds_handler = (e) => {
        const { name, value } = e.target;
        set_signup_form(prev => ({ ...prev, [name]: value }))
    }

    const signup_handler = (e) => {
        e.preventDefault()
        signup(signup_form)
    }

    useEffect(() => {
        logged && navigate(location?.state?.from?.pathname);
    }, [logged])

    const password_visibility_handler = (e) => {
        const { checked } = e.target
        set_password_type(checked ? "text" : "password")
    }

    return (
        <Box>
            <Text align={"center"} textTransform={"uppercase"}>signup</Text>
            <form onSubmit={signup_handler}>
                <FormControl>
                    <Flex direction={"column"} gap={2}>
                        <FormLabel htmlFor="firstName">First Name:
                            <Input
                                required
                                value={signup_form.firstName}
                                onChange={creds_handler}
                                name="firstName"
                                id={"firstName"}
                                placeholder={"Enter First Name"}
                                type={"text"}
                            />
                        </FormLabel>
                        <FormLabel htmlFor="lastName">Last Name:
                            <Input
                                required
                                value={signup_form.lastName}
                                onChange={creds_handler}
                                name="lastName"
                                id={"lastName"}
                                placeholder={"Enter Last Name"}
                                type={"text"}
                            />
                        </FormLabel>
                        <FormLabel htmlFor="username">Username:
                            <Input
                                required
                                value={signup_form.username}
                                onChange={creds_handler}
                                name="username"
                                id={"username"}
                                placeholder={"Enter Username"}
                                type={"text"}
                            />
                        </FormLabel>
                        <FormLabel htmlFor="password">Password:
                            <Input
                                required
                                value={signup_form.password}
                                onChange={creds_handler}
                                name="password"
                                id={"password"}
                                placeholder={"Enter Password"}
                                type={password_type}
                            />
                        </FormLabel>
                        <label>
                            <input type="checkbox"
                                onClick={password_visibility_handler}
                            />
                            show password
                        </label>
                        <Button
                            type="submit"
                            p={"10px"}
                            flex={1}
                            bg={"none"}
                            color={"currentcolor"}
                            border={"1px solid currentcolor"}
                            _hover={{ color: 'black', bg: "rgb(246, 226, 194)", border: "1px solid black" }}
                            _focus={{ outline: 'none' }}
                            transition={"0.7s"}
                        >
                            Sign up
                        </Button>
                    </Flex>
                </FormControl>
            </form>
            <Text
                m={"10px"}
                p={"10px"}
                color={"currentcolor"}
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
                transition={"0.7s"}
                onClick={() => set_show_login(true)}
                textAlign={"center"}
            >
                🚪Go back to login
            </Text>

        </Box>
    )
}

export default Signup
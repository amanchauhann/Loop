import { Box, Button, Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useAuth } from "../../../Contexts/AuthProvider"

const Login = () => {
    const { login, userData } = useAuth()
    const [loginform, setLoginForm] = useState({
        username: "",
        password: ""
    })

    const creds_handler = (e) => {
        const { name, value } = e.target;
        setLoginForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const guest_handler = () => {
        setLoginForm({
            username: "putin",
            password: "russia123"
        })
    }

    const login_handler = () => {
        login(loginform)
    }

    return (
        <Flex border={"1px solid red"} justify={"center"}>
            {/* <Box>This will be left.</Box> */}
            <Box>
                <Text align={"center"}>LOOP</Text>
                <FormControl>
                    <Flex direction={"column"} gap={"10px"}>
                        <FormLabel htmlFor="login_username">Username:
                            <Input
                                name="username"
                                id={"login_username"}
                                placeholder={"Enter Username"}
                                type={"text"}
                                onChange={creds_handler}
                                value={loginform.username}
                            />
                        </FormLabel>
                        <FormLabel htmlFor="login_password">Password:
                            <Input
                                name="password"
                                id={"login_password"}
                                placeholder={"Enter Password"}
                                type={"password"}
                                onChange={creds_handler}
                                value={loginform.password}
                            />
                        </FormLabel>
                        <Flex direction={"column"} gap={"10px"}>
                            <Button
                                p={"10px"}
                                flex={1}
                                bg={"none"}
                                color={"currentcolor"}
                                border={"1px solid currentcolor"}
                                _hover={{ color: 'black', bg: "rgb(246, 226, 194)", border: "1px solid black" }}
                                _focus={{ outline: 'none' }}
                                transition={"0.7s"}
                                onClick={login_handler}
                            >Login</Button>
                            <Button
                                p={"10px"}
                                flex={1}
                                bg={"rgb(246, 226, 194)"}
                                color={"black"}
                                border={"1px solid black"}
                                _hover={{ color: 'currentcolor', bg: "transparent", border: "1px solid currentcolor" }}
                                _focus={{ outline: 'none' }}
                                transition={"0.7s"}
                                onClick={guest_handler}
                            >Login as Guest</Button>
                        </Flex>
                    </Flex>


                </FormControl>
            </Box>
        </Flex>
    )
}

export default Login
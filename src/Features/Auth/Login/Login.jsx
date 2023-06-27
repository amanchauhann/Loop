import { Box, Button, Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useAuth } from "../../../Contexts/AuthProvider"
import { useLocation, useNavigate } from "react-router-dom"
import Signup from "../Signup"
import { divider_border } from "../../../Styles/Global"
import React, { lazy, Suspense } from "react";


const Login = () => {
    const LazySignup = lazy(() => import("../Signup"));
    const { signup, login, userData: { logged } } = useAuth()
    const [show_login, set_show_login] = useState(true)
    const [loginform, setLoginForm] = useState({
        username: "",
        password: ""
    })
    const [showBeat, setShowBeat] = useState(true);

    const navigate = useNavigate()
    const location = useLocation()

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

    const login_handler = (e) => {
        e.preventDefault()
        login(loginform)
    }

    useEffect(() => {
        logged && navigate(location?.state?.from?.pathname);
    }, [logged])

    const handleMouseOver = (event) => {
        let iterations = 0;
        const intervalID = setInterval(() => {
            event.target.innerText = event.target.innerText.split("").map((each_letter, i) => {
                console.log(event.target.dataset.value.length)
                if (i < iterations) {
                    return event.target.dataset.value[i]
                }
                return alphabets[Math.floor(Math.random() * 26)]
            }).join("")
            if (iterations >= 4) {
                clearInterval(intervalID)
                iterations = 0
            }
            iterations += 1 / 3
        }, 100);
    };

    const alphabets = "abcdefghijklmnopqrstuvwxyz"
    useEffect(() => {
        const titleElement = document.getElementById("title");
        titleElement.addEventListener("mouseover", handleMouseOver);

        return () => {
            titleElement.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setShowBeat(false);
        }, 3000);
    }, []);

    return (
        <Flex align={"center"} h={"100vh"} p={"5rem"} overflow={"hidden"}>
            <Box mx="auto" >
                <Text
                    className={showBeat ? "beat-animation" : ""}
                    id="title"
                    fontSize={"6xl"}
                    letterSpacing={15}
                    data-value="LOOP"
                >
                    LOOP
                </Text>
            </Box>
            {
                show_login ?
                    <Box style={divider_border} p={3} transition={"2s"}>
                        <Text align={"center"} textTransform={"uppercase"}>login</Text>
                        <form onSubmit={login_handler}>
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
                                            type="submit"
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
                        </form>
                        <Text m={"1rem"} fontSize={"sm"}>
                            Don't have a account.
                            <Text as={"span"}
                                cursor={"pointer"}
                                color={"grey"}
                                _hover={{ textDecoration: "underline" }}
                                onClick={() => set_show_login(false)}
                            >
                                Sign up here
                            </Text>
                        </Text>
                    </Box>
                    :
                    <Box style={divider_border} transform={!show_login ? "rotate(360deg)" : "none"} transition={"2s"} p={3}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazySignup set_show_login={set_show_login} />
                        </Suspense>
                    </Box>

            }
        </Flex >
    )
}

export default Login
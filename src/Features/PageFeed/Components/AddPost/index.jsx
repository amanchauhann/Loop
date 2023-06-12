import { Image } from "@chakra-ui/image";
import "./main.css"
import { Flex } from "@chakra-ui/layout";
import { EmojiContainer } from "../EmojiContainer";
import { useState } from "react";

const AddPost = () => {
    const [content, set_content] = useState("")
    return (
        // <div className="add_post_container">
        <Flex w={"25rem"} p={"1rem"} h={"fit-content"} border={"1px solid red"} direction={"column"} gap={"1rem"}>
            <Flex gap={"1rem"} align={"center"}>
                <Image
                    borderRadius='full'
                    boxSize='45px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />
                <input value={content} onChange={(e) => set_content(e.target.value)} className="add_post_input" type="text" />
            </Flex>
            <Flex justify={"space-between"} align={"center"}>
                <Flex gap={"1rem"} align={"center"}>
                    <i className="fa-regular fa-image fa-lg"></i>
                    <EmojiContainer set_content={set_content} />
                </Flex>
                <button className="post_btn">POST</button>
            </Flex>
        </Flex>
        // </div>
    )
}

export default AddPost;
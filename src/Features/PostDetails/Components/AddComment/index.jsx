import { Flex, Image } from "@chakra-ui/react"
import { EmojiContainer } from "../../../PageFeed/Components/EmojiContainer"
import { divider_border } from "../../../../Styles/Global"
import { useState } from "react"
import { useAuth } from "../../../../Contexts/AuthProvider"
import { usePosts } from "../../../../Contexts/PostsProvider"
import { POSTS } from "../../../../Common/reducerTypes"
import { v4 as uuid } from "uuid";

const AddComment = () => {
    const [content, set_content] = useState("")
    const { userData: { user: { user_details: { displayImg } } } } = useAuth()

    return (
        <Flex style={divider_border} p={"1rem"} h={"fit-content"} direction={"column"} gap={"1rem"}>
            <Flex gap={"1rem"} align={"center"}>
                <Image
                    borderRadius='full'
                    boxSize='45px'
                    src={displayImg}
                    alt={displayImg}
                />
                <input value={content} onChange={(e) => set_content(e.target.value)} className="add_post_input" type="text" />
            </Flex>
            <Flex justify={"space-between"} align={"center"}>
                <Flex gap={"1rem"} align={"center"}>
                    <i className="fa-regular fa-image fa-lg"></i>
                    <EmojiContainer set_content={set_content} />
                </Flex>
                <button className="post_btn" disabled={content.length ? false : true}>Comment</button>
            </Flex>
        </Flex>
    )
}

export default AddComment
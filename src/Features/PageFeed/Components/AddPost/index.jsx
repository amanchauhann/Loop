import { Image } from "@chakra-ui/image";
import "./main.css"
import { Flex } from "@chakra-ui/layout";
import { EmojiContainer } from "../EmojiContainer";
import { useState } from "react";
import { divider_border } from "../../../../Styles/Global";
import { useAuth } from "../../../../Contexts/AuthProvider";
import { getAddPostService } from "../../../../Services/postServices";
import { usePosts } from "../../../../Contexts/PostsProvider";
import { POSTS } from "../../../../Common/reducerTypes";

const AddPost = () => {
    const [content, set_content] = useState("")
    const { userData: { user: { user_details: { displayImg }, encoded_token } } } = useAuth()
    const { postsDispatch, allPosts: { posts, feedPosts } } = usePosts()

    const add_post_handler = () => {
        const add_post = async () => {
            try {
                const { data, status } = await getAddPostService(content, encoded_token)
                if (status === 201)
                    postsDispatch({ type: POSTS.INITIALISE, payload: data.posts })
                set_content("")
            } catch (e) {
                console.error("from AddPost_handler", e)
            }
        }
        add_post()
    }
    return (
        // <div className="add_post_container">
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
                <button className="post_btn" onClick={add_post_handler} disabled={content.length ? false : true}>POST</button>
            </Flex>
        </Flex>
        // </div>
    )
}

export default AddPost;
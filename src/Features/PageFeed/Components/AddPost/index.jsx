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
import { Avatar, Input } from "@chakra-ui/react";
import { errorToast, infoToast, upload_image } from "../../../../utils";

const AddPost = () => {
    const [post_content, set_post_content] = useState({
        content: "",
        media: ""
    })
    const [post_uploading, set_post_uploading] = useState(false)
    const { userData: { user: { user_details: { firstName, lastName, displayImg }, encoded_token } } } = useAuth()
    const { postsDispatch, allPosts: { posts, feedPosts } } = usePosts()

    const add_post_handler = () => {
        const add_post = async () => {
            try {
                const { data, status } = await getAddPostService(post_content, encoded_token)
                if (status === 201)
                    postsDispatch({ type: POSTS.INITIALISE, payload: data.posts })
                infoToast("Posted sucessfully.")
                set_post_content({
                    content: "",
                    media: ""
                })
            } catch (e) {
                console.error("from AddPost_handler", e)
                errorToast(`${e.response.status}: ${e.response.data.errors}`)
            }
        }
        add_post()
    }

    const onUploadClick = async (e) => {
        const selected_file = e.target.files[0]
        if (selected_file) {
            try {
                set_post_uploading(true)
                const img_url = await upload_image(selected_file)
                if (img_url) {
                    set_post_content(prev => ({ ...prev, media: img_url.url }))
                    set_post_uploading(false)
                }
            } catch (e) {
                console.error("from onUploadClick", e)
                errorToast(`${e.response.status}: ${e.response.data.errors}`)
            }
        }
    }

    return (
        <Flex style={divider_border} p={"10px"} h={"fit-content"} direction={"column"} gap={"1rem"}>
            <Flex gap={"1rem"} align={"center"}>
                <Avatar
                    src={displayImg}
                    name={`${firstName} ${lastName}`}
                />
                <input value={post_content.content} onChange={(e) => set_post_content((prev) => ({ ...prev, content: e.target.value }))} className="add_post_input" type="text" />
            </Flex>
            {post_uploading && <h2>UPLOADING MEDIA...</h2>}
            {post_content.media && <img src={post_content.media} />}
            <Flex justify={"space-between"} align={"center"}>
                <Flex gap={"1rem"} align={"center"}>

                    <div style={{ position: "relative" }}>
                        <i className="fa-regular fa-image fa-lg" >
                            <Input
                                position={"absolute"}
                                top={0}
                                left={0}
                                height={5}
                                cursor={"pointer"}
                                type="file"
                                opacity={0}
                                accept="image/*"
                                onChange={onUploadClick}
                            />
                        </i>
                    </div>

                    <EmojiContainer set_post_content={set_post_content} />
                </Flex>
                <button className="post_btn" onClick={add_post_handler} disabled={post_content.content.length || post_content.media.length ? false : true}>POST</button>
            </Flex>
        </Flex>
    )
}

export default AddPost;
import { Avatar, Flex, Image } from "@chakra-ui/react"
import { EmojiContainer } from "../../../PageFeed/Components/EmojiContainer"
import { divider_border } from "../../../../Styles/Global"
import { useState } from "react"
import { useAuth } from "../../../../Contexts/AuthProvider"
import { usePosts } from "../../../../Contexts/PostsProvider"
import { POSTS } from "../../../../Common/reducerTypes"
import { v4 as uuid } from "uuid";
import { getAddCommentService } from "../../../../Services/commentServices"
import { errorToast } from "../../../../utils"

const AddComment = ({ _id }) => {
    const [add_comment, set_add_comment] = useState("")
    const { userData: { user: { user_details: { firstName, lastName, displayImg }, encoded_token } } } = useAuth()
    const { postsDispatch } = usePosts()

    const add_comment_handler = async () => {
        try {
            const { data, status } = await getAddCommentService(_id, add_comment, encoded_token)
            if (status === 201) {
                postsDispatch({ type: POSTS.INITIALISE, payload: data.posts })
                set_add_comment("")
            }
        } catch (e) {
            console.error("from AddComment", e)
            errorToast(`${e.response.status}: ${e.response.data.errors}`)
        }
    }

    return (
        <Flex style={divider_border} p={"10px"} h={"fit-content"} direction={"column"} gap={"1rem"}>
            <Flex gap={"6px"} align={"center"}>
                <Avatar
                    src={displayImg}
                    name={`${firstName} ${lastName}`}
                />
                <input value={add_comment} onChange={(e) => set_add_comment(e.target.value)} className="add_post_input" type="text" />
            </Flex>
            <button style={{ alignSelf: "flex-end", padding: "8px" }} className="post_btn" onClick={add_comment_handler} disabled={add_comment.length ? false : true}>Comment</button>
        </Flex>
    )
}

export default AddComment
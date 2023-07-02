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
import { Input } from "@chakra-ui/react";
import { upload_image } from "../../../../utils";

const AddPost = () => {
    const [post_content, set_post_content] = useState({
        content: "",
        media: ""
    })
    const [post_uploading, set_post_uploading] = useState(false)
    const { userData: { user: { user_details: { displayImg }, encoded_token } } } = useAuth()
    const { postsDispatch, allPosts: { posts, feedPosts } } = usePosts()

    const add_post_handler = () => {
        const add_post = async () => {
            try {
                const { data, status } = await getAddPostService(post_content, encoded_token)
                if (status === 201)
                    postsDispatch({ type: POSTS.INITIALISE, payload: data.posts })
                set_post_content({
                    content: "",
                    media: ""
                })
            } catch (e) {
                console.error("from AddPost_handler", e)
            }
        }
        add_post()
    }

    const onUploadClick = async (e) => {
        console.log()
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
            }
        }
    }

    const uploadImage = async (image) => {
        if (Math.round(image.size / 1024000) > 2) {
            console.error("img should be less than 2mb")
        } else {
            const data = new FormData();
            data.append("file", image);
            data.append("upload_preset", import.meta.env.VITE_JWT_SECRET)
        }
        const res = await axios.post("")
    }

    // const uploadImage = async (image) => {
    //     if (Math.round(image.size / 1024000) > 2)
    //       toast.error("File size should be less than 2MB");
    //     else {
    //       const data = new FormData();
    //       data.append("file", image);
    //       data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_API_KEY);
    //       const requestOptions = {
    //         method: "POST",
    //         body: data,
    //       };
    //       await fetch(
    //         "https://api.cloudinary.com/v1_1/dtrjdcrme/image/upload",
    //         requestOptions
    //       )
    //         .then((response) => response.json())
    //         .then((json) => {
    //           setAvatarUrl(json.secure_url);
    //         })
    //         .catch((error) => {
    //           console.error(error);
    //           toast.error("Image Uploading failed");
    //         });
    //     }
    //   };

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
        // </div>
    )
}

export default AddPost;
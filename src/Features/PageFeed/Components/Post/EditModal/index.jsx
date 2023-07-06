import { Box, Button, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import { getEditPostService } from "../../../../../Services/postServices"
import { usePosts } from "../../../../../Contexts/PostsProvider"
import { POSTS } from "../../../../../Common/reducerTypes"
import { errorToast, upload_image } from "../../../../../utils"

const EditModal = ({ isOpen, onClose, content, _id, encoded_token, media }) => {
    const { postsDispatch, allPosts: { posts, feedPosts } } = usePosts()
    const [edit_content, set_edit_content] = useState(`${content}`)
    const [edit_post, set_edit_post] = useState({
        content: `${content}`,
        media: `${media ? media : ""}`
    })
    const [media_uploading, set_media_uploading] = useState(false)

    const edit_value_handler = (e) => {
        set_edit_post(prev => ({
            ...prev,
            content: e.target.value
        }))
    }
    const edit_post_handler = (id, encodedToken) => {
        const edit_post_update = async () => {
            try {
                const { data: { posts }, status } = await getEditPostService(edit_post, id, encodedToken)
                if (status === 201) {
                    postsDispatch({ type: POSTS.INITIALISE, payload: posts })
                    onClose()
                }

            } catch (e) {
                console.error("from editModal_editPost", e)
                errorToast(`${e.response.status}: ${e.response.data.errors}`)
            }
        }
        edit_post_update()
    }

    const onUploadClick = async (e) => {
        const selected_file = e.target.files[0]
        if (selected_file) {
            try {
                set_media_uploading(true)
                const img_url = await upload_image(selected_file)
                if (img_url) {
                    set_edit_post(prev => ({ ...prev, media: img_url.url }))
                    set_media_uploading(false)
                }
            } catch (e) {
                console.error("from onUploadClick", e)
                errorToast(`${e?.response?.status}: ${e?.response?.data?.errors}`)
            }
        }
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit your Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Textarea resize="vertical" value={edit_post.content} onChange={edit_value_handler} />
                        <Box>
                            <Text>Media:</Text>
                            {media_uploading ? <Text>UPLOADING</Text> : edit_post.media && <Box position={"relative"} w={"fit-content"}>
                                <Image boxSize={"100px"} src={edit_post.media} />
                                <Text onClick={
                                    () =>
                                        set_edit_post(prev => ({
                                            ...prev,
                                            media: ""
                                        }))
                                } position={"absolute"} top={-3} right={-2}><i className="fa-sharp fa-regular fa-circle-xmark fa-lg"></i></Text>
                            </Box>}

                            <div style={{ position: "relative", marginTop: "10px" }}>
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
                        </Box>

                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={() => edit_post_handler(_id, encoded_token)} colorScheme='blue' mr={3}>
                            Update
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditModal
import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import { getEditPostService } from "../../../../../Services/postServices"
import { usePosts } from "../../../../../Contexts/PostsProvider"
import { POSTS } from "../../../../../Common/reducerTypes"

const EditModal = ({ isOpen, onClose, content, _id, encoded_token }) => {
    const { postsDispatch, allPosts: { posts, feedPosts } } = usePosts()
    const [edit_content, set_edit_content] = useState(`${content}`)

    const edit_value_handler = (e) => {
        set_edit_content(e.target.value)
    }
    const edit_post_handler = (id, encodedToken) => {
        const edit_post = async () => {
            try {
                const { data: { posts }, status } = await getEditPostService(edit_content, id, encodedToken)
                if (status === 201) {
                    postsDispatch({ type: POSTS.INITIALISE, payload: posts })
                    onClose()
                }

            } catch (e) {
                console.error("from editModal_editPost", e)
            }
        }
        edit_post()
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit your Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Textarea resize="vertical" value={edit_content} onChange={edit_value_handler} />
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
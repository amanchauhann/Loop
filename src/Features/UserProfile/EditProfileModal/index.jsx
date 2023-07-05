import { Avatar, Box, Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import { getUserEditService } from "../../../Services/userServices"
import { useAuth } from "../../../Contexts/AuthProvider"
import { AUTH } from "../../../Common/reducerTypes"
import { base, robots_data } from "../../../Common/robots"
import { upload_image } from "../../../utils"

const EditProfileModal = ({ isOpen, onClose, bio, website, displayImg, firstName, lastName }) => {
    const [update_bio, set_update_bio] = useState({
        displayImg: displayImg,
        bio: bio,
        website: website,
    })
    const [selected_index, set_selected_index] = useState(null)
    const [post_uploading, set_post_uploading] = useState(false)

    const { userData: { user: { user_details, encoded_token } }, authDispacth } = useAuth()

    const update_profile_handler = () => {
        const update_profile = async () => {
            try {
                const { data: { user }, status } = await getUserEditService(update_bio, encoded_token)
                if (status === 201) {
                    authDispacth({ type: AUTH.UPDATE, payload: user })
                    onClose()
                }
            } catch (e) {
                console.error("from editProfileModal_update", e)
            }
        }
        update_profile()
    }
    const onUploadClick = async (e) => {
        const selected_file = e.target.files[0]
        if (selected_file) {
            try {
                set_post_uploading(true)
                const img_url = await upload_image(selected_file)
                if (img_url) {
                    set_update_bio(prev => ({ ...prev, displayImg: img_url.url }))
                    set_post_uploading(false)
                }
            } catch (e) {
                console.error("from onUploadClick", e)
            }
        }
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit your Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Flex direction={"column"} gap={5}>
                            <Avatar
                                src={update_bio?.displayImg}
                                name={`${firstName} ${lastName}`}
                            />
                            <label> Upload Picture or choose Avatar
                                <input onChange={onUploadClick} type="file" />
                            </label>
                            {post_uploading && <Text>uploading...</Text>}
                            <Box>
                                <Text>Choose Avatar:</Text>
                                <Flex justify={"space-between"}>
                                    {robots_data.map((each_robot, i) => <Avatar
                                        bg={selected_index === i ? "red" : "none"}
                                        border={"1px solid grey"}
                                        key={i}
                                        onClick={() => {
                                            set_update_bio(prev => ({ ...prev, displayImg: `${base}${each_robot}` }))
                                            set_selected_index(i)
                                        }
                                        }
                                        src={`${base}${each_robot}`}
                                    />)}
                                </Flex>

                            </Box>
                            <Flex gap={14}>
                                <Text>Bio: </Text>
                                <Input
                                    placeholder='Enter Bio'
                                    size='sm'
                                    value={update_bio.bio}
                                    onChange={(e) => set_update_bio(prev => ({ ...prev, bio: e.target.value }))}
                                />
                            </Flex>
                            <Flex gap={5}>
                                <Text>Website: </Text>
                                <Input
                                    placeholder='Enter Website'
                                    size='sm'
                                    value={update_bio.website}
                                    onChange={(e) => set_update_bio(prev => ({ ...prev, website: e.target.value }))}
                                />
                            </Flex>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={update_profile_handler}>
                            Update
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditProfileModal
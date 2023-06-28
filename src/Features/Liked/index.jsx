import { useEffect, useState } from "react"
import { usePosts } from "../../Contexts/PostsProvider"
import { useAuth } from "../../Contexts/AuthProvider"
import Post from "../PageFeed/Components/Post"
import { Heading } from "@chakra-ui/react"
import PostsLayout from "../../Layout/PostsLayout"
import Layout from "../../Layout"

const Liked = () => {
    const [liked_by_user, set_liked_by_user] = useState([])
    const { allPosts: { posts } } = usePosts()
    const { userData: { user: { user_details } } } = useAuth()

    useEffect(() => {
        set_liked_by_user((posts.filter(({ likes }) => likes.likedBy.find(({ _id }) => _id === user_details._id))))
    }, [posts])

    return (
        <>
            <Layout children={liked_by_user.length > 0 ?
                <PostsLayout children={liked_by_user.map(each_liked =>
                    <Post key={each_liked._id} {...each_liked} />)} />
                :
                <Heading size="lg" mt="16">
                    No Liked Posts Yet
                </Heading>} />
        </>
    )
}

export default Liked
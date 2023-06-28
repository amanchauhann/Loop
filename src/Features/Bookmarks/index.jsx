import { useEffect, useState } from "react"
import { useAuth } from "../../Contexts/AuthProvider"
import { getBookmarkService } from "../../Services/postServices"
import { usePosts } from "../../Contexts/PostsProvider"
import { Heading } from "@chakra-ui/react"
import Post from "../PageFeed/Components/Post"
import Layout from "../../Layout"
import PostsLayout from "../../Layout/PostsLayout"

const Bookmarks = () => {
    const [bookmarked_posts, set_bookmarked_posts] = useState([])
    const { userData: { user: { user_details, encoded_token } } } = useAuth()
    const { allPosts: { posts } } = usePosts()

    useEffect(() => {
        set_bookmarked_posts(posts.filter(({ _id }) => user_details?.bookmarks?.includes(_id)))
    }, [posts])


    const bookmark_feed = bookmarked_posts.length > 0 ?
        <PostsLayout children={bookmarked_posts.map(each_bookmarked =>
            <Post key={each_bookmarked._id} {...each_bookmarked} />)} />
        :
        <Heading size="lg" mt="16" w={"35rem"} textAlign={"center"}>
            No Bookmarks Yet
        </Heading>

    return (
        <>
            <Layout children={bookmark_feed} />

        </>
    )
}

export default Bookmarks
import { useEffect, useState } from "react"
import { useAuth } from "../../Contexts/AuthProvider"
import { getBookmarkService } from "../../Services/postServices"
import { usePosts } from "../../Contexts/PostsProvider"
import { Heading } from "@chakra-ui/react"
import Post from "../PageFeed/Components/Post"

const Bookmarks = () => {
    const [bookmarked_posts, set_bookmarked_posts] = useState([])
    const { userData: { user: { user_details, encoded_token } } } = useAuth()
    const { allPosts: { posts } } = usePosts()

    // useEffect(() => {
    //     const fetchBookmarks = async () => {
    //         try {
    //             const res = await getBookmarkService(encoded_token)
    //             console.log("boooook", res)
    //         } catch (e) {
    //             console.error("from fetch_Bookmarks", e)
    //         }
    //     }
    //     fetchBookmarks()
    // }, [])

    useEffect(() => {
        set_bookmarked_posts(posts.filter(({ _id }) => user_details?.bookmarks?.includes(_id)))
    }, [posts])


    return (
        <>
            {bookmarked_posts.length > 0 ? bookmarked_posts.map(each_bookmarked => <Post key={each_bookmarked._id} {...each_bookmarked} />) : <Heading size="lg" mt="16">
                No Bookmarks Yet
            </Heading>}
        </>
    )
}

export default Bookmarks
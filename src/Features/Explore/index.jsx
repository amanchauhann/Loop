import { usePosts } from "../../Contexts/PostsProvider";
import Post from "../PageFeed/Components/Post";

const Explore = () => {
    const { allPosts: { posts } } = usePosts()
    return (
        <>
            {posts.map(eachPost => <Post key={eachPost._id} {...eachPost} />)}
        </>
    )
}

export default Explore;
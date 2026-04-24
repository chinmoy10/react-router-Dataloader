import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <>
            <div>
                <h1>This is the {posts.length} posts website page.</h1>
                <p>You can watch some demo posts in this page</p>
                <div className="posts">
                    {
                        posts.map(post => <Post key={post.id} post={post}></Post>)
                    }
                </div>
            </div>
        </>
    );
};

export default Posts;
import { Link } from "react-router-dom";

const Post = ({ post }) => {

    const {id, title} = post || {};

    return (
        <div className="post">
            <h3 style={{
                color: "#000000",
            }}>Post Num: {id}</h3>
            <p className="mb-5">Title: {title}</p>
            <Link className="text-cyan-700 border-2 border-violet-700" to={`/post/${id}`}>Post Details</Link>
        </div>
    );
};

export default Post;
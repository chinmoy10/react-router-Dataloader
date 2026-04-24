import { useLoaderData } from "react-router-dom";

const PostDetails = () => {

    const post = useLoaderData();
    const {id, title,body} = post || {};

    return (
        <div>
            <h1 className="text-2xl">Id: {id}</h1>
            <h2 className="text-2xl text-red-500">Title: {title}</h2>
            <p className="text-2xl">Post Details: {body}</p>
        </div>
    );
};

export default PostDetails;
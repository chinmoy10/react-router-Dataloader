import { useLoaderData } from "react-router-dom";

const CommentDetails = () => {
    const comment = useLoaderData();
    const {id, name, email, body} = comment || {}
    return (
        <div className="w-8/12 mx-auto">
            <h1>Id: {id}</h1>
            <h1 className="text-yellow-500">Name: {name}</h1>
            <p className="text-pink-700">Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export default CommentDetails;
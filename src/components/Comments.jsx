import { useLoaderData } from "react-router-dom";
import Comment from "./Comment";

const Comments = () => {
    const comments = useLoaderData();
    return (
        <div>
            <h2>This is {comments.length} comments portal, it uses for reading comments.</h2>
            <div className="w-11/12 mx-auto grid grid-cols-4 gap-5 mt-5">
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;
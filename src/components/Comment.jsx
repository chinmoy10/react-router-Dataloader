import { Link } from "react-router-dom";

const Comment = ({comment}) => {
    const{id, name, email} = comment || {};
    return (
        <div className="border-2 border-pink-900 p-5 overflow-x-auto flex flex-col">
            <h1>Id: {id}</h1>
            <h1>Name: {name}</h1>
            <p className="flex-grow">Email: {email}</p>
            <div className="mt-5 rounded-3xl text-pink-800 bg-slate-200">
                <Link to={`/comment/${id}`}>Comment Details</Link>
            </div>
        </div>
    );
};

export default Comment;
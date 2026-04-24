import { Link } from "react-router-dom";

const User = ({user}) => {
    const{id, name, email} = user || {};
    return (
        <div className="border-2 border-orange-500 bg-white">
            <h1 className="text-black font-bold">Id: {id}</h1>
            <h1 className="text-red-500">Name: {name}</h1>
            <p className="text-blue-900">Email: {email}</p>
            <div>
                <Link className="text-blue-600 underline" to={`/user/${id}`}>User Details</Link>
            </div>
        </div>
    );
};

export default User;
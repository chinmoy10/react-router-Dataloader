import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {id, name, email, phone, website} = user || {};
    return (
        <div>
            <h1>ID: {id}</h1>
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            <p>Phone No: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;
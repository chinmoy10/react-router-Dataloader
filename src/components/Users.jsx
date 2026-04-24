import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>This is the {users.length}th users portal</h1>
            <div className="grid grid-cols-3 gap-5 w-11/12 mx-auto mt-5">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <h1>Demo</h1>
            <div>
                <ul className="items">
                    <Link to='/'>Home</Link>
                    <Link to='/posts'>Posts</Link>
                    <Link to='/users'>Users</Link>
                    <Link to='/comments'>Comments</Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
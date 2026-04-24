import { Outlet } from "react-router-dom";
import "./common.css"
import Navbar from "./Navbar";
const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-color">This is the main layout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
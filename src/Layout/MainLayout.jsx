import { Toaster } from "react-hot-toast";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
               <Outlet></Outlet>
            </div>
            <div><Toaster/></div>
        </div>
    );
};

export default Mainlayout;
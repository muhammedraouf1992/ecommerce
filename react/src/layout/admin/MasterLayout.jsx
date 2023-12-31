import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../../assets/admin/css/sb-admin-2.min.css";
import "../../assets/admin/js/sb-admin-2.min.js";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const MasterLayout = () => {
    const { token, user } = useAuthContext();
    if (!token) {
        return <Navigate to={"/login"} />;
    }
    if (!user) {
        return <Navigate to="/login" />;
    }
    if (user.role_as === 0) {
        return <Navigate to="/" />;
    }
    console.log(user);

    return (
        <div id="page-top">
            <div id="wrapper">
                <Sidebar />

                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Navbar />
                        <div className="container-fluid">{<Outlet />}</div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default MasterLayout;

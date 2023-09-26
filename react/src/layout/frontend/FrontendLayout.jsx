import React from "react";

import NavScrollExample from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../frontend/components/Footer";

const FrontendLayout = () => {
    return (
        <>
            <NavScrollExample />

            <>{<Outlet />}</>
            <Footer />
        </>
    );
};

export default FrontendLayout;

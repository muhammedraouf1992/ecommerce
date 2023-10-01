import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../../assets/admin/img/undraw_profile.svg";
import axiosClient from "../../axios";

const Navbar = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axiosClient
            .get("/user", data)
            .then((data) => {
                console.log(data.data);
                setData(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <h1>....loading</h1>;
    }
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                    <Link
                        className="nav-link dropdown-toggle"
                        to="#"
                        id="userDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                            {data?.name}
                        </span>
                        <img
                            className="img-profile rounded-circle"
                            src={Profile}
                        />
                    </Link>

                    <div
                        className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown"
                    >
                        <Link className="dropdown-item" to="#">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </Link>
                        <Link className="dropdown-item" to="#">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </Link>
                        <Link className="dropdown-item" to="#">
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Activity Log
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link
                            className="dropdown-item"
                            to="#"
                            data-toggle="modal"
                            data-target="#logoutModal"
                        >
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

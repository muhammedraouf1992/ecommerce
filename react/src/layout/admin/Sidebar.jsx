import React from "react";
import { Link } from "react-router-dom";
import Rocket from "../../assets/admin/img/undraw_rocket.svg";
const Sidebar = () => {
    return (
        <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
        >
            <Link
                className="sidebar-brand d-flex align-items-center justify-content-center"
                to="/"
            >
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">
                    SB Admin <sup>2</sup>
                </div>
            </Link>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item">
                <Link className="nav-link" to="/admin/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/admin/profile">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Profile</span>
                </Link>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Interface</div>

            <li className="nav-item">
                <Link
                    className="nav-link collapsed"
                    to="#"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                >
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Category</span>
                </Link>
                <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionSidebar"
                >
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <Link className="collapse-item" to="/admin/category">
                            All Categories
                        </Link>
                        <Link
                            className="collapse-item"
                            to="/admin/category/add"
                        >
                            Add Category
                        </Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link collapsed"
                    to="#"
                    data-toggle="collapse"
                    data-target="#collapseUtilities"
                    aria-expanded="true"
                    aria-controls="collapseUtilities"
                >
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Products</span>
                </Link>
                <div
                    id="collapseUtilities"
                    className="collapse"
                    aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar"
                >
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <Link className="collapse-item" to="/admin/product">
                            All Products
                        </Link>
                        <Link className="collapse-item" to="/admin/product/add">
                            Add product
                        </Link>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/admin/orders">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Orders</span>
                </Link>
            </li>

            <hr className="sidebar-divider" />

            <hr className="sidebar-divider d-none d-md-block" />

            <div className="sidebar-card d-none d-lg-flex">
                <img
                    className="sidebar-card-illustration mb-2"
                    src={Rocket}
                    alt="..."
                />

                <p className="text-center mb-2">
                    <strong>SB Admin Pro</strong> is packed with premium
                    features, components, and more!
                </p>
                <Link
                    className="btn btn-success btn-sm"
                    to="https://startbootstrap.com/theme/sb-admin-pro"
                >
                    Upgrade to Pro!
                </Link>
            </div>
        </ul>
    );
};

export default Sidebar;

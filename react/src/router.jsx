import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";
import MasterLayout from "./layout/admin/MasterLayout";
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import AddCategory from "./components/admin/category/AddCategory";
import Category from "./components/admin/category/Category";
import EditCategory from "./components/admin/category/EditCategory";
import Products from "./components/admin/product/Products";
import AddProduct from "./components/admin/product/AddProduct";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/admin",
        element: <MasterLayout />,
        children: [
            {
                path: "/admin",
                element: <Navigate to={"/admin/dashboard"} />,
            },
            {
                path: "/admin/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/admin/profile",
                element: <Profile />,
            },
            {
                path: "/admin/category",
                element: <Category />,
            },
            {
                path: "/admin/category/add",
                element: <AddCategory />,
            },
            {
                path: "/admin/category/edit/:id",
                element: <EditCategory />,
            },
            {
                path: "/admin/product",
                element: <Products />,
            },
            {
                path: "/admin/product/add",
                element: <AddProduct />,
            },
            {
                path: "/admin/product/edit/:id",
                element: <EditCategory />,
            },
        ],
    },
]);
export default router;

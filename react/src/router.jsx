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
import EditProduct from "./components/admin/product/EditProduct";
import FrontendLayout from "./layout/frontend/FrontendLayout";
import HomePage from "./layout/frontend/pages/HomePage";
import AboutUsPage from "./layout/frontend/pages/AboutUsPage";
import ContactUsPage from "./layout/frontend/pages/ContactUsPage";
import Collection from "./layout/frontend/pages/Collection";
import ViewProduct from "./layout/frontend/pages/ViewProduct";
import SingleProduct from "./layout/frontend/pages/SingleProduct";
import Cart from "./layout/frontend/pages/Cart";
import Checkout from "./layout/frontend/pages/Checkout";
const router = createBrowserRouter([
    {
        path: "/",
        element: <FrontendLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/aboutus",
                element: <AboutUsPage />,
            },
            {
                path: "/contactus",
                element: <ContactUsPage />,
            },
            {
                path: "/shop",
                element: <Collection />,
            },
            {
                path: "/product/:id",
                element: <ViewProduct />,
            },
            {
                path: "/single-product/:id",
                element: <SingleProduct />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/checkout",
                element: <Checkout />,
            },
        ],
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
                element: <EditProduct />,
            },
        ],
    },
]);
export default router;

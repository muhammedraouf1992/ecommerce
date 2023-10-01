import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthContextProvider>
        <RouterProvider router={router} />
    </AuthContextProvider>
);

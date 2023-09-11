import { createContext, useContext, useState } from "react";
import axiosClient from "../axios";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    const [loading, setLoading] = useState(false);
    const [fetchedData, setFetchData] = useState([]);

    const [errors, setErrors] = useState([]);
    const [postErrors, setPostErrors] = useState([]);

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    const getFetcher = (url) => {
        setLoading(true);
        axiosClient
            .get(url)
            .then(({ data }) => {
                setFetchData(data.data);
                setLoading(false);
            })
            .catch((error) => {
                setErrors(error.response.data);
                setLoading(false);
            });
    };
    const postFetcher = (url, data) => {
        setLoading(true);
        axiosClient
            .post(url, data)
            .then((data) => {
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setPostErrors(error);
            });
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                setToken,
                setUser,
                getFetcher,
                postFetcher,
                loading,
                fetchedData,
                errors,

                postErrors,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export const useAuthContext = () => useContext(AuthContext);

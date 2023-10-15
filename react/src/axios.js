import axios from "axios";
const axiosClient = axios.create({
    baseURL: "https://touchy-misalignment.000webhostapp.com/api",
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});
axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem("ACCESS_Token");
        }
        throw error;
    }
);

export default axiosClient;

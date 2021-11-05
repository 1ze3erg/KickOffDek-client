import axios from "axios";
import { getToken, removeRole, removeToken } from "../helpers/localStorage";
import { API_URL } from "./env";

axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(
    (config) => {
        config.headers.authorization = `Bearer ${getToken()}`;
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        if (err.response && err.response.status === 401) {
            removeToken();
            removeRole();
            window.location.reload();
        }
        return Promise.reject(err);
    }
);

export default axios;

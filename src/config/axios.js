import axios from "axios";
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
            window.location.reload();
            return;
        }
        if (err.response && err.response.status === 400) {
            console.dir(err);
            return;
        }
        return Promise.reject(err);
    }
);

export default axios;

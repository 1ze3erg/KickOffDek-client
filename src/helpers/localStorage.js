import { TOKEN_NAME } from "../config/env";

function getToken() {
    return localStorage.getItem(TOKEN_NAME);
}

function setToken(token) {
    return localStorage.setItem(TOKEN_NAME, token);
}

function removeToken() {
    return localStorage.removeItem(TOKEN_NAME);
}

export { getToken, setToken, removeToken };

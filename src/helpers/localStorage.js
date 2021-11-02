import { ROLE_NAME, TOKEN_NAME } from "../config/env";

function getToken() {
    return localStorage.getItem(TOKEN_NAME);
}

function setToken(token) {
    return localStorage.setItem(TOKEN_NAME, token);
}

function removeToken() {
    return localStorage.removeItem(TOKEN_NAME);
}

function getRole() {
    return localStorage.getItem(ROLE_NAME);
}

function setRole(role) {
    return localStorage.setItem(ROLE_NAME, role);
}

function removeRole() {
    return localStorage.removeItem(ROLE_NAME);
}

export { getToken, setToken, removeToken, getRole, setRole, removeRole };

import { jwtDecode } from "jwt-decode";

const TOKEN = "userToken";

export function setToken(jwt) {
    localStorage.setItem(TOKEN, jwt);
}

export function getToken() {
    return localStorage.getItem(TOKEN);
}

export function getUser() {
    try {
        const jwt = getToken();
        return jwtDecode(jwt);
    } catch (err) {
        return null;
    }
}
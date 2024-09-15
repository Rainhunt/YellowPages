import post from "./requests/post";

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users";

export async function login(loginData) {
    return await post(`${apiUrl}/login`, loginData);
}

export async function signup(signupData) {
    return await post(apiUrl, signupData);
}
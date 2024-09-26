import get from "./requests/get";
import post from "./requests/post";
import put from "./requests/put";

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";

export async function getCardData(cardId) {
    try {
        let request = apiUrl
        if (cardId) {
            request += `/${cardId}`;
        }
        const response = await fetch(request);
        const data = await response.json();
        return data;

    } catch (err) {
        return Promise.reject(err.message);
    }
}

export async function getMyCards(xAuthToken) {
    try {
        const request = `${apiUrl}/my-cards`
        const response = await get(request, { "x-auth-token": xAuthToken });
        return response;
    } catch (err) {
        return Promise.reject(err.message);
    }
}

export async function createCard(cardData, token) {
    try {
        return await post(apiUrl, cardData, { "x-auth-token": token });
    } catch (err) {
        return Promise.reject(err.message);
    }
}

export async function editCard(cardData, token, id) {
    return await put(`${apiUrl}/${id}`, cardData, { "x-auth-token": token });
}
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
        throw new Error(err.message);
    }
}

// export async function getMyCards() {
//     try {
//         const request = `${apiUrl}/my-cards`
//         const response = await fetch(request);
//         return await response.json();
//     } catch (err) {
//         return Promise.reject(err.message);
//     }
// }

export async function createCard(cardData) {

}

// export async function deleteCard(cardId) {

// }
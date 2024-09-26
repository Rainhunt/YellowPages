const apiUrl = "https://nominatim.openstreetmap.org/search?q=";
const format = "&format=jsonv2"

export async function getCoordinatesFromAddress(address) {
    try {
        const response = await fetch(`${apiUrl}${address.houseNumber}+${address.street}%2C+${address.city}%2C+${address.country}${format}`);
        const location = await response.json();
        return [Number(location[0].lat), Number(location[0].lon)];
    } catch (err) {
        return Promise.reject(err.message);
    }
}
export default async function get(url, header) {
    const response = await fetch(url, {
        headers: header
    });

    if (!response.ok) {
        const message = await response.json();
        throw new Error(message);
    }

    return await response.json();
}

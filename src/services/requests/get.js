export default async function get(url, header) {
    const response = await fetch(url, {
        headers: header
    });

    if (!response.ok) {
        const message = await response.json();
        throw new Error(message);
    }

    const text = await response.text();
    try {
        return JSON.parse(text);
    } catch (err) {
        return text;
    }
}

export default async function post(url, data, header) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const message = await response.text();
        throw new Error(message);
    }

    return await response.json();
}

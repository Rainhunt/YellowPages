export default async function del(url, data, header) {
    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            ...header
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const message = await response.text();
        throw new Error(message);
    }

    const text = await response.text();
    try {
        return JSON.parse(text);
    } catch (err) {
        return text;
    }
}

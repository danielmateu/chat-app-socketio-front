
const baseUrl = import.meta.env.VITE_API_URL;

// Peticiones http sin el token
export const fetchSinToken = async (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;

    if (method === 'GET') {
        // return fetch(url);
        const resp = await fetch(url);
        return await resp.json();
    } else {
        const resp = await fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await resp.json();
    }

}
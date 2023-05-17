
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

// Peticiones http con el token
export const fetchConToken = async (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    if (method === 'GET') {
        // return fetch(url);
        const resp = await fetch(url, {
            method,
            headers: {
                'x-token': token
            }
        });
        return await resp.json();
    } else {
        const resp = await fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        });
        return await resp.json();
    }
}

// Peticion para crear un nuevo usuario
// export const fetchConTokenSinBody = async (endpoint, method = 'GET') => {
    
//         const url = `${baseUrl}/${endpoint}`;
//         const token = localStorage.getItem('token') || '';
    
//         if (method === 'GET') {
//             // return fetch(url);
//             const resp = await fetch(url, {
//                 method,
//                 headers: {
//                     'x-token': token
//                 }
//             });
//             return await resp.json();
//         } else {
//             const resp = await fetch(url, {
//                 method,
//                 headers: {
//                     'x-token': token
//                 }
//             });
//             return await resp.json();
//         }
// }
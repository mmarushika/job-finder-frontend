export async function get(url) {
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    });
    const data = await res.json();
    return data;
}

export async function post(url, data) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    });
}

const baseUrl = 'http://localhost:3030/users';
export async function registerUser(user) {
    const response = await fetch(baseUrl + '/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });

    const data = await response.json();

    console.log(data);

    return data;
}

export async function loginUser(user) {
    const response = await fetch(baseUrl + '/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });

    const data = await response.json();

    console.log(data);

    return data;
}

export async function logoutUser() {
    const response = await fetch(baseUrl + '/logout', {
        method: 'GET',
        headers: { 'X-Authorization': JSON.parse(localStorage.getItem('user')).accessToken }
    });
}

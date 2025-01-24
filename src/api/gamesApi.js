
const baseUrl = 'http://localhost:3030/jsonstore/games';
export async function getThreeRecentGames() {

    const response = await fetch(`${baseUrl}?sortBy=_createdOn%20desc`);
    const data = await response.json();

    console.log(data);

    return Object.values(data).slice(0, 3);
}

export async function getAllGames() {

    const response = await fetch(baseUrl);
    const data = await response.json();

    return Object.values(data);
}

export async function createGame(game) {
    const response = await  fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': JSON.parse(localStorage.getItem('user')).accessToken
        },
        body: JSON.stringify(game)
    });

    const data = await response.json();

    return data;
}

export async function getGameById(id) {
    const response = await fetch(`${baseUrl}/${id}`);
    const data = await response.json();

    console.log(data);

    return data;
}

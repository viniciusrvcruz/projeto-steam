export async function fetchAllGames() {
    const response = await fetch('https://www.freetogame.com/api/games'); // Method that fetches data from the API
    const data = await response.json();
    
    return data
}

export async function fetchGameId(gameId) {
    const response = await fetch(`https://www.freetogame.com/api/game?id=${gameId}`);
    const data = await response.json();

    return data
}

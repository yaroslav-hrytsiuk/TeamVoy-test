
// Get data from received api

class Api {

    getPokemonList(offset) {
        return fetch(`http://pokeapi.co/api/v2/pokemon/?limit=${offset}`)
            .then(response => response.json())
            .catch(error => console.log('Request failed', error));
    }

    getPokemonInfo(id) {
        return fetch(id)
            .then(response => response.json())
    }
}

export default new Api()
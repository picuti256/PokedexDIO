
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

const convertPokemonToList = (pokemon) => {
    return `<li class="pokemon">
    <span class="pokeNumber">#001</span>
    <span class="pokeName">${pokemon.name}</span>

    <div class="pokeInfo">
        <ol class="pokeTypes">
            <li class="type">Grass</li>
            <li class="type">Poison</li>
        </ol>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="${pokemon.name}" />
    </div>
</li>`
}

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            console.log(convertPokemonToList(pokemon))

        }
    })
    .catch((err) => console.error(err))
    .finally(() => console.log('Requisição concluída'))
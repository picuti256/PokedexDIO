const pokemonOl = document.getElementById('pokeList')

pokeApi.getPokemons().then((pokemonList = []) => {
    pokemonOl.innerHTML += pokemonList.map(convertPokemonToList).join('')
})


// const officialArtwork = ['pokemon.sprites.pokemon.sprites.other["official-artwork"].front_default']
// const officialArtwork = 'pokemon.sprites.other.dream_world.front_default'

const convertPokemonToList = (pokemon) => {
    return `<li class="pokemon ${pokemon.type}">
        <span class="pokeNumber">#${pokemon.number}</span>
        <span class="pokeName">${pokemon.name}</span>
    
        <div class="pokeInfo">
            <ol class="pokeTypes">
                ${pokemon.types.map((type) => `<li class="type"> ${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.image}" alt="${pokemon.name}" />
        </div>
    </li>`
}
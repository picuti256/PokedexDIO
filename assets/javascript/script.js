const pokemonOl = document.getElementById('pokeList')

pokeApi.getPokemons().then((pokemonList = []) => {
    pokemonOl.innerHTML += pokemonList.map(convertPokemonToList).join('')
})

const convertPokemonTypesToLi = (pokeTypes) => {
    return pokeTypes.map((typeSlot) => `<li class="type"> ${typeSlot.type.name}</li>`)
}

const officialArtwork = 'official-artwork'

const convertPokemonToList = (pokemon) => {
    return `<li class="pokemon">
        <span class="pokeNumber">#${pokemon.order}</span>
        <span class="pokeName">${pokemon.name}</span>
    
        <div class="pokeInfo">
            <ol class="pokeTypes">
                ${convertPokemonTypesToLi(pokemon.types).join('')}
            </ol>
            <img src="" alt="${pokemon.name}" />
        </div>
    </li>`
}
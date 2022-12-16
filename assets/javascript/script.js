const pokemonOl = document.getElementById('pokeList')

pokeApi.getPokemons().then((pokemonList = []) => {
    pokemonOl.innerHTML += pokemonList.map(convertPokemonToList).join('')
})




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
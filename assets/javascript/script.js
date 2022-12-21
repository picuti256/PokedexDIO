const pokemonOl = document.getElementById('pokeList');
const loadMoreButton = document.getElementById('loadMore');
const limit = 15;
let offset = 0;




// const officialArtwork = ['pokemon.sprites.pokemon.sprites.other["official-artwork"].front_default']
// const officialArtwork = 'pokemon.sprites.other.dream_world.front_default'


const loadPokemonItens = ((offset, limit) => {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `<li class="pokemon ${pokemon.type}">
        <span class="pokeNumber">#${pokemon.pokeNumber}</span>
        <span class="pokeName">${pokemon.name}</span>
    
        <div class="pokeInfo">
            <ol class="pokeTypes">
                ${pokemon.types.map((type) => `<li class="type ${type}"> ${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.image}" alt="${pokemon.name}" />
        </div>
    </li>`).join('')
        pokemonOl.innerHTML += newHtml
    })
});

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    loadPokemonItens(offset, limit)
});
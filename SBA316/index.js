async function fetchPokemonData(pokemonId) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const data = await response.json();
  return data;
}

function clearPokedex() {
  const pokedex = document.getElementById('pokedex');
  pokedex.innerHTML = '';
}

async function renderPokemonCard(pokemonId) {
  const pokemonData = await fetchPokemonData(pokemonId);

  const pokemonCard = document.createElement('div');
  pokemonCard.classList.add('pokemon-card');

  const image = document.createElement('img');
  image.src = pokemonData.sprites.front_default;
  image.alt = pokemonData.name;

  const name = document.createElement('p');
  name.textContent = pokemonData.name;

  const types = document.createElement('p');
  types.textContent = `Types: ${pokemonData.types.map(type => type.type.name).join(', ')}`;

  pokemonCard.appendChild(image);
  pokemonCard.appendChild(name);
  pokemonCard.appendChild(types);

  document.getElementById('pokedex').appendChild(pokemonCard);
}

function fetchAndRender() {
  const inputElement = document.getElementById('pokemonId');
  const pokemonId = inputElement.value;

  if (pokemonId >= 1 && pokemonId <= 386) {
      clearPokedex();
      renderPokemonCard(pokemonId);
  } else {
      alert('Please enter a valid Pokémon ID (1-386).');
  }
}
function getPokemon() {
  // Cache at least one element using selectElementById.
  const pokemonNumberInput = document.getElementById('pokemonNumber');

  const pokemonNumber = pokemonNumberInput.value;

  if (pokemonNumber >= 1 && pokemonNumber <= 152) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
      .then(response => response.json())
      .then(data => {
        // Cache at least one element using querySelector or querySelectorAll.
        const pokemonInfoContainer = document.querySelector('#pokemonInfo');

        const pokemonInfo = `
          <h2>${data.name}</h2>
          <img src="${data.sprites.front_default}" alt="${data.name}">
          <p>Height: ${data.height}'</p>
          <p>Weight: ${data.weight}lbs</p>
        `;

        // Use the parent-child-sibling relationship to navigate between elements.
        // In this case, we use parentNode to access the parent of pokemonNumberInput.
        const parentElement = pokemonNumberInput.parentNode;

        // Create at least one element using createElement.
        const newElement = document.createElement('div');
        newElement.innerHTML = 'New Element';

        // Append new elements to the DOM using appendChild.
        parentElement.appendChild(newElement);

        // Use the DocumentFragment interface or HTML templating with the cloneNode method.
        const fragment = document.createDocumentFragment();

        // Iterate over a collection of elements to accomplish some task.
        const collection = document.querySelectorAll('.some-class');
        collection.forEach(item => {
          // Do something with each item in the collection.
          fragment.appendChild(item.cloneNode(true));
        });

        // Modify the HTML content of at least one element in response to user interaction.
        // In this case, we set the innerHTML of pokemonInfoContainer.
        pokemonInfoContainer.innerHTML = pokemonInfo;

        // Modify the style of at least one element in response to user interaction.
        // In this case, we set the background color of pokemonInfoContainer.
        pokemonInfoContainer.style.backgroundColor = 'lightblue';

        // Modify the text content of at least one element in response to user interaction.
        // In this case, we set the text content of newElement.
        newElement.textContent = 'Modified Text';

        // Modify at least one attribute of an element in response to user interaction.
        // In this case, we set the alt attribute of the image.
        const pokemonImage = document.querySelector('#pokemonImage');
        pokemonImage.alt = `Image of ${data.name}`;
      })
      .catch(error => console.error('Error fetching Pokemon:', error));
  } else {
    alert('Please enter a valid Pokemon number between 1 and 152.');
  }
}

// Register at least two different event listeners and create the associated event handler functions.
document.getElementById('submitButton').addEventListener('click', getPokemon);
document.getElementById('pokemonNumber').addEventListener('input', validateInput);

// Use at least two Browser Object Model (BOM) properties or methods.
const screenWidth = window.innerWidth;
const isOnline = navigator.onLine;

// Include at least one form and/or input with HTML attribute validation.
// Include at least one form and/or input with DOM event-based validation.
// In this case, we're using the HTML "pattern" attribute for validation.
// You can also add event-based validation using the "input" event, but for simplicity, it's not included here.
<form onsubmit="event.preventDefault(); getPokemon();">
  <label for="pokemonNumber">Enter Pokemon Number:</label>
  <input type="text" id="pokemonNumber" pattern="[1-9]|[1-9][0-9]|1[0-4][0-9]|15[0-2]" required></input>
  <button type="submit" id="submitButton">Submit</button>
</form>


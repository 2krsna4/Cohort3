document.getElementById("pokemonForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    // Get number of cards to fetch and category range
    const numCards = parseInt(document.getElementById("numcard").value, 10);  // Correct ID and parse it as an integer
    const category = document.getElementById("category").value;  // Get category (e.g., "1-151")
    const [start, end] = category.split("-").map(Number);  // Split range into start and end numbers
  
    // Get the container where the cards will be added
    const cardsContainer = document.getElementById("CardAddhere");
    cardsContainer.innerHTML = "";  // Clear previous results
  
    // Loop to fetch and display multiple cards
    for (let i = 0; i < numCards; i++) {
      const randomId = Math.floor(Math.random() * (end - start + 1)) + start;  // Random number in the range
      const pokemonData = await fetchPokemonData(randomId);  // Fetch Pokémon data
  
      if (pokemonData) {
        const card = createPokemonCard(pokemonData);  // Create card from data
        cardsContainer.appendChild(card);  // Add card to container
      }
    }
  });
  
  // Fetch Pokémon data from the API
  async function fetchPokemonData(id) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!response.ok) throw new Error("Failed to fetch Pokémon data");
      return await response.json();  // Return the data as JSON
    } catch (error) {
      console.error(error);
      return null;  // Return null in case of error
    }
  }
  
  // Create a Pokémon card to display
  function createPokemonCard(data) {
    const card = document.createElement("div");
    card.className = "card";
  
    // Create the card's HTML content
    card.innerHTML = `
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <h3>${data.name}</h3>
      <p><strong>Abilities:</strong> ${data.abilities.map((a) => a.ability.name).join(", ")}</p>
    `;
  
    return card;  // Return the card element
  }
  
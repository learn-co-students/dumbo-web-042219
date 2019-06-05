// we can use the following callback with makePokemonDiv

// allPokemonData.forEach(pokeObject => {
//   let div = makePokemonDiv(pokeObject)
//   pokemonContainer.appendChild(div)
// })

// function makePokemonDiv(pokeObject) {
//   const pokemonCard = document.createElement('div')
//   pokemonCard.className = 'pokemon-card'
//   const pokemonFrame = document.createElement('div')
//   pokemonFrame.className = 'pokemon-frame'
//   pokemonCard.appendChild(pokemonFrame)
//   const pokemonName = document.createElement('h1')
//   pokemonName.textContent = pokeObject.name
//   pokemonName.className = 'center-text'
//
//   pokemonFrame.appendChild(pokemonName)
//
//   const pokemonImage = document.createElement('div')
//   pokemonImage.className = 'pokemon-image'
//
//   pokemonFrame.appendChild(pokemonImage)
//
//   const actualImage = document.createElement('img')
//   actualImage.dataset.id = pokeObject.id
//   actualImage.dataset.action = "flip"
//   actualImage.className = "toggle-sprite"
//   actualImage.src = pokeObject.sprites.front
//
//   pokemonImage.appendChild(actualImage)
//
//   return pokemonCard
// }

function generateHtmlTextForPokemon(pokeObject) {
  return (
    `<div class="pokemon-card">
      <div class="pokemon-frame">
        <h1 class="center-text">${pokeObject.name}</h1>
        <div class="pokemon-image" style="display: block;">
          <img data-id="${pokeObject.id}" data-action="flip" class="toggle-sprite" src="${pokeObject.sprites.front}" width=96>
        </div>
        <div class="pokemon-form" style="display: none; height: 99px;">
          <form class="changeName" data-id="${pokeObject.id}">
            <input placeholder="new name" name="newName"></input>
            <input type="submit" name="submit" value="change"></input>
            <button class="cancelForm">x</button>
          </form>
        </div>
        <button class="pokemon-button" data-id=${pokeObject.id}>x</button>
      </div>
    </div>`
  )
}

function renderAllPokemon(allPokemonData) {
  let divStrings = allPokemonData.map(generateHtmlTextForPokemon)
  return divStrings.reduce((finalString, individualString) => {
    return finalString + individualString
  }, "")
}

function addPokemonToContainer(pokeObject, pokemonContainer) {
  pokemonContainer.innerHTML += generateHtmlTextForPokemon(pokeObject)
}

function newPokemon(e, pokemonContainer, form) {
  e.preventDefault()
  // POST to localhost:3000/pokemon
  let newPokeObject = {
    name: e.target.name.value,
    sprites: {
      front: e.target.spriteUrl.value
    }
  }

  fetch('http://localhost:3000/pokemon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newPokeObject)
  }).then(resp => resp.json()).then((pokeObject) => {
    addPokemonToContainer(pokeObject, pokemonContainer)
    form.reset()
  }).catch(err => {
    console.error(err)
  })


}

function updatePokemonName(pokemonFrame, newName) {
  pokemonFrame.querySelector('h1').textContent = newName
}

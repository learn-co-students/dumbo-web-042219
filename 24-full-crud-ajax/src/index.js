// What's an SPA? Why do we care?
// Why does everything have to be async?
// User Stories

function afterLoadPokemon() {
  // this is where the rest of the setup of the page goes
  const deleteButtons = document.querySelectorAll('.pokemon-button')
  deleteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      fetch(`http://localhost:3000/pokemon/${e.target.dataset.id}`, {
        method: 'DELETE'
      }).then(response => {
        e.target.parentElement.parentElement.remove()
      }).catch(error => {
        console.error(error)
      })
    })
  })

  const pokeFrames = document.querySelectorAll('.pokemon-frame')
  pokeFrames.forEach(frames => {
    frames.addEventListener('click', (e) => {
      let img = e.currentTarget.querySelector('.pokemon-image')
      let form = e.currentTarget.querySelector('.pokemon-form')
      if (img.style.display == 'block') {
        img.style.display = 'none'
        form.style.display = 'block'
      }
    })
  })

  const cancelForms = document.querySelectorAll('.cancelForm')
  cancelForms.forEach(form => {
    form.addEventListener('click', (e) => {
      e.preventDefault()
      let frame = e.target.parentElement.parentElement.parentElement
      let img = frame.querySelector('.pokemon-image')
      let form = frame.querySelector('.pokemon-form')
      form.style.display = 'none'
      img.style.display = 'block'
      e.stopPropagation()
    })
  })

  const changeForms = document.querySelectorAll('.changeName')
  changeForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      fetch(`http://localhost:3000/pokemon/${e.target.dataset.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: e.target.newName.value
        })
      }).then(resp => resp.json()).then((pokeObject) => {
        updatePokemonName(e.target.parentElement.parentElement, pokeObject.name)
        let img = e.target.parentElement.parentElement.querySelector('.pokemon-image')
        e.target.style.display = 'none'
        img.style.display = 'block'
        e.target.reset()
      }).catch(err => {
        console.error(err)
      })
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  let allPokemonData = []
  const pokemonContainer = document.querySelector('#pokemon-container')
  const pokemonSearchInput = document.querySelector('#pokemon-search-form')
  const newPokemonForm = document.querySelector('#pokemon-post-form')

  fetch('http://localhost:3000/pokemon'/*, { method: 'GET' }*/)
    .then((responseObject) => responseObject.json())
    .then((pokeJSONData) => {
      allPokemonData = pokeJSONData
      let allPokemon = renderAllPokemon(allPokemonData)
      pokemonContainer.innerHTML = allPokemon
      afterLoadPokemon()
    })

    // pokemonSearchInput.addEventListener('input', (event) => handleSearchInput(event, allPokemonData, pokemonContainer))
    //
    // pokemonContainer.addEventListener('click', (event) => handleImgClick(event, allPokemonData))

  newPokemonForm.addEventListener('submit', (e) => newPokemon(e, pokemonContainer, newPokemonForm))

  // what do we need for POST? (Content-type & accept headers)
  // body
  // optimistic rendering?
})

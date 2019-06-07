const baseURL = 'http://localhost:3000/animals/';

// function get(url)
const get = (url) => {
  return fetch(url).then(resp => resp.json())
}

// inline way
// const get = (url) => fetch(url).then(resp=> resp.json())

// function post(url, body)
const post = (url, params) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(resp => resp.json()).catch(err => {
    console.error(err)
  })
}

const addAnimalToTable = (table, animal) => {
  table.innerHTML += animalHtml(animal)
}

document.addEventListener('DOMContentLoaded', () => {
  const animalTable = document.querySelector('#animalTable')
  // document.getElementById('animalTable')

  const animalForm = document.querySelector('#newAnimal')
  // document.getElementById('newAnimal')

  get(baseURL).then(info => {
    info.forEach(animal => {
      addAnimalToTable(animalTable, animal)
    })
  })




  animalForm.addEventListener('submit', (e) => {
    e.preventDefault()

    post(baseURL, {
      name: e.target.name.value,
      gender: e.target.gender.value,
      species: e.target.species.value
    }).then(animal => {
      addAnimalToTable(animalTable, animal)
      e.target.reset()
    })
  })
})

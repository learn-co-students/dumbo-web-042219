function sleep(n) {
  let i = 0
  while(i < (12 ** 8) * n) {
    i++
  }
}

document.getElementById('click-button').addEventListener('click', console.log)
//
// console.log('Starting the sleep function')
// sleep(10)
// console.log('Wow that sleep function took forever to run. 1 Star 🌟')
//

// document.getElementById('click-button').addEventListener('click', console.log)

// why is this app not great?
//
// const fn = () => {
//   console.log("this log happens every second")
// }
// console.log("After one second, we will see another log")
// setInterval(fn, 1000)


// distinguish between sync and async code
const bad = true

// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     if (bad) {
//       reject({ error: true })
//     } else {
//       resolve("here's a response string")
//     }
//   }, 3000)
// })
//
// promise.then((response) => {
//   return response.length
// }).then((version2) => {
//   debugger
// }).catch((err) => {
//   debugger
// })

// how do async functions resolve?

// Callback functions vs. promises
// .then vs. .catch



// fetch
const url = "https://dog.ceo/api/breeds/list/all"
const imageUrl = "https://dog.ceo/api/breeds/image/random/1"
//
// fetch(url).then((response) => {
//   return response.json() //also response.text()
// }).then((responseJson) => {
//   let myDogs = responseJson.message
//   // do some more stuff with that information
//   debugger
// })

randomUserUrl = 'https://randomuser.me/api/'


document.addEventListener('DOMContentLoaded', () => {
  doggyDiv = document.querySelector('#dogImages')

  fetch(imageUrl).then((response) => response.json()).then(dogResponse => {
    dogResponse.message.forEach(dogURL => {
      let img = document.createElement('img')
      img.src = dogURL
      img.class = "dogImage"
      doggyDiv.appendChild(img)
    })
  })

  const newPerson = document.querySelector('#newPerson')
  const nameH3 = document.querySelector('#fullname')
  const emailH4 = document.querySelector('#email')
  const streetH4 = document.querySelector('#street')
  const cityH4 = document.querySelector('#city')
  const stateH4 = document.querySelector('#state')
  const postcodeH4 = document.querySelector('#postcode')
  const phoneH4 = document.querySelector('#phone')
  const cellH4 = document.querySelector('#cell')
  const dobH4 = document.querySelector('#date_of_birth')
  const profpic = document.querySelector('#profile_picture')

  newPerson.addEventListener('click', () => {
    // now we gotta fetch
    fetch(randomUserUrl).then(resp => resp.json()).then(personInfo => {
      let person = personInfo.results[0]
      nameH3.textContent = `${person.name.title}. ${person.name.first} ${person.name.last}`
      emailH4.textContent = person.email
      streetH4.textContent = person.location.street
      cityH4.textContent = person.location.city
      stateH4.textContent = person.location.state
      postcodeH4.textContent = person.location.postcode
      phoneH4.textContent = person.phone
      cellH4.textContent = person.cell
      dobH4.textContent = person.dob.date
      profpic.src = person.picture.medium
    })
  })

})





//Use the options to fetch() to configure requests

// Today we're discussing:
// What is functional programming? Imperative vs. declarative programming?
// How do you define a function?

function printName(name) {
  console.log(`Hi my name is ${name}`)
}

const square = (num) => {
  return num * num
}

// let square = function(num) {
//
// }

// Functions are first class objects
// Functional Library Demo: forEach, map, filter, reduce

let arr = [1,2,3,4,5]

// ruby yo
// arr.map { |elem| square(elem) }

// arr.map((elem) => square(elem))
arr.map(square)

let bigNumbers = arr.map((num) => {
  return num * 100
})

let biggestNumbers = bigNumbers.filter(num => num > 200)

let biggestSum = biggestNumbers.reduce((sum, num) => {
  return sum + num
}, 0)

arrayOfArrays = [[1,2,3], [4,5,6], [7,8,9]]
onlyTheSecondElements = arrayOfArrays.reduce((newArray, arrayOf3) => {
  newArray.push(arrayOf3[1])
  return newArray
}, [])

// let selectors = ['h1', 'strong', 'p']
//
// const elements = selectors.map((s) => document.querySelector(s))

// What's a callback?

const myMap = (array, callback) => {
  let newArray = []
  for(i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]))
  }
  return newArray
}

const myFilterLengh = (array, callback) => {
  let newArray = []
  for(i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      newArray.push(array[i])
    }
  }
  return newArray.length
}

// Exercise 1
// What's scope?
// What's a closure? Higher-order function?

// when you use a higher-order function, like counterMaker to make another function,
// this is called currying
const counterMaker = (start) => {
  let count = start
  let counter = () => {
    return count++
  }
  return counter
}

const callAndSayHiMom = (fn, arg) => {
  console.log("Sup mom")
  return fn(arg)
}


// Exercise 2
// Pure functions have no side effects
// const myFn = () => {
//   console.log('yo')
// }
//
// const pureMyFun = (logger) => {
//   logger('yo')
// }
//
// const buyShirt = (shirt) => {
//   getMoneyFromBank(shirt.price)
// }
//
// const pureByShirt = (shirt, bank) => {
//   bank.getMoneyFromBank(shirt.price)
// }

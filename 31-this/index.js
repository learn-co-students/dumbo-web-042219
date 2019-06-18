

// document.addEventListener("DOMContentLoaded", function(){

//   console.log(this)


//   const button = document.querySelector(".clicky")
//   button.addEventListener("click", function(){
//     this.remove()
//   })

// })

const introduce = () => {
  console.log(this)
  return `HEY, it's ${ this.fullName }!`
}

const randy = {
  fullName: "Randy Herasme",
  name: "Randy",
  introduce: introduce
}

const graham = {
  fullName: "Graham Aden Troyer-Joy",
  name: "Graham",
  introduce: randy.introduce
}

// const dan = {
//   fullName: "Daniel Fries",
//   name: "Dan",
//   introduce: graham.introduce
// }


// const potato = dan.introduce

// console.log(potato)



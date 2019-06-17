
class Person {

  constructor(name, fullName){
    this.name = name
    this.fullName = fullName
  }

  introduce(){
    // console.log(this)
    return `Hello, it's ${ this.name }!`
  }

}


class Instructor extends Person {

  
  introduce(){
    return `${ super.introduce() } Here are some facts about the prototype chain: ${ this.prototypeChainFacts }`
  }

  blather(){
    return "OOJS is soooooo great"
  }
}


loune = new Person("Loune", "Loune Calixte");
dan = new Instructor("Dan", "Dan Fries");

console.log(loune.introduce())
console.log(dan.introduce())

graham = new Instructor("Graham", "Graham Troyer-Joy");
// randy = new Instructor("Randy", "Randy Herasme");

// [loune, dan, graham, randy].forEach(function(instructor){
//   console.log(instructor.introduce())
// })


// function introduce(){
//   return `HEY, it's ${ this.name }!`
// }

// const randy = {
//   fullName: "Randy Herasme",
//   name: "Randy",
//   introduce: introduce
// }

// const graham = {
//   legalName: "Graham Aden Troyer-Joy",
//   name: "Graham",
//   introduce: introduce
// }

// const dan = {
//   fullName: "Daniel Fries",
//   name: "Dan",
//   introduce: introduce
// }


// console.log(randy.introduce())
// console.log(graham.introduce())
// console.log(dan.introduce())

// console.log(randy.introduce === graham.introduce)
// console.log(randy.introduce() === graham.introduce())






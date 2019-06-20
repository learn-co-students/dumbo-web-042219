// What is the spread operator and why would I want to use it?

  
  const graham2018 = {
    name: "Graham",
    employer: "Access Labs",
    borough: "Brooklyn",
    shopsAtUniqloTooMuch: true,
  }

  const goodHabits = {
    shopsAtUniqloTooMuch: false,
    eatsLotsOfVegetables: true,
    sleeps8Hours: true
  }

  const graham2019 = {
    ...goodHabits,
    ...graham2018,
    pets: [
      "elliott"
    ],
  }

  const newYearSameMe = {
    ...graham2018
  }


  console.log(graham2018)
  // console.log(graham2019)
  console.log(newYearSameMe)
  console.log(newYearSameMe === newYearSameMe)
  console.log(newYearSameMe === graham2018)

  */

// Could I do it to an array?

  /*
  const bodyParts = ["head", "shoulders", "knees", "toes", "eyes", "ears", "mouth", "nose"];

  const funSong = [ ...bodyParts, "knees", "toes"];

  // console.log(funSong2)
  console.log(funSong.join(" and "))
  // console.log(funSong2.join(" and "))
  // console.log(bodyParts === funSong2)
*/
  


// Could I do it to the parameters of a function?


  // function canTakeSixArguments(one, two, three, four, five, six) {
  //   console.log(one)
  //   console.log(two)
  //   console.log(three)
  //   console.log(four)
  //   console.log(five)
  //   console.log(six)
  // }


/*
  const extendedDanceRemix = ["knees", "toes", "head", "shoulders", "knees", "toes"];
  
  // canTakeSixArguments(...extendedDanceRemix)
  // console.log(extendedDanceRemix)


  // // canTakeSixArguments.apply(null, extendedDanceRemix)



function banana(numberOfClowns, clownsThatDidntFitInTheClownCar, { potato }, ...args) {
  // console.log(arguments)
  // console.log(foo, bar, baz, quux)
  console.log(potato)
  console.log(args)
}


banana(5, [], { potato: "🥔" }, "hello", "goodbye", "🤡", ...extendedDanceRemix)


*/







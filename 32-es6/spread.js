// What is the spread operator and why would I want to use it?

/*
  const graham2018 = {
    name: "Graham",
    employer: "Access Labs",
    borough: "Brooklyn",
    shopsAtUniqloTooMuch: true,
    // hasLongDistanceBoyfriend: true
  }

  const goodHabits = {
    shopsAtUniqloTooMuch: false,
    cooksAtHome: true,
  }

  const graham2019 = {
    ...graham2018,
    ...goodHabits,
    pets: [
      "elliott"
    ],
    // hasLongDistanceBoyfriend: false
  }

  const newYearSameMe = {
    ...graham2019
  }

  graham2019.pets.push("dog")
  console.log(newYearSameMe.pets)

  // console.log(graham2018)
  // console.log(graham2019)
  console.log(newYearSameMe)
  console.log(newYearSameMe === newYearSameMe)
  console.log(newYearSameMe === graham2018)

  */
// Could I do it to an array?
  
  
  /*
  const bodyParts = ["head", "shoulders", "knees", "toes", "elbows", "ears"];

  // const funSong = [ ...bodyParts, "knees", "toes", ...bodyParts];
  const funSong2 = bodyParts.slice(0, 4)

  console.log(funSong2)
  // console.log(funSong.join(" and "))
  console.log(funSong2.join(" and "))
  console.log(bodyParts === funSong2)

  */
  

// Could I do it to the parameters of a function?

 
  // 1.
  function canTakeSixArguments(bar, ...whatever) {
    console.log(bar)
    console.log(whatever)
    // console.log(baz, quux, blat, banana, garbage, hello, potato)
  }

  const extendedDanceRemix = ["head", "shoulders", "knees", "toes", "knees", "toes"];
  
  // spread
  canTakeSixArguments("foo", {}, [5])


  
  // 2.
  // function canTakeAllTheArguments(head, shoulders, bodyParts) { // rest parameters
  //   console.log(head)
  //   console.log(shoulders)
  //   console.log(bodyParts)
  // }
  // canTakeAllTheArguments("head", "shoulders", "knees", "toes", "knees", "toes")

  //3. 🤯

  // function tinderProfile({ favoriteColor, name }, { acornCount },  ...rest) {
  //   console.log(name)
  //   console.log(favoriteColor)
  //   console.log(rest)  
  // }
  
  // const muriel = {
  //   name: "Muriel Worthington",
  //   favoriteColor: "puce",
  //   tailCount: 1
  // }

  // tinderProfile(muriel, { acornCount: 5}, true, "Tree");
  

  // //or..,
  // function canTakeAllTheArguments2(...potato) {
  //   console.log(potato)
  // }
  // const extendedDanceRemix2 = ["head", "shoulders", "knees", "toes", "knees", "toes"];
  // canTakeAllTheArguments2(extendedDanceRemix2)

  // // //but you could just...
  // function justTakesAnArray(arr) {
  //   console.log(arr)
  // }

  // justTakesAnArray(extendedDanceRemix2)

















// What is destructuring and why would I want to do it?
  
    
  const borough = {
    name: "Brooklyn",
    population: 2636735,
    founded: 1643,
    baseballTeam: "Nets",
    bridgeQuality: {
      brooklyn: false,
      manhattan: true,
      williamsburg: true
    }
  }

  // const name = borough.name;
  // const population = borough.population;
  // const founded = borough.founded;
  // const basketballTeam = borough.baseballTeam;

  let { 
    name, 
    population, 
    founded,
    // baseballTeam: basketballTeam
    // bridgeQuality: {
    //   manhattan: manhattanBridgeQuality
    // }
  } = borough;

// //   // could we do all of the above in one line?

//   console.log(name, population, founded)

//   console.log(borough)
// // Could I rename variables as I destructure them?
// //   // console.log(basketballTeam)
// //   // console.log(basketballTeam)

//   console.log((new Date()).getFullYear() - founded + " years ago")
  



// Could I do it to an array?

  
  // const boroughNames = ["Brooklyn", "Manhattan", "Bronx", "Queens", "Staten Island"];

  // // const bestBorough = boroughNames[0]
  // // const birthplaceOfWuTang = boroughNames[4]

  // const [ bestBorough, , , boroughWithAlltheAirports ] = boroughNames;

  // console.log(bestBorough)
  // console.log(boroughWithAlltheAirports)

// Could I do it to the parameters of a function?

  
  // const spiceGirls = [
  //   {
  //     spicyName: "Ginger",
  //     legalName: "Geri Halliwell",
  //     successfulSoloCareer: true, 
  //     participatingIn2019ReunionTour: true
  //   },
  //   {
  //     spicyName: "Scary",
  //     legalName: "Melanie Brown",
  //     successfulSoloCareer: true, 
  //     participatingIn2019ReunionTour: true
  //   },
  //   {
  //     spicyName: "Baby",
  //     legalName: "Emma Bunton",
  //     successfulSoloCareer: "😬", 
  //     participatingIn2019ReunionTour: true
  //   },
  //   {
  //     spicyName: "Posh",
  //     legalName: "Victoria Beckham (née adams)",
  //     successfulSoloCareer: false, 
  //     participatingIn2019ReunionTour: false
  //   },
  //   {
  //     spicyName: "Sporty",
  //     legalName: "Melanie Chisolm",
  //     successfulSoloCareer: true, 
  //     participatingIn2019ReunionTour: true
  //   },
  // ]
const greet = ({ spicyName, participatingIn2019ReunionTour: touring }) => `Hello, ${ spicyName } Spice! ${ touring ? ":D" : "-_-" }`

  const me = { 
    spicyName: "Graham", 
    participatingIn2019ReunionTour: "hell yeah",
    age: 33,
    abilityToDoTheSplitz: 0,
  };

  // console.log(spiceGirls.map(greet).join("\r\n\r\n"))
  console.log(greet(me))










 const spiceGirls = [
    {
      spicyName: "Ginger",
      legalName: "Geri Halliwell",
      successfulSoloCareer: true, 
      participatingIn2019ReunionTour: true
    },
    {
      spicyName: "Scary",
      legalName: "Melanie Brown",
      successfulSoloCareer: true, 
      participatingIn2019ReunionTour: true
    },
    {
      spicyName: "Baby",
      legalName: "Emma Bunton",
      successfulSoloCareer: "😬", 
      participatingIn2019ReunionTour: true
    },
    {
      spicyName: "Posh",
      legalName: "Victoria Beckham (née adams)",
      successfulSoloCareer: false, 
      participatingIn2019ReunionTour: false
    },
    {
      spicyName: "Sporty",
      legalName: "Melanie Chisolm",
      successfulSoloCareer: true, 
      participatingIn2019ReunionTour: true
    },
  ]

  //  .map changing the array

const something = spiceGirls
  .filter((spiceGirl, potatoSalad, wholeArray) => {
    // console.log(potatoSalad)
    // console.log(wholeArray)
    // spiceGirl.spicyName = "Graham"
    return spiceGirl.legalName.startsWith("Melanie")
  })
  .map((spiceGirl, potatoSalad, wholeArray) => {
    // console.log(potatoSalad)
    // console.log(wholeArray)
    // console.log(spiceGirl)
    return { ...spiceGirl, spicyName: "Graham" }
  })
  .find((spiceGirl, potatoSalad, wholeArray) => {
    // console.log(potatoSalad)
    // console.log(wholeArray)
    return spiceGirl.spicyName === "Graham"
  })

console.log(something)



const something2 = spiceGirls
  .filter(spice => spice.legalName.startsWith("Melanie"))
  .map(spice => ({ ...spice, spicyName: "Graham" }))
  .find(spice => spice.spicyName === "Graham")

console.log(something2)














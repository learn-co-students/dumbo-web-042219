
// Is there a shorthand way to create properties in an object literal 
// that have the the same names as variables I have in scope?
  
  /*
  
  const name = "Graham Troyer-Joy";
  const age = 33;
  const foodsDeepFriedAtHomeThisYear = [
    {
      name: "Shrimp Chips",
      vegan: false, 
      banana: {
        hello: true
      }
    },
    {
      name: "Pierogis",
      vegan: true
    }
  ]

  const graham = { 
    name,
    age,
    foodsDeepFriedAtHomeThisYear
  };
  // let's make ⬆️ this object have some props!

console.log(graham)

*/

// Is there a way to dynamically define (or compute) property names 
// in an object literal e.g. based on the value of a variable?

  const propName = "babanam";
  const propValue = true

  const newYearsResolution = {
    body: "Write code every day",
    year: 2018,
    [propName]: propValue
    // could we assign attainability here instead?
  }

  // newYearsResolution.year = 2018
  
  // can we assign the key name based on the value of propName?

  // newYearsResolution[propName] = propValue

  console.log(newYearsResolution)















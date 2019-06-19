
// Is there a shorthand way to create properties in an object literal 
// that have the the same names as variables I have in scope?
  
  /*
  const name = "Graham Troyer-Joy";
  const age = 33;
  const foodsDeepFriedAtHomeThisYear = [
    {
      name: "Shrimp Chips",
      vegan: false
    },
    {
      name: "Pierogis",
      vegan: true
    }
  ];

  const graham = { name, age, foodsDeepFriedAtHomeThisYear };
  // const { name, age, foodsDeepFriedAtHomeThisYear } = graham; // this is destructuring
  // let's make ⬆️ this object have some props!

  console.log(graham);

  // foodsDeepFriedAtHomeThisYear.push({
  //   name: "Oreos",
  //   vegan: true
  // })

  // graham["name"] = name

*/

// Is there a way to dynamically define (or compute) property names 
// in an object literal e.g. based on the value of a variable?

  
  const propName = "banana";
  const propValue = ["🍌"]

  const newYearsResolution = {
    body: "Write code every day",
    // [propName]: propValue
    // could we assign attainability here instead?
  }

  // newYearsResolution.year = 2018

  newYearsResolution[propName] = propValue;
  
  // can we assign the key name based on the value of propName?

  console.dir(newYearsResolution)




















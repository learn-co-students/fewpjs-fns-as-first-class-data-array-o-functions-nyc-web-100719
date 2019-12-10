function wakeDog(dogName, dogBreed){
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`;
}
wakeDog("Xerox", "Border Collie");

function leashDog(dogName, dogBreed){
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`;
}
leashDog("Boo Radley", "Pibble");

function walkToPark(dogName, dogBreed){
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`;
}
walkToPark("Boo Radley", "Pibble");

function throwFrisbee(dogName, dogBreed){
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}
throwFrisbee("Boo Radley", "Pibble");

function walkHome(dogName, dogBreed){
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`;
}
walkHome("Santa Paws", "Huskey");

function unleashDog(dogName, dogBreed){
  console.log(`Unleash ${dogName} the ${dogBreed}`)
  return `Unleash ${dogName} the ${dogBreed}`;
}
unleashDog("Lauren", "Golden Retriever");

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed){
  // console.log(`Wake ${dogName} the ${dogBreed}`)
  // console.log(`Leash ${dogName} the ${dogBreed}`)
  // console.log(`Walk to the park with ${dogName} the ${dogBreed}`)
  // console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
  // console.log(`Walk home with ${dogName} the ${dogBreed}`)
  // console.log(`Unleash ${dogName} the ${dogBreed}`)
  return routine.map(fn => fn(dogName, dogBreed));
}
exerciseDog("Esther", "Dalmation");


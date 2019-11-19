function wakeDog(dogName, dogBreed){
    string = `Wake ${dogName} the ${dogBreed}`
    console.log(string);
    return string
  }
function leashDog(dogName, dogBreed){
    string = `Leash ${dogName} the ${dogBreed}`
    console.log(string);
    return string
  }
function walkToPark(dogName, dogBreed){
    string = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(string);
    return string
  }
function throwFrisbee(dogName, dogBreed){
    string = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(string);
    return string
  }
function walkHome(dogName, dogBreed){
    string = `Walk home with ${dogName} the ${dogBreed}`
    console.log(string);
    return string
  }
function unleashDog(dogName, dogBreed){
    string = `Unleash ${dogName} the ${dogBreed}`
    console.log(string);
    return string
  }

  let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed){
    array = []
    routine.forEach(function(exercise){
        array.push(exercise(dogName, dogBreed))
    })
    return array
}
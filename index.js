function wakeDog(dogName, dogBreed){
    let string = `Wake ${dogName} the ${dogBreed}`
    console.log(string);
    return string;
}

function leashDog(dogName, dogBreed){
    let string = `Leash ${dogName} the ${dogBreed}`
    console.log(string);
    return string;
}

function walkToPark(dogName, dogBreed){
    let string = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(string);
    return string;
}

function throwFrisbee(dogName, dogBreed){
    let string = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(string);
    return string;
}

function walkHome(dogName, dogBreed){
    let string = `Walk home with ${dogName} the ${dogBreed}`
    console.log(string);
    return string;
}

function unleashDog(dogName, dogBreed){
    let string = `Unleash ${dogName} the ${dogBreed}`
    console.log(string);
    return string;
}

let routine = [];
routine.push(wakeDog);
routine.push(leashDog);
routine.push(walkToPark);
routine.push(throwFrisbee);
routine.push(walkHome);
routine.push(unleashDog);

function exerciseDog(dogName, dogBreed){
    let messages = [];
    for(let i = 0; i < routine.length; i++){
        messages.push(routine[i](dogName, dogBreed));
    }
    return messages;
}
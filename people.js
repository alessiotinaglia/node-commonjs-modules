const fs = require("fs")

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
                                //   Punto 1   // 
// // // // // // // // // // // // //// // // // // // // // // // // // // // // // 

// collegato file names.js dentro utility
const names = require("./utility/names");

// stampato l'oggetto 
console.log(names.newPerson("Alessio", "Tinaglia"));

// assegno una costante all'oggetto
const person = names.newPerson("Alessio", "Tinaglia");

// prendo il primo valore dell'oggetto 
console.log(person.firstName);

// prendo il secondo valore dell'oggetto
console.log(person.lastName);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
                                //   Punto 2   // 
// // // // // // // // // // // // //// // // // // // // // // // // // // // // // 

// collegato file hobbies.js dentro utility
const createHobbies = require("./utility/hobbies");

// Utilizza la funzione per creare un oggetto con dentro un array
const myHobbies = createHobbies('hobbyOne', 'hobbyTwo', 'hobbyThree');

// Stampa l'oggetto con gli hobby vari 1/2/3
console.log(myHobbies);  

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
                                //   Punto 3   // 
// // // // // // // // // // // // //// // // // // // // // // // // // // // // //


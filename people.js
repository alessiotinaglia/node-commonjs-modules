
const fs = require("fs")

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
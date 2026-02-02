//Getting function from greet and variables from peoples

const greet = require("./greet") //In here greet.js is catched by require()
const {person1, person2, person3} = require("./peoples");

console.log(person1)
console.log(person2)
console.log(person3)

greet("Huxn");
greet(person1);
greet(person2);
greet(person3);


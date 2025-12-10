//+++++++++This+++++++++++++

// console.log(window); //This is window
// console.log(this); //And this is refer to window

// console.log(this === window); //true

// window.firstName = "Nim";
// this.lastName = "Mariana"
// console.log(window)

//----------------------
// const obj = {
//     firstName: "HuXn",
//     lastName: "WebDev",
//     fullName: function () {
//         return this;
//     }
// }

// const res = obj.fullName();
// console.log(res) //It will refer parent 
//-------------------------

// const obj = {
//     firstName: "Sam",
//     lastName: "Manik",
//     fullName: () => {
//         return this; //Window because of arrow function
//     }
// }
// console.log(obj.fullName()) //undefined undefined

//------------------------

// const obj = {
//     firstName: "Sam",
//     lastName: "Manik",
//     fullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     } 
// }
// console.log(obj.fullName())

//Challenge-----------------

// let person = {
//     userName: "Simrin",
//     age: 18,
//     greetRegular: function (){
//         return `Hello, my name is ${this.userName} & i'm ${this.age} years old.`
//     },
//     greetArrow: () => {
//         return `Hello, my name is ${this.userName} & i'm ${this.age} years old`
//     }
// }

// console.log(person.greetRegular());
// console.log(person.greetArrow());

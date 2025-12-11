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

//++++++++++Factory function+++++++++++ 

// //------------------------
// function personProfile(firstName, lastName, pl){
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         pl: pl,
//         fullName: function(){
//             return `My name is ${this.firstName} ${this.lastName} and i am learning ${pl}`
//         }
//     }
// }

// const jhon = personProfile("Jhon", "Doe", "JAVA");
// const Mark = personProfile("Mark", "Wins", "Vidography");
// console.log(jhon.lastName)
// console.log(jhon.firstName)
// console.log(jhon.fullName())

// console.log(Mark.firstName)
// console.log(Mark.lastName)
// console.log(Mark.fullName())

//---------------------------
// Destructuring

// function profile(fname, lname, interest){
//     return {
//         fname,
//         lname,
//         interest,
//         details: function(){
//             return `I am ${fname} ${lname} and i love ${interest}`
//         }
//     }
// }

// const anim = profile("Anim", "Huq", "Cooking");
// console.log(anim.fname);
// console.log(anim.lname);
// console.log(anim.details());

//Challenge++++++++++++++++++

// function car(type, brand, model, year){
//     return { 
//         type, brand, model, year
//     }
// }

// const toyota = car("Sedan", "Toyota", "Lexus", 2015);
// console.log(toyota.type)
// console.log(toyota.brand)
// console.log(toyota.model)
// console.log(toyota.year)

//+++++++++++++++Constructor function+++++++++++

// function PersonProfile(fname, lname, age){
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     this.info = function(){
//         return `Hello my name is ${this.fname} ${this.lname} and i am ${this.age} years old`
//     }
// }

// const Light = new PersonProfile("Light", "Yagami", 22); //this new keyword make "this" an self objesct;
// console.log(Light)
// console.log(Light.info())
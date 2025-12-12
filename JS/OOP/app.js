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

//Challemge+++++++++++++++++++++

// function Car(make, model, year, color){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = year;
//     this.start = function(){
//         return `Starting the ${this.make} ${this.model}... `
//     };
//     this.stop = function(){
//         return `Stopping the ${this.make} ${this.model}`
//     }
// }

// const car1 = new Car("Toyota", "Camry", 2016, "Silver")
// const car2 = new Car("Honda", "C-rv", 2017, "Black")

// console.log(car1.start())
// console.log(car2.start())

//++++++++++++ Built in Constructure+++++++++++++++

// const num1 = new Number(10);
// const num2 = 20;
// const str1 = new String("huxn webdeb");
// const bool1 = new Boolean(false);
// const arr1 = new Array(1, 2, 3);

// console.log(typeof num1)
// console.log(typeof num2)
// console.log(typeof str1);
// console.log(typeof arr1);
// console.log(str1);
// console.log(arr1);

//+++++++++++++++Object.create() method+++++++++++
// let person = {
//     greet: function(){
//         return `Hello my name is ${this.fname} ${this.lname}`
//     }
// }

// //---------------------------
// const jhon = Object.create(person);
// jhon.fname = "Jhon";
// jhon.lname = "Doe";

// console.log(jhon.fname)
// console.log(jhon.lname)
// console.log(jhon.greet());

// //---------------------------
// let charlie = Object.create(person, {
//     fname: {value: "Charlie"},
//     lname: {value: "Abdoe"},
// })

// console.log(charlie.fname)
// console.log(charlie.lname)
// console.log(charlie.greet())

//+++++++++++++Prototypes+++++++++++

// const obj = {};
// console.log(obj.__proto__);
// console.log(obj.constructor.prototype);
// console.log(Object.getPrototypeOf(obj))

// const arr = new Array();
// console.log(arr)

//--------------------------

// function Person(firstName, lastName, pl){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.pl = pl;
// }

// const Jhon = new Person("Jhon", "Doe", "JS");
// console.log(Jhon.__proto__); 

//--------------------------
// Array.prototype.pop = function (){
//     return "Pop is not working"
// }

// const myArr = ["One", "Two", "Three"];
// console.log(myArr.pop())
//--------------------------

// String.prototype.hello = function () {
//     console.log(this);
//     console.log(this.toUpperCase());
// };

// console.log("hello and welcome".hello());

//+++++++++++++++++Prototypal inheritance++++++++++++(left over)

// function Animal(name){
//     this.name = name;
// }

// Animal.prototype.sound = function() {
//     return "Animal Sound";
// }

// const animal1 = new Animal("Frog");
// console.log(animal1)
// console.log(animal1.name) //Frog
// console.log(animal1.sound()); //Animal sound

// function Dog(name, breed) {
//     this.name = name;
//     this.breed = breed;
// }

// const dog1 = new Dog("Buddy", "Genus");
// console.log(dog1)

//+++++++++++++++Classes +++++++++++++++++

class Person {
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.userinfo = function(){
            return `This is ${fname} ${lname} and ${age} years old`
        }
    }
}

const Jhon = new Person("Huxn", "Webdeb", 19);
console.log(Jhon.fname)
console.log(Jhon.lname)
console.log(Jhon.age)
console.log(Jhon.userinfo());

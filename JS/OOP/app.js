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

// class Person {
//     constructor(fname, lname, age){
//         //Instance Members
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//         this.userinfo = function(){
//             return `This is ${fname} ${lname} and ${age} years old`
//         }
//     }
     
//     //Prototype Memebers
//     greet(){
//         return `Hello there is ${this.fname} ${this.lname}`
//     }

// }

// const Jhon = new Person("Jhon", "Doe", 19);
// console.log(Jhon.fname);
// console.log(Jhon.lname);
// console.log(Jhon.age);
// console.log(Jhon.userinfo());
// console.log(Jhon);
// console.log(Jhon.greet());

// //Class inheritence

// class Programmer extends Person{
//     constructor(fname, lname, age, pl, experience){
//         super(fname, lname, age);
//         this.pl = pl;
//         this.experience = experience;
//     }
// }

// const huxn = new Programmer("HuXn", "WebDev", 19, "Golang", 4);
// console.log(huxn.greet());

//Challenge-------------------

// class Hero {
//     constructor(name, level) {
//         this.name = name;
//         this.level = level;
//     }

//     greet(){
//         return `This is ${this.name} and level is ${this.level}`
//     }
// }

// const hero = new Hero("Jhonny", 25);
// console.log(hero);

// //Class inheritance-----------

// class Mega extends Hero{
//     constructor(name, level, spell){
//         super(name, level);
//         this.spell = spell;
//     }
// }

// const TriSnake = new Mega("TriSnake", 26, "Fire");
// console.log(TriSnake)
// console.log(TriSnake.greet())

//+++++++++++OOP+++++++++++++++++
//++++++++Modifire +++++++++++++

//Private + Publi + Protected+++

// function MyClass(publicField, privateField, protectedField){
//     this.publicField = publicField;
//     const _privateField = privateField;
//     const _protectedField = protectedField;

//     //Public
//     this.publicMethod = function(){
//         return `Public info:- ${this.publicField}`
//     };

//     //Private
//     function _privateMethod(){
//         return `Private Info: ${_privateField}`
//     }

//     //Protected
//     function _protectedMethod(){
//         return `Protected Method: ${_protectedField}`
//     }

//     this.accessProtectedMethod = function (){
//         return _protectedMethod();
//     }
// }

// const myObject = new MyClass("Public Data", "Private Data", "Proteced Data");
// console.log(myObject.publicField);
// console.log(myObject._privateField);
// console.log(myObject._protectedMethod);

// console.log(myObject.publicMethod())
// // console.log(myObject._privateMethod())
// // console.log(myObject._protectedMethod())
// console.log(myObject.accessProtectedMethod())

//Encapsulation---------------

// function Counter(){
//     let _count = 0;

//     this.increment = function(){
//         _count++;
//     }

//     this.decrement = function(){
//         _count--;
//     }

//     this.getCount = function(){
//         return _count
//     }
// }

// const counter = new Counter();
// console.log(counter.getCount()) //0
// counter.increment(); //1
// counter.increment(); //2
// counter.increment(); //3
// console.log(counter.getCount()) //3
// counter.decrement(); //2
// console.log(counter.getCount())//2
// console.log(counter._count) //Undefined

//Abstraction ------------------------

// //+++++ Parent Classs +++++
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     makeSound(){
//         return `Mrthod must be implemented`;
//     }
// }

// class Dog extends Animal {
//     constructor(name){
//         super(name)
//     }

//     makeSound() {
//         return `Woff..`
//     }
// }

// class Cat extends Animal {
//     constructor(name){
//         super(name)
//     }

//     makeSound() {
//         return `Meow..`
//     }
// }

// const dog = new Dog("Buddy");
// console.log(dog.name);
// console.log(dog.makeSound());

// const cat = new Cat("Whisker");
// console.log(cat.name);
// console.log(cat.makeSound())

//Inheritance-------------------

//Prototype base---------------(ES 5)

// function Animal(name){
//     this.name = name;
// }

// Animal.prototype.makesound = function() {
//     return "Unknown sound";
// }

// //Animal instance
// const genericAnimal = new Animal("Generic Animal");
// // console.log(genericAnimal.name);
// // console.log(genericAnimal.makesound())

// //Subclass constructor inheriting from animal
// function Dog(name){
//     Animal.call(this, name);
// }

// //Setup prototype chain for odg to inherit from Animal
// Dog.prototype = Object.create(Animal.prototype)

// //Specific method to dog
// Dog.prototype.makesound = function(){
//     return "Woff....."
// }

// //Dog instance
// const shaperd = new Dog("Mike");
// console.log(shaperd.name)
// console.log(shaperd.makesound())

//Class base-------------------(ES 6)

// class Animal {
//     constructor(name) {
//         this.name = name
//     }

//     makeSound(){
//         return `Unknown Sound...`
//     }
// }

// const genericAnimal = new Animal ("Generic Animal")
// console.log(genericAnimal)
// console.log(genericAnimal.name)
// console.log(genericAnimal.makeSound())


// class Dog extends Animal{
//     constructor(name) {
//         super(name);
//     }

//     makeSound(){
//         return `Woof...`
//     }
// }

// const Mike = new Dog("mike");
// console.log(Mike)
// console.log(Mike.name)
// console.log(Mike.makeSound())

//Polymorphism++++++++++++++++++++++

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     //This info is a superclass
//     info(){
//         return `${this.name} is a living things and help ecology to perform natural way`
//     }
    
//     //This makesound is a superclass
//     makeSound(){
//         return `Unknown Sound`
//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name)
//     }

//     //This overriding method is polymorphism and subclass
//     makeSound(){
//         return `Woff...`
//     }
// }

// class Bird extends Animal{
//     constructor(name){
//         super(name);
//     }

//     //This method is for cat and overriding from Animal so it is called polymorphism and name subclass
//     makeSound(){
//         return `KUKU...`
//     }
// }

//  function animalInfo(animal){
//     console.log(`Name: ${animal.name}`)
//     console.log(`Name: ${animal.makeSound()}`) //Each of subinstance have own makesound method
//     console.log(`Name: ${animal.info()}`) //This is superclass
//  }

//  const genericAnimal = new Animal("Generic Animal");
//  const Mika = new Dog("Mika");
//  const Whisker = new Bird("Whisker");

//  animalInfo(genericAnimal);
//  animalInfo(Mika);
//  animalInfo(Whisker);

 //+++++++++++++++ Asynchronous +++++++++++

//  //Sync code 
//  function myFunc(){
//     console.log("Inside function");
//  }

//  console.log("Start");
//  myFunc();
//  console.log("End");

//  //Async code
//  //Ex:- 1
// console.log("Start");

// setTimeout(() => {
//     console.log("After two second")
// }, 2000);

// console.log("End")

// Ex:- 2(callback hell)

//This is valid async

// function callBeckHell(callback){
//     setTimeout(() => {
//         const data = "Inside (callbeskHello) function"; //(1)
//         console.log(data);
//         callback(data)
//     }, 2000);
// }

// function firstFunc(data, callback){
//     setTimeout(() => {
//         const data2 = `${data} - Processed First` //(2)
//         console.log(data2);
//         callback(data2)
//     }, 2000);
// }

// function secondFunc(data, callback){
//     setTimeout(() => {
//         const data3 = `${data} - Processed Second`; //(3)
//         console.log(data3);
//         callback(data3)
//     }, 2000);
// }

// callBeckHell((data) => {  //(1)
//     firstFunc(data, (data2) => {  //(2)
//         secondFunc(data2, (data3) => {  //(3)
//              console.log(`Final result of all functions ${data3}`)
//         })
//     })
// })

//Callback is not always async
//Example

// console.log("Start");

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach((num) => console.log(num));

// console.log("End");

//Example: ----------------------- (leftover)











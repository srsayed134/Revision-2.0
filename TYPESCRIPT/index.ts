// type Person = {
//     name: string;
// }

// const person: Person = {
//     name: "Jhon"
// };

// console.log(person.name)

//+++++++++++++++++Annotations+++++++++++

//String 

// let myName: string = "Nik";
// console.log(myName);

//Numbers

// let favNumb: number = 25;
// console.log(favNumb);

//Boolean

// let isHard: boolean = false;
// console.log(isHard)

// Repractice:-1
// let myName: string = "Lion";
//annotation name and value have to be same type

//++++++++++++++Type Inference+++++++++++

// let tech = "TypeScript";
// let favNumber = 8;
// let isComplete = false;

// tech = true  // it will throw an error
// console.log(typeof tech) //string
// console.log(typeof favNumber) //number
// console.log(typeof isComplete) //Boolean
 

//++++++++++++++++Any type+++++++++++++++

// let color: any = "Crimson"; //this "any" will make the color variable wild for all type
// color = 20; // No error
// color = true // No error

// console.log(color)

//+++++++++++++++Function parameters annotations+++++++++

// function addOne(num: number){
//     return num + 2;
// }

// const res = addOne(3);
// console.log(res)

//Arrow function 

// const multiplyNum = (num: number, num2: number) => num * num2;
// console.log(multiplyNum(3, 5)) //parameter should equal with arguments

// //PRac:- 2
// function twoSum(num1: number,num2: string){
//     return num1 + num2
// }
// console.log(twoSum(2 , "2")) //22 

// function twoMultiple(num1, num2){
//     return num1 * num2
// }
// console.log(twoMultiple(5, 8)) //it will give error because of not specifing type it automaticaly choose "any" type but answer should be 40


//++++++++++++++++Default params value+++++++++++++++

// function greet(person: string = "Anonoymous"){
//     return `Hello ${person};`
// }

// const res = greet();
// console.log(res)

//++++++++++++Return annotation++++++++++++
// function double(x: number,y: number) : number{
//      return x * y;
// }
// const res = double(5, 9);
// console.log(res)

// function twoMult(x: number, y: number): number{
//     return x * y;
// }
// console.log(twoMult(10, 25))

//++++++++++++++++Void function++++++++++++++++++
// function printMessage(message: string): void{
//     console.log(`This is my ${message}`); //it in void and when we return it will error
// }

// printMessage("message");


//++++++++++++++++Never +++++++++++++++++++++

// function throwError(msg: string):never {
//     throw new Error(msg);
// }

// function infiniteLoop(): never{
//     while (true) {}
// }

// let x: never;

// function neverReturn(): never {
//     while(true) {}
// }

// x = neverReturn()

//++++++++++++++++Arrays Types+++++++++++++++++

//Ex:- 1
// const numbers: number[] = [1, 2, 3, 4];
// console.log(numbers)
 
//Ex:- 2
// const names: Array<string> = ["Alice", "Bob", "Charlie"];
// console.log(names)

//EX:- 3

// const items: string[] = [];
// items.push("Furniture");
//items.push(25); //you cant push number type it will throw error

// console.log(items)

//++++++++++++++++Multi Dimensional+++++++++++++++

// const sing: number[] = [1, 2, 3, 4, 5]
// const matrix: number[][] = [[1, 2,3, 4]]
// const multiDi: number[][][] = [[[4, 5]]];
// console.log(multiDi)

//++++++++++++++++Objects ++++++++++++++

// const person : {firstName: string; lastName: string; age: number} = {
//     firstName: "Jhon",
//     lastName: "Doe",
//     age: 30
// }

// console.log(`Name: ${person.firstName} ${person.lastName} and age is ${person.age}`)

//+++++++++++++++function +++++++++++++++

// function printUSer(): {name: string; age: number; location: string} {
//     return {
//         name: "HuXn",
//         age: 25,
//         location: "China",
//     };
// }

// console.log(printUSer())

// ++++++++++++++++++++Type alliases+++++++++++++++++

// type User = {
//     name: string;
//     age: number;
//     location : string;
// };

// const printUserInfo = (user: User) => {
//      return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`;
// }

// const res = printUserInfo({name: "Alex", age:20, location: "USA"});
// console.log(res)


//++++++++++++++Optional properties++++++++++++

// type User = {
//     name: string;
//     age?: number;
//     readonly location: string; // readonly
// }

// const user: User = {
//     name: "HuXn",
//     // age: 20,
//     location: "China",
// }

// // user.location = "Japan" //location properties can not be reassigned for readonly but it is not immutable so any method can be applied like push,pop
 
// console.log(user)

//++++++++++++++intersection type+++++++++++++

// type UserInfo = {
//     first: string;
//     last: string;
//     age: Number;
// }

// type AccountDetails = {
//     email: string;
//     password: string;
// }

// type User = UserInfo & AccountDetails;

// const huxn: User = {
//     first: "HuXn",
//     last: "Lee",
//     age: 25,
//     email: "huxn@gmail.com",
//     password: "securePassword123",
// }

// console.log(`Name: ${huxn.first} ${huxn.last}`)

//+++++++++++++++++++Unions+++++++++++++++

// let password : string | number = 20

// type UserInfo = {
//     first: string;
//     last: string;
//     age: number;
// }

// type AccountDetails = {
//     email: string;
//     password: string;
// }

// let user: UserInfo | AccountDetails = {
//     email: "someone@gmail.com",
//     password: "ppa20",
//     first: "Nik",
//     last: "Nam",
//     age: 25,
// }
// console.log(user)

// const person: (string | number) []= [1, 5, 8, "Nim"]
// console.log(person)

//+++++++++++++++Literal Types+++++++++++++++

// let color: "red" | "crimson" | "fusha" | true;
// color = "red";
// color = "crimson";
// color = true;

// let isTrue: true | false;
// isTrue = true;

// let numb: 5 | 2| 1| 3;
// numb = 5;

// //Objects
// type Status = {
//   status: "success" | "error" | "loading";
// };

// const action: Status = {
//   status: "success",
// };

//+++++++++++++Tuples +++++++++++++++++++

// let fruits: [string, string, number] = ["Mango", "Orange", 18];
// console.log(fruits[0])
// console.log(fruits[1])

// let [first, second, third] = fruits;
// console.log(first)
// console.log(second)
// console.log(third)

//++++++++++++++++++Destructuring Individual element+++++

// let myTuple: [number, string];
// myTuple = [10, "Hello World"];
// console.log(myTuple)

// // Ex: 1
// const products: (number | string)[] = ["item-1", 15]
// console.log(products) //[ 'item-1', 15 ]

// //Ex: 2
// const games: [string, number, string] = ["Game 1", "Game 2", "Game 3"];
// console.log(games) //Error

//+++++++++++++++Enums ++++++++++++++++

// enum WeatherConditions {
//     Sunny = "sunny",
//     Cloudy = "cloudy",
//     Rainy = "rainy",
// }

// console.log(WeatherConditions);

// const currentWeather = WeatherConditions.Rainy;
// console.log(`The current weather is ${currentWeather}`)

//+++++++++++++++++OOP in typescript+++++++++++

// class Profile{
//     name: string;
//     age: number;
//     readonly location: string;

//     constructor(name: string, age: number, place: string){
//         this.name = name
//         this.age = age;
//         this.location = place

//     }
// }

// const person1 = new Profile("Jhon", 25, "Tokyo");
// console.log(person1)
// console.log(person1.name)
// console.log(person1.age)
// console.log(person1.location) 

//+++++++++++++++++++Access Modifiers++++++++++++++++

// class Profile {
//     public name: string;
//     private surname: string;
//     protected location: string;
//     constructor(first: string, last: string, place: string) {
//         this.name = first;
//         this.surname = last;
//         this.location = place;
//     }
//     getName():string {
//         return `${this.name} ${this.surname} from ${this.location}`
//     }
//     getSurname(): string{
//         return `this ${this.surname} is private only in profile` 
//     }
//     getLocation(): string{
//         return `this ${this.location} is protected it only available by parents like function call`
//     }
// }

// let person1 = new Profile("Joffrey", "Brathion", "Kings landing")
// console.log(person1) //in console you see it because console compile file before typescript
// console.log(person1.name);
// // console.log(person1.surname); //error
// // console.log(person1.location); //error
// console.log(person1.getName()) 
// console.log(person1.getSurname())
// console.log(person1.getLocation())


// class User extends Profile{
//     constructor(first: string, last: string, place:string){
//         super(first,last,place);
//     }
//     // getName(): string {
//     //     return `${this.name} ${this.surname} from ${this.location}`
//     // }
//     showLocation(): string{
//         return `this ${this.location} is protected access by call not in direct`;
//     }
//     // showSurname(): string{
//     //     // return this.surname;
//     // } in this subclass surname is not avaiable because surname is alaways private
// }

// const huxn = new User("Huxn", "Nim", "USA");
// console.log(huxn) //in console you see it because console compile file before typescript
// // console.log(huxn.surname) //error
// // console.log(huxn.showSurname())
// console.log(huxn.getName()); //error because surname is only access by Profile
// console.log(huxn.showLocation());


//+++++++++++Getters and setters ++++++++++++++

// class MyClass {
//     private _myProperty: number = 0;
//     protected location: string = "Nim";

//     get myProperty():number{
//         return this._myProperty;
//     }
//     get myLocation():string{
//         return this.location;
//     }
//     set myProperty(value: number){
//         this._myProperty = value;
//     }
//     set myLocation(value: string){
//         this.location = value
//     }
// } 
// const myInstance = new MyClass();

// console.log(`Current Value: ${myInstance.myProperty}`)
// myInstance.myProperty = 10;
// console.log(`Current Value: ${myInstance.myProperty}`)
// console.log(`Current location: ${myInstance.myLocation}`)
// myInstance.myLocation = "Nimkis";
// console.log(`Current location: ${myInstance.myLocation}`)

// //Chat gpt example (if you have both readonly and private,protected instance in object you can not reassign surname or can not be mutable surname
// // for this we can create new Profile by factory method)
// class Profile {
//     private readonly surname: string;
//     protected readonly location: string;

//     constructor(last: string, place: string) {
//         this.surname = last;
//         this.location = place;
//     }

//     // create a new Profile with new surname
//     withNewSurname(newSurname: string): Profile {
//         return new Profile(newSurname, this.location);
//     }

//     getInfo() {
//         return `${this.surname} from ${this.location}`;
//     }
// }

// const p1 = new Profile("Brathion", "Kings Landing");
// console.log(p1.getInfo()); // Brathion from Kings Landing

// const p2 = p1.withNewSurname("Khan");
// console.log(p2.getInfo()); // Khan from Kings Landing

//+++++++++++++++++++Interface ++++++++++++++++++++

// //interface Example for object
// interface Computer {
//     name: string;
//     ram: number;
//     hdd: number;
// }
// const computerExample:Computer = {
//     name: "i7",
//     ram: 8,
//     hdd: 500,
// }
// console.log(computerExample.name);

// interface Movie{
//     readonly name: string;
//     ratings: number;
//     genra?: string;
// }

// const indianfilm: Movie = {
//     name: "PK",
//     ratings: 7.5,
// }
// // console.log(indianfilm.name = "3idiots")
// console.log(computerExample.name = "i8")

//Interfaces for function ++++++++++++++++

// interface Math {
//     (x: number, y: number): number;
// }

// const twoSum:Math = (x,y) => {
//     let z = x + y;
//     return z;
// }
// const twoMult:Math = (x,y) => {
//     let z = x * y;
//     return z
// }
// console.log(twoSum(5, 9))
// console.log(twoMult(5, 9))

//Interface for method ++++++++++++++++++

// interface Person {
//     firstName: string;
//     lastName: string;
//     age: number;
//     description(): void;
// }

// const Jhon: Person = {
//     firstName: "Jhon",
//     lastName: "Doe",
//     age: 22,
//     description(){
//         console.log("Hello")
//     }
// }

// function client(person: Person){
//     console.log(`Hello ${person.firstName} ${person.lastName} and i am ${person.age} years old`);
//     person.description();
// }

// client(Jhon);
 //Use same interface for both object and funtion --------

// interface Song {
//     songName: string;
//     singerName: string;
//     printSongInfo(songName: string, singerName: string) : string;
// }

// const song1: Song = {
//     songName: "Natural",
//     singerName: "Fioon", 
//     printSongInfo: (songName, singerName) => {
//         return `Song: ${songName} ${singerName}`
//     }
// }

// console.log(song1.songName)
// console.log(song1.singerName)
// console.log(song1.printSongInfo("Natural", "Fioon"))

//Share interface ++++++++++++++

// interface MovieDetails {
//     readonly name: string;
//     ratings: number;
//     printMovieInfo(name: string, price: number, ratings: number): string | number;
// }

// interface MovieGenra extends MovieDetails {
//     genra: string; 
// }

// const movie1: MovieGenra = {
//     name: "Star war",
//     genra: "Action",
//     ratings: 8.9,
//     printMovieInfo(name: string, price: number, ratings: number): string | number {
//         return `Movie name: ${name} Price: ${price} Ratings: ${ratings}`;
//     }
// }

// const res = movie1.printMovieInfo("Jhon wick", 520, 7.3);
// console.log(res)

//Interface with classes++++++++++++++++

// interface Vehicle {
//     start(): void;
//     stop(): void;
// }

// class Car implements Vehicle {
//     start(): void {
//         console.log("Car is starting......")
//     }
//     stop(): void {
//         console.log("Car is stoped")
//     }
// }
// const myCar = new Car();
// myCar.start();
// myCar.stop();

//interface declaration merging +++++++++++++++

// interface Car{
//     brand: string;
//     start(): void;
// }
// interface Car{
//     model: string;
//     stop(): void;
// }
// //Declaration merging by two entity

// const myCar: Car = {
//     brand : "Toyota",
//     model : "Crown",
//     start(){
//         console.log(`${this.brand} is starting and the car is ${this.model}`)
//     },
//     stop(){
//         console.log(`${this.brand} is stoped and the model is ${this.model}`)
//     }
// }
// console.log(myCar.brand);
// console.log(myCar.model);
// myCar.start()
// myCar.stop()

//+++++++++++++++++++++ Generics +++++++++++++++++++++

// //Ex: 1
// function printNumber(item: number, defaultValue: number):[number, number]{
//     return [item, defaultValue];
// }
// function printString(item: string, defaultValue: string):[string, string]{
//     return [item, defaultValue];
// }
// function printBoolean(item: boolean, defaultValue: boolean):[boolean, boolean]{
//     return [item, defaultValue];
// }
// function printAny(item: any, defaultValue: any): [any, any]{
//     return [item, defaultValue]
// } //this any is behave like normal function so we need to insert some typescript 

// const num = printNumber(12, 30);
// const str = printString("Nim", "Astrocal");
// const bool = printBoolean(true, false);
// const any = printAny(2, false);
// // console.log(num)
// // console.log(str)
// // console.log(bool)
// // console.log(any)

// //Refector ex: 1

// function customType<Anything>(item:Anything, defaultValue:Anything):[Anything, Anything]{
//     return [item, defaultValue]
// }

// const customNumber = customType<Number>(12, 15);
// const customBoolean = customType<Boolean>(true, false);
// const customString = customType<String>("Nim", "Astrocal");
// console.log(customNumber)
// console.log(customBoolean)
// console.log(customString)

// //With interface
// interface Dog {
//     name: string;
//     breed: string;
// }
// const customDog = customType<Dog>({name: "Buddy", breed: "Labradao"}, {name: "Default", breed: "Unknown"});
// console.log(customDog)

//Generics with object keys ++++++++++

// function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
//   key: string;
//   value: T | undefined;
// } {
//   const keys = Object.keys(obj);
//   const randkey = keys[Math.floor(Math.random() * keys.length)]!;
//   return { key: randkey, value: obj[randkey] };
// }

// const stringObject = { a: "apple", b: "banana", c: "cherry" };
// const randomStringPair = getRandomKeyValuePair<string>(stringObject);
// console.log(randomStringPair);

//generics with array,number,object+++++++++++

// function filterArray<T>(array: T[], condition: (item: T) => boolean): T[]{
//     return array.filter((item) => condition(item));
// }

// const numberArray = [1,2,3,4,5,6,7,8,9,10];
// const evenNumvers = filterArray<number>(numberArray, (num) => num % 2 === 0);

// const stringArr = ["apple", "banana", "cherry", "date"];
// const shortWords = filterArray<string>(stringArr, (word) => word.length < 6);

// interface Fruit {name: string; color: string}
// const fruitArray: Fruit[] = [
//     {name: "Apple", color: "Red"},
//     {name: "Orange", color: "Yellow"},
//     {name: "Watermelon", color: "Green"},
//     {name: "Chery", color: "Red"},
// ]

// const redFruits = filterArray<Fruit>(fruitArray, (fruit) => fruit.color === "Red");

// console.log(evenNumvers)
// console.log(shortWords)
// console.log(redFruits)

//Two generics++++++++++++++++++++

// function reversePair<T, U>(value1: T, value2: U): [U, T] {
//     return [value2, value1]
// } //Input is string : T, number : U and output is number: U, string : T

// const reversePairba = reversePair("Hello", 20);
// console.log(reversePairba)

//Generics with class ++++++++++++++++++

// class Box<T>{
//     private content : T;
//     constructor(initialContent : T){
//         this.content = initialContent;
//     }
//     getContent() : T {
//         return this.content
//     }
//     setContent(newContent: T){
//         this.content = newContent;
//     }
// }

// const stingBox = new Box<string>("Hello TypeScript")
// console.log(stingBox.getContent())
// stingBox.setContent("Hello Javascript")
// console.log(stingBox.getContent())

//Repractice ++++++++++++++++++++++++

// class Home<T>{
//     private content: T;
//     constructor (initialCount: T){
//         this.content = initialCount;
//     }
//     getHome(){
//         return this.content;
//     }
//     setHome(value: T){
//         this.content = value 
//     }
// }

// const myHome = new Home<string>("Hello i am home");
// console.log(myHome.getHome())
// myHome.setHome("I am going to outside")
// console.log(myHome.getHome())


//+++++++++++++++++++++++++Type Narrowing +++++++++++++

type MyType = string | number;

function exampleFunction(value: MyType){
    if(typeof value === "string"){
        console.log(value.toUpperCase())
    }else{
        console.log(value.toFixed(3))
    }
}
exampleFunction("My name");
exampleFunction(25)

//typeNarrowing with the instanceof


//intersection type with typeNarrowing (&)(easy)(2:56)































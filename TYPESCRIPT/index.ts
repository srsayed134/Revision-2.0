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
//     readonly location: string;
// }

// const user: User = {
//     name: "HuXn",
//     // age: 20,
//     location: "China",
// }

// // user.location = "Japan" //location properties can not be changed for readonly

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

















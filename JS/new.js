// 01:-Basic
// console.log(2 + 2) ;
// console.log({name: "Alex"})


// Variables---------
//Declared variable;
// let name;
//Assin value;----------
// name = 5;
// console.log(name)

//Challenge++++++++++++++
// let name = "Sayed";
// let whatDoYouWannaBecomeInYourLife = "programmer";
// let gender = "Male";
// let twitterHandle = "@sayed";
// console.log(name);
// console.log(whatDoYouWannaBecomeInYourLife);
// console.log(gender);
// console.log(twitterHandle);

// Primitive Types
// 1. Number-----------

// let num = 10;
// let num1 = 15;
// // console.log(num);
// console.log(typeof num); //number
// console.log(num + num1); //25;
// console.log(2 + 1); //3

// let counter = 0;
// counter++;
// counter++;
// console.log(counter) //2;
// counter--;
// console.log(counter) //1;

//Challenge++++++++++++++++++;
// let firstFavNum = 7;
// let secondFavName = 28;
// let res1 = firstFavNum + secondFavName;
// console.log(res1)//35;
// let res2 = firstFavNum - secondFavName;
// console.log(res2); // -21
// let res3 = firstFavNum * secondFavName;
// console.log(res3); //196
// let res4 = firstFavNum / secondFavName;
// console.log(res4); // 0.25;
// let res5 = firstFavNum % secondFavName;
// console.log(res5); // 7
// let res6 = firstFavNum ** secondFavName;
// console.log(res6); // 4.59998;

// 2. Boolean ----------------

// let isTrue = true;
// console.log(isTrue);
// let isFalse = false;
// console.log(isFalse);
// let isTrue = NaN;
// console.log(isTrue);

// let number = 10;
// console.log(number + undefined); //NaN;

// let notDefined = null;
// console.log(notDefined); //Null is set by programmer;

// let notDefined1;
// console.log(notDefined1) //undefined is set by compiler;

//Challenge ++++++++++++;

// let isJsProgrammingLanguage = true;
// let isJsHard = false;
// let favNumb = 28;
// let add = favNumb + undefined;
// console.log(add); //NaN;

// 3. Comparison Operators---------------
// Relational operators;
// let num1 = 10;
// let num2 = 15;
// let num3 = 10;


// let res = num1 > num2;
// let res1 = num1 < num2;
// let res2 = num1 >= num3;
// let res3 = num1 <= num3;
// console.log(res) //false
// console.log(res1) //true
// console.log(res2) //true
// console.log(res3) //true

// Equality operators;
// let num1 = 10;
// let num2 = "10";
// let num3 = 15;
// let num4 = "15";

// let res = num1 === num2;
// let res1 = num1 == num2;
// let res2 = num1 !== num3;
// let res3 = num3 != num4;
// console.log(res) //false
// console.log(res1) //true;
// console.log(res2) //true;
// console.log(res3) //false;

// 3.Strings ------------;
//Challenge +++++++++++++++++;

// let favActorFastName = "Salman";
// let favActorLastName = "Khan"

// let fullName = favActorFastName.concat(favActorLastName);
// console.log(fullName);
// let capitalize = fullName.toUpperCase();
// console.log(capitalize);
// let message = `My favorite Actor Is ${capitalize} & say something about your fav actor`;

// let appendMessage = message += ` his best show is silicon valley`;
// console.log(appendMessage);

// 4. Type Conversion

//Convert string to number

// let money = "50";
// money = parseInt(money);
// console.log(money)
// console.log(typeof money); //Number

// let taka = "20";
// taka = +taka;
// console.log(taka);
// console.log(typeof taka); //Number

// let dollar = "80";
// dollar = Number(dollar);
// console.log(dollar);
// console.log(typeof dollar); //Number

// //Conver number to string

// let numb = 50;
// numb = numb.toString();
// console.log(numb);
// console.log(typeof numb); //String

// let roll = 27;
// roll = String(roll);
// console.log(roll);
// console.log(typeof roll); //String

// //Convet String to decimal

// let calc = "25.247";
// calc = parseFloat(calc);
// console.log(calc);
// console.log(typeof calc); //Number

// let abc = "25.247abc";
// abc = parseFloat(abc);
// console.log(abc); //25.247
// console.log(typeof abc); //Number;

// let ABC = "125 785";
// ABC = parseFloat(ABC);
// console.log(ABC); //125
// console.log(typeof ABC); //Number;


// 02:- Control flow

//Conditional statement
// let password = 8;
// if(password === 8){
//     console.log("Welcome");
// }else if(password <= 8){
//     console.log("Password is too short");
// }else if(password >= 8){
//     console.log("Too long password & Password should be 8 characters");
// }else {
//     console.log("Please provide a password")
// }
// //Switch statements

// //Example:- 1

// let x = 0;
// let bulb;

// switch (x) {
//     case 0:
//         bulb = "OFF"
//         console.log(bulb)
//         break;
//     case 1:
//         bulb = "ON";
//         console.log(bulb)
//         break;
//     default:
//         bulb = "no value found"
//         console.log(bulb)
//         break;
// }

// // Example:- 2

// let day = "Wednesday";
// let WeekDays ;

// switch (day) {
//     case "Saturday":
//         WeekDays = "Work day"
//         break;
//     case "Sunday":
//         WeekDays = "Off day"
//         break;
//     case "Monday":
//         WeekDays = "Work day"
//         break;
//     case "Tuesday":
//         WeekDays = "Work day"
//         break;
//     case "Wednesday":
//         WeekDays = "Work day"
//         break;
//     case "Thursday":
//         WeekDays = "Work day"
//         break;
//     case "Friday":
//         WeekDays = "Work day"
//         break;

//     default:
//         WeekDays = "No dayes name found"
//         break;
// }
// console.log(`Today is ${WeekDays}`);

//Challenge 

// let fruite = "banana";

// switch (fruite) {
//     case "banana":
//         console.log("Banana is good")
//         break;
//     case "Orange":
//         console.log("I am not a fan of orange")
//         break;
//     case "Apple":
//         console.log("How you like them apples?")
//         break;

//     default:
//         console.log("I have naver heard of that fruit")
//         break;
// }

//For loops---------------

// for (let i = 0; i <= 20; i++) {
//     for (let j = 0; j < 2; j++) {
//         console.log(`This is ${i} for `)
//     }
// }

// // Challenge++++++++++++++++

// for (let i = 0; i <= 1000 ; i++) {
//     console.log(`${i} Sayed`)
    
// }

//While loops --------------

// let i = 1;

// while (i <= 5) {
//     console.log(`Hello world ${i}`);
//     i++;
// }

//Challenge ++++++++++++++

// let i = 10;

// while (i <= 100) {
//     console.log(`Hello world ${i}`);
//     i++;
// }

//Do while loops---------------

// let i = 1;
// do {
//     console.log(`This is ${i}`);
//     i++;
// } while (i <= 10);

// Challenge ++++++++++++++++

// let i = 20;
// do {
//     console.log(`This is ${i}`);
//         i++;

// } while (i <= 400);

//Logical operators +++++++++++

//AND(&&), OR(||), NOT(!);

// let a = 25;
// let b = 50;
// let c = 75;
// //Or

// if (a > b || b < c) {
//     console.log("25 is small and 75 is big")
// }
// //And

// if (a < b && c > b) {
//     console.log("50 is bigger and 25 is smaller")
// } 

// //Not 

// if (!(a > b)){
//     console.log("This is not")
// }

// 03:- Data type 

//Array  

//Challenge+++++++++++++

// let favSingers = ["KK", "Adnan sami", "Kishor"];
// console.log(favSingers[0]);

// let favNumbers = [1, 2, 3, 4];

// let mixedArr = ["string", ["otherarray", "anotherArray"], 123, true];
// console.log(mixedArr[2]);
// console.log(mixedArr[1][0]);

//Array method --------------

// let cars = ["Toyota","Audy", "BYD", "Tesla"];
// console.log(cars.length);
// cars.push("BMW");
// console.log(cars);
// cars.pop();
// console.log(cars);
// cars.shift();
// console.log(cars);
// cars.unshift("Charry Tiggo");
// console.log(cars);
// cars.sort();
// console.log(cars);

// let car2 = ["VW", "Honda"]
// console.log(cars.concat(car2))
// console.log(car2.includes("Honda")) //True
// console.log(cars.join("-"));
// console.log(cars.reverse());
// console.log(cars.slice(0, 1))
// console.log(cars.splice(1, 1))

//Objects-----------

// const person = {
//     FierstName: "Mehmed",
//     LastName: "Joffery",
//     age: 4,
//     location: ["Planet", "Earth"],
//     isProgrammer: true,
//     10: "ten"
// }
// console.log(person)
// //Access items from object
// console.log(person.FierstName);
// console.log(person["age"]);
// console.log(person["location"]);
// console.log(person["10"]);

// person.language = "Bangla";
// person.location = "Hungary"; //Its change existing key with value
// console.log(person);
// delete person.isProgrammer;
// console.log(person)

//Challenge+++++++++++

// const car = {
//     type: "Sedan",
//     model: 1980,
//     color: "Red"
// }
// console.log(car);
// console.log(typeof car);
// car.type = "Toyota";
// console.log(car);
// car.wheels = 4;
// console.log(car);

//Function 
//Function declaration

// function sayHello(name) {
//     console.log(`HEllo ${name}`);
// }

// sayHello("Nirob");
// sayHello("Pinki");

// function add(a, b){
//     return a + b;
// }

// let c = add(2, 5);
// console.log(c)

//Challenge ++++++++++

// function myFunction(a, b){
//     let c = a * b;
//     return c
// }

// console.log(myFunction(8, 9));

//Function expression

// const greetings = function(user){
//     console.log(`Hello ${user}`);
// }

// greetings("Jhon")

//Callbeck function

// function greet(name, cb){
//      console.log(`Hi, i am ${name}`);
//      cb();
// }

// function callbecks(){
//     console.log(`I am callbank function`)
// }
// greet("Mehmed", callbecks);

// //OR 

// greet("Mehmed2", function callbecks(){
//     console.log(`I am callbank function`)
// })

//Challenge+++++++++++

// function showCallFunc(fn){
//    const numb = 10;
//    fn(numb);
// }

// showCallFunc(function callBeck(number){
//     console.log(number)
// }) //Here fn(numb) is reference of callBeck(number)

//Method (1) -------------

// function greet() {
//     return `Hello, my name is ${personalbar.name} & i am ${person.age} years old`;
// }

// const person = {
//     name: "Yan",
//     age: 30,
//     greet,
// }

// console.log(person.greet())

//Method (2) ------------

// const person = {
//     name: "Nimo",
//     age: 20,
//     greet: function(){
//         return `Hello, my name is ${person.name} and i am ${person.age} years old`;
//     },
// }

// console.log(person.greet());

//JSON ++++++++++++

// const person = {
//     name: "Jhon dow",
//     age : 20,
//     email : "js@gmail.com",
//     hobbies: ["Reading", "Running", "Cooking"],
//     address : {
//         city : "New York",
//         idk: true
//     }
// }

// JSON STRINGIFY()
// const JSON_person = JSON.stringify(person);
// console.log(JSON.stringify(person))

// console.log(JSON_person);

//JSON PARSE
// const JSON_parse = JSON.parse(JSON_person);
// console.log(JSON_parse)

//Date, time ++++++++++++++++++

// const currentDate = new Date();
// console.log(currentDate);

// const customDate = new Date(2001, 10, 22);
// console.log(customDate)

// console.log(currentDate.getFullYear());
// console.log(currentDate.toLocaleString());
// console.log(currentDate.toDateString());
// console.log(currentDate.toISOString());

// currentDate.setDate(currentDate.getDate() + 1);
// console.log(currentDate)

//SetInterval++++++++++++++++

// setInterval(() => console.log(`This is implement in two second`),2000)

//Settime out+++++++++++++++

// setTimeout(function() {
//     console.log(`This function will be executed after 3 seconds`)
// }, 3000) ;

// const itervalid =  setInterval(function () {
//     console.log(`This is being executed at the iterval`);
// }, 1000);

// setTimeout(function(){
//     clearInterval(itervalid);
//     console.log(`Interval stoped`)
// }, 10000)

//Template strings, 
// let test = "Big name";
// function test2() {
//     return `My name is saad`
// }

// console.log(`This is 
//     templete string`);
// console.log(`This is ${test}`);
// console.log(`This is ${5+5}`);

// console.log(`${test2()}`)

//Challenge --------------;

// let text = `
// The quick 
// brown fox
// jumps over
// the lazy dog`
// console.log(text);

// let firstName = `Diago`;
// let lastName = `Meradona`;

// let fullName = `${firstName} ${lastName}`;
// console.log(fullName)

//Arrow function++++++++++++++++++++

// greet = userName => {
//     return `Hello ${userName}`;
// }
// console.log(greet("Huxn"))

// greet = userName => `Hello ${userName}`;
// console.log(greet("Nik"))

// let greet = userName => `Hello this is ${userName}`;
// console.log(greet("Niom"))

//Enchanced object literals

// const user = (name, age, work) => {
//     return{
//         name: name,
//         age: age,
//         work: work,
//     };
// }

// const huxn = user("Niom", 25, "Business");
// console.log(huxn)

//In onject literals you can ommit key 

// const user1 = (name, age, work) => {
//     return{
//          name,
//          age,
//          work,
//          description:() => {
//             console.log(`My name is ${name} and i am ${age} years old and working on ${work}`)
//          }
//          }
//     };


// const huxn1 = user1("Niom", 25, "Business");
// huxn1.description();

//Challenge ----------

// let a = 1;
// let b = 2;
// let c = 3;

// let obj = {
//     a,
//     b,
//     c
// }
// console.log(obj)

//Challenge ------------

// const lib = {
//     sum: (a, b) => a + b,
//     mult: (a, b) => a * b,
// };
// console.log(lib.sum(2, 3));
// console.log(lib.mult(2, 3));

//Challenge -------------

// let person = (name, age, height) => {
//     return{
//          name, age, height
//     }
// }
// let sala = person("Sala", 35, 5.5);

// console.log(sala)

//DEfault function parameters ++++++++++

// function countTo5(count = true) {
//     if (count === true) {
//         for(let i = 1; i <= 5; i++){
//             console.log(`Count: ${i}`)
//         }; 
//     }
// }

// countTo5();
// function ratings(rate = 3){
//     if (rate === 5) {
//         console.log(`High Ratings :)`)
//     }else if(rate === 0){
//         console.log(`Low Ratings :(`)
//     }else if(rate === 3){
//         console.log(`No Ratings`)
//     }
// }
// ratings()

// challenge -------------

// function multiply(a, b = 1) {
//     console.log(a * b);
// }

// multiply(5)


//Spread operator+++++++++++++

// //Function  
// function giveMe4 (a,b,c,d){
//     console.log(a, b, c, d);
// }

// let colors = ["Red", "Blue", "Green", "Pink"]
// giveMe4(colors);
// giveMe4(...colors);

// //Array 

// const strNums = ["One", "Two", "Three"];
// const moreStrNums = ["Four", "Five", "Six"];

// const concat = [...strNums, ...moreStrNums];
// console.log(concat);

// const allpep = ["Saad", strNums, "Nik"]
// console.log(allpep)
// const allPep1 = ["Saad", ...strNums, "Nik"]
// console.log(allPep1)

// //Objects

// const obj1 = {x: 1, y: 2}
// const obj2 = {z: 3}
// let newOBJ = {obj1, obj2};
// console.log(newOBJ)
// let newOBJ1 = {...obj1, ...obj2};
// console.log(newOBJ1)

//Challenge ----------------

// let arr = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [...arr, ...arr2];
// console.log(arr3);

// const user = {
//     name: "Jen",
//     age: 22,
// }

// let user1 = {...user};
// console.log(user)
// console.log(user1)

// Rest parameter+++++++++++++++++

// function user(x,...userData){
//     console.log(x)
//     console.log(userData);
// }

// user("Huxn", 19, "programmer", "football");

//Destructing ++++++++++

//Array destructurring ++++++
//EX 1

// const foo = ["One", "Two"];

// const [huxn, yellow, green, blue] = foo;
// console.log(huxn)
// console.log(yellow)
// console.log(green)

//EX 2

// let a, b;

// [a = 5, b = 8, c = 9] = ["One", "two"]
// console.log(b) //two
// console.log(c) //9

//EX 3

// function f(){
//     return [1,2];
// }

// let a, b;
// [a, b] = f();
// console.log(a);
// console.log(b);

//EX 4

// function g() {
//     return [44,25,35]
// }
// const [m, ,o] = g();
// console.log(m)
// console.log(o)

//EX 5

// function h(){
//     return [24, 25, 86, 57];
// }
// const [a, ...b] = h();
// const [...f] = h()
// console.log(b);
// console.log(f)

//Challenge -------------

// const colors = ["red", "green", "blue", "yellow", "pink", "White", "black"];

// let [color1, color2, color3, ...colorRest] = colors;
// console.log(color1)
// console.log(color2)
// console.log(colorRest)

//Object destructuring++++++++++

// const student = {name: "HuXn", position: "First", rollNo: 27};

// const{name, position, rollNo} = student;
// console.log(name,position,rollNo)

// const person = {
//     name: "Jhon Doe",
//     age: 30,
//     gender: "male",
//     country: "USA",
// }

// const{country, name, age} = person; //Name should same as key 
// console.log(country)
// console.log(name)
// console.log(age)

//Renaming of variable++++++++++++

// const num = {x: 100, y:200};

// const {x: new1, y: new2} = num;
// console.log(new1);
// console.log(new2);

// Object destructuring and rest operator+++++++++

// let{a, b, ...rest} = {a:100, b:200, c:300, d:400, e:500};

// console.log(a) 
// console.log(b) 
// console.log(rest) 

// const person = {
//     name: "Jhon Doe",
//     age: 30,
//     gender: "male",
//     country: "usa",
// }

// const {name: personName, age: personAge, country: personCountry} = person;

// console.log(personName)
// console.log(personAge)
// console.log(personCountry)

//Function destructuring+++++++++
// const person = {
//     name: "Jhon Doe",
//     age: 20,
//     country: "USA"
// }

// function printPersonInfo({name, age, country}) {
//     console.log(`Name: ${name}`)
//     console.log(`Age: ${age}`)
//     console.log(`Country: ${country}`)
// }

// printPersonInfo(person);

// let options = {
//     title: "My menu",
//     items: ["item1", "item2"],
// };

// function showMenu({
//     title,
//     width: w = 100,
//     height: h = 200,
//     items: [item1, item2],
// }) {
//     console.log(`${title} ${w} ${h} `)
//     console.log(`${item1}`)
//     console.log(`${item2}`)
// }
// showMenu(options);

//Nested destructuring+++++++++++++

// const songs = [
//     {name: "Lucky you", singer: "Joyner", duration: 4.34},
//     {name: "Just like you", singer: "NF", duration: 3.23},
//     {name: "humble singer", singer: "Kendrick lamar", duration: 2.33},
//     {name: "old town road", singer: "lil nas x", duration: 5.23},
//     {name: "cold sholder", singer: "central cee", duration: 5.23},
// ]

// const [,,,{singer}] = songs;
// const [,,,{duration: d}] = songs;
// console.log(singer);
// console.log(d);

//The ternary operator+++++++++++++++++

// //Ex:- 1
// let password = 8;

// function passwordChecker(ps) {
//     return ps === 8 ? "Pass is matched" : "Pass is not match"
// }

// let passTsker = passwordChecker(password);
// console.log(passTsker);

// //Ex:- 2
// let age = 25;
// const isadult = age >= 18 ? "Adutlt" : "Not a Adult";
// console.log(isadult)

// //Challenge------------

// let money = 5;

// let buyingCap = money >= 1 ? "buy products" : "they should bring money";

// console.log(buyingCap)

//For in loop +++++++++++++++++++++

//Object
// let person ={
//     name: "Alex",
//     age: 20,
//     country: "USA",
// }

// for(let keys in person){
//     console.log(keys , person[keys])
// }

//Array
// let fruits = ["Apple","Mango", "Pineapple"];

// for(let index in fruits){
//     console.log(`${index}: ${fruits[index]}`)
// }

//Challenge----------------

// const object = {
//     a: 1,
//     b: 2,
//     c: 3,
// }
// for(let keys in object){
//     console.log(keys, object[keys])
// }


//for of loop ++++++++++++++++++

// let stuNames = ["JEE", "NIOM", "ALEX"];
// for (const stuName of stuNames) {
//     console.log(stuName)
// }

// const text = "Happy";
// for (const word of text) {
//     console.log(word)
// }

//Challenge -----------

// const array1 = ["a", "b", "c"];

// for (const array of array1) {
//     console.log(array)
// }

//Foreach++++++++++++++++++

// const colors = ["Blue", "Teal", "Black", "Yellow"];

// colors.forEach((color) => console.log(color))

// const words = ["hello", "bird", "football"]

// const capWords = words.forEach((word, index, arr) => {
//     arr[index] = word[0].toUpperCase() + word.substring(1)
// })

// console.log(words)

//Challenge-------------

// let numbers = [5, 3, 8, 88, 98];
// numbers.forEach(numbwe => {
//     console.log(numbwe)
// });
// let sum = 0;

// function adder(number){
//     sum = sum + number
// }
// numbers.forEach(adder);
// console.log(sum)

//Map method +++++++++++++++++++++ (create new array)

// let numbers = [1, 5, 8, 7, 6];

// let double = numbers.map((num) => num * 2)

// console.log(double);

// let peoples = [
//     {firstName: "Macom", lastName: "Reynolds"},
//     {firstName: "Kaylee", lastName: "Frye"},
//     {firstName: "Jayne", lastName: "Cobb"},
// ]

// const res = peoples.map((person) => {
//     return [person.firstName, person.lastName]
// })

// console.log(res)

//Challenge ++++++++++++++++++

// let numbers = [4, 88 , 99, 55];

// //Ex:= 2
// let multiply = numbers.map((num) => num * 10);
// console.log(multiply);

// //Ex=: 1
// function myFunction(num) {
//     return num * 10
// }

// const newwArr = numbers.map(myFunction);
// console.log(newwArr)

// const songs = [
//     {name: "Lucky you",duration: 4.3},
//     {name: "Munafeuq",duration: 3.3},
//     {name: "Dilbara",duration: 2.3},
//     {name: "Shajni",duration: 5.6},
// ]

// let hold = songs.filter(song => song.name.includes("u"));
// console.log(hold)
// let hold1 = songs.filter(song => song.duration > 4);
// console.log(hold1)

// const computers = [
//     {ram:4, sdd: 120},
//     {ram:8, sdd: 240},
//     {ram:16, sdd: 360},
//     {ram:32, sdd: 520},
// ]

// let gaterThanSixteen = computers.filter(computer => computer.ram > 16);

// console.log(gaterThanSixteen)

//Challenge+++++++++++++++++

// const ages = [32, 33, 16, 40];

//Ex:-1
// let adult = ages.filter(num => num >= 18);
// console.log(adult)

//Ex:2

// function checkAdult(age){
//     return age >= 18
// }

// let adult = ages.filter(checkAdult);
// console.log(adult)

//Ex:-3

// const words = [
//     "spray",
//     "Limit",
//     "elite",
//     "exuberant",
//     "destruction",
//     "present"
// ]

// let lengthmorethan6 = words.filter(word => word.length > 6);
// console.log(lengthmorethan6)

// function chechk(word){
//     return word.length > 6
// }

// let res = words.filter(chechk);
// console.log(res)

//Find() ++++++++++++++++++++++ find first element

// const peoples = [
//     {name: "huxn", age: 17},
//     {name: "jhon", age: 18},
//     {name: "alex", age: 20},
//     {name: "jimmy", age: 24},
//     {name: "alex", age: 27},
// ]

// const findAlex = peoples.find((person) => person.name === "alex");
// console.log(findAlex)


// const posts = [
//     {id: 1, content: "Sad post"},
//     {id: 2, content: "Funny post"},
//     {id: 3, content: "Sad post"},
// ];

// const postRes = posts.find((post) => post.id === 2);
// console.log(postRes);

// const res = posts.filter((post) => post.content === "Sad post");
// console.log(res)

//Challenge+++++++++++++++++++++

// const ages = [3, 10, 18, 20];
// const adult = ages.filter((age) => age >=18);
// console.log(adult)

//Challenge+++++++++++++++++++++

// let products = [
//     {name: "Checkers", category: "Toys"},
//     {name: "Harry Potter", category: "Books"},
//     {name: "iPhon", category: "Electronics"},
//     {name: "Learn PHP", category: "Books"},
// ];

// let product = [];

// for(let i = 0; i < products.length; i++){
//     if(products[i].category === "Books"){
//         product.push(products[i])
//     }
// }
// console.log(product)

// let res = products.filter((product) => product.category === "Books");

// console.log(res)

//Every and some +++++++++++++++++(result in true and false)

// const peoples = ["Huxn", "Jordan", "Alex"];
// const peoples1 = ["Huxn", "Jhon", "Alex"];

// const res1 = peoples.every((people) => people.length ===4);
// console.log(res1) //false

// const res2 = peoples1.every((person) => person.length === 4);
// console.log(res2) //true

// const res3 = peoples.some((peoples) => peoples.length === 4);
// console.log(res3) //true

// const res4 = peoples.filter((people) => (people.includes("Huxn")) && (people.length > 2));
// console.log(res4)

//Challenge---------------------

// let products = [
//     {name: "Checkers", catagory: "Toys"},
//     {name: "Harry Potter", catagory: "Books"},
//     {name: "iPhon", catagory: "Electronics"},
//     {name: "Learn PHP", catagory: "Books"},
// ];

// let allProductsBooks = true;
// let someProductsBooks = false;

// for(let i = 0; i < products.length; i++){
//     if(products[i].catagory ==="Books"){
//         allProductsBooks = false;
//     }else {
//         someProductsBooks = true;
//     }
// }

// let res = products.every((product) => product.catagory === "Books")
// let res1 = products.some((product) => product.catagory === "Books")


// console.log(res); //false
// console.log(res1); //true


//reduce() +++++++++++++++++++++

//  const numbers = [1, 2, 3, 4, 5];
//  const sum = numbers.reduce((p, c) => {
//     console.log(`Previous: ${p}`);
//     console.log(`Previous: ${c}`);
//     return p + c;
//  }, 0)

//  console.log(sum)

//  const peoples = [
//     {name: "HuXn WebDev" ,age: 19},
//     {name: "Alex mead" ,age: 29},
//     {name: "Mran griffin" ,age: 40},
//     {name: "Leo griff" ,age: 25},
//  ]

//  const res = peoples.reduce((p, c) => (c.age > p ? c.age :p ), 0)

//  console.log(res);

// const words = [
//    "apple", "banana", "orange", "banana","apple", "orange", "apple", "grape",
// ];

// const wordFrequency = words.reduce((frequencyMap, word) => {frequencyMap[word] = (frequencyMap[word] || 0) + 1;
//    return frequencyMap;
// }, {})

// console.log(wordFrequency)

//Challenge+++++++++++++++++++++

// const numbers = [2, 3, 4, 5];
// const res = numbers.reduce((p, n) => {
//    return p * n
// }, 1);
// console.log(res)

//Map+++++++++++++++++++++++++++

// const map = new Map();

// const keyOne = "huxn";
// const keyTwo = {};
// const keyThree = function() {};

// map.set(keyOne, "Value of key one");
// map.set(keyTwo, "Value of key two");
// map.set(keyThree, "Value of key three");


// console.log(map.keys())
// console.log(map.values())
// console.log(map.delete(keyTwo));
// console.log(map.keys())

// for(let [key, value] of map){
//     console.log(`${key} -- ${value}`)
// }

//Challenge-------------------

// const map = new Map();

// const keyOne = "a";
// const keyTwo = "b";
// const keyThree = "c";

// map.set(keyOne, 1);
// map.set(keyTwo, 2);
// map.set(keyThree, 3);

// console.log(map.get("a"))
// console.log(map.size);
// map.delete("b");
// console.log(map.size)

//Set+++++++++++++++++++++++++

// const initialValues = [1, 2, 2, 2, 2, 3];
// const mySet = new Set(initialValues);

// console.log(mySet)

// const fruits = new Set();
// fruits.add("apple");
// fruits.add("banana");
// fruits.add("orange");
// fruits.add("apple");

// console.log(fruits)
// console.log(fruits.has("banana")) //true
// fruits.delete("banana");
// console.log(fruits.has("banana")) //false
// console.log(fruits)

// for (const fruit of fruits) {
//     console.log(fruit)
// }

//Challenge----------------------

// let letters = new Set();
// letters.add("a")
// letters.add("b")
// letters.add("c");

// console.log(letters);
// for (const letter of letters) {
//     console.log(letter)
// }

//Symbol ++++++++++++++++ (leftOver)

//++++++++++++++++++++++DOM ++++++++++++++++
// console.dir(document.title);
// console.log(document.body);
// console.log(document.baseURI);

//++++++++++++++DOM SELECTORS+++++++++++++
// console.log(document.getElementsByTagName("h1").length);
// console.log(document.getElementById("main"));
// console.log(document.getElementsByClassName("cls")) //It will select first 
// console.log(document.querySelector("h1"))
// console.log(document.querySelector(".cls"))
// console.log(document.querySelector("#main"))
// console.log(document.querySelectorAll("h1"))
// console.log(document.querySelectorAll("h1").length)

// const anything = document.querySelector("h1");
// console.log(anything)

//++++++++++++++++innerText, textContent, innerHTML++++++++++

// const p = document.querySelector("p");
// console.log(p.innerText)
// console.log(p.innerHTML)
// console.log(p.textContent)

//+++++++++++++++ClassList++++++++++++++++

// const h1 = document.querySelector("#newStyles")
// console.log(h1);

// h1.classList.add("styles");
// console.log(h1.classList);
// h1.classList.remove("styles");
// console.log(h1.classList);

//++++++++++++++++Getting Setting Attributes+++++++++++++

const a = document.querySelector(".fb");
console.log(a.href)

const b = document.querySelector(".yt");
b.href = "www.youtube.com";
console.log(b.href)

const c = document.querySelector(".input1");
console.log(c.value) //Example
console.log(c.type) //text

const d = document.querySelector(".input2");
// d.value = "Example2"
d.placeholder = "please password"
console.log(d.value) //Example2

console.log(d.getAttribute("type"))
console.log(d.setAttribute("placeholder", "Email"))
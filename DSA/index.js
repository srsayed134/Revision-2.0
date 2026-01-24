// +++++++++++++++++ Introduction ++++++++++++

// // This is data structure
// const students = ["Niom", "Michel", "Lenor", "Donald"];

// // And this is algorithm
// function findOne(allStudents, studentName){
//     for (let i = 0; i < allStudents.length; i++) {
//         if(allStudents[i] === studentName){
//             console.log(`This ${studentName} is found and the position is ${i + 1}`)
//             return; //This return stop function when it is true
//         }
//     }
//     console.log(`This ${studentName} is not found`)
// }

// let name = "Lenor"
// findOne(students, name);

//++++++++++++++++++ What is bigO ++++++++++++++

//Big O notation helps us understand {how long} an algorithm will take to run or {how much} memory it will need as the amount of the amount of data it handles grows

//  O(n)

//Signifies that the execution time of the algorithm grows linearl in prportion th the size of the input data (n).

// const groceries = ["Milk", "Bread", "Eggs", "Flour", "Sugar"];

// const searchForItem = (item) => {
//     //n
//     for (let i = 0; i < groceries.length; i++){
//     if (groceries[i] === item) {
//         console.log(`Found: ${item}`)
//     }
//     }
//     //n
//     for (let j = 0; j < groceries.length; j++){
//     if (groceries[j] === item) {
//         console.log(`Found: ${item} 2`)
//     }
//     }

//     // n + n = 2n => O(2n)
//     // {you have to drop the constant to O(n)}
// }

// searchForItem("Milk")

// O(1)

//O(1) aka constant time, signifies that the execution time of an algorithm remains constant regardless of the input size

// const number = [1, 2, 3, 4, 5];

// const getElement = (arr, index) => arr[index];
// console.log(getElement(number, 2)) //3

// O(n^2)

// Indicates that the algorithms execution time grows quadratically with the size of the input data (represented by n)

// const findPairs = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//                 console.log(`Pair: ${i} ${j}`)
//         }
//     }

// O(n)

// for(let q = 0; q < arr.length; q++){
//     console.log("---------", q)
// }

//So if we combine all the "O" operations it becomes O(n^2 + n)
//O(n^2) is a dominant term
//"n" is a non-dominant term
//So we remove the "non-dominant" term and we are only left with O(n^2)
//This way, we simplify our bigO
// }

// let number = [1,2,3,4,5,6]
// findPairs(number);

//O(log n)

//Practice:- 2

// O(n) signifies that the execution time of the algorithm grows linerarly in proportion to the size of the input data (n) > {{{{mean more number of items === more time to take}}}
//Example:- 1

// const groceries = ["Milk", "Bread", "Eggs", "Flour", "Chease", "Suger"];

// const findItem = (item) => {
//     //O(n)
//      for(let i = 0; i < groceries.length; i++){
//         if (groceries[i] === item){
//             console.log(`Found: ${item}`)
//         }
//      }

//     //O(n)
//      for (let j = 0; j < groceries.length; j++) {
//         if (groceries[j] === item){
//             console.log(`Found ${item} 2`)
//         }
//      }

//      // n + n = 2n -> O(2n)
//      //Drop the constant so it becomes O(n)
// };
// findItem("Bread")

// //O(1) -> O(1) constant time, signifies that the execution time of an algorithm remains constant regardless of the input size ---> imagine you have a box filled with items, and you know exectly where each item is located , to get a specific item, you go directly to its location, taking the same amount of time irrespective of how many items are in the box

// const cars = ["Volvo", "Mitshubishi", "Honda", "Toyota"];
// //O(1)
// const getElement = (arr, index) => console.log(arr[index]);
// getElement(cars, 2); //Here by giving index number i can know exect location of "Honda"

// getElement(cars, 3) //Toyota

// //O(n^2) -> Indicates that the algoritm's execution time grows quadratically with the size of the input data (represented by n) ---> Imagine you have a box of items and want to compare each item with every other item to find specific pairs .As the number if items (n) increases, the number of comparisons (n^2) grows much faster.

// const number = ["One", "Two", "Three", "Four", "Five"];

// //O(n^2)
// function findPairs(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//               console.log(`Pair: ${arr[i]} ${arr[j]}`)
//         }
//     }
// //O(n)
//     for(let q = 0; q < arr.length; q++){
//         console.log("-------", q)
//     }

//     //If we combine all the "O" operations it becomes O(n^2 + n)
//     //O(n^2) is a Dominant term
//     //"n" is a Non-Dominant term
//     //So we remove the "non-dominat" term and we are only left with O(n^2)
//     //This way, we simplify our bigO

// }

// findPairs(number);

//++++++++++++++++++++ DSA ARRAY ++++++++++++

// const stringArr = ['a', 'c', "d", "e", "f"]
// const numArr = [1, 2, 3, 4, 5]
// const boolSrr = [true, false]
// const mixed = ['a', 2, true, undefined, null, {a: "first"}, ["second"]];

// console.log(mixed)

//+++++++++++++Custom Array ++++++

// class MyArray{
//     constructor() {
//         this.length = 0;
//         this.data = {};
//     }

//     push(item){
//         this.data[this.length] = item;
//         this.length++;
//     }

//     get(position){
//         return this.data[position]
//     }
//     pop(){
//         const lastItem = this.data[this.length - 1]
//         delete this.data[this.length - 1];
//         this.length--
//         return lastItem
//     }
//     shift(){
//         const firstItem = this.data[0];

//         //give every data plus one length
//         for(let  i = 0; i < this.length; i++){
//             this.data[i] = this.data[i + 1]
//         }
//         //and delete last one length
//         delete this.data[this.length - 1]
//         return firstItem;
//     }
//     remove(num){
//        const selectedItem = this.data[num];

//        for(let i = num; i < this.length - 1; i++){
//            this.data[i] = this.data[i + 1]
//         }

//         delete this.data[this.length - 1]
//         this.length--
//         return this.data

//     }
// }

// const myNewArray = new MyArray()
// // console.log(myNewArray);
// myNewArray.push("Apple");
// myNewArray.push("Orange");
// myNewArray.push("Banana");
// myNewArray.push("Mango");
// myNewArray.push("Guaba");
// // console.log(myNewArray.data)
// // console.log(myNewArray.get(0));
// // console.log(myNewArray.data)
// // console.log(myNewArray.pop())
// // console.log(myNewArray.data)

// // console.log(myNewArray.shift())
// console.log(myNewArray.data)
// console.log(myNewArray.remove(2))

//Create reverse method by class

// class MyString {
//     constructor(str) {
//         this.str = str;
//     }
//     reverse(){
//         let reversed = "";
//         for(let i = this.str.length - 1; i >= 0 ; i--){
//             reversed += this.str[i]
//         }
//         return reversed;
//     }
// }

// let name = "Siam"
// let myStr = new MyString(name)
// console.log(myStr.reverse())

//Creat split method by class 

// class MyString {
//     constructor(str) {
//         this.str = str;
//     }

//     split(sep1, sep2){
//         let result = [];
//         let fixSep = "";

//         for (let i = 0; i < this.str.length; i++) {
//             if(this.str[i] === sep1 || this.str[i] === sep2){
//                 result.push(fixSep);
//                 fixSep = "" //this clear for next letter (fixSep is temporary storage If you don’t reset it, it keeps old words So new words get added on top of old ones)
//             } else{
//                 fixSep += this.str[i] 
//             }
            
//         }
//         result.push(fixSep);
//         return result
//     }
// }

// let splitmethid = new MyString("i love,her");
// console.log(splitmethid.split(" ", ","))

//Challenge +++++++++(reverse stringe)

// const reverString = str => str.split("").reverse().join("");
// console.log(reverString("hello"))

// +++++++++ Palindromes +++++++++++++

// If the reverse string is equal to the original one then that world is a palindrome

// cddc > cddc, abba > abba,

// const str = "mom";
// const reverseString = (str) => {
//     return str.split("").reverse().join("")
// }
// if(reverseString(str) === str){
//     console.log("Both input and output is sama")
// }else{
//     console.log("Both input and output is not same")
// }
// console.log(reverseString(str))

//++++++++++++++++ Int reverse +++++++++++

// let randomNumber = Math.floor(Math.random() * 1000);
// const reverseNum = (num) => {
//       let reversenumtostr = num.toString().split("").reverse().join("");
//       let number = Number(reversenumtostr);
//       return number
// }

// console.log(randomNumber)
// console.log(reverseNum(randomNumber))

//+++++++++++++++++ sentence Capitalization ++++++++

// let smallLeter = "you know i am good";

// const capitalize = sml => {
//     return sml.toUpperCase()
// }

// console.log(capitalize(smallLeter))

//++++++++++++++++++ world capitalize in sentence +++++++++++

// const capitalize = (str) => {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
// };

// console.log(capitalize("you know me?"));

//Challenge +++++++++++FizzBuzz++++++++++++

// let randomNum = Math.floor(Math.random() * 100);
// if (randomNum % 3 === 0 && randomNum % 5 === 0) {
//     console.log("FizzBuzz")
// }else if(randomNum % 3 === 0) {
//     console.log("Fizz")
// }else if(randomNum % 5 === 0){
//     console.log("Buzz")
// }else{
//     console.log(randomNum);

// }

//Challenge +++++++++ MaxProfit +++++++++

// const MaxProfit = price => {
//     let minPrice = price[0];
//     let maxProfit = 0;
//     for(let i = 1; i <price.length; i++){
//         const currentPrice = price[i];
//         minPrice = Math.min(minPrice, currentPrice);
//         const potentialProfit = currentPrice - minPrice;
//         maxProfit = Math.max(maxProfit, potentialProfit);
//         console.log(maxProfit)
//     }
//     return maxProfit
// }

// let prices = [7, 1, 5, 3, 6, 4];
// let profit = MaxProfit(prices);
// console.log("Maximum profit:", profit)


//Array chunk +++++++++++

// function chunk(arr, size){
//    let chunked = [];
//    for(let i= 0; i < arr.length; i += size){
//       let chunk = arr.slice(i, i + size);
//       if(chunk.length === size){
//          chunked.push(chunk)
//       }
//    }
//    return chunked
// }
// let arr = [1,5,6,8,9,23,55];
// let siz = 2;

// console.log(chunk(arr, siz))

//Two sum ++++++++++++++++

// let arr = [2, 7, 11, 15];
// let tar = 9;

// function findposition(arr, tar){
//    let position = [];
// for(let i = 0; i < arr.length; i++){
//    for(let j = 1; j < arr.length; j++){
//       if(arr[i] + arr[j] === tar){
//          position.push(i)
//          position.push(j)
//          return position;
//       }
//    }
// }
// }
// console.log(findposition(arr, tar));

//++++++++++++Linked list +++++++++++++++++

// //Node
// class Node {
//     constructor(value){
//         this.head = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(value){
//         this.head = new Node(value);
//         this.tail = this.head;
//         this.length = 1;
//     }

//     push(value){
//         let newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         }
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//     }
//     pop(){
//         if (!this.head){
//             return undefined;
//         }
//         let temp = this.head;
//         let prev = this.head;

//         while(temp.next){
//             prev = temp;
//             temp = prev.next;
//         }
//         this.tail = prev;
//         this.tail.next = null;
//         this.length--;

//         if(this.length === 0){
//             this.head = null;
//             this.tail = null;
//         }
//         return temp;
//     }
// }

// const myLinkedList = new LinkedList(1);
// console.log(myLinkedList)
// myLinkedList.push(2);
// console.log(myLinkedList.pop())
// myLinkedList.push(3);
// myLinkedList.push(4);
// console.log(myLinkedList)

//Repractice 

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
       this.head = new Node(value);
       this.tail = this.head;
       this.length = 1;
    }
    push(value){
        let newNode = new Node (value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

}

const myLinkedList = new LinkedList(1);
console.log(myLinkedList)
myLinkedList.push(2);
console.log(myLinkedList)
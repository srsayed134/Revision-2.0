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









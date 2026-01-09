//Leet code two sum - 1

//practice 1 
// // let num = [2,7,11,25];

// let num = [3, 2, 4]
// let target = 6;

// const twoSum = (num, target) => {
//     let same = [];
//     for (let i = 0; i < num.length; i++) {
//          for (let j = i + 1; j < num.length; j++) {
//             if (num[i] + num[j] === target) { //here num[i] and  num[j] is chacking num array not index when i = 0 means 3 and j = 0 means 3 itself then ans [0, 0] but we have to check index 0 does not rechacked so j have to be start from after o index by adding 1 to j and j have to position in ahead by adding 1 with i;
//                 same.push(i)
//                 same.push(j)
//                 return same;
//             } 
//          }
//     }
// }

// console.log(twoSum(num, target))

//practice - 2

// let nums = [5, 8, 9, 6, 4];
// let targets = 10;

// function findCommon(nums, target){
//     let pair = new Pair();

//     for(let i = 0; i < nums.length; i++){
//         let comp = target - nums[i];
//         if(pair.has(comp)){
//             return [pair.get(comp), i]
//         } pair.set(nums[i], i)
//     }
//     return[]
// }

// console.log(findCommon(nums, targets))

//For this you have to understand core knowledge of map,object, get, set, condition, loop, function, mathmatics

// Leet code Add Two Numbers - 2

let ppt = 807;
let pt = 708;
let t = [7, 0, 8];

let a = [9,9,9,9,9,9,9];
let b = [9,9,9,9];

function twoSum(a, b){
    let num1 = Number(a.join(''))
    let num2 = Number(b.join(''))
    let sum = num1 + num2;
    let toArrayandReverse = sum.toString().split("").reverse();
    let toNumber = toArrayandReverse.map(Number);
    return toNumber
}

console.log(twoSum(a,b));
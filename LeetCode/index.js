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
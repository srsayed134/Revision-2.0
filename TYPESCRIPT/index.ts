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

//++++++++++++++Type Inference+++++++++++

// let tech = "TypeScript";
// let favNumber = 8;
// let isComplete = false;

// tech = true  // it will throw an error
// console.log(typeof tech) //string
// console.log(typeof favNumber) //number
// console.log(typeof isComplete) //Boolean

//++++++++++++++++Any type+++++++++++++++

// let color: any = "Crimson"; //this any will make it wild for all type
// color = 20;
// color = true

// console.log(color)

//+++++++++++++++Function parameters annotations+++++++++

function addOne(num: number){
    return num + 2;
}

const res = addOne(3);
console.log(res)

//Arrow function 

const multiplyNum = (num: number, num2: number) => num * num2;
console.log(multiplyNum(3, 5))























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

// function addOne(num: number){
//     return num + 2;
// }

// const res = addOne(3);
// console.log(res)

//Arrow function 

// const multiplyNum = (num: number, num2: number) => num * num2;
// console.log(multiplyNum(3, 5)) //parameter should equal with arguments


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

const person : {firstName: string; lastName: string; age: number} = {
    firstName: "Jhon",
    lastName: "Doe",
    age: 30
}

console.log(`Name: ${person.firstName} ${person.lastName} and age is ${person.age}`)

//+++++++++++++++function +++++++++++++++

function printUSer(): {name: string; age: number; location: string} {
    return {
        name: "HuXn",
        age: 25,
        location: "China",
    };
}

console.log(printUSer())















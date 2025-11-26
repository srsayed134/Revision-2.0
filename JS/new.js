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

let password = 8;
if(password === 8){
    console.log("Welcome");
}else if(password <= 8){
    console.log("Password is too short");
}else if(password >= 8){
    console.log("Too long password & Password should be 8 characters");
}else {
    console.log("Please provide a password")
}



















//log a statement using console.log()
console.log("hello from main.js");

//variables

// let age = 25
// console.log(age)

// const salary = 8000
// console.log(salary)

// let sum=0
// sum = 5
// console.log(sum)

//DATA TYPES

//strings
const name = "manya";
const language = "JavaScript";
const channel = `CodeEvolution`;

//number
const total = 0;
const PI = 3.14;

//boolean
const isPrimaryNumber = true;
const isNewUser = false;

//undefined
let result;
console.log(result);

//to set the value of undefines eplicitly but null should be used rather than undefined for values not known
const res = undefined;

//null
const data = null;

//bigint is used to hold integer values which numner cannot hold

//symbol denotes value which is unique and unchangable

//non primitive
const person = {
  firstName: "Manya", //firstName is property or key and Manya is value
  //property or key can bw string or symbol data type whereas value can be any data type
  lastName: "Jindal",
  age: 20,
};
//this syntax is known as object literal and is one way to store the collection of data
console.log(person.firstName);

const oddNumbers = [1, 3, 5, 7, 9];
console.log(oddNumbers[0]);
//multiple value are stored at one place like array and can be accessed like shown above

//js is a dynamic language and datatype is already converted during execution
let a = 10;
a = "manya";
a = true;
console.log(a);

//assignment operator
let x = 10;

//arithmatic operator
x = 5.0;
let y = 5;
console.log(y % x);
console.log(x++);

//boolean opeator
console.log(x < y);

//logical operator
//AND
const isValidNumber = x > 8 && 8 > y; //it return true if both the operations are true
console.log(isValidNumber);
//LOGICAL OR
const isvalid = x > 8 || 8 > y;
console.log(isvalid);

//LOGICAL NOT
const isv = false;
console.log(!isv);

//STRING OPERATOR
console.log("Manya " + "Jindal"); //+concatenates both the string

//ternary operator
const isEven = 10 % 2 === 0 ? "Number is even" : false; //can also write number is odd
console.log(isEven);

//TYPE CONVERSIONS

console.log(2 + "3"); //here js will convert the operand to string type before concatenation so the result is a string
console.log(true + "3"); //returns string
console.log("4" - "2"); //if use string with - * / it will convert automatically to a number ...js will convert both 4 and 2 into numbers and then perform the operation
console.log("Manya" - "Jindal"); //NaN which is not a number
console.log("5" - true); //true is coverted into int and treated as 1 ..false is treated as 0 and null is treated as 0
console.log(5 + undefined); //undefined is an undefined number so it will return undefined

//EXPLICIT TYPE CONVERSION

console.log(Number("")); //to convert a string or boolean to number type
//string 5 will return 5
//string null or false or empty string will return 0

console.log(parseFloat("3.14"));
console.log(String(undefined)); // this will convert 500 to string 500  and undefined data type to string undefined
//remember s ans n of string and number are capital

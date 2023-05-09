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
console.log((500).toString()); //this will convert 500 to string but toString will not work on null and undefined
console.log(Boolean("")); // this will return true and null undefined 0 '' NaN all return false when converted to boolean all else will return true even ' ' will return true

//EQUALITY
const var1 = null;
const var2 = undefined;

console.log(var1 == var2); //here js will convert string 10 to numneric 10 and
console.log(var1 === var2); //=== equals to is more strict is compares value as well as datatype

//CONDITIONAL STATEMETS
const num = 0;
if (num > 0) {
  console.log("Number is Positive");
} else if (num < 0) {
  console.log("number is not positive");
} else {
  console.log("number is zero");
}

//if you have large no of choices with little code to execute in each case then switch case is preffered
const color = "pink";
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "black":
    console.log("color is black");
    break;
  case "white":
    console.log("color is white");
    break;
  default:
    console.log("not a valid color");
}

//LOOPING CODE
for (let i = 1; i <= 5; i++) {
  console.log("iteration number " + i);
}
let i = 1;
while (i <= 5) {
  console.log("iteration number " + i);
  i++;
}
console.log("do while loop");
let j = 6;
do {
  console.log("initialiser number " + j);
  j++;
} while (j <= 5);

//for of loop
const numArray = [1, 2, 3, 4, 5];
for (const num of numArray) {
  console.log("iteration number " + num);
}

//FUNCTIONS
function greet() {
  console.log("Good Morning Manya");
}
greet();

function greet(us) {
  console.log("Good Morning " + us);
}
greet("Manya");
greet("Tanvee");
greet("Dakshit");
//us is called paramenter and manya tanvee dakshit are called function arguments

function add(a, b) {
  console.log("the sum is " + (a + b));
}

add(5, 6);
//ese likhne ke liye a+b ko bracket m likhna pdega vrna concatenate ho jaega

function sum(a, b) {
  return a + b;
}

const s = sum(5, 10);
console.log(s);

//alternative syntax to define function aclled arrow function
//more consise way to write function
const arrowSum = (a, b) => {
  return a + b;
};
const s1 = arrowSum(10, 10);
console.log(s1);

//we have more consise statement with arrow function if you have one statement

const arrowS = (a, b) => a + b;
const s2 = arrowS(10, 10);
console.log(s2);

//SCOPE-accessibilty and visibility of variables
const myname = "superman"; //this globally decalred value will not ovverwrite manya and batman
if (true) {
  const myname = "manya";
  console.log(myname);
}
// console.log(myname); this will show error myname is not defined -->BLOCK SCOPE

function test() {
  const myname = "batman";
  console.log(myname);
}
// console.log(myname); this will show error as not defined -->FUNCTION SCOPE
test();
console.log(myname);
const mynum = 100; //globally declared value

if (true) {
  console.log(mynum);
}
// globally declared value can be accessed both in block and function

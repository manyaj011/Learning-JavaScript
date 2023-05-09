// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   inner();
// }
// outer();
function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  inner();
}
outer();
//this is calling a function and the function calls the inner function
function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner; //js doesnot only return inner fun but its scope also and here the scope obly includes just one variable
}
const fn = outer();
fn(); //here the fun will rememeber the counter value is 1
fn();
// here we are returning a function from another function
//we are effectively returning function definition and function's scope
//this would let the function definition have the associated persistent memory which could hold on to liv data between executions.
//this combination of the function and its scope chain is what is called a closure in javascript

function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 3, 5));

//sum(2,3,5) -> sum(2)(3)(5)

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}
const curriedsum = curry(sum);
console.log(curriedsum(2)(3)(5));

//these last two lines can alos be written as
const add2 = curriedsum(2);
const add3 = add2(3);
const add4 = add3(5);
console.log(add4);

// const name = 'superman' //is this is browser
// because we are using node
globalThis.name = "superman";
function saymyname(name) {
  console.log(`my name is ${name}`);
}
// note here `` is used and ${name}
saymyname("walter white");

const person = {
  name: "garvit", // this comma is imp
  //this is implicit binding using this function
  saymynm: function () {
    console.log(`my name is ${this.name}`);
  },
};

person.saymynm(); //when a function is invoked with . (dot notation) this means it is referring to that obj to the left of the dot what this keyword is refrencing

//EXPICIT BINIDING
function say() {
  console.log(`my name is ${this.name}`);
}

say.call(person);
//here instead of defining the function internally and specifying the name
//so we are explicitly use call to invoke the function

//NEW BINDING
function Person(name) {
  //Class person cannot be created as it is already created
  // this = {} created by new keyword .. a new empty object
  this.name = name;
}

const p1 = new Person("manya"); //here the obj is created using keyword new
const p2 = new Person("jinal");

console.log(p1.name, p2.name);

//FALL BACK BINDING
say(); //isme globally declare krna pdega function say m vo name ko dhundhega aur udhe use koi name dikhega ni to vo use undefined bol dega to use globally declare kra using globalThis.name='superman'
//ese call krne m this keyword is very important uske bina undefined hi dikhaega

//PROTOTYPE

function per(fname, lname) {
  this.firstname = fname;
  this.lastname = lname;
}
const person1 = new per("manya", "jindal"); //explicit binding and the function used with new keyword is a constructor function
const person2 = new per("garvit", "singhal");

person1.getFullName = function () {
  return this.firstname + " " + this.lastname;
};

console.log(person1.getFullName());
//if you run person2.getfullname() it will show it is not a function

// to call it for any function so instead write
per.prototype.getFullName = function () {
  return this.firstname + " " + this.lastname;
};
console.log(person2.getFullName());

//PROTOTYPAL INHERITENCE
function superhero(fname, lname) {
  // this = {}
  per.call(this, fname, lname); // this keyword in person will refer to this keyword in superhero then fanme and lname are assigned and firtname and lastname properties are inherited by superhero
  this.issuperhero = true;
}

superhero.prototype.fightcrime = function () {
  console.log("fighting crime");
};

// to inherit getfullname we use object.create
superhero.prototype = Object.create(per.prototype);
//chain
// is se superhero ne per ke function methods and protoypes ko inherit kr liya

const batman = new superhero("tanvee", "jindal"); //the batman will have access to only this.issuperhero and fighting crime initially
//but to have access to first name and last name and to getfullname we require inheritence
superhero.prototype.constructor = superhero; //without this the js wil think superhero is created from person which is incorrect
console.log(batman.getFullName());
//here js will check the protoype of superhero, it doesn't find it however it sees the prototype has a chain to person.protoype through object.create and checks for getfullnae and finds it

//PROTOTYPAL INHERITENCE USING CLASS
class pers{
  constructor(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
  }
  saymyname() {
    return this.firstname + " " + this.lastname;
  }
}

const classP1 = new pers ('dakshit', ' jindal')
console.log(classP1.saymyname());

//extends and super keywords

class Superhero extends pers{
 constructor(fname,lname){
  super(fname,lname)
  this.issuperhero = true
 }
 fightcrime(){
  console.log('fighting crime');
 }
}
const IronMan = new Superhero('my', 'dad')
console.log(IronMan.saymyname());
console.log(IronMan.fightcrime());//undefined ku aara h ?

//ITERABLES AND ITERATORS
// to reduce complexity, various ways to access different data types , we need iterators for uniformity across diff data structures

// this is done by for of loop 
//for string

const str = 'manya'
for(const char of str){
 console.log(char);
}

//array
const arr = ['m','a','n','y','a']
for(const item of arr){
 console.log(item);
}
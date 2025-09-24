//variables

// temporarily dead zone TDZ
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// console.log(b); // undefined
// console.log(c); // ReferenceError: Cannot access 'c' before initialization

//redacleration
// var x = 10;
// var x = 20; // no error
// console.log(x); // 20
// let y = 10;
// let y = 20; // SyntaxError: Identifier 'y' has already been declared
// console.log(y); 
// const z = 10;
// const z = 20; // SyntaxError: Identifier 'z' has already been declared
// console.log(z);
let a = 10;//ES6
const c = 30;//ES6
// b hoisting but not initialization b=undefined    x=10 equals to var x=10 
console.log(a, b, c);
var b = 20;

// ========= scope ========
//global scope
let globalVar = "I am global";

function checkScope() {
    //local scope
    let localVar = "I am local";
    console.log(globalVar); // accessible
    console.log(localVar); // accessible
}
checkScope();
console.log(globalVar); // accessible
// console.log(localVar); // ReferenceError: localVar is not defined
//block scope
if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar); // accessible
}
// console.log(blockVar); // ReferenceError: blockVar is not defined

// var in function scope    is private to function
function varTest() {
    var functionVar = "I am function scoped";
    console.log(functionVar); // accessible
}
varTest();
// console.log(functionVar); // ReferenceError: functionVar is not defined

// let and const is block scope


//data types
// promitive data types
// string, number, boolean, null, undefined, symbol
// non-primitive data types
// object, array, function
let name = "John"; //string
let age = 25; //number
let isStudent = true; //boolean
let address = null; //null
let phone; //undefined
let hobbies = ["reading", "traveling", "gaming"]; //array
let person = { name: "Alice", age: 30 }; //object
let uniqueId = Symbol("id"); //symbol

console.log(typeof name, typeof age, typeof isStudent, typeof address, typeof phone, typeof hobbies, typeof person, typeof uniqueId);





// ========== functions ==========
// function declaration
function greet() {
    console.log("Hello!");
}
greet(); // Hello!
// function expression
const sayGoodbye = function() {
    console.log("Goodbye!");
};
sayGoodbye(); // Goodbye!
// arrow function
const add = (x, y) => x + y;
console.log(add(5, 3));
// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("IIFE executed!");
})(); // IIFE executed!
// function with default parameters
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5)); // 5
console.log(multiply(5, 2));
// function with rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
// function with callback
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched!");
    }, 1000);
}
fetchData((data) => {
    console.log(data); // Data fetched!
});
// function with closure
function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
    };
}
const closureFunc = outerFunction("outside");
closureFunc("inside");
// Outer: outside, Inner: inside

// arrguments and parameters in function name arguments and position arguments

function funcExample(param1, param2) {
    console.log("Parameter 1:", param1);
    console.log("Parameter 2:", param2);
    console.log("Arguments object:", arguments);
}   

funcExample("arg1", "arg2", "extraArg1", "extraArg2");
// Parameter 1: arg1
// Parameter 2: arg2
// Arguments object: { '0': 'arg1', '1': 'arg2', '2': 'extraArg1', '3': 'extraArg2' }
// arguments object is array like object
// but not array
// we can access arguments using index
console.log("First argument:", arguments[0]); // First argument: arg1
// but we cannot use array methods like forEach, map, filter etc.
// arguments.forEach(arg => console.log(arg)); // TypeError: arguments.forEach is not a function




// ========== objects ==========
// object literal
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
}
console.log(car.make);// dot notation
console.log(car['model']);// bracket notation
// adding new property
car.color = "red";
console.log(car);
// deleting property
delete car.year;
console.log(car);
// destructuring
let { make, model } = car;
console.log(make, model);

 //rest operator in object use spread operator in array
let { color, ...rest } = car;
console.log(color); // red
console.log(rest); // { make: 'Toyota', model: 'Camry' }

// spead operator in object
let newCar = { ...car, year: 2021 };
console.log(newCar); // { make: 'Toyota', model: 'Camry', color: 'red', year: 2021 }


// for each vs for of loop in array
let numbers = [1, 2, 3, 4, 5];
// for each
numbers.forEach(num => console.log(num * 2)); // 2 4 6 8 10
// for of
for (let num of numbers) {
    console.log(num * 3); // 3 6 9 12 15
}
// for in loop in object
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}
// make: Toyota
// model: Camry
// color: red
// for each don't work with await and async
// for of work with await and async
// for in don't work with await and async
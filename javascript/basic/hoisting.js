// Variable Hoisting
x = 5;
console.log(x); // Output : 5 
var x;

// Function Hoisting
sayHello(); // Output: Hello!

function sayHello() {
    console.log("Hello!");
}

// Variable Hoisting dont support for let and const
console.log(z); // Uncaught ReferenceError
let z = 5;


// Function Hoisting dont support for Arrow function.
arrowFunction();  // Uncaught TypeError
var arrowFunction  = ()=>{
    console.log("arrow function!");
}

// Temporal Dead Zone
console.log(y); // Uncaught ReferenceError
 let y  = 5;


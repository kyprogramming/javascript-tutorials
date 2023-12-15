console.warn("Spread Operator");
// Copying Arrays and Objects:
// ======================================
const originalArray = [1, 2, 3];
const copyArray = [...originalArray]; // Creates a shallow copy of the array
console.log("Copied Array -" , copyArray);

const originalObject = { a: 1, b: 2 };
const copyObject = { ...originalObject }; // Creates a shallow copy of the object
console.log("Copied Object -", copyObject);

// Merging Arrays and Merging Objects:
// ======================================
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2]; // Merges two arrays
console.log("Merged Array -" , mergedArray);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 }; // Merges two objects
console.log("Merged Object -" , mergedObject);

// Passing Arguments in Functions:
// ======================================
function exampleFunction(arg1, arg2, arg3) {
  console.log("Passing Arguments in Functions -" , arg1, arg2, arg3);
}
const args = [1, 2, 3]; // Equivalent to exampleFunction(1, 2, 3)
exampleFunction(...args); // Arguments - 1 2 3



console.warn("Rest Operator");
// Array and Object Destructuring
// Collecting Remaining Array Elements:
// =============================================================
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("Collecting Remaining Array Elements:", first, second, rest);
// Collecting Remaining Array Elements: 1 2 [3, 4, 5]

// Collecting Remaining Object Properties:
// =============================================================
const { a, b, ...rest1 } = { a: 1, b: 2, c: 3, d: 4 };
console.log("Collecting Remaining Object Properties:", a, b, rest1);
// Collecting Remaining Object Properties: 1 2 {c: 3, d: 4}

// Collecting Function Arguments:
// =============================================================
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
let result = sum(1, 2, 3, 4 ,5 ,6 , 7); // Returns 10
console.log("Collecting Function Arguments:", result);

// Dynamic Function Parameters:
// =============================================================
function dynamicFunction(param1, param2, ...extraParams) {
  console.log("Dynamic Function Parameters:", param1, param2, extraParams);
  // extraParams is an array containing additional parameters
}
dynamicFunction(1, 2, 3, 4, 5); // Dynamic Function Parameters: 1 2  [3, 4, 5]
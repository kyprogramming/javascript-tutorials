//==============================
console.warn(`Map()`); // Map()
//==============================
let myMap  = new Map();

// Using various data types as keys
let keyString = "a string";
let keyObj = {name:'kumar'};
let keyFunc = function() {};

myMap.set(keyString, 'Value associated with key string type.');
myMap.set(keyObj, 'Value associated with key object type.');
myMap.set(keyFunc, 'Value associated with key funct type.');

keyString  = null;
console.log(`myMap.size : ${myMap.size}`);

myMap.forEach((value,key)=>{
    console.log(`${key} : ${value}`);
});

console.log(`get method -  ${myMap.get(keyString)}`);
console.log(`has method -  ${myMap.has(keyObj)}`);


//==============================
console.warn(`WeakMap()`); // WeakMap()
//==============================
let myWeakMap  = new WeakMap();

let keyString1 = "a string";
let keyObj1 = {name:'kumar'};

// myWeakMap.set(keyString1, 'value associates with string type key');
myWeakMap.set(keyObj1, 'value associates with object type key');


// WeakMap dont have size prpoerty
console.log(`myMap.size : ${myWeakMap.size}`);


keyObj1 = null;
// WeakMap can not iterate
// myWeakMap.forEach

console.log(`weakMap get method -  ${myWeakMap.get(keyObj1)}`);
console.log(`weakMap has method -  ${myWeakMap.has(keyObj1)}`);
// Implicit Coercion
var num = 5;
var str = "10";

var result = num + str;

console.log(result); // "510"
console.log(typeof result); // "string"



// Explicit  Coercion
var str = "10";
var num = parseInt(str);

console.log(num); // 10
console.log(typeof num);  // number


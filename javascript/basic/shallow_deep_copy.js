// Array Sahallow Copy
const originalArray = [1, 2, 3, [4, 5]];
// const shallowCopyArray = [...originalArray]; // Shallow copy using the spread operator
const shallowCopyArray = originalArray.slice(); // Shallow copy using slice method
shallowCopyArray[0] = 5;
shallowCopyArray[3][0] = 10;

// Array Deep Copy
const deepOriginalArray = [1, 2, 3, [4, 5]];
const deepCopyArray = JSON.parse(JSON.stringify(deepOriginalArray));
deepCopyArray[0] = 5;
deepCopyArray[3][0] = 10;

// Object  Sahllow Copy
const originalObj = { a: 1, b: { c: 2 } };
// let shallowCopyObj = { ...originalObj };  // Shallow copy using the spread operator
let shallowCopyObj = Object.assign({}, originalObj); // Shallow copy using the spread operator
shallowCopyObj.a = 20;
shallowCopyObj.b.c = 5;

// Object  Deep Copy
const originalDeepObj = { a: 1, b: { c: 2 } };
let newObjectDeep = JSON.parse(JSON.stringify(originalDeepObj));
newObjectDeep.a = 10;
newObjectDeep.b.c = 50;

//  Deep Copy Limitations:
const originalDeepObjLimitations = {
  a: 1,
  b: { c: 2 },
  d: function () {
    return 20;
  },
};
// let newObjectDeepLimitations = JSON.parse(JSON.stringify(originalDeepObjLimitations)); // does not work for function data type.
let newObjectDeepLimitations = deepCopy(originalDeepObjLimitations);

// Recursive Functions  to get the deep copy.
function deepCopy(obj) {
  if (null == obj || "object" != typeof obj) return obj;
  if (obj instanceof Array) {
    var copy = [];
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = deepCopy(obj[i]);
    }
    return copy;
  }
  if (obj instanceof Object) {
    var copy = {};
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = deepCopy(obj[attr]);
    }
    return copy;
  }
  throw new Error("Unable to copy obj this object.");
}

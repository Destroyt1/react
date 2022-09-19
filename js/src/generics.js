"use strict";
//Generics
const myArray = [1, 2, 3];
let variable = myArray[1];
myArray.map((f, index, arr) => f + 1);
myArray.map((f) => `f + ${f}`);
[1, 2, 3].map((f, index, arr) => f + 1); //-> [2,3,4]
[1, 2, 3].map((f) => `f + ${f}`); //-> ['f + 1','f + 2...]
function identity(arg) {
    return arg;
}
let result = identity(12);
function getLen(arr) {
    return arr.length;
}
getLen([1, 2, 3]);
function withType(arg) {
    return {
        type: typeof arg,
        value: arg
    };
}
const result2 = withType(123);
const omittedObject = {
    type: 'asd'
};
const picked = {
    isEmpty: true,
    value: 123,
};
const partial = {};
//# sourceMappingURL=generics.js.map
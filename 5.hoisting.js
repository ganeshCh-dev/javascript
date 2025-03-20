// "use strict"
// variables are hoisted and initilized but get undefined;

console.log("a", a);
var a = 10;
console.log("aaaaaa", a);

// variables are hoisted but not initilized.

// console.log("b", b);
// const b = 10;
// console.log("bbbbbb", b);

// console.log("c", c);
// let c = 10;
// console.log("cccccc", c);

// functions
console.log("printValue", printValue());
function printValue() {
    console.log(100)
    return 1000
}


// named function
// console.log("namedFn_printVal", namedFn_printVal())
// const namedFn_printVal = () => {
//     console.log(100)
//     return 1000
// }
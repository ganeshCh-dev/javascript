// "use strict"

// prevernt implicitly assigning to global variable

abc = 10;
console.log("abccccc", globalThis);

// Prevents Duplicate Property Names in Objects

const obj = {
  a: 1,
  a: 2, // SyntaxError: Duplicate data property in object literal using strict mode
};

console.log("objjj", obj);

// Prevents dublicate function Parameter Names

function add(x, x) {
  // SyntaxError: Duplicate parameter name using strict mode
  return x + x;
}

add(3, 4)

// Prevents this from Defaulting to Global Object (window)

console.log(this); // prevrent access window (global object)
function show() {
  console.log(this); // prevent access window (if called in global scope)
}
show();

// Prevents Deleting Variables and Functions

let abc = 10;
delete abc; // SyntaxError: Delete of an unqualified identifier in strict mode

